import Link from "next/link";
import { ServicesRail } from "@/components/ServicesRail";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

const disciplines = [
  "Packaging",
  "Advertising campaign",
  "UI",
  "Visual identity",
  "Typography",
  "Logo",
  "Poster",
];

const footerLinks = [
  { label: "WhatsApp", short: "Wa", url: `https://wa.me/${site.whatsapp}` },
  { label: "Email", short: "@", url: `mailto:${site.email}` },
  ...site.socials.map((social) => ({
    ...social,
    short:
      social.label === "LinkedIn"
        ? "in"
        : social.label === "Instagram"
          ? "Ig"
          : "Dr",
  })),
  { label: "Threads", short: "Th", url: site.elsewhere[0].url },
  { label: "Pinterest", short: "Pi", url: site.elsewhere[1].url },
];

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-kicker">Graphic design & illustration portfolio</p>
            <h1 id="home-title">
              Hi, I’m
              <span>Hana Vali</span>
            </h1>
            <a className="home-pill home-pill--primary" href={`mailto:${site.email}`}>
              <span>Let’s collaborate</span>
              <i aria-hidden="true">↗</i>
            </a>
          </div>

          <div className="home-portrait-wrap" aria-label="Portrait of Hana Valibeik">
            <div className="home-blue-haze" aria-hidden="true" />
            <div className="home-orbit" aria-hidden="true">
              <span>DESIGN • IDEAS • FORM • MEANING •</span>
            </div>
            <img
              src={assetPath("/about/portrait.png")}
              alt="Hana Valibeik"
              className="home-portrait"
            />
            <span className="home-portrait-line" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="home-about" id="about" aria-labelledby="home-about-title">
        <div className="home-shell">
          <h2 className="home-section-title" id="home-about-title">About me</h2>
          <div className="home-about-grid">
            <div className="home-discipline-grid" aria-hidden="true">
              {disciplines.map((discipline) => (
                <span key={discipline}>{discipline}</span>
              ))}
            </div>
            <div className="home-about-card">
              <p>
                I’m a self-taught Senior Graphic Designer and Illustrator with over
                7 years of experience in branding, UI design and visual
                communication. I create visually strong, functional solutions that
                clarify brand identity, improve usability and make communication more
                effective.
              </p>
              <p>
                I’ve worked with teams across different industries, from cultural
                projects to digital products, delivering clear, consistent and
                scalable visual systems.
              </p>
              <Link href="/about" className="home-inline-link">More about me ↗</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-projects" id="work" aria-labelledby="home-projects-title">
        <div className="home-project-curve" aria-hidden="true" />
        <div className="home-shell">
          <h2 className="home-section-title home-section-title--left" id="home-projects-title">
            Projects
          </h2>
          <div className="home-project-grid">
            {featured.map((project, index) => (
              <Link
                href={`/work/${project.slug}`}
                className="home-project-card"
                key={project.slug}
                aria-label={`View ${project.title} project`}
              >
                <img src={assetPath(project.cover.src)} alt={project.cover.alt} />
                <span className="home-project-overlay">
                  <span className="home-project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="home-project-name">{project.title}</span>
                  <span className="home-project-type">
                    {project.category} · {project.year}
                  </span>
                  <span className="home-project-view">View project <i>↗</i></span>
                </span>
              </Link>
            ))}
          </div>
          <div className="home-project-action">
            <Link href="/work" className="home-pill">View all projects <i>↗</i></Link>
          </div>
        </div>
      </section>

      <section className="home-services" aria-labelledby="home-services-title">
        <div className="home-shell home-services-shell">
          <h2 className="home-section-title" id="home-services-title">Services</h2>
          <ServicesRail services={site.services} />
          <Link href="/about#services" className="home-pill home-services-link">
            View all services <i>↗</i>
          </Link>
        </div>
      </section>

      <section className="home-instagram" aria-labelledby="home-instagram-title">
        <div className="home-shell">
          <h2 className="home-section-title home-section-title--left" id="home-instagram-title">
            Instagram
          </h2>
          <a
            className="home-instagram-link"
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="home-search-mark" aria-hidden="true" />
            <strong>{site.instagram.handle}</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <p>Logo folio, identity work and process — posted as it happens.</p>
        </div>
      </section>

      <section className="home-final-cta" aria-labelledby="home-cta-title">
        <div className="home-final-glow" aria-hidden="true" />
        <div className="home-shell">
          <a href={`mailto:${site.email}`} className="home-final-link">
            <h2 id="home-cta-title">Got a vision? Let’s bring it to life</h2>
            <span aria-hidden="true">→</span>
          </a>
          <p>{site.availability}</p>

          <div className="home-footer-row">
            <div>
              <strong>{site.fullName}</strong>
              <span>{site.role}</span>
            </div>
            <nav className="home-socials" aria-label="Social media">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.short}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
