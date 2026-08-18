import Link from "next/link";
import "./home.css";
import "./landing.css";
import { InstagramFeed } from "@/components/InstagramFeed";
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

      <InstagramFeed />
    </div>
  );
}
