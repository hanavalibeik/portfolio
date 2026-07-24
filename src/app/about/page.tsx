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
            <img src="/about/portrait.png" alt={`Portrait of ${site.fullName}`} />
          </div>
          <div className="about-copy">
            <p className="lede">
              I'm a self-taught senior graphic designer and illustrator with
              over seven years of experience in branding, UI design and visual
              communication.
            </p>
            <p>
              I create visually strong, functional solutions that clarify brand
              identity, improve usability and make communication more
              effective. My work starts with understanding context and goals,
              then translating them into clear, consistent, scalable visual
              systems — with close attention to typography, layout and colour,
              always in service of the overall experience.
            </p>
            <p>
              I've worked with teams across different industries, from cultural
              projects to digital products, delivering work that is both
              effective and user-focused — and along the way I've art-directed,
              built brand books, redesigned interfaces and mentored design
              teams.
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
            <p className="eyebrow" style={{ marginBlock: "2.5rem 1rem" }}>
              Education
            </p>
            <ul className="fact-list">
              {site.education.map((e) => (
                <li key={e.degree}>
                  <span>{e.degree}</span>
                  <span className="detail">{e.school}</span>
                </li>
              ))}
            </ul>
            <p className="eyebrow" style={{ marginBlock: "2.5rem 1rem" }}>
              Languages
            </p>
            <ul className="fact-list">
              {site.languages.map((l) => (
                <li key={l}>{l}</li>
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
