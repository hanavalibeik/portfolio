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
  { label: "Behance", icon: "behance", url: "https://www.behance.net/hanavalibeik" },
] as const;

function FooterIcon({ name }: { name: (typeof footerLinks)[number]["icon"] }) {
  if (name === "behance") return <strong className="behance-mark" aria-hidden="true">Be</strong>;

  return (
    <svg className={`${name === "whatsapp" || name === "linkedin" ? "brand-fill" : "brand-stroke"} icon-${name}`} viewBox="0 0 24 24" aria-hidden="true">
      {name === "whatsapp" && <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-1.75-.87-2.9-1.56-4.06-3.54-.31-.53.31-.49.88-1.64.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-2.72 2.98-.7 7.3.39 8.79 1.48 2.02 3.27 3.04 5.33 3.94 1.74.75 3.33.65 4.58.39 1.4-.29 2.71-1.16 3.09-2.28.38-1.12.38-2.08.27-2.28-.11-.2-.41-.3-.71-.45M12.04 21.5h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.21-3.6.94.96-3.5-.23-.36A9.47 9.47 0 0 1 2.52 12a9.5 9.5 0 1 1 9.52 9.5M20.1 3.91A11.38 11.38 0 0 0 12 0 12 12 0 0 0 1.53 17.82L0 23.69l6.05-1.59A12 12 0 1 0 20.1 3.91" />}
      {name === "email" && <><rect x="3" y="5.5" width="18" height="13" rx="1.8" /><path d="m4.5 7 7.5 6 7.5-6" /></>}
      {name === "linkedin" && <><path d="M5.15 9.1h3.2V19h-3.2V9.1Zm1.6-4.6a1.86 1.86 0 1 1 0 3.72 1.86 1.86 0 0 1 0-3.72Z" /><path d="M10.35 9.1h3.07v1.35h.04c.43-.81 1.47-1.67 3.03-1.67 3.24 0 3.84 2.14 3.84 4.91V19h-3.2v-4.71c0-1.13-.02-2.57-1.57-2.57-1.57 0-1.81 1.23-1.81 2.49V19h-3.2l-.2-9.9Z" /></>}
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
        <a className="site-cta landing-hotspot landing-hotspot--cta" href={`mailto:${site.email}`}>Let’s collaborate</a>
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
          <Link className="site-cta exact-pill exact-project-more" href="/work">view more</Link>
        </div>
      </section>

      <section className="exact-services" aria-labelledby="services-heading">
        <span className="exact-service-line" aria-hidden="true" />
        <div className="exact-services-main">
          <h2 className="exact-heading" id="services-heading">Services</h2>
          <ServicesRail services={homeServices} />
          <Link className="site-cta exact-pill exact-services-more" href="/about#services">view more</Link>
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
          <a className="site-cta exact-footer-cta" href={`mailto:${site.email}`}><h2 id="footer-cta-heading">Got a vision? Let’s bring it to life</h2><span aria-hidden="true">→</span></a>
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
