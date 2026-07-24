import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { adjacentProjects, getProject, projects } from "@/data/projects";
import { ContactCta } from "@/components/ContactCta";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = adjacentProjects(slug);

  return (
    <>
      <article>
        <header className="cs-hero">
          <div className="container">
            <p className="eyebrow">
              {project.category} — {project.year}
            </p>
            <h1 className="cs-title">{project.title}</h1>
            <p className="cs-summary">{project.summary}</p>
            <div className="cs-cover">
              <img src={project.cover.src} alt={project.cover.alt} />
            </div>
          </div>
        </header>

        <div className="container cs-body">
          {/* Spec-sheet sidebar */}
          <aside className="spec" aria-label="Project details">
            <dl>
              <div className="spec-row">
                <dt>Client</dt>
                <dd>{project.client}</dd>
              </div>
              <div className="spec-row">
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div className="spec-row">
                <dt>Sector</dt>
                <dd>{project.sector}</dd>
              </div>
              <div className="spec-row">
                <dt>Discipline</dt>
                <dd>{project.category}</dd>
              </div>
              <div className="spec-row">
                <dt>Deliverables</dt>
                <dd>{project.deliverables.join(", ")}</dd>
              </div>
            </dl>
          </aside>

          {/* Case study copy */}
          <div className="cs-sections">
            <section aria-labelledby="brief-h">
              <h2 id="brief-h">The brief</h2>
              <p>{project.brief}</p>
            </section>
            <section aria-labelledby="approach-h">
              <h2 id="approach-h">The approach</h2>
              <p>{project.approach}</p>
            </section>
            <section aria-labelledby="outcome-h">
              <h2 id="outcome-h">The outcome</h2>
              <p>{project.outcome}</p>
            </section>
          </div>
        </div>

        {/* Figures */}
        <div className="container cs-figures">
          {project.images.map((image) => (
            <figure key={image.src} className="cs-figure">
              <div className="frame">
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
              {image.caption ? (
                <figcaption>{image.caption}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>

        {/* Prev / next */}
        <nav className="container cs-pagination" aria-label="More projects">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="pag-link">
              <span className="mono">← Previous</span>
              <span className="pag-title">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/work/${next.slug}`} className="pag-link pag-link--next">
              <span className="mono">Next →</span>
              <span className="pag-title">{next.title}</span>
            </Link>
          ) : null}
        </nav>
      </article>

      <ContactCta />
    </>
  );
}
