import Link from "next/link";
import "./home.css";
import "./products.css";
import { InstagramFeed } from "@/components/InstagramFeed";
import { ProductCard } from "@/components/ProductCard";
import { ServicesRail } from "@/components/ServicesRail";
import { collections, products } from "@/data/products";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { JsonLd, absoluteAsset, canonical } from "@/lib/seo";

const homeProjects = [
  {
    title: "Codejudge Catalog",
    meta: "Editorial · 2025",
    image: "/work/codejudge-catalog/01.webp",
    href: "/work/codejudge-catalog/",
    alt: "Codejudge catalog displayed as an open editorial mockup",
  },
  {
    title: "Shokouh Miyami",
    meta: "Visual identity · 2025",
    image: "/work/shokouh-miyami/01.webp",
    href: "/work/shokouh-miyami/",
    alt: "Shokouh Miyami identity applied to business cards",
  },
  {
    title: "Chandmahameh",
    meta: "Social media design",
    image: "/work/home-chandmahameh.webp",
    href: "/work/",
    alt: "Chandmahameh social media post collection",
  },
  {
    title: "Tarazo",
    meta: "Brand and UI design",
    image: "/work/home-tarazo.webp",
    href: "/work/",
    alt: "Tarazo website shown on two desktop displays",
  },
];

const homeServices = [
  "Branding & Identity",
  "Packaging Design",
  "Advertising Campaign",
];

export default function HomePage() {
  const collection = collections[0];
  const featuredProducts = products.slice(0, 3);

  /* `sameAs` is the signal that ties this site to the Instagram, LinkedIn,
     Dribbble and Behance profiles, so a search for the name resolves to one
     person rather than four unconnected accounts. */
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    jobTitle: site.role,
    description: site.tagline,
    url: canonical("/"),
    image: absoluteAsset("/about/portrait.webp"),
    email: `mailto:${site.email}`,
    address: { "@type": "PostalAddress", addressLocality: site.location },
    knowsAbout: site.services,
    sameAs: [
      ...site.socials.map((social) => social.url),
      ...site.elsewhere.map((link) => link.url),
      "https://www.behance.net/hanavalibeik",
    ].filter(Boolean),
  };

  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.fullName} — ${site.role}`,
    url: canonical("/"),
    inLanguage: "en",
    author: { "@type": "Person", name: site.fullName },
  };

  return (
    <div className="exact-home">
      <JsonLd data={personLd} />
      <JsonLd data={siteLd} />
      {/* ── Hero ──────────────────────────────────────────────
          Real text, not an image of text. The headline, the role
          line and the call to action are selectable, translatable
          and stay sharp at any zoom or pixel density. */}
      <section className="exact-hero" aria-labelledby="home-title">
        <div className="exact-shell exact-hero-inner">
          <div className="exact-hero-copy">
            <h1 id="home-title">
              <span>Hi, I&rsquo;m</span>
              <span>Hana Vali</span>
            </h1>
            <p>Graphic design &amp; illustration portfolio</p>
            <a className="exact-pill exact-pill--cta" href={`mailto:${site.email}`}>
              Let&rsquo;s collaborate
            </a>
          </div>

          {/* The stage as a whole is not decorative — it contains a photograph
              of Hana. Only the drawn ornaments inside it are. */}
          <div className="exact-portrait-stage">
            <span className="exact-blue-glow" aria-hidden="true" />
            <span className="exact-portrait-mask">
              <img
                src={assetPath("/about/portrait.webp")}
                alt={`${site.fullName}, ${site.role}`}
                width="1111"
                height="1416"
                fetchPriority="high"
                decoding="async"
              />
            </span>
            <span className="exact-node-line exact-node-line--top" aria-hidden="true" />

            {/* The rotating badge belongs to the portrait, so it is positioned
                against the portrait. It used to sit outside this element and
                resolve against the page shell at top/right, which parked it
                under the navigation and hung it off the right edge. */}
            <svg className="landing-orbit-text" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path
                  id="landing-orbit-path"
                  d="M100 25a75 75 0 1 1 0 150a75 75 0 1 1 0-150"
                />
              </defs>
              <text>
                <textPath href="#landing-orbit-path" startOffset="0%">
                  Graphic Designer  I&rsquo;m here, if you are looking for a Graphic
                  Designer
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────
          Previously a 16:9 SVG with every glyph outlined, and the
          real copy hidden from sight. Now it is ordinary text. */}
      <section className="home-about" aria-labelledby="about-heading">
        <div className="exact-shell home-about__inner">
          <div className="home-about__copy">
            <p className="eyebrow">About</p>
            <h2 id="about-heading">About me</h2>
            <p>
              I&rsquo;m a self-taught Senior Graphic Designer and Illustrator
              with over 7 years of experience in branding, UI design and visual
              communication. I create visually strong, functional solutions that
              clarify brand identity, improve usability, and make communication
              more effective. My work starts with understanding context and
              goals, then translating them into clear, consistent, and scalable
              visual systems. I pay close attention to typography, layout, and
              color—always in service of the overall experience.
            </p>
            <p>
              I&rsquo;ve worked with teams across different industries, from
              cultural projects to digital products, delivering work that is both
              effective and user-focused.
            </p>
            <p className="home-about__disciplines">
              Disciplines: Packaging, Advertising Campaign, Poster, UI,
              Typography, Visual Identity and Logo.
            </p>
            <Link className="exact-pill" href="/about/">
              More about me
            </Link>
          </div>
          <span className="home-about__arc" aria-hidden="true" />
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────── */}
      <section className="exact-projects" aria-labelledby="projects-heading">
        <span className="exact-project-curve" aria-hidden="true" />
        <div className="exact-shell">
          <h2 className="exact-projects-heading" id="projects-heading">
            Projects
          </h2>
          <div className="exact-project-grid">
            {homeProjects.map((project) => (
              <Link
                className="exact-project-card"
                href={project.href}
                key={project.image}
                aria-label={`View more about ${project.title}: ${project.meta}`}
              >
                <span className="exact-project-media">
                  <img
                    src={assetPath(project.image)}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="1200"
                  />
                </span>
                <span className="exact-project-info" aria-hidden="true">
                  <strong>{project.title}</strong>
                  <em>view more</em>
                  <i />
                </span>
              </Link>
            ))}
          </div>
          <Link className="exact-pill exact-projects-more" href="/work/">
            View all work
          </Link>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section className="exact-services" aria-labelledby="services-heading">
        <div className="exact-shell">
          <h2 className="exact-heading" id="services-heading">
            Services
          </h2>
          <ServicesRail services={homeServices} />
          <Link className="exact-pill exact-services-more" href="/work/">
            View all work
          </Link>
        </div>
      </section>

      {/* ── Products teaser ───────────────────────────────────── */}
      <section className="home-products" aria-labelledby="home-products-heading">
        <div className="exact-shell">
          <div className="home-products__head">
            <div>
              <p className="eyebrow">Shop</p>
              <h2 id="home-products-heading">Products</h2>
              <p>
                {collection.name} — printed pieces from my illustration work.
                Order by message.
              </p>
            </div>
            <Link className="home-products__link" href="/products/">
              See all products <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <InstagramFeed />
    </div>
  );
}
