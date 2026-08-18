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
];

const homeServices = [
  "Branding & Identity",
  "Packaging Design",
  "Advertising Campaign",
];

export default function HomePage() {
  return (
    <div className="exact-home">
      <style>{`
        .exact-services {
          min-height: 56.25vw;
          background: #000;
        }

        .exact-service-card {
          isolation: isolate;
          border: 0;
          background:
            radial-gradient(circle at 22% 18%, rgba(255,255,255,.26), transparent 22%),
            linear-gradient(135deg, #ececec 0%, #d7d7d7 55%, #f3f3f3 100%);
          box-shadow: none;
          transition: transform 320ms cubic-bezier(.22,1,.36,1), filter 320ms ease;
        }

        .exact-service-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            linear-gradient(120deg, transparent 10%, rgba(255,255,255,.46) 48%, transparent 72%),
            radial-gradient(circle at 76% 78%, rgba(0,0,0,.08), transparent 35%);
          opacity: .6;
        }

        .exact-service-card h3 {
          position: relative;
          z-index: 1;
          color: #0a0a0a;
          font-size: clamp(.78rem, 1.75vw, 2.1rem);
          font-weight: 500;
          letter-spacing: -.035em;
        }

        .exact-service-card:hover,
        .exact-service-card:focus-visible {
          transform: translateY(-.35vw);
          filter: brightness(1.04);
          outline: none;
        }

        @media (max-width: 700px) {
          .exact-services {
            height: auto;
            min-height: 0;
            padding: 5rem 1rem 5.5rem;
          }

          .exact-service-line {
            top: 0;
            left: 31.5vw;
            height: 4.5rem;
          }

          .exact-service-line::after {
            display: none;
          }

          .exact-services::after {
            top: 4.5rem;
            left: 31.5vw;
          }

          .exact-services-main {
            position: relative;
            inset: auto;
            height: auto;
            margin-left: 31.5vw;
            padding-top: 5.5rem;
          }

          .exact-services-main > .exact-heading {
            position: relative;
            top: auto;
            left: auto;
            margin: 0 0 2rem;
            font-size: 2rem;
          }

          .exact-services-rail {
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            grid-auto-columns: minmax(15rem, 78vw);
            gap: 1rem;
            margin-right: -1rem;
            padding-right: 1rem;
          }

          .exact-service-card {
            height: auto;
            aspect-ratio: 379.63 / 247;
            border-radius: 1.75rem;
            padding: 1.5rem;
          }

          .exact-service-card h3 {
            font-size: 1.15rem;
          }

          .exact-services-more {
            position: relative;
            top: auto;
            left: auto;
            width: 9.5rem;
            min-height: 3rem;
            margin-top: 2rem;
          }
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

        <span className="landing-orbit-cleaner" aria-hidden="true" />
        <svg className="landing-orbit-text" viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <path
              id="landing-orbit-path"
              d="M100 25a75 75 0 1 1 0 150a75 75 0 1 1 0-150"
            />
          </defs>
          <text>
            <textPath href="#landing-orbit-path" startOffset="0%">
              Graphic Designer  I’m here, if you are looking for a Graphic Designer
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
              key={project.image}
              aria-label={`View more about ${project.title}: ${project.meta}`}
            >
              <span className="exact-project-media">
                <img src={assetPath(project.image)} alt={project.alt} loading="lazy" />
              </span>
              <span
                className="exact-project-info"
                aria-hidden="true"
                style={{ background: "rgba(0, 0, 0, 0.5)", color: "#fff" }}
              >
                <strong>{project.title}</strong>
                <em>view more</em>
                <i aria-hidden="true" style={{ borderColor: "rgba(255, 255, 255, 0.82)" }} />
              </span>
            </Link>
          ))}
        </div>
        <Link className="site-cta exact-projects-more" href="/work">view more</Link>
        <span className="exact-projects-tail-line" aria-hidden="true" />
      </section>

      <section className="exact-services" aria-labelledby="services-heading">
        <span className="exact-service-line" aria-hidden="true" />
        <div className="exact-services-main">
          <h2 className="exact-heading exact-heading--left" id="services-heading">Services</h2>
          <div className="exact-services-rail" aria-label="Services">
            {homeServices.map((service) => (
              <Link className="exact-service-card" href="/work" key={service} aria-label={`View ${service} work`}>
                <h3>{service}</h3>
              </Link>
            ))}
          </div>
          <Link className="exact-pill exact-services-more" href="/work">view more</Link>
        </div>
      </section>

      <InstagramFeed />
    </div>
  );
}
