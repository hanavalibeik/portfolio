import Link from "next/link";
import "./home.css";
import "./landing.css";
import { ServicesRail } from "@/components/ServicesRail";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

const homeProjects = [
  { title: "Codejudge Catalog", meta: "Editorial · 2025", image: "/work/codejudge-catalog/01.webp", href: "/work/codejudge-catalog", alt: "Codejudge catalog displayed as an open editorial mockup" },
  { title: "Shokouh Miyami", meta: "Visual identity · 2025", image: "/work/shokouh-miyami/01.webp", href: "/work/shokouh-miyami", alt: "Shokouh Miyami identity applied to business cards" },
  { title: "Chandmahameh", meta: "Social media design", image: "/work/home-chandmahameh.webp", href: "/work", alt: "Chandmahameh social media post collection" },
  { title: "Tarazo", meta: "Brand and UI design", image: "/work/home-tarazo.webp", href: "/work", alt: "Tarazo website shown on two desktop displays" },
];

const disciplines = [
  ["Packaging", "discipline-packaging"], ["Advertising campaign", "discipline-advertising"],
  ["Poster", "discipline-poster"], ["UI", "discipline-ui"],
  ["Typography", "discipline-typography"], ["Visual identity", "discipline-identity"],
  ["Logo", "discipline-logo"],
] as const;

const homeServices = [
  "Branding & Identity",
  "Packaging Design",
  "Advertising",
  "UI Design",
  "Typography & Layout",
  "Digital Illustration",
  "Social Media Design",
  "Image Editing & Retouching",
  "Environmental Graphics",
] as const;

const footerLinks = [
  { label: "WhatsApp", icon: "whatsapp", url: `https://wa.me/${site.whatsapp}` },
  { label: "Email", icon: "email", url: `mailto:${site.email}` },
  { label: "LinkedIn", icon: "linkedin", url: site.socials[1].url },
  { label: "Dribbble", icon: "dribbble", url: site.socials[2].url },
  { label: "Instagram", icon: "instagram", url: site.socials[0].url },
  { label: "Threads", icon: "threads", url: site.elsewhere[0].url },
] as const;

function FooterIcon({ name }: { name: (typeof footerLinks)[number]["icon"] }) {
  if (name === "linkedin") return <strong aria-hidden="true">in</strong>;
  if (name === "threads") return <strong className="threads-mark" aria-hidden="true">@</strong>;

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "whatsapp" && <><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.7Z" /><path d="M8.7 8.1c.4 3.3 2 5 5.2 6.1l1.3-1.4 2.2 1.1c-.5 1.9-1.6 2.6-3.3 2.3-4.2-.7-7.4-4-8-8.1-.2-1.5.5-2.6 2.2-3.1l1.2 2.1-.8 1Z" /></>}
      {name === "email" && <><rect x="3" y="5.5" width="18" height="13" rx="1.8" /><path d="m4.5 7 7.5 6 7.5-6" /></>}
      {name === "dribbble" && <><circle cx="12" cy="12" r="8.5" /><path d="M7.2 5.4c3 3.2 5 6.7 6.2 12.9M4 11.2c4.6.2 9.3-.8 13.4-3.3M7.2 17.9c2.7-3.3 6-4.7 11.9-3.6" /></>}
      {name === "instagram" && <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.7" /><circle className="icon-dot" cx="17.2" cy="6.8" r=".8" /></>}
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="exact-home">
      <section className="landing-art-hero" aria-labelledby="home-title">
        <h1 className="landing-art-title" id="home-title">Hi, I’m Hana Vali — Graphic design &amp; Illustration portfolio</h1>
        <img
          className="landing-art-image"
          src={assetPath("/landing/landing-01.webp")}
          alt="Hana Vali graphic design and illustration portfolio landing page"
          width="1920"
          height="1080"
        />
        <Link className="landing-hotspot landing-hotspot--logo" href="/" aria-label="Hana Valibeik — home" />
        <Link className="landing-hotspot landing-hotspot--work" href="/work">Work</Link>
        <Link className="landing-hotspot landing-hotspot--about" href="/about">About</Link>
        <Link className="landing-hotspot landing-hotspot--contact" href="/contact">Contact</Link>
        <a className="landing-hotspot landing-hotspot--cta" href={`mailto:${site.email}`} aria-label="Let’s collaborate" />
      </section>

      <section className="exact-about" aria-labelledby="about-heading">
        <h2 className="exact-heading" id="about-heading">About me</h2>
        <div className="exact-about-grid">
          {disciplines.map(([label, className]) => <span className={`exact-discipline ${className}`} key={label}>{label}</span>)}
          <div className="exact-about-card">
            <p>I’m a self-taught Senior Graphic Designer and Illustrator with over 7 years of experience in branding, UI design and visual communication. I create visually strong, functional solutions that clarify brand identity, improve usability, and make communication more effective. My work starts with understanding context and goals, then translating them into clear, consistent, and scalable visual systems. I pay close attention to typography, layout, and color—always in service of the overall experience.</p>
            <p>I’ve worked with teams across different industries, from cultural projects to digital products, delivering work that is both effective and user-focused.</p>
          </div>
        </div>
      </section>

      <section className="exact-projects" aria-labelledby="projects-heading">
        <span className="exact-project-curve" aria-hidden="true" />
        <div className="exact-shell">
          <h2 className="exact-heading exact-heading--left" id="projects-heading">Projects</h2>
          <div className="exact-project-grid">
            {homeProjects.map((project, index) => (
              <Link className={`exact-project-card${index === 0 ? " is-reference-hover" : ""}`} href={project.href} key={project.title} aria-label={`View ${project.title}`}>
                <img src={assetPath(project.image)} alt={project.alt} />
                <span className="exact-project-info"><strong>{index === 0 ? "Project name" : project.title}</strong><small>{project.meta}</small><em>view project</em><i aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
          <Link className="exact-pill exact-project-more" href="/work">view more</Link>
        </div>
      </section>

      <section className="exact-services" aria-labelledby="services-heading">
        <span className="exact-service-line" aria-hidden="true" />
        <div className="exact-services-main">
          <h2 className="exact-heading" id="services-heading">Services</h2>
          <ServicesRail services={homeServices} />
          <Link className="exact-pill exact-services-more" href="/about#services">view more</Link>
        </div>
      </section>

      <section className="exact-instagram" aria-labelledby="instagram-heading">
        <div className="exact-shell">
          <h2 className="exact-heading exact-heading--left" id="instagram-heading">Instagram</h2>
          <a className="exact-instagram-link" href={site.instagram.url} target="_blank" rel="noreferrer"><span className="exact-search-icon" aria-hidden="true" /><strong>{site.instagram.handle}</strong></a>
          <p>Logofolio, identity work and process — posted as it happens.</p>
        </div>
      </section>

      <section className="exact-footer" aria-labelledby="footer-cta-heading">
        <span className="exact-footer-glow" aria-hidden="true" />
        <div className="exact-shell">
          <a className="exact-footer-cta" href={`mailto:${site.email}`}><h2 id="footer-cta-heading">Got a vision? Let’s bring it to life</h2><span aria-hidden="true">→</span></a>
          <p>{site.availability}</p>
          <div className="exact-footer-bottom">
            <div><strong>{site.fullName}</strong><span>{site.role}</span></div>
            <nav className="exact-socials" aria-label="Social media">
              {footerLinks.map((link) => <a key={link.label} href={link.url} target={link.url.startsWith("http") ? "_blank" : undefined} rel={link.url.startsWith("http") ? "noreferrer" : undefined} aria-label={link.label} title={link.label}><FooterIcon name={link.icon} /></a>)}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
