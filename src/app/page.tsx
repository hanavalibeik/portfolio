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
        <span className="landing-orbit-cleaner" aria-hidden="true" />
        <svg
          className="landing-orbit-text"
          viewBox="0 0 320 320"
          aria-hidden="true"
        >
          <defs>
            <path
              id="landing-orbit-path"
              d="M 160,160 m 0,-112 a 112,112 0 1,1 0,224 a 112,112 0 1,1 0,-224"
              pathLength="100"
            />
          </defs>
          <text>
            <textPath href="#landing-orbit-path" startOffset="1.5%">
              I’m here, if you are looking for a Graphic Designer
            </textPath>
          </text>
        </svg>
        <Link className="landing-hotspot landing-hotspot--logo" href="/" aria-label="Hana Valibeik — home" />
        <Link className="landing-hotspot landing-hotspot--work" href="/work">Work</Link>
        <Link className="landing-hotspot landing-hotspot--about" href="/about">About</Link>
        <Link className="landing-hotspot landing-hotspot--contact" href="/contact">Contact</Link>
        <a className="site-cta landing-hotspot landing-hotspot--cta" href={`mailto:${site.email}`}>Let’s collaborate</a>
      </section>

      <section className="section-two-art" aria-labelledby="about-heading">
        <div className="section-two-art__copy">
          <h2 id="about-heading">About me</h2>
          <p>I’m a self-taught Senior Graphic Designer and Illustrator with over 7 years of experience in branding, UI design and visual communication. I create visually strong, functional solutions that clarify brand identity, improve usability, and make communication more effective. My work starts with understanding context and goals, then translating them into clear, consistent, and scalable visual systems. I pay close attention to typography, layout, and color—always in service of the overall experience.</p>
          <p>I’ve worked with teams across different industries, from cultural projects to digital products, delivering work that is both effective and user-focused.</p>
          <p>Disciplines: Packaging, Advertising Campaign, Poster, UI, Typography, Visual Identity and Logo.</p>
        </div>
        <img
          className="section-two-art__image"
          src={assetPath("/sections/sections-01.svg")}
          alt=""
          aria-hidden="true"
          width="1920"
          height="1080"
        />
      </section>

      <section className="exact-projects" aria-labelledby="projects-heading">
        <span className="exact-project-curve" aria-hidden="true" />
        <h2 className="exact-projects-heading" id="projects-heading">Projects</h2>
        <div className="exact-project-grid">
          {homeProjects.map((project, index) => (
            <Link
              className={`exact-project-card${index === 0 ? " exact-project-card--inset" : ""}`}
              href={project.href}
              key={project.title}
              aria-label={`View more about ${project.title}: ${project.meta}`}
            >
              <span className="exact-project-media">
                <img src={assetPath(project.image)} alt={project.alt} loading="lazy" />
              </span>
              <span className="exact-project-info" aria-hidden="true">
                <strong>{project.title}</strong>
                <em>view more</em>
                <i aria-hidden="true" />
              </span>
            </Link>
          ))}
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
