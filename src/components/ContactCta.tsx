import { CtaArrow } from "@/components/CtaArrow";
import { site } from "@/data/site";

export function ContactCta() {
  return (
    <section className="cta" aria-labelledby="cta-heading">
      <div className="container">
        <p className="eyebrow" id="cta-heading">
          New project?
        </p>
        <a href={`mailto:${site.email}`} className="site-cta cta-link">
          Say hello <CtaArrow />
        </a>
        <p className="cta-note">
          {site.availability} · {site.location} · {site.workingNote}
        </p>
      </div>
    </section>
  );
}
