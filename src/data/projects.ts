/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — every case study on the site lives in this file.
 *
 *  To replace a placeholder with real work:
 *  1. Drop your images into  /public/work/<slug>/
 *     (a cover plus as many detail images as you like)
 *  2. Update the entry below: title, category, images, copy.
 *  3. Delete the projects you don't need. The grid, filters and
 *     case study pages all render from this array automatically.
 *
 *  `accent` tints the project card background while the
 *  placeholder art is in use — once you use full-bleed photos
 *  you can ignore it.
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
  category: "Identity" | "Logo" | "Print" | "Editorial";
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
    slug: "halden-coffee",
    title: "Halden Coffee Roasters",
    client: "Halden Coffee Roasters",
    year: "2026",
    category: "Identity",
    sector: "Food & beverage",
    deliverables: ["Wordmark", "Monogram", "Packaging system", "Brand guidelines"],
    summary:
      "A no-nonsense identity for a roastery that treats coffee like craft, not ceremony.",
    brief:
      "Halden opened its roastery in a converted rail depot and needed an identity that felt as honest as its sourcing: direct, industrial, warm. The brand had to work on a kraft bag at arm's length and on a shop sign across the street.",
    approach:
      "The wordmark is built on a compact grid with flat-terminal letterforms that echo stencilled freight lettering. A standalone H monogram — two uprights bridged by a roasting-drum curve — anchors the packaging system, where a single accent colour codes each origin.",
    outcome:
      "The identity launched with the flagship café and three retail blends. Shelf recognition tested strongest in its category, and the monogram now marks everything from cups to the roastery door.",
    cover: {
      src: "/work/halden-coffee/cover.svg",
      alt: "Halden Coffee Roasters monogram on an amber field",
    },
    images: [
      {
        src: "/work/halden-coffee/01.svg",
        alt: "Construction grid of the Halden monogram",
        caption: "Monogram construction — drum curve bridging two uprights.",
      },
      {
        src: "/work/halden-coffee/02.svg",
        alt: "Halden identity applied across packaging",
        caption: "Origin blends coded by a single accent colour.",
      },
    ],
    accent: "#E8A33D",
    featured: true,
  },
  {
    slug: "ostwind-records",
    title: "Ostwind Records",
    client: "Ostwind Records",
    year: "2025",
    category: "Logo",
    sector: "Music",
    deliverables: ["Logo", "Label sleeve system", "Motion sting"],
    summary:
      "A mark for an independent electronic label — a signal, not a decoration.",
    brief:
      "Ostwind releases limited vinyl runs of electronic music from the North Sea coast. The label wanted a mark that could sit small on a record spine, loop as a motion sting, and survive being screen-printed by hand.",
    approach:
      "The logo reduces a windsock to pure geometry: a circle sliced by three tapering bars that read equally as wind, sound waves and grooves on a record. It's drawn on a strict circular grid so it rotates cleanly for the motion sting.",
    outcome:
      "The mark shipped on twelve releases in its first year and became the label's entire sleeve system — one mark, twelve colourways, no typography on the front at all.",
    cover: {
      src: "/work/ostwind-records/cover.svg",
      alt: "Ostwind Records circular mark on a deep blue field",
    },
    images: [
      {
        src: "/work/ostwind-records/01.svg",
        alt: "Circular construction grid of the Ostwind mark",
        caption: "Drawn on a circular grid so the mark rotates cleanly.",
      },
      {
        src: "/work/ostwind-records/02.svg",
        alt: "Ostwind mark across record sleeve colourways",
        caption: "One mark, twelve colourways — the entire sleeve system.",
      },
    ],
    accent: "#23409F",
    featured: true,
  },
  {
    slug: "meridian-trail",
    title: "Meridian Trail Co.",
    client: "Meridian Trail Co.",
    year: "2025",
    category: "Identity",
    sector: "Outdoor",
    deliverables: ["Logo", "Identity system", "Wayfinding icons", "Apparel graphics"],
    summary:
      "An identity system for a trail-building collective, drawn like the maps they work from.",
    brief:
      "Meridian builds and maintains hiking trails across the Taunus. They needed an identity that volunteers would wear with pride and that could extend into wayfinding markers nailed to posts in the forest.",
    approach:
      "The logo stacks a horizon line, a contour curve and a summit triangle into a compact cartographic badge. A companion set of 24 wayfinding icons uses the same 45° geometry, so a trail marker and a t-shirt print are unmistakably one system.",
    outcome:
      "Rolled out across three trail networks, two volunteer apparel drops, and the collective's first annual report. Membership grew by a third in the season after launch.",
    cover: {
      src: "/work/meridian-trail/cover.svg",
      alt: "Meridian Trail Co. badge on a green field",
    },
    images: [
      {
        src: "/work/meridian-trail/01.svg",
        alt: "Geometric construction of the Meridian badge",
        caption: "Horizon, contour, summit — one badge on 45° geometry.",
      },
      {
        src: "/work/meridian-trail/02.svg",
        alt: "Meridian wayfinding icons",
        caption: "24 wayfinding icons cut from the same grid.",
      },
    ],
    accent: "#1F7A4D",
    featured: true,
  },
  {
    slug: "kanal-7",
    title: "Kanal 7 Film Festival",
    client: "Kanal 7 Film Festival",
    year: "2024",
    category: "Print",
    sector: "Culture",
    deliverables: ["Festival identity", "Poster series", "Programme", "Screen idents"],
    summary:
      "A poster-first festival identity where the number seven does all the work.",
    brief:
      "A short-film festival screening across seven venues along the river needed a flexible identity for its fifth edition — bold enough for the street, systematic enough for a 96-page programme.",
    approach:
      "The numeral 7 becomes a projector beam cutting each format diagonally. Everything else — titles, dates, venues — locks to the beam's edge. The system bends across posters, tickets and screen idents without ever redrawing the mark.",
    outcome:
      "The series ran across the city for six weeks. The festival reported its first sold-out opening night, and the posters were shortlisted for a national design annual.",
    cover: {
      src: "/work/kanal-7/cover.svg",
      alt: "Kanal 7 festival poster mark on a red field",
    },
    images: [
      {
        src: "/work/kanal-7/01.svg",
        alt: "Diagonal beam construction of the Kanal 7 system",
        caption: "The 7 as a projector beam — everything locks to its edge.",
      },
      {
        src: "/work/kanal-7/02.svg",
        alt: "Kanal 7 poster series variations",
        caption: "One system, seven venues, six weeks on the street.",
      },
    ],
    accent: "#D8432B",
    featured: true,
  },
  {
    slug: "volta-cycling",
    title: "Volta Cycling Club",
    client: "Volta Cycling Club",
    year: "2023",
    category: "Logo",
    sector: "Sport",
    deliverables: ["Crest", "Kit graphics", "Social templates"],
    summary:
      "A modern crest for a club that rides loops, not lines.",
    brief:
      "An amateur cycling club wanted to drop its clip-art crest for something members would actually want on a jersey — classic club heritage, none of the dust.",
    approach:
      "The crest is a single continuous line: a V that banks into a velodrome oval, drawn at the cadence of a pedal stroke. It holds as an embroidered patch at 30 mm and as a full chest print.",
    outcome:
      "The first kit run sold out to members in a weekend. The crest now leads every group ride photo the club posts — which was, unofficially, the brief.",
    cover: {
      src: "/work/volta-cycling/cover.svg",
      alt: "Volta Cycling Club crest on a violet field",
    },
    images: [
      {
        src: "/work/volta-cycling/01.svg",
        alt: "Single-line construction of the Volta crest",
        caption: "One continuous line — a V banking into a velodrome oval.",
      },
      {
        src: "/work/volta-cycling/02.svg",
        alt: "Volta crest on kit graphics",
        caption: "Holds at 30 mm embroidery and full chest print.",
      },
    ],
    accent: "#6B4FD8",
  },
  {
    slug: "formheft-press",
    title: "Formheft Press",
    client: "Formheft Press",
    year: "2023",
    category: "Editorial",
    sector: "Publishing",
    deliverables: ["Publisher mark", "Spine system", "Typography direction"],
    summary:
      "A quiet mark and a loud spine system for an independent design publisher.",
    brief:
      "Formheft publishes small monographs on design craft. The books needed to disappear individually and dominate collectively — a shelf of them should read as one object.",
    approach:
      "The mark is an F folded from a single sheet, printed small and always in the same position. The real identity is the spine system: title, number and a colour bar at fixed heights, so every new title extends a growing stripe across the shelf.",
    outcome:
      "Nine titles in, bookshops shelve the series face-out as a set. The folded F now signs everything the press prints, down to its invoices.",
    cover: {
      src: "/work/formheft-press/cover.svg",
      alt: "Formheft Press folded-sheet mark on a warm grey field",
    },
    images: [
      {
        src: "/work/formheft-press/01.svg",
        alt: "Folding construction of the Formheft mark",
        caption: "An F folded from a single sheet.",
      },
      {
        src: "/work/formheft-press/02.svg",
        alt: "Formheft spine system across nine titles",
        caption: "Every new title extends the stripe across the shelf.",
      },
    ],
    accent: "#8C8578",
  },
  {
    slug: "lumen-optics",
    title: "Lumen Optics",
    client: "Lumen Optics",
    year: "2022",
    category: "Logo",
    sector: "Retail",
    deliverables: ["Logo", "Storefront signage", "Stationery"],
    summary:
      "A mark for an optician built from the one thing they sell: focus.",
    brief:
      "A second-generation optician's shop wanted to modernise without losing the trust of forty years on the same corner. The new mark had to feel precise, optical and quietly friendly.",
    approach:
      "Two overlapping circles — lens and eye — share a single pupil. The overlap is tuned to the golden section so the mark reads as an abstract L in negative space. Letterforms are rounded to match the lens curvature.",
    outcome:
      "The refresh carried into new storefront signage and frames packaging. Regulars said it looked like the shop had always meant to look — the best review a rebrand can get.",
    cover: {
      src: "/work/lumen-optics/cover.svg",
      alt: "Lumen Optics lens mark on a teal field",
    },
    images: [
      {
        src: "/work/lumen-optics/01.svg",
        alt: "Circle construction of the Lumen mark",
        caption: "Lens and eye sharing a single pupil.",
      },
      {
        src: "/work/lumen-optics/02.svg",
        alt: "Lumen mark on signage and stationery",
        caption: "Rounded letterforms matched to the lens curvature.",
      },
    ],
    accent: "#0E7C86",
  },
  {
    slug: "brauhaus-nord",
    title: "Brauhaus Nord",
    client: "Brauhaus Nord",
    year: "2022",
    category: "Identity",
    sector: "Food & beverage",
    deliverables: ["Wordmark", "Label system", "Coasters & glassware"],
    summary:
      "A label system that lets a small brewery ship a new beer every month without a designer on call.",
    brief:
      "A neighbourhood brewery releasing monthly small batches needed labels the two founders could assemble themselves — a system, not a template they'd outgrow.",
    approach:
      "A condensed wordmark sits in a fixed masthead, like a newspaper for beer. Below it, batch number, style and a duotone pattern slot into rigid fields. The pattern library is drawn from brewing diagrams — kettles, hops, gauges — so no two labels repeat.",
    outcome:
      "Twenty-six batches shipped on the system so far, assembled in-house exactly as intended. The masthead is now on the brewery wall, four metres wide.",
    cover: {
      src: "/work/brauhaus-nord/cover.svg",
      alt: "Brauhaus Nord masthead mark on a black field",
    },
    images: [
      {
        src: "/work/brauhaus-nord/01.svg",
        alt: "Masthead grid of the Brauhaus Nord label system",
        caption: "A fixed masthead — like a newspaper for beer.",
      },
      {
        src: "/work/brauhaus-nord/02.svg",
        alt: "Brauhaus Nord label pattern library",
        caption: "Patterns drawn from brewing diagrams; no two labels repeat.",
      },
    ],
    accent: "#1A1A16",
  },
];

export const categories = ["All", "Identity", "Logo", "Print", "Editorial"] as const;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function adjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  };
}
