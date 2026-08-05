import type { Metadata } from "next";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.fullName}.`,
};

export default function ContactPage() {
  const socials = [...site.socials, ...site.elsewhere].filter((s) => s.url);

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Say hello</h1>
          <p className="page-lede">
            {site.availability}. The best briefs fit in one honest email: who
            you are, what you make, and why now.
          </p>
          <a href={`mailto:${site.email}`} className="contact-email">
            {site.email}
          </a>
          <p className="cta-note">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            {" · "}
            {site.location} · {site.workingNote}
          </p>
          <p className="contact-actions">
            {site.whatsapp && (
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="cv-link cv-link--solid"
              >
                Message on WhatsApp →
              </a>
            )}
            {site.cv && (
              <a href={assetPath(site.cv)} download className="cv-link">
                Download CV ↓
              </a>
            )}
            {site.portfolioPdf && (
              <a
                href={assetPath(site.portfolioPdf)}
                download
                className="cv-link"
              >
                Download Portfolio ↓
              </a>
            )}
          </p>
        </div>
      </section>

      <section className="section" aria-label="Elsewhere" style={{ marginBlockEnd: "var(--section-gap)" }}>
        <div className="container">
          <div style={{ maxWidth: "44rem" }}>
          <p className="eyebrow" style={{ marginBlockEnd: "0.75rem" }}>
            Elsewhere
          </p>
          <ul className="social-list">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer">
                  <span>{s.label}</span>
                  <span className="mono">↗</span>
                </a>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>
    </>
  );
}
