import { access, mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const feedPath = path.join(root, "src", "data", "instagram.json");
const mediaDirectory = path.join(root, "public", "instagram");
const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
const userId = process.env.INSTAGRAM_USER_ID?.trim() || "me";
const apiVersion = process.env.INSTAGRAM_API_VERSION?.trim() || "v24.0";
const maximumImageBytes = 25 * 1024 * 1024;

if (!accessToken) {
  throw new Error("INSTAGRAM_ACCESS_TOKEN is required.");
}

if (!/^(?:me|[0-9]+)$/.test(userId)) {
  throw new Error("INSTAGRAM_USER_ID must be a numeric Instagram user ID or 'me'.");
}

if (!/^v[0-9]+\.[0-9]+$/.test(apiVersion)) {
  throw new Error("INSTAGRAM_API_VERSION must look like v24.0.");
}

function normalizeCaption(value) {
  return typeof value === "string"
    ? value.replace(/\r\n?/g, "\n").replace(/\n{3,}/g, "\n\n").trim()
    : "";
}

function safePermalink(value) {
  try {
    const url = new URL(value);
    const validHost = url.hostname === "instagram.com" || url.hostname.endsWith(".instagram.com");
    return url.protocol === "https:" && validHost ? url.href : null;
  } catch {
    return null;
  }
}

function safeMediaType(value) {
  return typeof value === "string" && /^[A-Z_]+$/.test(value) ? value : "POST";
}

function safeId(value) {
  const id = String(value ?? "");
  return /^[A-Za-z0-9_-]+$/.test(id) ? id : null;
}

function extensionFor(contentType) {
  const type = contentType.split(";", 1)[0].trim().toLowerCase();
  return new Map([
    ["image/jpeg", "jpg"],
    ["image/png", "png"],
    ["image/webp", "webp"],
    ["image/gif", "gif"],
    ["image/avif", "avif"],
  ]).get(type);
}

async function readPreviousFeed() {
  try {
    return JSON.parse(await readFile(feedPath, "utf8"));
  } catch {
    return { updatedAt: null, posts: [] };
  }
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadImage(url, id) {
  const response = await fetch(url, {
    headers: { "User-Agent": "Hana-Valibeik-Portfolio-Instagram-Sync/1.0" },
    redirect: "follow",
    signal: AbortSignal.timeout(30_000),
  });

  if (!response.ok) {
    throw new Error(`media request returned HTTP ${response.status}`);
  }

  const extension = extensionFor(response.headers.get("content-type") || "");
  if (!extension) {
    throw new Error("media response was not a supported image");
  }

  const declaredSize = Number(response.headers.get("content-length") || 0);
  if (declaredSize > maximumImageBytes) {
    throw new Error("media response was larger than 25 MB");
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length === 0 || bytes.length > maximumImageBytes) {
    throw new Error("media response was empty or larger than 25 MB");
  }

  const filename = `ig-${id}.${extension}`;
  const destination = path.join(mediaDirectory, filename);
  const temporary = `${destination}.tmp`;
  await writeFile(temporary, bytes);
  await rename(temporary, destination);
  return `/instagram/${filename}`;
}

function previousImageFor(previousFeed, id) {
  const post = Array.isArray(previousFeed.posts)
    ? previousFeed.posts.find((candidate) => candidate?.id === id)
    : null;
  return typeof post?.image === "string" && /^\/instagram\/ig-[A-Za-z0-9_-]+\.(?:jpg|png|webp|gif|avif)$/.test(post.image)
    ? post.image
    : null;
}

async function fetchMedia() {
  const endpoint = new URL(`https://graph.instagram.com/${apiVersion}/${userId}/media`);
  endpoint.searchParams.set(
    "fields",
    "id,caption,media_type,media_product_type,media_url,permalink,thumbnail_url,timestamp",
  );
  endpoint.searchParams.set("limit", "12");

  const response = await fetch(endpoint, {
    headers: { Authorization: `Bearer ${accessToken}` },
    signal: AbortSignal.timeout(30_000),
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const apiMessage = typeof payload?.error?.message === "string"
      ? payload.error.message.replace(accessToken, "[redacted]")
      : "Instagram API request failed";
    throw new Error(`Instagram API returned HTTP ${response.status}: ${apiMessage}`);
  }

  if (!Array.isArray(payload?.data) || payload.data.length === 0) {
    throw new Error("Instagram API returned no media. The existing feed was left unchanged.");
  }

  return payload.data;
}

async function removeSupersededImages(previousFeed, currentPosts) {
  const current = new Set(currentPosts.map((post) => post.image).filter(Boolean));
  const previous = Array.isArray(previousFeed.posts)
    ? previousFeed.posts.map((post) => post?.image).filter((image) => typeof image === "string")
    : [];

  await Promise.all(previous.map(async (image) => {
    if (current.has(image) || !/^\/instagram\/ig-[A-Za-z0-9_-]+\.(?:jpg|png|webp|gif|avif)$/.test(image)) return;
    await unlink(path.join(root, "public", image.slice(1))).catch(() => undefined);
  }));
}

async function main() {
  const previousFeed = await readPreviousFeed();
  const media = await fetchMedia();
  const selected = media
    .filter((item) => safeId(item?.id) && safePermalink(item?.permalink))
    .sort((a, b) => Date.parse(b.timestamp || "") - Date.parse(a.timestamp || ""))
    .slice(0, 4);

  if (selected.length === 0) {
    throw new Error("No valid Instagram posts were returned. The existing feed was left unchanged.");
  }

  await mkdir(mediaDirectory, { recursive: true });

  const posts = await Promise.all(selected.map(async (item) => {
    const id = safeId(item.id);
    const mediaType = safeMediaType(item.media_product_type || item.media_type);
    const isVideo = item.media_type === "VIDEO";
    const imageUrl = isVideo ? item.thumbnail_url : (item.media_url || item.thumbnail_url);
    let image = null;

    if (typeof imageUrl === "string" && imageUrl.startsWith("https://")) {
      try {
        image = await downloadImage(imageUrl, id);
      } catch (error) {
        console.warn(`Could not refresh image for post ${id}: ${error.message}`);
      }
    }

    if (!image) {
      const previousImage = previousImageFor(previousFeed, id);
      if (previousImage && await fileExists(path.join(root, "public", previousImage.slice(1)))) {
        image = previousImage;
      }
    }

    return {
      id,
      caption: normalizeCaption(item.caption),
      permalink: safePermalink(item.permalink),
      timestamp: typeof item.timestamp === "string" ? item.timestamp : "",
      mediaType,
      image,
    };
  }));

  const nextFeed = {
    updatedAt: new Date().toISOString(),
    posts,
  };

  const temporaryFeed = `${feedPath}.tmp`;
  await writeFile(temporaryFeed, `${JSON.stringify(nextFeed, null, 2)}\n`, "utf8");
  await rename(temporaryFeed, feedPath);
  await removeSupersededImages(previousFeed, posts);
  console.log(`Instagram feed synchronized: ${posts.length} posts.`);
}

await main();
