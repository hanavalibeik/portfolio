/**
 * ─────────────────────────────────────────────────────────────
 *  SITE IDENTITY — Hana Valibeik
 *  Edit this file to update contact details, clients, services.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** Shown in the header, hero wordmark and footer. */
  name: "Valibeik",
  /** Full name, used in longer copy and metadata. */
  fullName: "Hana Valibeik",
  /** One-line role, appears under the wordmark and in metadata. */
  role: "Senior Graphic Designer — Brand & UI",
  /** Short positioning line for the hero. */
  tagline:
    "I help brands stand out with custom logo & identity design — 7+ years in branding, UI and illustration, building clear, consistent, scalable visual systems.",
  /** Where you are + how you work. */
  location: "Muscat, Oman",
  workingNote: "Working remotely across industries and time zones",
  /** Availability line shown on the home page and contact page. */
  availability: "Open to new projects, roles and collaborations",
  /** Contact */
  email: "hanavalibeik@gmail.com",
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
  whatsapp: "989138064515",
  /** Instagram integration. Add post permalinks to embed them on the home page,
   *  e.g. "https://www.instagram.com/p/XXXXXXXXX/". Empty = link band only. */
  instagram: {
    handle: "hanavalibeik_",
    url: "https://www.instagram.com/hanavalibeik_/",
    posts: [] as string[],
  },
  /** Path to the downloadable CV in /public. Set to "" to hide the buttons. */
  cv: "/Hana-Valibeik-CV.pdf",
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
  /** Used for metadata; set to your production URL after deploying. */
  url: "https://portfolio-seven-nu-okzzzi5l4c.vercel.app",
};
