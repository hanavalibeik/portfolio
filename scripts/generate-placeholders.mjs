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
  "master-pipe": (fg) => `
    <path d="M78 252 V132 A72 72 0 0 1 222 132 V252" fill="none" stroke="${fg}" stroke-width="34"/>
    <rect x="52" y="216" width="52" height="15" fill="${fg}"/>
    <rect x="196" y="216" width="52" height="15" fill="${fg}"/>
  `,
  "tarazo": (fg) => `
    <rect x="141" y="58" width="18" height="152" fill="${fg}"/>
    <rect x="50" y="74" width="200" height="15" fill="${fg}"/>
    <circle cx="68" cy="142" r="33" fill="none" stroke="${fg}" stroke-width="12"/>
    <circle cx="232" cy="142" r="33" fill="none" stroke="${fg}" stroke-width="12"/>
    <rect x="96" y="222" width="108" height="16" fill="${fg}"/>
  `,
  "hamkelasi-system": (fg, bg) => `
    <rect x="56" y="56" width="88" height="88" rx="20" fill="none" stroke="${fg}" stroke-width="13"/>
    <rect x="156" y="56" width="88" height="88" rx="20" fill="none" stroke="${fg}" stroke-width="13"/>
    <rect x="56" y="156" width="88" height="88" rx="20" fill="none" stroke="${fg}" stroke-width="13"/>
    <rect x="156" y="156" width="88" height="88" rx="20" fill="${fg}"/>
    <circle cx="200" cy="200" r="20" fill="${bg}"/>
  `,
  "mizan-gostar": (fg) => `
    <path d="M108 92 L52 150 L108 208" fill="none" stroke="${fg}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M192 92 L248 150 L192 208" fill="none" stroke="${fg}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="168" y1="84" x2="132" y2="216" stroke="${fg}" stroke-width="16" stroke-linecap="round"/>
  `,
  "chandmahameh": (fg, bg) => `
    <circle cx="88" cy="72" r="26" fill="${fg}"/>
    <circle cx="212" cy="72" r="26" fill="${fg}"/>
    <circle cx="150" cy="160" r="92" fill="${fg}"/>
    <circle cx="118" cy="142" r="13" fill="${bg}"/>
    <circle cx="182" cy="142" r="13" fill="${bg}"/>
    <path d="M112 186 Q150 220 188 186" fill="none" stroke="${bg}" stroke-width="13" stroke-linecap="round"/>
  `,
  "zeinteb": (fg, bg) => `
    <path d="M150 262 C150 262 62 180 62 120 A88 88 0 0 1 238 120 C238 180 150 262 150 262 Z" fill="${fg}"/>
    <rect x="136" y="78" width="28" height="84" fill="${bg}"/>
    <rect x="108" y="106" width="84" height="28" fill="${bg}"/>
  `,
};

const projects = [
  { slug: "master-pipe", title: "Master Pipe", accent: "#1b4f8a" },
  { slug: "tarazo", title: "Tarazo", accent: "#3b2f8f" },
  { slug: "hamkelasi-system", title: "Hamkelasi System", accent: "#1f7a4d" },
  { slug: "mizan-gostar", title: "Mizan Gostar", accent: "#d8622b" },
  { slug: "chandmahameh", title: "ChandMahameh", accent: "#e8a33d" },
  { slug: "zeinteb", title: "ZeinTeb", accent: "#0e7c86" },
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
