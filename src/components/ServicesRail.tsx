export function ServicesRail({ services }: { services: readonly string[] }) {
  return (
    <div className="exact-services-rail" tabIndex={0} aria-label="Scroll through services">
      {services.map((service) => (
        <article className="exact-service-card" key={service}>
          <h3>{service}</h3>
        </article>
      ))}
    </div>
  );
}
