import Link from "next/link";
import "./home.css";
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

const footerLinks = [
  { label: "WhatsApp", mark: "◔", url: `https://wa.me/${site.whatsapp}` },
  { label: "Email", mark: "M", url: `mailto:${site.email}` },
  { label: "LinkedIn", mark: "in", url: site.socials[1].url },
  { label: "Dribbble", mark: "◉", url: site.socials[2].url },
  { label: "Instagram", mark: "◎", url: site.socials[0].url },
  { label: "Threads", mark: "Th", url: site.elsewhere[0].url },
];

export default function HomePage() {
  return (
    <div className="exact-home">
      <section className="exact-hero" aria-labelledby="home-title">
        <div className="exact-shell exact-hero-inner">
          <div className="exact-hero-copy">
            <h1 id="home-title">Hi, I’m<span>Hana Vali</span></h1>
            <p>Graphic design &amp; Illustration portfolio</p>
            <a className="exact-pill exact-pill--cta" href={`mailto:${site.email}`}>Let’s collaborate</a>
          </div>
          <div className="exact-portrait-stage">
            <div className="exact-blue-glow" aria-hidden="true" />
            <svg className="exact-orbit" viewBox="0 0 100 100" aria-hidden="true">
              <defs><path id="orbit-path" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" /></defs>
              <text><textPath href="#orbit-path">Design, I’m here to make it · Design, I’m here to make it · </textPath></text>
            </svg>
            <div className="exact-portrait-mask"><img src={assetPath("/about/portrait.png")} alt="Hana Valibeik" /></div>
            <span className="exact-node-line exact-node-line--top" aria-hidden="true" />
            <span className="exact-node-line exact-node-line--bottom" aria-hidden="true" />
          </div>
        </div>
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
                <span className="exact-project-info"><strong>{project.title}</strong><small>{project.meta}</small><em>view project</em><i aria-hidden="true" /></span>
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
          <ServicesRail services={site.services} />
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
              {footerLinks.map((link) => <a key={link.label} href={link.url} target={link.url.startsWith("http") ? "_blank" : undefined} rel={link.url.startsWith("http") ? "noreferrer" : undefined} aria-label={link.label} title={link.label}>{link.mark}</a>)}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
