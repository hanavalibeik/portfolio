/**
 * ─────────────────────────────────────────────────────────────
 *  SITE IDENTITY — Hana Vali
 *  Edit this file to update contact details, clients, services.
 * ─────────────────────────────────────────────────────────────
 */

const productionUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hanavalibeik.github.io/portfolio";

const email = "hanavalibeik@gmail.com";
const whatsapp = "989138064515";
const portfolioPdf = "/Hana-Valibeik-Portfolio-2026.pdf";

export type LinkGroupId = "onsite" | "contact" | "elsewhere";

type LinksPageItem = {
  label: string;
  href: string;
  meta?: string;
};

type LinksPageGroup = {
  id: LinkGroupId;
  label: string;
  items: LinksPageItem[];
};

const linksPageGroups: LinksPageGroup[] = [
  {
    id: "onsite",
    label: "Portfolio",
    items: [
      { label: "Work", href: "/work/" },
      { label: "Shiraz Collection", href: "/products/" },
      { label: "About", href: "/about/" },
    ],
  },
  {
    id: "contact",
    label: "Direct contact",
    items: [
      { label: "WhatsApp", href: `https://wa.me/${whatsapp}` },
      { label: "Telegram", href: "https://t.me/hanavalibeik" },
      { label: "Email", href: `mailto:${email}` },
    ],
  },
  {
    id: "elsewhere",
    label: "Elsewhere",
    items: [
      { label: "Behance", href: "https://www.behance.net/hanavalibeik" },
      { label: "Dribbble", href: "https://dribbble.com/hanavalibeik" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hana-valibeik-graphic-designer-504180187",
      },
      { label: "Pinterest", href: "https://pin.it/5EvIWOBWQ" },
      { label: "Threads", href: "https://www.threads.net/@hanavalibeik" },
      { label: "Portfolio PDF", href: portfolioPdf, meta: "7.4 MB" },
    ],
  },
];

export const site = {
  /** Shown in the header, hero wordmark and footer. */
  name: "Vali",
  /** Full name, used in longer copy and metadata. */
  fullName: "Hana Vali",
  /** One-line role, appears under the wordmark and in metadata. */
  role: "Senior Graphic Designer — Brand & UI",
  /** Short positioning line for the hero. */
  tagline:
    "I help brands stand out with custom logo & identity design — 7+ years in branding, UI and illustration, building clear, consistent, scalable visual systems.",
  /** How you work. */
  workingNote: "Working remotely across industries and time zones",
  /** Availability line shown on the home page and contact page. */
  availability: "Open to new projects, roles and collaborations",
  /** Contact */
  email,
  phone: "+98 913 806 4515",
  /** Social links — set url to "" to hide one. */
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/hanavalibeik_/" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/hana-valibeik-graphic-designer-504180187",
    },
    { label: "Dribbble", url: "https://dribbble.com/hanavalibeik" },
  ],
  /** Secondary links, shown on the contact page only. */
  elsewhere: [
    { label: "Threads", url: "https://www.threads.net/@hanavalibeik" },
    { label: "Pinterest", url: "https://pin.it/5EvIWOBWQ" },
    { label: "Instagram — personal", url: "https://www.instagram.com/hanavalibeyk/" },
    { label: "Linktree", url: "https://linktr.ee/hanavalibeik" },
  ],
  /** WhatsApp — the fastest reply channel for regional clients.
   *  Digits only, no + or spaces. Set to "" to hide. */
  whatsapp,
  /** Instagram integration. Add post permalinks to embed them on the home page,
   *  e.g. "https://www.instagram.com/p/XXXXXXXXX/". Empty = link band only. */
  instagram: {
    handle: "hanavalibeik_",
    url: "https://www.instagram.com/hanavalibeik_/",
    posts: [] as string[],
    /** Hand-curated fallback, used whenever the synced feed is empty (the Meta
     *  token expires periodically). Drop images into /public/instagram/ and add
     *  an entry here — the home page will show these instead of an empty state. */
    curated: [] as {
      id: string;
      caption: string;
      permalink: string;
      timestamp: string;
      mediaType: string;
      image: string | null;
    }[],
  },
  /** Path to the downloadable CV in /public. Set to "" to hide the buttons. */
  cv: "/Hana-Valibeik-CV.pdf",
  /** Path to the downloadable PDF portfolio in /public. */
  portfolioPdf,
  /** Compact mobile launcher used as the Instagram bio destination. */
  linksPage: {
    route: "/links/",
    homeHref: "/",
    ariaLabel: "Hana Vali links",
    groups: linksPageGroups,
  },
  /** Companies & teams, shown on the about page / home strip. */
  clients: [
    "Master Pipe",
    "Tarazo",
    "Hamkelasi System",
    "Mizan Gostar",
    "ChandMahameh",
    "ZeinTeb",
    "RECKE",
    "Sepidar",
    "BenneBon",
    "The Natural Stone Co.",
    "Avicenna Tour",
    "Codejudge",
  ],
  /** Services listed on the about page (from CV skills). */
  services: [
    "Branding & visual identity",
    "UI design",
    "Typography & layout",
    "Packaging",
    "Digital illustration",
    "Social media campaigns & advertising",
    "Image editing & retouching",
    "Environmental graphics",
  ],
  /** Awards & certificates. */
  recognition: [
    {
      label: "Image of the Book festival, Russia",
      detail: "Selected work, 2021",
    },
    { label: "Product design certificate", detail: "Setare Aval company" },
    { label: "Alternative Farsi type", detail: "Metaphore studio" },
  ],
  /** Education, shown on the about page. */
  education: [
    { degree: "M.A. in Illustration", school: "Tehran University of Art" },
    { degree: "B.A. in Graphic Design", school: "Tehran University of Art" },
  ],
  /** Languages */
  languages: ["English", "Persian"],
  /** Used for metadata; resolved from the current GitHub Pages repository. */
  url: productionUrl,
};
