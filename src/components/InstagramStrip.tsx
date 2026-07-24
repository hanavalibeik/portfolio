import Script from "next/script";
import { site } from "@/data/site";

/**
 * Instagram section for the home page.
 * By default it renders a quiet link band pointing at the work account.
 * Add post permalinks to `site.instagram.posts` to embed real posts
 * (they render on the live site; embeds require instagram.com scripts).
 */
export default function InstagramStrip() {
  const { handle, url, posts } = site.instagram;
  if (!url) return null;

  return (
    <section className="section ig-strip" aria-label="Instagram">
      <div className="container">
        <p className="eyebrow">
          <span aria-hidden="true">+ </span>Instagram
        </p>
        <a href={url} target="_blank" rel="noreferrer" className="ig-handle">
          @{handle} <span className="ig-arrow">↗</span>
        </a>
        <p className="ig-note">
          Logofolio, identity work and process — posted as it happens.
        </p>

        {posts.length > 0 && (
          <>
            <div className="ig-embeds">
              {posts.map((permalink) => (
                <blockquote
                  key={permalink}
                  className="instagram-media"
                  data-instgrm-permalink={permalink}
                  data-instgrm-version="14"
                >
                  <a href={permalink}>View this post on Instagram</a>
                </blockquote>
              ))}
            </div>
            <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
          </>
        )}
      </div>
    </section>
  );
}
