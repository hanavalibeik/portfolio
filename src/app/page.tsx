import Link from "next/link";
import { ConstructionWordmark } from "@/components/ConstructionWordmark";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCta } from "@/components/ContactCta";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* Hero — the wordmark under construction */}
      <section className="hero">
        <div className="container">
          <ConstructionWordmark name={site.name} />
          <p className="hero-sub">{site.tagline}</p>
          <p className="hero-meta">
            <span>
              <span className="dot" aria-hidden="true" />
              {site.availability}
            </span>
            <span>{site.location}</span>
            <span>{site.workingNote}</span>
          </p>
        </div>
      </section>

      {/* Selected work */}
      <section className="section" aria-labelledby="work-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title" id="work-heading">
                Marks that hold
              </h2>
            </div>
            <Link href="/work" className="text-link">
              All projects ({projects.length}) →
            </Link>
          </div>
          <div className="work-grid">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="section" aria-labelledby="about-heading">
        <div className="container about-strip">
          <div>
            <p className="eyebrow" id="about-heading">
              About
            </p>
            <p className="lede" style={{ marginBlock: "1rem 1.5rem" }}>
              I design logos the old way — on grids, in sketchbooks, against a
              brief — and build them into identity systems that clients can run
              without me.
            </p>
            <Link href="/about" className="text-link">
              More about me →
            </Link>
          </div>
          <div>
            <p className="mono" style={{ color: "var(--gray)", marginBlockEnd: "0.75rem" }}>
              Selected clients
            </p>
            <ul className="client-list">
              {site.clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
