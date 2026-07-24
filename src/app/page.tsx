import Link from "next/link";
import { ConstructionWordmark } from "@/components/ConstructionWordmark";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCta } from "@/components/ContactCta";
import InstagramStrip from "@/components/InstagramStrip";
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
                Brand, UI & illustration
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
              My work starts with understanding context and goals, then
              translating them into clear, consistent, scalable visual systems
              — typography, layout and colour always in service of the overall
              experience.
            </p>
            <Link href="/about" className="text-link">
              More about me →
            </Link>
          </div>
          <div>
            <p className="mono" style={{ color: "var(--gray)", marginBlockEnd: "0.75rem" }}>
              Companies & teams
            </p>
            <ul className="client-list">
              {site.clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <InstagramStrip />

      <ContactCta />
    </>
  );
}
