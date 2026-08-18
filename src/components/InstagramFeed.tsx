import feedJson from "@/data/instagram.json";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

type InstagramPost = {
  id: string;
  caption: string;
  permalink: string;
  timestamp: string;
  mediaType: string;
  image: string | null;
};

type InstagramFeedData = {
  updatedAt: string | null;
  posts: InstagramPost[];
};

const feed = feedJson as InstagramFeedData;

function postDate(timestamp: string) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "Recent post";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function InstagramFeed() {
  return (
    <section className="instagram-feed" aria-labelledby="instagram-heading">
      <div className="instagram-feed__shell">
        <div className="instagram-feed__heading">
          <div>
            <p className="instagram-feed__eyebrow">Latest posts</p>
            <h2 id="instagram-heading">Instagram</h2>
          </div>
        </div>

        {feed.posts.length > 0 ? (
          <div className="instagram-feed__grid">
            {feed.posts.slice(0, 4).map((post) => (
              <article className="instagram-card" key={post.id}>
                <a
                  className="instagram-card__media"
                  href={post.permalink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open Instagram post: ${(post.caption || postDate(post.timestamp)).slice(0, 140)}`}
                >
                  {post.image ? (
                    <img
                      src={assetPath(post.image)}
                      alt={(post.caption || "Instagram post by Hana Valibeik").slice(0, 180)}
                      loading="lazy"
                    />
                  ) : (
                    <span className="instagram-card__placeholder">View post on Instagram</span>
                  )}
                  <span className="instagram-card__type">{post.mediaType.replaceAll("_", " ")}</span>
                </a>
                <div className="instagram-card__copy">
                  <p>{post.caption || "New work and process from Hana Valibeik."}</p>
                  <div>
                    <time dateTime={post.timestamp}>{postDate(post.timestamp)}</time>
                    <a href={post.permalink} target="_blank" rel="noreferrer">
                      View on Instagram <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <a
            className="instagram-feed__empty"
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
          >
            <span>Latest work is syncing.</span>
            <strong>Browse Instagram in the meantime ↗</strong>
          </a>
        )}

        <a
          className="instagram-feed__closing-link"
          href={site.instagram.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Follow ${site.instagram.handle} on Instagram`}
        >
          <svg className="instagram-feed__search" viewBox="0 0 96 96" aria-hidden="true">
            <circle cx="55" cy="41" r="24" />
            <path d="m37.5 58.5-18 18a8 8 0 0 0 11.3 11.3l18-18" />
          </svg>
          <strong>{site.instagram.handle}</strong>
        </a>
        <p className="instagram-feed__note">Logofolio, identity work and process — posted as it happens.</p>
      </div>
    </section>
  );
}
