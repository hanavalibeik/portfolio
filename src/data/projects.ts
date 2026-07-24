/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — every case study on the site lives in this file.
 *
 *  The images are Hana's real work. The written copy is a first
 *  draft written from the visible design decisions — REVIEW AND
 *  REWRITE IT IN YOUR OWN VOICE, especially the brief/outcome,
 *  and correct anything about the client or the results.
 *
 *  To add a project: create /public/work/<slug>/, drop the images
 *  in, and copy one of the entries below.
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
  category: "Identity" | "Campaign" | "Illustration";
  sector: string;
  deliverables: string[];
  summary: string;
  brief: string;
  approach: string;
  outcome: string;
  cover: ProjectImage;
  images: ProjectImage[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "sepidar",
    title: "Sepidar",
    client: "Sepidar",
    year: "2024",
    category: "Identity",
    sector: "Innovation centre",
    deliverables: ["Logotype", "Persian lettering", "Signage", "Brand colour"],
    summary:
      "A hand-drawn Persian logotype paired with a geometric container mark — built for glass, walls and screens.",
    brief:
      "Sepidar needed an identity that felt contemporary without abandoning Persian letterforms — something that would read as confidently on a storefront window as it does at thumbnail size.",
    approach:
      "The name is drawn as custom Persian lettering with a single sweeping brush stroke carrying the eye right to left, then locked into a rounded rectangular frame that acts as a container mark. A single yellow field inside the frame gives the identity one memorable colour cue, so the mark stays recognisable even when the lettering is too small to read.",
    outcome:
      "A flexible identity that works as vinyl signage on glass, where the frame reads as an aperture onto the space behind it, and reduces cleanly to an app-sized mark.",
    cover: {
      src: "/work/sepidar/cover.jpg",
      alt: "Sepidar logotype applied as white vinyl signage on a storefront window",
    },
    images: [
      {
        src: "/work/sepidar/01.jpg",
        alt: "Sepidar identity applied to storefront glass, reflecting the street",
        caption: "Signage application — custom Persian lettering with the container mark.",
      },
    ],
    accent: "#F5C518",
  },
  {
    slug: "recke",
    title: "RECKE",
    client: "RECKE",
    year: "2024",
    category: "Campaign",
    sector: "Home appliances",
    deliverables: [
      "Advertising key visual",
      "Photo retouching",
      "Bilingual lockup",
      "Campaign line",
    ],
    summary:
      "An advertising key visual where the steam itself becomes the message — retouched and composited into a single hero image.",
    brief:
      "RECKE sells multicookers in a category where every competitor photographs the same product on the same white background. The campaign needed one image that sold the food rather than the appliance.",
    approach:
      "The product sits low in a dark, warm kitchen scene, and the steam rising from it is shaped — through retouching and compositing — into a chef's gesture. The eye reads the gesture before it reads the product, which does the persuading before any copy is involved. The brand lockup and Persian campaign line sit in the calm right-hand area of the frame.",
    outcome:
      "A key visual that carries the campaign across print and digital placements, with the steam gesture available as a repeatable device for future executions.",
    cover: {
      src: "/work/recke/cover.jpg",
      alt: "RECKE advertising key visual: steam from a multicooker forming a chef's gesture",
    },
    images: [
      {
        src: "/work/recke/01.jpg",
        alt: "Full RECKE campaign poster with bilingual lockup and Persian campaign line",
        caption: "Campaign key visual — composited steam, retouched product, bilingual lockup.",
      },
    ],
    accent: "#1A1A16",
  },
  {
    slug: "bennebon",
    title: "BenneBon",
    client: "BenneBon",
    year: "2023",
    category: "Identity",
    sector: "Organic sesame oil",
    deliverables: ["Logotype", "Bilingual identity", "Custom Latin type", "Packaging direction"],
    summary:
      "A bilingual identity for organic sesame oil, where Persian letterforms are drawn as a molecular chain with a single golden drop.",
    brief:
      "An organic sesame oil producer needed a mark that would sit on shelf beside industrial brands and read as both natural and precise — and that had to work in Persian and Latin alike.",
    approach:
      "The Persian name is constructed from straight strokes and hard angles so it reads as a chemical chain — a nod to purity and composition — with the counters left open so the lettering breathes. One golden drop is the only colour in the system, falling exactly where the eye lands. The Latin wordmark is drawn to match the same angular skeleton, so the two scripts feel like one voice rather than a translation.",
    outcome:
      "A dark, premium identity with a single ownable colour accent, designed to hold up on bottle labels where surface area is small and shelf competition is loud.",
    cover: {
      src: "/work/bennebon/cover.jpg",
      alt: "BenneBon logotype: angular Persian lettering with a golden oil drop, on dark brown",
    },
    images: [
      {
        src: "/work/bennebon/01.jpg",
        alt: "BenneBon bilingual logo lockup with the descriptor 'organic sesame oil'",
        caption: "Primary lockup — Persian mark, matched Latin wordmark, single colour accent.",
      },
    ],
    accent: "#2F1D0C",
  },
  {
    slug: "shiraz-day",
    title: "Shiraz Day",
    client: "Self-initiated",
    year: "2024",
    category: "Illustration",
    sector: "Cultural / personal project",
    deliverables: ["Line illustration", "Persian typography", "Poster"],
    summary:
      "A single-weight line drawing of Shiraz — cypresses, mountains and Persian type inside one octagonal frame.",
    brief:
      "A self-initiated piece for Shiraz Day: capture a city with a thousand visual clichés attached to it without reaching for any of them.",
    approach:
      "Everything is drawn at one consistent line weight — cypress trees, the mountain ridge, the birds, the lettering — so illustration and typography read as a single continuous system rather than type placed over art. The octagonal frame borrows from Persian architectural geometry, with small notches at the corners echoing tilework, and the Persian lettering is integrated into the landscape as terrain rather than sitting on top of it.",
    outcome:
      "A poster that works flat, at any scale, and in a single colour — the kind of restraint that makes cultural imagery travel.",
    cover: {
      src: "/work/shiraz-day/cover.jpg",
      alt: "Line illustration of Shiraz with cypress trees and mountains inside an octagonal frame",
    },
    images: [
      {
        src: "/work/shiraz-day/01.jpg",
        alt: "Full Shiraz Day poster: single-weight line illustration with integrated Persian typography",
        caption: "Self-initiated poster — one line weight across illustration and lettering.",
      },
    ],
    accent: "#FFCC29",
  },
  {
    slug: "avicenna-tour",
    title: "Avicenna Tour",
    client: "Avicenna Tour",
    year: "2023",
    category: "Identity",
    sector: "Travel",
    deliverables: ["Logo mark", "Bilingual lockup", "Colour system"],
    summary:
      "A monogram built from architectural forms, locked to a two-weight bilingual wordmark.",
    brief:
      "A travel brand named after Ibn Sina needed a mark with a sense of place and passage — recognisable at small sizes on tickets, apps and stamps.",
    approach:
      "The mark is drawn as an interlocking form that reads as both an archway and a route turning back on itself — solid and outlined shapes overlapping so the eye completes the figure. The wordmark sets the brand name in warm amber against the mark's cooler blues, using weight rather than size to separate 'Avicenna' from 'tour'.",
    outcome:
      "A compact identity with strong figure-ground contrast, designed to survive being printed small and monochrome.",
    cover: {
      src: "/work/avicenna-tour/cover.jpg",
      alt: "Avicenna Tour logo: interlocking blue archway monogram with amber wordmark on teal",
    },
    images: [
      {
        src: "/work/avicenna-tour/01.jpg",
        alt: "Avicenna Tour primary lockup on the brand's deep teal field",
        caption: "Primary lockup — overlapping mark, two-weight bilingual wordmark.",
      },
    ],
    accent: "#01475B",
  },
  {
    slug: "mizan-gostar",
    title: "Mizan Gostar",
    client: "Mizan Gostar",
    year: "2020 – 2023",
    category: "Identity",
    sector: "Business development & IT training",
    deliverables: [
      "Brand identity & brand book",
      "Icon system",
      "Print & exhibition materials",
      "UI for homepage & landing pages",
    ],
    summary:
      "Identity, icon system and marketing collateral for a business development agency — and a UI redesign that contributed to ~20% more engagement among programming learners.",
    brief:
      "Mizan Gostar runs five service departments under one roof — legal, financial, graphic, software and human resources — plus a programming school. The brand had to hold all of it together without looking like five different companies.",
    approach:
      "I led the development of the brand identity and brand book, then built an icon system so each department could be signalled at a glance. Marketing collateral uses one architectural curve as the recurring structural device, a data-like motif for the technical side of the business, and a tight blue-and-yellow palette that keeps every department visibly part of the same family. The same system carried into UI for the homepage and landing pages, and into environmental graphics for offices and exhibitions.",
    outcome:
      "A brand that scales from a single poster to a full brand book, with the UI redesign contributing to a ~20% increase in engagement among programming learners.",
    cover: {
      src: "/work/mizan-gostar/cover.jpg",
      alt: "Mizan Gostar service poster in blue and yellow with departmental icon system",
    },
    images: [
      {
        src: "/work/mizan-gostar/01.jpg",
        alt: "Mizan Gostar poster showing the five service departments with their icons",
        caption: "Service poster — icon system, architectural curve, brand palette.",
      },
    ],
    accent: "#2E3192",
  },
];

export const categories = ["All", "Identity", "Campaign", "Illustration"] as const;

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
