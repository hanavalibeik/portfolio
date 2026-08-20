import { site } from "@/data/site";

export function InstagramFeed() {
  return (
    <section className="instagram-feed" aria-labelledby="instagram-heading">
      <div className="instagram-feed__shell">
        <header className="instagram-feed__heading">
          <h2 id="instagram-heading">Instagram</h2>
        </header>

        <a
          className="instagram-feed__closing-link"
          href={site.instagram.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Follow ${site.instagram.handle} on Instagram`}
        >
          <svg className="instagram-feed__search" viewBox="0 0 114 130" aria-hidden="true">
            <path d="M41 72 23.5 89.5a8.5 8.5 0 0 0 12 12L53 84" />
            <circle cx="68.5" cy="58.5" r="29.5" />
          </svg>
          <strong>{site.instagram.handle}</strong>
        </a>

        <p className="instagram-feed__note">
          Logofolio, identity work and process — posted as it happens.
        </p>
      </div>
    </section>
  );
}
