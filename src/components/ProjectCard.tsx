import Link from "next/link";
import type { Project } from "@/data/projects";
import { assetPath } from "@/lib/assetPath";
import { Registration } from "./Marks";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="project-card">
      <span className="card-media">
        {/*
          Placeholder art ships as local SVGs, rendered with a plain <img>.
          When you swap in real photography, consider next/image for
          automatic optimisation — see the README.
        */}
        <img
          src={assetPath(project.cover.src)}
          alt={project.cover.alt}
          loading="lazy"
        />
        <Registration className="crop crop--tl" />
        <Registration className="crop crop--tr" />
        <Registration className="crop crop--br" />
        <Registration className="crop crop--bl" />
      </span>
      <span className="card-meta">
        <span className="card-title">{project.title}</span>
        <span className="card-tags">
          {project.category} · {project.year}
        </span>
      </span>
    </Link>
  );
}
