import Link from "next/link";
import "./home.css";
import "./landing.css";
import { InstagramFeed } from "@/components/InstagramFeed";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

const homeProjects = [
  { title: "Codejudge Catalog", meta: "Editorial · 2025", image: "/work/codejudge-catalog/01.webp", href: "/work/codejudge-catalog", alt: "Codejudge catalog displayed as an open editorial mockup" },
  { title: "Shokouh Miyami", meta: "Visual identity · 2025", image: "/work/shokouh-miyami/01.webp", href: "/work/shokouh-miyami", alt: "Shokouh Miyami identity applied to business cards" },
  { title: "Chandmahameh", meta: "Social media design", image: "/work/home-chandmahameh.webp", href: "/work", alt: "Chandmahameh social media post collection" },
  { title: "Tarazo", meta: "Brand and UI design", image: "/work/home-tarazo.webp", href: "/work", alt: "Tarazo website shown on two desktop displays" },
  { title: "", meta: "", image: "/work/home-logotype.svg", href: "/work", alt: "Persian calligraphy logotype project" },
  { title: "", meta: "", image: "/work/home-web-project.svg", href: "/work", alt: "Website design presented on two desktop monitors" },
];

export default function HomePage() {
  return (
    <div className="exact-home">
      <style>{`
        @media (min-width: 701px) {
          .exact-projects { height: 152.4vw; }
          .exact-project-grid {
            height: 119.7vw;
            grid-template-rows: repeat(3, 1fr);
          }
          .exact-home .site-cta.exact-projects-more { top: 139.9vw; }
          .exact-projects-tail-line { top: 135.48vw; }
        }
      `}</style>

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
        <div className="exact-project-grid" data-deploy-version="six-project-grid-2026-08-18">
          {homeProjects.map((project, index) => (
            <Link
              className={`exact-project-card${index === 0 ? " exact-project-card--inset" : ""}`}
              href={project.href}
              key={project.image}
              aria-label={project.title ? `View more about ${project.title}: ${project.meta}` : project.alt}
            >
              <span className="exact-project-media">
                <img src={assetPath(project.image)} alt={project.alt} loading="lazy" />
              </span>
              {project.title ? (
                <span
                  className="exact-project-info"
                  aria-hidden="true"
                  style={{ background: "rgba(0, 0, 0, 0.5)", color: "#fff" }}
                >
                  <strong>{project.title}</strong>
                  <em>view more</em>
                  <i aria-hidden="true" style={{ borderColor: "rgba(255, 255, 255, 0.82)" }} />
                </span>
              ) : null}
            </Link>
          ))}
        </div>
        <Link className="site-cta exact-projects-more" href="/work">view more</Link>
        <span className="exact-projects-tail-line" aria-hidden="true" />
      </section>

      <section
        className="section-four-art"
        aria-label="Selected visual work"
        style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", overflow: "hidden", background: "#000" }}
      >
        <img
          className="section-four-art__image"
          src={assetPath("/sections/section-04.svg")}
          alt="Selected portfolio work"
          width="1920"
          height="1080"
          style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
        />
      </section>

      <InstagramFeed />
    </div>
  );
}
