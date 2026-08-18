"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * The rail already paused on hover and on focus-within, which covers mouse and
 * keyboard. Neither reaches a touch user, and WCAG 2.2.2 (Pause, Stop, Hide)
 * asks for a real mechanism for anything that moves for more than five seconds.
 * Hence an explicit control.
 *
 * The card set is rendered twice and the animation travels exactly one set's
 * width, which is what makes the loop seamless. The second copy is hidden from
 * assistive technology and taken out of the tab order so the same three links
 * are not announced or focused twice.
 */
export function ServicesRail({ services }: { services: string[] }) {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // With reduced motion the rail is static already, so the control would be a
  // button that does nothing. Hide it rather than lie about it.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <>
      <div className="exact-services-main">
        <div className="exact-services-rail" data-paused={paused ? "true" : undefined}>
          {services.map((service) => (
            <Link
              className="exact-service-card"
              href="/work/"
              key={service}
              aria-label={`View ${service} work`}
            >
              <h3>{service}</h3>
            </Link>
          ))}
          {services.map((service) => (
            <Link
              className="exact-service-card"
              href="/work/"
              key={`${service}-loop`}
              aria-hidden="true"
              tabIndex={-1}
            >
              <h3>{service}</h3>
            </Link>
          ))}
        </div>
      </div>

      {!reducedMotion && (
        <button
          type="button"
          className="exact-services-toggle"
          onClick={() => setPaused((value) => !value)}
          aria-pressed={paused}
        >
          <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
          {paused ? "Play" : "Pause"}
          <span className="visually-hidden"> the scrolling services list</span>
        </button>
      )}
    </>
  );
}
