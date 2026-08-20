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
          <svg className="instagram-feed__search" viewBox="0 0 96 96" aria-hidden="true">
            <circle cx="55" cy="41" r="24" />
            <path d="m37.5 58.5-18 18a8 8 0 0 0 11.3 11.3l18-18" />
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
