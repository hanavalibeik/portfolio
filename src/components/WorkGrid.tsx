"use client";

import { useState } from "react";
import { categories, projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type Category = (typeof categories)[number];

export function WorkGrid() {
  const [active, setActive] = useState<Category>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        className="filters"
        role="group"
        aria-label="Filter projects by discipline"
      >
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className="filter-btn"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mono" aria-live="polite" style={{ color: "var(--gray)", margin: "1.25rem 0 1.75rem" }}>
        {visible.length} {visible.length === 1 ? "project" : "projects"}
        {active !== "All" ? ` — ${active}` : ""}
      </p>

      <div className="work-grid work-grid--three">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
