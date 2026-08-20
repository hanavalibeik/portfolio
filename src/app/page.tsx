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

/* Slot names drive placement on the grid band; order here is reading order. */
const aboutDisciplines = [
  { label: "Packaging", slot: "packaging" },
  { label: "Advertising campaign", slot: "advertising" },
  { label: "Poster", slot: "poster" },
  { label: "Ui", slot: "ui" },
  { label: "Typography", slot: "typography" },
  { label: "Visual identity", slot: "identity" },
  { label: "Logo", slot: "logo" },
] as const;

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
            <img
              className="exact-blue-glow"
              src={assetPath("/hero/landing-glow.webp")}
              alt=""
              width="1122"
              height="821"
              aria-hidden="true"
            />
            <span className="exact-hero-bracket" aria-hidden="true" />
            <svg
              className="exact-portrait-mask"
              viewBox="0 0 355.89 844"
              role="img"
              aria-labelledby="hero-portrait-title"
            >
              <title id="hero-portrait-title">
                {site.fullName}, {site.role}
              </title>
              <defs>
                <clipPath id="hero-portrait-clip">
                  <path d="M0 203.43 355.89 0v300.35c0 209.38-4.39 366.92-194.01 466.28L0 844V203.43Z" />
                </clipPath>
              </defs>
              <g clipPath="url(#hero-portrait-clip)">
                <rect width="355.89" height="844" fill="#d8d8d8" />
                <image
                  href={assetPath("/about/portrait.webp")}
                  x="-145.84"
                  y="-10.62"
                  width="666.6"
                  height="849.6"
                  preserveAspectRatio="none"
                />
              </g>
            </svg>
            <svg
              className="exact-frame-node"
              viewBox="0 0 83.28 72.73"
              aria-hidden="true"
            >
              <line x1="6.81" y1="6.67" x2="76.89" y2="66.92" />
              <circle cx="6.24" cy="6.24" r="6.24" />
              <circle cx="77.04" cy="66.49" r="6.24" />
              <rect
                x="36.63"
                y="31.79"
                width="11.08"
                height="11.08"
                transform="rotate(-5.23 42.17 37.33)"
              />
            </svg>

            {/* The rotating badge belongs to the portrait, so it is positioned
                against the portrait. It used to sit outside this element and
                resolve against the page shell at top/right, which parked it
                under the navigation and hung it off the right edge. */}
            <span className="landing-orbit-anchor" aria-hidden="true">
              <svg className="landing-orbit-text" viewBox="0 0 200 200">
                <defs>
                  <path
                    id="landing-orbit-path"
                    d="M100 25a75 75 0 1 1 0 150a75 75 0 1 1 0-150"
                  />
                </defs>
                <text>
                  <textPath href="#landing-orbit-path" startOffset="4%">
                    I&rsquo;m here, if you are looking for a Graphic Designer
                  </textPath>
                </text>
              </svg>
            </span>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────
          Previously a 16:9 SVG with every glyph outlined, and the
          real copy hidden from sight. Now it is ordinary text. */}
      <section className="home-about" aria-labelledby="about-heading">
        <h2 className="home-about__title" id="about-heading">
          About me
          <span className="corner-mark" aria-hidden="true" />
        </h2>

        {/* Full-bleed modular grid carrying the disciplines as pinned labels,
            with the copy centred on top of it. The labels are a real list, so
            the disciplines stay readable in source order for anyone not seeing
            the layout; the grid itself is decoration. */}
        <div className="home-about__band">
          <span className="home-about__grid" aria-hidden="true" />

          <ul className="home-about__labels">
            {aboutDisciplines.map((discipline) => (
              <li
                className={`home-about__label home-about__label--${discipline.slot}`}
                key={discipline.label}
              >
                {discipline.label}
              </li>
            ))}
          </ul>

          <div className="home-about__card">
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
          </div>
        </div>

        <Link className="exact-pill home-about__more" href="/about/">
          More about me
        </Link>
      </section>

      {/* ── Projects ──────────────────────────────────────────── */}
      <section className="exact-projects" aria-labelledby="projects-heading">
        <svg
          className="exact-project-curve"
          viewBox="0 0 1920 338.44"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M -199.56 0 H 736.54 C 961.64 0 1131 4.71 1237.82 208.57 L 1299.81 338.44"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
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
        {/* Decorative thread continuing down from the projects curve. */}
        <span className="exact-services-thread" aria-hidden="true" />
        <svg
          className="exact-services-diagonal"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* non-scaling-stroke keeps the hairline at 1px however the box is
              stretched, which preserveAspectRatio="none" would otherwise skew. */}
          <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
        </svg>

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
