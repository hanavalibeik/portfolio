import type { Metadata } from "next";
import { site } from "@/data/site";

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
          {site.cv && (
            <p style={{ marginBlockStart: "1.5rem" }}>
              <a href={site.cv} download className="cv-link">
                Download CV ↓
              </a>
            </p>
          )}
        </div>
      </section>

      <section className="section" aria-label="Elsewhere" style={{ marginBlockEnd: "var(--section-gap)" }}>
        <div className="container" style={{ maxWidth: "44rem", marginInline: "unset" }}>
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
      </section>
    </>
  );
}
