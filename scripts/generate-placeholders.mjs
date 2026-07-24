/**
 * Generates the placeholder artwork in /public.
 * Run with:  node scripts/generate-placeholders.mjs
 *
 * Each project gets three SVGs drawn in a 300×300 mark space:
 *   cover.svg — the mark on its accent field        (1200×900)
 *   01.svg    — a construction / spec sheet         (1200×900)
 *   02.svg    — an applications / colourways sheet  (1200×900)
 *
 * Delete this script once real work replaces the placeholders.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PAPER = "#fafaf8";
const INK = "#151510";
const SKETCH = "#6fa9c6";
const SHEET = "#ecebe4";
const GRAY = "#85847c";

const OUT = join(process.cwd(), "public");

/* ── Marks ─────────────────────────────────────────────────────
   Each mark is drawn in a 300×300 box. `fg` is the mark colour,
   `bg` is used for cut-outs so the mark works on any field.     */

const marks = {
  "halden-coffee": (fg, bg) => `
    <rect x="70" y="60" width="44" height="190" fill="${fg}"/>
    <rect x="186" y="60" width="44" height="190" fill="${fg}"/>
    <path d="M70 160 A80 80 0 0 1 230 160 L186 160 A36 36 0 0 0 114 160 Z" fill="${fg}"/>
  `,
  "ostwind-records": (fg, bg) => `
    <circle cx="150" cy="150" r="118" fill="${fg}"/>
    <rect x="34" y="104" width="222" height="17" fill="${bg}"/>
    <rect x="62" y="142" width="180" height="13" fill="${bg}"/>
    <rect x="90" y="176" width="140" height="9" fill="${bg}"/>
  `,
  "meridian-trail": (fg) => `
    <polygon points="150,58 214,182 86,182" fill="${fg}"/>
    <path d="M46 196 Q104 150 150 180 T254 170" fill="none" stroke="${fg}" stroke-width="11" stroke-linecap="round"/>
    <rect x="46" y="216" width="208" height="11" fill="${fg}"/>
  `,
  "kanal-7": (fg) => `
    <rect x="58" y="58" width="184" height="38" fill="${fg}"/>
    <polygon points="196,96 242,96 132,252 86,252" fill="${fg}"/>
    <circle cx="76" cy="234" r="14" fill="${fg}"/>
  `,
  "volta-cycling": (fg) => `
    <ellipse cx="150" cy="152" rx="112" ry="72" fill="none" stroke="${fg}" stroke-width="15"/>
    <path d="M62 84 L150 238 L238 84" fill="none" stroke="${fg}" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>
  `,
  "formheft-press": (fg, bg) => `
    <rect x="96" y="56" width="46" height="190" fill="${fg}"/>
    <rect x="96" y="56" width="118" height="42" fill="${fg}"/>
    <rect x="96" y="150" width="92" height="34" fill="${fg}"/>
    <polygon points="214,56 214,98 172,56" fill="${bg}"/>
    <polygon points="214,56 214,98 172,56" fill="${fg}" opacity="0.45" transform="translate(-42,0) scale(1)"/>
  `,
  "lumen-optics": (fg) => `
    <circle cx="112" cy="150" r="76" fill="none" stroke="${fg}" stroke-width="14"/>
    <circle cx="188" cy="150" r="76" fill="none" stroke="${fg}" stroke-width="14"/>
    <circle cx="150" cy="150" r="23" fill="${fg}"/>
  `,
  "brauhaus-nord": (fg) => `
    <g opacity="0.35">
      <rect x="48" y="76" width="204" height="12" fill="${fg}"/>
      <rect x="48" y="112" width="204" height="12" fill="${fg}"/>
      <rect x="48" y="148" width="204" height="12" fill="${fg}"/>
      <rect x="48" y="184" width="204" height="12" fill="${fg}"/>
      <rect x="48" y="220" width="204" height="12" fill="${fg}"/>
    </g>
    <rect x="66" y="58" width="36" height="190" fill="${fg}"/>
    <rect x="198" y="58" width="36" height="190" fill="${fg}"/>
    <polygon points="66,58 102,58 234,248 198,248" fill="${fg}"/>
  `,
};

const projects = [
  { slug: "halden-coffee", title: "Halden Coffee Roasters", accent: "#e8a33d" },
  { slug: "ostwind-records", title: "Ostwind Records", accent: "#23409f" },
  { slug: "meridian-trail", title: "Meridian Trail Co.", accent: "#1f7a4d" },
  { slug: "kanal-7", title: "Kanal 7 Film Festival", accent: "#d8432b" },
  { slug: "volta-cycling", title: "Volta Cycling Club", accent: "#6b4fd8" },
  { slug: "formheft-press", title: "Formheft Press", accent: "#8c8578" },
  { slug: "lumen-optics", title: "Lumen Optics", accent: "#0e7c86" },
  { slug: "brauhaus-nord", title: "Brauhaus Nord", accent: "#1a1a16" },
];

/* ── Helpers ─────────────────────────────────────────────────── */

const mono = (size, fill, opacity = 1) =>
  `font-family="ui-monospace, 'SF Mono', Menlo, monospace" font-size="${size}" letter-spacing="2" fill="${fill}" opacity="${opacity}"`;

function svg(w, h, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img">\n${body}\n</svg>\n`;
}

function markAt(slug, fg, bg, x, y, scale) {
  return `<g transform="translate(${x},${y}) scale(${scale})">${marks[slug](fg, bg)}</g>`;
}

function placeholderTag(x, y, fill, anchor = "end") {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" ${mono(15, fill, 0.65)}>PLACEHOLDER — REPLACE WITH YOUR WORK</text>`;
}

function cropMarks(w, h, color) {
  const m = 26;
  const l = 16;
  const s = `stroke="${color}" stroke-width="2" opacity="0.5"`;
  return `
  <g>
    <line x1="${m}" y1="${m + l}" x2="${m}" y2="${m}" ${s}/><line x1="${m}" y1="${m}" x2="${m + l}" y2="${m}" ${s}/>
    <line x1="${w - m - l}" y1="${m}" x2="${w - m}" y2="${m}" ${s}/><line x1="${w - m}" y1="${m}" x2="${w - m}" y2="${m + l}" ${s}/>
    <line x1="${w - m}" y1="${h - m - l}" x2="${w - m}" y2="${h - m}" ${s}/><line x1="${w - m}" y1="${h - m}" x2="${w - m - l}" y2="${h - m}" ${s}/>
    <line x1="${m + l}" y1="${h - m}" x2="${m}" y2="${h - m}" ${s}/><line x1="${m}" y1="${h - m}" x2="${m}" y2="${h - m - l}" ${s}/>
  </g>`;
}

/* ── Sheets ──────────────────────────────────────────────────── */

function coverSheet(p) {
  const W = 1200;
  const H = 900;
  const textFill = "#ffffff";
  return svg(
    W,
    H,
    `
  <rect width="${W}" height="${H}" fill="${p.accent}"/>
  ${markAt(p.slug, "#ffffff", p.accent, 360, 210, 1.6)}
  <text x="48" y="70" ${mono(17, textFill, 0.9)}>${p.title.toUpperCase()}</text>
  ${placeholderTag(W - 48, H - 44, textFill)}
  `
  );
}

function constructionSheet(p) {
  const W = 1200;
  const H = 900;
  const cx = W / 2;
  const cy = H / 2 + 10;
  const s = 2;
  const x = cx - 150 * s;
  const y = cy - 150 * s;
  return svg(
    W,
    H,
    `
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  ${cropMarks(W, H, GRAY)}
  <g stroke="${SKETCH}" stroke-width="1.5">
    <circle cx="${cx}" cy="${cy}" r="315" fill="none" stroke-dasharray="7 7"/>
    <circle cx="${cx}" cy="${cy}" r="210" fill="none" stroke-dasharray="7 7" opacity="0.7"/>
    <line x1="${cx}" y1="60" x2="${cx}" y2="${H - 60}"/>
    <line x1="120" y1="${cy}" x2="${W - 120}" y2="${cy}"/>
    <line x1="${cx - 290}" y1="${cy - 290}" x2="${cx + 290}" y2="${cy + 290}" opacity="0.6"/>
    <line x1="${cx + 290}" y1="${cy - 290}" x2="${cx - 290}" y2="${cy + 290}" opacity="0.6"/>
  </g>
  ${markAt(p.slug, INK, PAPER, x, y, s)}
  <g stroke="${SKETCH}" stroke-width="1.5">
    <line x1="${x}" y1="${y - 24}" x2="${x + 300 * s}" y2="${y - 24}"/>
    <line x1="${x}" y1="${y - 32}" x2="${x}" y2="${y - 16}"/>
    <line x1="${x + 300 * s}" y1="${y - 32}" x2="${x + 300 * s}" y2="${y - 16}"/>
  </g>
  <text x="${cx}" y="${y - 40}" text-anchor="middle" ${mono(15, SKETCH)}>300 U</text>
  <text x="48" y="70" ${mono(17, GRAY)}>${p.title.toUpperCase()} — CONSTRUCTION</text>
  <text x="48" y="${H - 44}" ${mono(15, GRAY, 0.8)}>GRID 300 U · SINGLE MARK · ©2026</text>
  ${placeholderTag(W - 48, H - 44, GRAY)}
  `
  );
}

function applicationSheet(p) {
  const W = 1200;
  const H = 900;
  const m = 60;
  const gap = 36;
  const tw = (W - m * 2 - gap) / 2;
  const th = (H - m * 2 - gap) / 2;
  const tiles = [
    { bg: p.accent, fg: "#ffffff" },
    { bg: INK, fg: "#ffffff" },
    { bg: "#ffffff", fg: p.accent },
    { bg: "#ffffff", fg: INK },
  ];
  const scale = 0.72;
  const body = tiles
    .map((t, i) => {
      const tx = m + (i % 2) * (tw + gap);
      const ty = m + Math.floor(i / 2) * (th + gap);
      const mx = tx + tw / 2 - 150 * scale;
      const my = ty + th / 2 - 150 * scale;
      return `
  <g>
    <rect x="${tx}" y="${ty}" width="${tw}" height="${th}" fill="${t.bg}" stroke="#dddcd4" stroke-width="${t.bg === "#ffffff" ? 2 : 0}"/>
    ${markAt(p.slug, t.fg, t.bg, mx, my, scale)}
  </g>`;
    })
    .join("\n");
  return svg(
    W,
    H,
    `
  <rect width="${W}" height="${H}" fill="${SHEET}"/>
  ${body}
  <text x="${m}" y="${m - 20}" ${mono(16, GRAY)}>${p.title.toUpperCase()} — APPLICATIONS</text>
  ${placeholderTag(W - m, H - 22, GRAY)}
  `
  );
}

function portrait() {
  const W = 900;
  const H = 1125;
  return svg(
    W,
    H,
    `
  <rect width="${W}" height="${H}" fill="${SHEET}"/>
  ${cropMarks(W, H, GRAY)}
  <g stroke="${SKETCH}" stroke-width="2" fill="none">
    <line x1="${W / 2}" y1="80" x2="${W / 2}" y2="${H - 80}" stroke-dasharray="6 8" opacity="0.7"/>
    <circle cx="${W / 2}" cy="430" r="240" stroke-dasharray="6 8" opacity="0.7"/>
  </g>
  <g stroke="${GRAY}" stroke-width="7" fill="none" stroke-linecap="round">
    <circle cx="${W / 2}" cy="420" r="165"/>
    <path d="M170 1010 Q${W / 2} 690 ${W - 170} 1010"/>
  </g>
  <text x="${W / 2}" y="${H - 110}" text-anchor="middle" ${mono(17, GRAY)}>PORTRAIT PLACEHOLDER</text>
  <text x="${W / 2}" y="${H - 80}" text-anchor="middle" ${mono(14, GRAY, 0.75)}>REPLACE /public/about/portrait.svg WITH YOUR PHOTO</text>
  `
  );
}

/* ── Write files ─────────────────────────────────────────────── */

for (const p of projects) {
  const dir = join(OUT, "work", p.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "cover.svg"), coverSheet(p));
  writeFileSync(join(dir, "01.svg"), constructionSheet(p));
  writeFileSync(join(dir, "02.svg"), applicationSheet(p));
  console.log(`✓ ${p.slug}`);
}

mkdirSync(join(OUT, "about"), { recursive: true });
writeFileSync(join(OUT, "about", "portrait.svg"), portrait());
console.log("✓ portrait");

console.log("\nAll placeholder artwork generated in /public.");
