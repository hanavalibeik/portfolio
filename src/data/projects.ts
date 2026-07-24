/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — every case study on the site lives in this file.
 *
 *  These six case studies are drafted from Hana's CV. The copy
 *  is a starting point — refine it in your own voice — and the
 *  artwork is generated placeholder SVG:
 *
 *  1. Drop real images into  /public/work/<slug>/
 *     (a cover plus as many detail images as you like)
 *  2. Point `cover` and `images` at them and write real alt text.
 *  3. Add, remove or reorder projects freely — the grid, filters
 *     and case study pages all render from this array.
 *
 *  `accent` tints the project card while placeholder art is in
 *  use — once you use full-bleed images you can ignore it.
 * ─────────────────────────────────────────────────────────────
 */

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: "Identity" | "UI" | "Campaign" | "Illustration";
  sector: string;
  deliverables: string[];
  summary: string;
  brief: string;
  approach: string;
  outcome: string;
  cover: ProjectImage;
  images: ProjectImage[];
  accent: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "master-pipe",
    title: "Master Pipe",
    client: "Master Pipe",
    year: "2025 — present",
    category: "Identity",
    sector: "Polymer piping manufacturer",
    deliverables: [
      "Logo refinement",
      "Colour system",
      "Brand book",
      "Catalogs & brochures",
      "Photo retouching",
    ],
    summary:
      "Redesigning the visual identity of an industrial manufacturer — from a refined logo and colour system to the brand book that keeps every sub-brand in line.",
    brief:
      "Master Pipe manufactures polymer piping for domestic and international markets, with sub-brands and product lines that had drifted apart visually. The brand needed a refreshed identity strong enough for industry and disciplined enough to scale across every touchpoint.",
    approach:
      "I led the redesign of the visual identity: refining the logo, rebuilding the colour system and codifying both in a main brand book. Sub-brands and product lines were brought into one consistent family, and industrial photography was retouched and enhanced — combining AI tools with advanced editing — to give the catalogs a unified look.",
    outcome:
      "A consistent identity across all touchpoints, with catalogs and brochures for domestic and international markets, plus pricing catalogs aligned with the core brand to directly support the sales team.",
    cover: {
      src: "/work/master-pipe/cover.svg",
      alt: "Placeholder mark for the Master Pipe identity on an industrial blue field",
    },
    images: [
      {
        src: "/work/master-pipe/01.svg",
        alt: "Placeholder construction sheet for the Master Pipe mark",
        caption: "Placeholder — replace with logo refinement / brand book spreads.",
      },
      {
        src: "/work/master-pipe/02.svg",
        alt: "Placeholder applications sheet for the Master Pipe identity",
        caption: "Placeholder — replace with catalog and brochure applications.",
      },
    ],
    accent: "#1B4F8A",
    featured: true,
  },
  {
    slug: "tarazo",
    title: "Tarazo",
    client: "Tarazo",
    year: "2025 — present",
    category: "Campaign",
    sector: "AI-powered legal startup",
    deliverables: [
      "Campaign key visuals",
      "Social content system",
      "Website banners",
      "Brochures",
      "Advertising copy",
    ],
    summary:
      "Campaign visuals and a social content system for an AI-powered legal startup — key visuals, banners and messaging that stay brand-aligned at speed.",
    brief:
      "Tarazo brings AI to legal services — a complex product in a trust-driven category. It needed a steady stream of campaign assets for Instagram and LinkedIn that could explain the product clearly while building a credible, consistent brand presence.",
    approach:
      "I developed the social media content strategy and designed the campaign assets, produced website banners in collaboration with the marketing team, and built key visuals for campaigns and advertising using AI-assisted workflows — keeping every asset brand-aligned and contributing to campaign messaging and copy along the way.",
    outcome:
      "A recognisable, repeatable campaign system across Instagram, LinkedIn and the web, with brochures and visual assets that let marketing move quickly without diluting the brand.",
    cover: {
      src: "/work/tarazo/cover.svg",
      alt: "Placeholder mark for Tarazo on a deep violet field",
    },
    images: [
      {
        src: "/work/tarazo/01.svg",
        alt: "Placeholder construction sheet for the Tarazo mark",
        caption: "Placeholder — replace with campaign key visuals.",
      },
      {
        src: "/work/tarazo/02.svg",
        alt: "Placeholder applications sheet for Tarazo campaign assets",
        caption: "Placeholder — replace with social and banner applications.",
      },
    ],
    accent: "#3B2F8F",
    featured: true,
  },
  {
    slug: "hamkelasi-system",
    title: "Hamkelasi System",
    client: "Hamkelasi System",
    year: "2023 – 2025",
    category: "UI",
    sector: "EdTech platform",
    deliverables: [
      "Navigation & icon system",
      "Homepage design",
      "Campaign key visuals",
      "Illustration",
      "Social & banner assets",
    ],
    summary:
      "As Senior Graphic Designer & Art Director: a redesigned navigation and icon system that lifted feature discoverability by ~30%, based on user behaviour data.",
    brief:
      "Hamkelasi System is an EdTech platform whose interface had outgrown its navigation — features existed that users simply never found. The product needed clearer wayfinding and a visual identity that held together across product and marketing.",
    approach:
      "Working from user behaviour data, I redesigned the navigation and icon system and the main website homepage, improved UI consistency so the product experience matched the brand, and created the illustrations, campaign visuals, GIF banners and social assets that carried the identity across every channel.",
    outcome:
      "Feature discoverability increased by roughly 30%, and the visual identity scaled cleanly across product and marketing channels — one system from interface to campaign.",
    cover: {
      src: "/work/hamkelasi-system/cover.svg",
      alt: "Placeholder mark for Hamkelasi System on a green field",
    },
    images: [
      {
        src: "/work/hamkelasi-system/01.svg",
        alt: "Placeholder construction sheet for the Hamkelasi icon system",
        caption: "Placeholder — replace with navigation / icon system screens.",
      },
      {
        src: "/work/hamkelasi-system/02.svg",
        alt: "Placeholder applications sheet for Hamkelasi visuals",
        caption: "Placeholder — replace with homepage and campaign visuals.",
      },
    ],
    accent: "#1F7A4D",
    featured: true,
  },
  {
    slug: "mizan-gostar",
    title: "Mizan Gostar",
    client: "Mizan Gostar",
    year: "2020 – 2023",
    category: "Identity",
    sector: "IT training company",
    deliverables: [
      "Brand identity & brand book",
      "UI for homepage & landing pages",
      "Environmental graphics",
      "Exhibition materials",
      "Team leadership",
    ],
    summary:
      "Brand identity and brand book for an IT training company — and a UI redesign that contributed to ~20% more engagement among programming learners.",
    brief:
      "Mizan Gostar teaches programming, and its brand needed to work as hard as its courses: a coherent identity for the company and its products, a website that welcomed learners, and materials that could hold their own at exhibitions and tech events.",
    approach:
      "I led the development of the brand identity and brand book, designed the UI for the homepage and landing pages with key visuals for each section, and extended the identity into catalogs, brochures and environmental graphics for offices and exhibitions. I facilitated naming and branding sessions, worked closely with developers on faithful implementation, and managed and mentored the design team, including interns.",
    outcome:
      "A stronger brand perception and a measurably better experience — the UI redesign contributed to a ~20% increase in user engagement among programming learners.",
    cover: {
      src: "/work/mizan-gostar/cover.svg",
      alt: "Placeholder mark for Mizan Gostar on a warm orange field",
    },
    images: [
      {
        src: "/work/mizan-gostar/01.svg",
        alt: "Placeholder construction sheet for the Mizan Gostar mark",
        caption: "Placeholder — replace with brand book spreads.",
      },
      {
        src: "/work/mizan-gostar/02.svg",
        alt: "Placeholder applications sheet for the Mizan Gostar identity",
        caption: "Placeholder — replace with UI screens and environmental graphics.",
      },
    ],
    accent: "#D8622B",
    featured: true,
  },
  {
    slug: "chandmahameh",
    title: "ChandMahameh",
    client: "ChandMahameh",
    year: "2019 – 2020",
    category: "Illustration",
    sector: "Children's product brand",
    deliverables: [
      "Mascots & character design",
      "Interactive product illustration",
      "Social & blog visuals",
      "Product photography direction",
      "Retouching",
    ],
    summary:
      "Mascots, characters and interactive product illustration for a children's brand — plus the photography direction that sold it.",
    brief:
      "ChandMahameh makes products for children, where character is the product: the brand needed mascots and illustrated worlds that kids love and parents trust, carried consistently from digital platforms to product photography.",
    approach:
      "I illustrated and designed interactive products for children, created mascots and character designs for digital platforms, and produced social media and blog visuals with the marketing team. On the photography side, I directed product shoots — styling and composition — and handled professional retouching for web and social.",
    outcome:
      "A cast of characters and a visual world the brand could reuse everywhere, feeding sales-driven creative assets across social, blog and product pages.",
    cover: {
      src: "/work/chandmahameh/cover.svg",
      alt: "Placeholder character mark for ChandMahameh on a warm yellow field",
    },
    images: [
      {
        src: "/work/chandmahameh/01.svg",
        alt: "Placeholder construction sheet for the ChandMahameh character",
        caption: "Placeholder — replace with mascot and character sheets.",
      },
      {
        src: "/work/chandmahameh/02.svg",
        alt: "Placeholder applications sheet for ChandMahameh illustration",
        caption: "Placeholder — replace with product and social applications.",
      },
    ],
    accent: "#E8A33D",
  },
  {
    slug: "zeinteb",
    title: "ZeinTeb",
    client: "ZeinTeb",
    year: "2019",
    category: "Identity",
    sector: "Health tourism platform",
    deliverables: [
      "Brand identity & logo",
      "Brochures & catalogs",
      "Social media content",
      "Web & blog visuals",
    ],
    summary:
      "Brand identity and logo for a health tourism platform, extended into the materials its healthcare partners hand to patients.",
    brief:
      "ZeinTeb connects patients with healthcare providers across borders — a service that lives or dies on trust. The platform needed a brand identity and logo that felt professional and calm, and a set of materials its partners could actually use.",
    approach:
      "I designed the brand identity and logo, collaborated with the content team on campaign concepts, and created brochures, catalogs and marketing materials for healthcare partners, alongside social media content and visuals for the website and blog.",
    outcome:
      "A complete starter identity for the platform — logo, print materials and digital content — consistent from the first partner brochure to the last blog post.",
    cover: {
      src: "/work/zeinteb/cover.svg",
      alt: "Placeholder mark for ZeinTeb on a teal field",
    },
    images: [
      {
        src: "/work/zeinteb/01.svg",
        alt: "Placeholder construction sheet for the ZeinTeb mark",
        caption: "Placeholder — replace with logo construction / identity sheets.",
      },
      {
        src: "/work/zeinteb/02.svg",
        alt: "Placeholder applications sheet for the ZeinTeb identity",
        caption: "Placeholder — replace with brochures and web applications.",
      },
    ],
    accent: "#0E7C86",
  },
];

export const categories = [
  "All",
  "Identity",
  "UI",
  "Campaign",
  "Illustration",
] as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function adjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? projects[i - 1] : undefined,
    next: i < projects.length - 1 ? projects[i + 1] : undefined,
  };
}
