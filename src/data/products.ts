/**
 * ─────────────────────────────────────────────────────────────
 *  PRODUCTS — printed pieces, ordered through Instagram DM.
 *
 *  Source: https://www.instagram.com/p/DIOuyjfpFbd/ (9 Apr 2025)
 *
 *  There is no cart, no checkout and no payment gateway. Every
 *  order button opens a direct message. Adding a product means
 *  adding an entry here and dropping images into
 *  /public/products/<slug>/ — nothing else.
 * ─────────────────────────────────────────────────────────────
 */

export type ProductImage = {
  src: string;
  alt: string;
  caption?: string;
  /** True while waiting on real photography — renders a visible "photo coming soon" state. */
  placeholder?: boolean;
};

export type Product = {
  slug: string;
  /** English display name. */
  name: string;
  /** Persian display name — always rendered with lang="fa" dir="rtl". */
  nameFa: string;
  /** Collection id, matches an entry in `collections`. */
  collection: string;
  /** Printed dimensions, or null where the object has no meaningful flat size. */
  size: string | null;
  material: string;
  /** Price in toman, as a number, for structured data and sorting. */
  priceToman: number;
  /** Price formatted for display, Persian digits and separators. */
  priceLabel: string;
  blurb: string;
  images: ProductImage[];
  available: boolean;
};

export type Collection = {
  id: string;
  name: string;
  nameFa: string;
  intro: string;
  /** The Instagram post this collection was announced in. */
  sourcePost: string;
  /** Ordering and shipping terms, shown once per collection. */
  notes: string[];
  /** When the prices below were last confirmed. */
  pricesUpdated: string;
};

export const collections: Collection[] = [
  {
    id: "shiraz",
    name: "Shiraz Collection",
    nameFa: "مجموعه شیراز",
    intro:
      "The first run of printed pieces drawn from my illustration work — line drawings of Shiraz, printed on things you can use.",
    sourcePost: "https://www.instagram.com/p/DIOuyjfpFbd/",
    notes: [
      "Order any quantity",
      "Ships anywhere in Iran",
      "Shipping charged separately",
    ],
    pricesUpdated: "April 2025",
  },
];

/*
 * TODO(owner): the source post writes prices as "۹۸ تومان", "۲۳۰ تومان" and so on.
 * Read literally that is 98 toman, so these are almost certainly the common
 * shorthand for thousands. They are stored below as thousands. Confirm before
 * publishing — and refresh them, since the post is from April 2025.
 */
export const products: Product[] = [
  {
    slug: "shiraz-postcard",
    name: "Postcard",
    nameFa: "کارت‌پستال",
    collection: "shiraz",
    size: "15 × 21 cm",
    material: "Printed card", // TODO(owner): confirm stock and weight.
    priceToman: 98000,
    priceLabel: "۹۸٬۰۰۰ تومان",
    blurb: "A postcard from the Shiraz line drawings.",
    images: [
      {
        src: "/products/shiraz-postcard/01.webp",
        alt: "The Shiraz Collection line drawing as printed on the postcard — a cypress, stepped clouds and Persian brick motifs in black on off-white",
        // TODO(owner): swap for a photograph of the printed card in hand when
        // one exists. This is the artwork itself, laid flat on paper white.
      },
    ],
    available: true,
  },
  {
    slug: "shiraz-mug",
    name: "Ceramic mug",
    nameFa: "ماگ سرامیکی",
    collection: "shiraz",
    size: null, // TODO(owner): capacity?
    material: "Ceramic",
    priceToman: 230000,
    priceLabel: "۲۳۰٬۰۰۰ تومان",
    blurb: "A ceramic mug printed with the Shiraz line drawings.",
    images: [
      {
        src: "/products/shiraz-mug/01.webp",
        alt: "The Shiraz Collection mug in yellow and in white, resting on a sunlit windowsill",
      },
      {
        src: "/products/shiraz-mug/02.webp",
        alt: "The white Shiraz Collection mug photographed straight on, showing the full wrap of the line drawing",
      },
    ],
    available: true,
  },
  {
    slug: "shiraz-tote",
    name: "Calico tote bag",
    nameFa: "کیف پارچه‌ای متقال",
    collection: "shiraz",
    size: null, // TODO(owner): finished dimensions?
    material: "Calico cotton",
    priceToman: 320000,
    priceLabel: "۳۲۰٬۰۰۰ تومان",
    blurb: "A cotton calico tote printed with the Shiraz line drawings.",
    images: [
      {
        src: "/products/shiraz-tote/01.webp",
        alt: "A stack of folded yellow Shiraz Collection totes, the line drawing printed across the top fold",
      },
    ],
    available: true,
  },
  {
    slug: "shiraz-magnet",
    name: "Magnet",
    nameFa: "مگنت",
    collection: "shiraz",
    size: "9 × 9 cm",
    material: "Printed magnet",
    priceToman: 83000,
    priceLabel: "۸۳٬۰۰۰ تومان",
    blurb: "A square fridge magnet from the Shiraz line drawings.",
    images: [
      {
        src: "/products/shiraz-magnet/01.webp",
        alt: "Three square Shiraz Collection magnets in white and yellow, one turned over to show its magnetic back",
      },
    ],
    available: true,
  },
  {
    slug: "shiraz-frame",
    name: "Decorative frame",
    nameFa: "قاب دکوراتیو",
    collection: "shiraz",
    size: "20 × 30 cm",
    material: "Framed print", // TODO(owner): frame material and finish?
    priceToman: 350000,
    priceLabel: "۳۵۰٬۰۰۰ تومان",
    blurb: "A framed print from the Shiraz line drawings, ready to hang.",
    images: [
      {
        src: "/products/shiraz-frame/01.webp",
        alt: "The Shiraz Collection print in a slim black frame, held upright on a white plinth",
      },
    ],
    available: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCollection(id: string): Collection | undefined {
  return collections.find((c) => c.id === id);
}

export function productsInCollection(id: string): Product[] {
  return products.filter((p) => p.collection === id);
}

export function adjacentProducts(slug: string): {
  prev?: Product;
  next?: Product;
} {
  const i = products.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? products[i - 1] : undefined,
    next: i < products.length - 1 ? products[i + 1] : undefined,
  };
}
