"use client";

import Link from "next/link";

/* The second set makes the horizontal loop seamless. It stays hidden from
   assistive technology so every service is announced only once. */
export function ServicesRail({ services }: { services: string[] }) {
  return (
    <div className="exact-services-main">
      <div className="exact-services-rail">
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
  );
}
