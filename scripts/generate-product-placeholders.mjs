/**
 * Generates clearly-marked placeholder artwork for products that don't have
 * real photography yet, so the shop never renders a broken <img>.
 *
 *   node scripts/generate-product-placeholders.mjs
 *
 * These are meant to be obvious. Replace them with real photos and set
 * `placeholder: false` (or drop the flag) in src/data/products.ts.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const INK = "#f4c13c";
const PAPER = "#0b0b0b";

const items = [
  { slug: "shiraz-postcard", name: "Postcard", fa: "کارت‌پستال", size: "15 × 21 cm" },
  { slug: "shiraz-mug", name: "Ceramic mug", fa: "ماگ سرامیکی", size: "Ceramic" },
  { slug: "shiraz-tote", name: "Calico tote bag", fa: "کیف پارچه‌ای متقال", size: "Calico cotton" },
  { slug: "shiraz-magnet", name: "Magnet", fa: "مگنت", size: "9 × 9 cm" },
  { slug: "shiraz-frame", name: "Decorative frame", fa: "قاب دکوراتیو", size: "20 × 30 cm" },
];

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svg({ name, fa, size }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="1200" height="1200" role="img">
  <rect width="1200" height="1200" fill="${PAPER}"/>
  <g stroke="${INK}" stroke-width="2" opacity="0.35" fill="none">
    <line x1="0" y1="600" x2="1200" y2="600"/>
    <line x1="600" y1="0" x2="600" y2="1200"/>
    <circle cx="600" cy="600" r="300" stroke-dasharray="12 10"/>
  </g>
  <rect x="60" y="60" width="1080" height="1080" fill="none" stroke="${INK}" stroke-width="3" opacity="0.6"/>
  <text x="600" y="545" text-anchor="middle" fill="${INK}"
        font-family="Archivo, Helvetica, Arial, sans-serif" font-size="76" font-weight="700">${esc(name)}</text>
  <text x="600" y="635" text-anchor="middle" fill="#f7f7f5" opacity="0.75"
        font-family="Vazirmatn, Tahoma, sans-serif" font-size="56" direction="rtl">${esc(fa)}</text>
  <text x="600" y="720" text-anchor="middle" fill="#f7f7f5" opacity="0.55"
        font-family="ui-monospace, Menlo, monospace" font-size="38" letter-spacing="4">${esc(size)}</text>
  <text x="600" y="1085" text-anchor="middle" fill="${INK}"
        font-family="ui-monospace, Menlo, monospace" font-size="34" letter-spacing="10">PLACEHOLDER</text>
</svg>
`;
}

for (const item of items) {
  const dir = resolve(root, "public/products", item.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "01.svg"), svg(item), "utf8");
  console.log(`wrote public/products/${item.slug}/01.svg`);
}

console.log(`\n${items.length} placeholders generated. Replace with real photos.`);
