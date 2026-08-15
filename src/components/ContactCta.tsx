import { site } from "@/data/site";

export function ContactCta() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="container">
        <p className="eyebrow" id="cta-heading">
          New project?
        </p>
        <a href={`mailto:${site.email}`} className="site-cta cta-link">
          Say hello <span className="arrow" aria-hidden="true">→</span>
        </a>
        <p className="cta-note">
          {site.availability} · {site.location} · {site.workingNote}
        </p>
      </div>
    </section>
  );
}
