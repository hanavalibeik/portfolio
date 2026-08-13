"use client";

import { useRef } from "react";

export function ServicesRail({ services }: { services: readonly string[] }) {
  const rail = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    rail.current?.scrollBy({ left: direction * 330, behavior: "smooth" });
  };

  return (
    <div className="services-rail-wrap">
      <div className="services-controls" aria-label="Scroll services">
        <button type="button" onClick={() => move(-1)} aria-label="Previous services">←</button>
        <button type="button" onClick={() => move(1)} aria-label="Next services">→</button>
      </div>
      <div className="services-rail" ref={rail} tabIndex={0} aria-label="Services list">
        {services.map((service, index) => (
          <article className="service-card" key={service}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service}</h3>
            <p>Creative direction, concept and production-ready visual design.</p>
          </article>
        ))}
      </div>
    </div>
  );
}
