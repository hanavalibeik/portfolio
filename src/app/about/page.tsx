import type { Metadata } from "next";
import { ContactCta } from "@/components/ContactCta";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.fullName} — ${site.role}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1 className="page-title">{site.fullName}</h1>
          <p className="page-lede">
            {site.role}, based in {site.location}. {site.workingNote}.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Biography">
        <div className="container about-grid">
          <div className="portrait">
            {/* Replace /public/about/portrait.svg with your photo. */}
            <img
              src="/about/portrait.svg"
              alt={`Portrait of ${site.fullName} (placeholder)`}
            />
          </div>
          <div className="about-copy">
            <p className="lede">
              A logo is the smallest thing a brand owns and the hardest thing to
              get right. That contradiction is my whole job.
            </p>
            <p>
              I've spent the last decade designing marks, wordmarks and identity
              systems for independent businesses and cultural clients — the kind
              of organisations where the founder still answers the phone. Every
              engagement starts with the same tools: a sharp brief, a soft
              pencil and a grid.
            </p>
            <p>
              I work alone by choice, partnering with photographers, motion
              designers and developers when a project asks for more hands. Small
              on purpose: you brief me, you get me.
            </p>
            <p>
              This copy is placeholder text — replace it with your own story in{" "}
              <code>src/app/about/page.tsx</code> and{" "}
              <code>src/data/site.ts</code>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Services and recognition">
        <div className="container two-col">
          <div>
            <p className="eyebrow" style={{ marginBlockEnd: "1rem" }}>
              Services
            </p>
            <ul className="fact-list">
              {site.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow" style={{ marginBlockEnd: "1rem" }}>
              Recognition
            </p>
            <ul className="fact-list">
              {site.recognition.map((r) => (
                <li key={r.label}>
                  <span>{r.label}</span>
                  <span className="detail">{r.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Clients">
        <div className="container">
          <p className="eyebrow" style={{ marginBlockEnd: "1rem" }}>
            Clients, past & present
          </p>
          <ul className="client-list">
            {site.clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
