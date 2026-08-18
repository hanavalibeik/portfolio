"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

/**
 * The synced feed depends on a Meta access token that expires. When it is empty
 * — token missing, expired, or the first sync hasn't run — fall back to posts
 * curated by hand in src/data/site.ts so this section never looks broken.
 */
const visiblePosts: InstagramPost[] = (
  feed.posts.length > 0 ? feed.posts : (site.instagram.curated as InstagramPost[])
).slice(0, 4);

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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : visiblePosts[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback((delta: number) => {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + delta + visiblePosts.length) % visiblePosts.length;
    });
  }, []);

  /* <dialog> is used rather than a hand-rolled overlay: the browser supplies
     the focus trap, the inert backdrop, Escape-to-close and the return of
     focus to the thumbnail that opened it. */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (openIndex !== null && !dialog.open) dialog.showModal();
    if (openIndex === null && dialog.open) dialog.close();
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(-1);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, step]);

  return (
    <section className="instagram-feed" aria-labelledby="instagram-heading">
      <div className="instagram-feed__shell">
        <div className="instagram-feed__heading">
          <div>
            <p className="instagram-feed__eyebrow">Latest posts</p>
            <h2 id="instagram-heading">Instagram</h2>
          </div>
          {feed.updatedAt && (
            <p className="instagram-feed__synced">
              Synced <time dateTime={feed.updatedAt}>{postDate(feed.updatedAt)}</time>
            </p>
          )}
        </div>

        {visiblePosts.length > 0 ? (
          <ul className="instagram-feed__grid">
            {visiblePosts.map((post, index) => (
              <li className="instagram-card" key={post.id}>
                <button
                  type="button"
                  className="instagram-card__media"
                  onClick={() => setOpenIndex(index)}
                  aria-haspopup="dialog"
                  aria-label={`Open post from ${postDate(post.timestamp)}: ${(post.caption || "Instagram post").slice(0, 120)}`}
                >
                  {post.image ? (
                    <img
                      src={assetPath(post.image)}
                      alt={(post.caption || "Instagram post by Hana Valibeik").slice(0, 180)}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="instagram-card__placeholder">View post</span>
                  )}
                  <span className="instagram-card__type">{post.mediaType.replaceAll("_", " ")}</span>
                </button>
                <div className="instagram-card__copy">
                  <p>{post.caption || "New work and process from Hana Valibeik."}</p>
                  <div>
                    <time dateTime={post.timestamp}>{postDate(post.timestamp)}</time>
                    <a href={post.permalink} target="_blank" rel="noreferrer">
                      View on Instagram <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <a
            className="instagram-feed__empty"
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
          >
            <span>New work goes up on Instagram first.</span>
            <strong>See the latest posts ↗</strong>
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

      <dialog
        className="ig-lightbox"
        ref={dialogRef}
        aria-label="Instagram post"
        onClose={close}
        onClick={(event) => {
          // Clicking the backdrop closes; clicking the panel does not.
          if (event.target === dialogRef.current) close();
        }}
      >
        {active && (
          <div className="ig-lightbox__panel">
            <button type="button" className="ig-lightbox__close" onClick={close} aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>

            <figure className="ig-lightbox__figure">
              {active.image ? (
                <img
                  src={assetPath(active.image)}
                  alt={(active.caption || "Instagram post by Hana Valibeik").slice(0, 180)}
                />
              ) : (
                <span className="ig-lightbox__missing">Image available on Instagram</span>
              )}
            </figure>

            <div className="ig-lightbox__copy">
              <p className="ig-lightbox__meta">
                <span>{active.mediaType.replaceAll("_", " ").toLowerCase()}</span>
                <time dateTime={active.timestamp}>{postDate(active.timestamp)}</time>
              </p>
              <p className="ig-lightbox__caption">
                {active.caption || "New work and process from Hana Valibeik."}
              </p>
              <a
                className="ig-lightbox__link"
                href={active.permalink}
                target="_blank"
                rel="noreferrer"
              >
                View on Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>

            {visiblePosts.length > 1 && (
              <div className="ig-lightbox__nav">
                <button type="button" onClick={() => step(-1)} aria-label="Previous post">
                  <span aria-hidden="true">←</span>
                </button>
                <span aria-live="polite">
                  {(openIndex ?? 0) + 1} / {visiblePosts.length}
                </span>
                <button type="button" onClick={() => step(1)} aria-label="Next post">
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
