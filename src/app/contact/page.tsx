import type { Metadata } from "next";
import { CtaArrow } from "@/components/CtaArrow";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${site.fullName}.`,
  alternates: { canonical: canonical("/contact") },
  openGraph: {
    title: `Contact — ${site.fullName}`,
    description: `Start a project with ${site.fullName}.`,
    url: canonical("/contact"),
  },
};

export default function ContactPage() {
  const socials = [...site.socials, ...site.elsewhere].filter((s) => s.url);

  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Got a vision? Let&rsquo;s bring it to life</h1>
          <p className="page-lede">
            {site.availability}. The best briefs fit in one honest email: who
            you are, what you make, and why now.
          </p>
          <a href={`mailto:${site.email}`} className="site-cta contact-email">
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
                className="site-cta cv-link cv-link--solid"
              >
                Message on WhatsApp <CtaArrow />
              </a>
            )}
            {site.cv && (
              <a href={assetPath(site.cv)} download className="site-cta cv-link">
                Download CV <CtaArrow direction="down" />
              </a>
            )}
            {site.portfolioPdf && (
              <a
                href={assetPath(site.portfolioPdf)}
                download
                className="site-cta cv-link"
              >
                Download Portfolio <CtaArrow direction="down" />
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
