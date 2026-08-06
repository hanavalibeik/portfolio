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
  type?: "image" | "video";
  poster?: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: "Identity" | "Packaging" | "Editorial" | "Campaign" | "Illustration";
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
    slug: "shokouh-miyami",
    title: "Shokouh Miyami",
    client: "Iran Stone Co. / Shokouh Miyami",
    year: "2025",
    category: "Identity",
    sector: "Natural stone",
    deliverables: [
      "Logo & visual identity",
      "Stationery",
      "Colour system",
      "Campaign applications",
    ],
    summary:
      "A geometric identity for a natural-stone brand, translating quarry cuts and material strength into a precise visual system.",
    brief:
      "Shokouh Miyami, commissioned by Iran Stone Co., needed an identity that could express the authenticity, strength and natural beauty of stone while remaining clear across stationery and large-format applications.",
    approach:
      "The symbol is constructed from interlocking rectangular cuts, echoing both extracted stone blocks and the measured geometry of fabrication. Deep navy anchors the system, while stone textures and a restrained gold accent connect the identity to the material without turning it into decoration.",
    outcome:
      "A consistent identity system demonstrated across business cards, letterhead and an architectural campaign application, with the mark retaining its structure from small print to outdoor scale.",
    cover: {
      src: "/work/shokouh-miyami/01.webp",
      alt: "Shokouh Miyami natural-stone identity applied to business cards",
    },
    images: [
      {
        src: "/work/shokouh-miyami/02.webp",
        alt: "Shokouh Miyami letterhead on a dark stone surface",
        caption: "Stationery application — restrained colour, structured spacing and stone texture.",
      },
      {
        src: "/work/shokouh-miyami/03.webp",
        alt: "Shokouh Miyami outdoor poster applied to a stone building facade",
        caption: "Campaign application — the identity scaled to an architectural setting.",
      },
    ],
    accent: "#1F2E42",
  },
  {
    slug: "pista-packaging",
    title: "Pista Packaging",
    client: "Pista",
    year: "2025",
    category: "Packaging",
    sector: "Nuts & snacks",
    deliverables: [
      "Packaging design",
      "Digital illustration",
      "Product variants",
      "Presentation mockups",
    ],
    summary:
      "Illustrated nut packaging built as a warm, recognisable family across multiple product variants.",
    brief:
      "Pista needed a packaging direction that made each nut variety immediately appetising and distinct while keeping every pack visibly part of one brand family.",
    approach:
      "Each pack centres the product in an illustrated bowl, surrounded by a warm tonal field that changes by variety. The logo block, Persian product naming, seal and small botanical motif remain fixed, creating a stable hierarchy while colour and ingredient imagery carry the variation.",
    outcome:
      "A coherent five-view packaging presentation that shows how the system can expand across pistachio, almond and mixed-nut products without losing shelf recognition.",
    cover: {
      src: "/work/pista-packaging/01.webp",
      alt: "Pista illustrated almond packaging in a warm brown colourway",
    },
    images: [
      {
        src: "/work/pista-packaging/02.webp",
        alt: "Pista pistachio packaging in a burgundy and blue colourway",
        caption: "Product variant — a consistent structure with a new ingredient palette.",
      },
      {
        src: "/work/pista-packaging/03.webp",
        alt: "Pista mixed-nut packaging in a rust colourway",
      },
      {
        src: "/work/pista-packaging/04.webp",
        alt: "Pista pistachio packaging in a burgundy and green colourway",
      },
      {
        src: "/work/pista-packaging/05.webp",
        alt: "Pista stand-up pouch packaging mockup on a neutral background",
        caption: "Range application — the illustration and hierarchy adapted to a stand-up pouch.",
      },
    ],
    accent: "#681C1F",
  },
  {
    slug: "france-cafe",
    title: "France Café",
    client: "France Pastry 1965",
    year: "2025",
    category: "Identity",
    sector: "Café & pastry",
    deliverables: [
      "Proposed logotype",
      "Custom Persian lettering",
      "Signage studies",
      "Window application",
    ],
    summary:
      "A proposed Persian logotype drawn as one continuous gesture and tested across signage and storefront glass.",
    brief:
      "France Café needed a proposed logotype with enough personality for a long-established pastry brand and enough clarity to work as both a compact mark and environmental signage.",
    approach:
      "The Persian name is drawn as a single flowing line, combining calligraphic movement with a deliberately simplified silhouette. A strict black-and-white system keeps the lettering central and lets the mark shift cleanly between illuminated signage, print and transparent glass.",
    outcome:
      "A focused identity concept that holds its recognisability from a simple lockup to exterior signage and window applications.",
    cover: {
      src: "/work/france-cafe/01.webp",
      alt: "White France Café Persian logotype on a dark background",
    },
    images: [
      {
        src: "/work/france-cafe/02.webp",
        alt: "Black France Café Persian logotype on a light background",
        caption: "Primary lettering study — one continuous custom-drawn gesture.",
      },
      {
        src: "/work/france-cafe/03.webp",
        alt: "France Café logotype applied to an exterior lightbox sign",
      },
      {
        src: "/work/france-cafe/04.webp",
        alt: "France Café logotype applied to a storefront window",
        caption: "Environmental tests — the same mark on an opaque sign and transparent glass.",
      },
    ],
    accent: "#1E1A1C",
  },
  {
    slug: "codejudge-catalog",
    title: "Codejudge Catalog",
    client: "Codejudge",
    year: "2025",
    category: "Editorial",
    sector: "EdTech / interactive assessment",
    deliverables: [
      "Catalog design",
      "Editorial system",
      "Information diagrams",
      "Presentation mockups",
    ],
    summary:
      "A bright editorial system that turns an interactive assessment platform into a clear, scannable story.",
    brief:
      "Codejudge needed a compact catalog to explain its interactive evaluation system, platform journey and key benefits to educators and decision-makers without relying on dense product copy.",
    approach:
      "Cyan and violet accents divide the content into modules, while numbered steps, interface details and friendly illustrations turn technical processes into a visual sequence. Generous white space and consistent callout labels keep the spreads readable even when diagrams and screenshots share the page.",
    outcome:
      "A five-spread presentation system that gives the platform a coherent editorial voice and makes its evaluation flow easier to scan in print or on screen.",
    cover: {
      src: "/work/codejudge-catalog/01.webp",
      alt: "Codejudge catalog shown as a folded editorial mockup",
    },
    images: [
      {
        src: "/work/codejudge-catalog/02.webp",
        alt: "Codejudge catalog spread explaining the interactive evaluation system",
        caption: "Platform overview — interface details connected to an illustrated process map.",
      },
      {
        src: "/work/codejudge-catalog/03.webp",
        alt: "Codejudge catalog spread with numbered instructional steps",
      },
      {
        src: "/work/codejudge-catalog/04.webp",
        alt: "Codejudge catalog spread showing a multi-step workflow diagram",
      },
      {
        src: "/work/codejudge-catalog/05.webp",
        alt: "Codejudge catalog spread with cyan diagrams and character illustration",
        caption: "Editorial system — modular labels, diagrams and illustration in one consistent grid.",
      },
    ],
    accent: "#56C4D4",
  },
  {
    slug: "typographic-voice",
    title: "Typographic Voice",
    client: "Self-initiated",
    year: "2025",
    category: "Editorial",
    sector: "Personal design study",
    deliverables: ["Poster design", "Digital illustration", "Narrative layout", "Motion"],
    summary:
      "A six-second motion poster where a microphone grows a voice and typography becomes the sound.",
    brief:
      "A personal study exploring how layout can move beyond delivering information and become part of the expression itself — with form, image and type carrying one voice.",
    approach:
      "A vintage microphone is fused with an open mouth and drawn in a rough graphic style against a flat yellow field. The line “Amplify Your Words” enters diagonally and expands into supporting copy, turning typographic scale and direction into the visible trace of a voice.",
    outcome:
      "A compact motion study that progresses from silent image to typographic crescendo, demonstrating how a static poster system can gain narrative through timing.",
    cover: {
      src: "/work/typographic-voice/cover.jpg",
      alt: "Illustrated microphone with a mouth and diagonal typography on a yellow poster",
    },
    images: [
      {
        src: "/work/typographic-voice/01.mp4",
        type: "video",
        poster: "/work/typographic-voice/cover.jpg",
        alt: "Motion poster revealing the phrase Amplify Your Words from an illustrated microphone",
        caption: "Motion study — illustration and type building from silence to a full visual voice.",
      },
    ],
    accent: "#F2BA16",
  },
  {
    slug: "a-minutes-silence",
    title: "A Minute's Silence",
    client: "Mohammad Pourriahi",
    year: "2025",
    category: "Campaign",
    sector: "Film",
    deliverables: ["Poster concept", "Art direction", "Typography", "Image compositing"],
    summary:
      "A monochrome film poster that stages the moment truth is revealed through fractured type, silhouettes and beams of light.",
    brief:
      "Create a poster for the film A Minute's Silence, directed by Mohammad Pourriahi, around the central idea: “When the truth is revealed.”",
    approach:
      "The title is broken into stacked, oversized words that double as the poster's architecture. Small human figures move between the letters while triangular beams cut through the darkness, turning revelation into a literal visual event within the typography.",
    outcome:
      "A single-image theatrical poster with a tense, investigative atmosphere and a title that functions simultaneously as message, setting and composition.",
    cover: {
      src: "/work/a-minutes-silence/01.webp",
      alt: "A Minute's Silence film poster with fragmented type, silhouettes and light beams",
    },
    images: [],
    accent: "#231F20",
  },
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

export const categories = [
  "All",
  "Identity",
  "Packaging",
  "Editorial",
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
