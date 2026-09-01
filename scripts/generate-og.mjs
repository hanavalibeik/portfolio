import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");

const fontConfigPath = path.join(scriptDir, ".og-fontconfig.xml");
const archivoDir = path.join(
  rootDir,
  "node_modules/@fontsource-variable/archivo/files",
);

await fs.writeFile(
  fontConfigPath,
  `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <include ignore_missing="yes">/etc/fonts/fonts.conf</include>
  <dir>${archivoDir}</dir>
  <cachedir>${path.join(rootDir, ".next/cache/fontconfig")}</cachedir>
</fontconfig>`,
);
process.env.FONTCONFIG_FILE = fontConfigPath;

const { default: sharp } = await import("sharp");

const rasterToPngDataUri = async (relativePath) => {
  const content = await sharp(path.join(rootDir, relativePath)).png().toBuffer();
  return `data:image/png;base64,${content.toString("base64")}`;
};

const portrait = await rasterToPngDataUri("public/about/portrait.webp");
const glow = await rasterToPngDataUri("public/hero/landing-glow.webp");
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse">
      <path d="M52 0H0V52" fill="none" stroke="#f1f1f1" stroke-opacity="0.13" stroke-width="1"/>
    </pattern>
    <clipPath id="portrait-clip">
      <path d="M0 203.43 355.89 0v300.35c0 209.38-4.39 366.92-194.01 466.28L0 844V203.43Z"
        transform="translate(846 -3) scale(.735)"/>
    </clipPath>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000"/>
      <stop offset=".72" stop-color="#000" stop-opacity=".72"/>
      <stop offset="1" stop-color="#000" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="#000"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <image href="${glow}" x="590" y="-12" width="650" height="640" opacity=".82"
    preserveAspectRatio="xMidYMid slice"/>
  <path d="M684 456H1141V516" fill="none" stroke="#f1f1f1" stroke-opacity=".55" stroke-width="1"/>

  <image href="${portrait}" x="773" y="-8" width="451" height="646"
    preserveAspectRatio="xMidYMid slice" clip-path="url(#portrait-clip)"/>

  <g fill="#f1f1f1">
    <line x1="1074" y1="38" x2="1142" y2="99" stroke="#f1f1f1" stroke-width="2"/>
    <circle cx="1073" cy="37" r="7"/>
    <circle cx="1143" cy="100" r="7"/>
    <rect x="1103" y="64" width="13" height="13" transform="rotate(-5 1109.5 70.5)"/>
  </g>

  <rect x="0" y="0" width="800" height="630" fill="url(#fade)"/>

  <g transform="translate(66 58) scale(.36)">
    <circle cx="100" cy="100" r="98.98" fill="#000"/>
    <path fill="#fff" d="m96.89 137.89-26.06 14.9V89.03c0-15.33.32-26.87 14.21-34.14l11.85-5.67v88.68Z"/>
    <path fill="#bcbec0" d="m77.34 104.5 19.56-11.35h14.49c12.59 0 22.8 10.21 22.8 22.8l-.04 21.95-25.94 14.88-.12-.07.13-25.05c0-14.56-10.72-23.03-23.63-23.13-2.22-.05-4.68 0-7.24-.03Z"/>
    <path fill="#fff" fill-opacity=".3" d="m96.89 93.15-19.55 11.35c2.57.04 5.02-.02 7.24.03 4.49.04 8.7 1.11 12.31 3.08V93.15Z"/>
  </g>
  <text x="164" y="92" fill="#255ede" font-family="Archivo SemiBold, Arial, sans-serif"
    font-size="18" font-weight="700" letter-spacing="4">PORTFOLIO / 2026</text>

  <text x="66" y="257" fill="#f1f1f1" font-family="Archivo SemiBold, Arial, sans-serif"
    font-size="70" font-weight="640" letter-spacing="-4">Hi, I’m</text>
  <text x="62" y="350" fill="#f1f1f1" font-family="Archivo SemiBold, Arial, sans-serif"
    font-size="104" font-weight="820" letter-spacing="-7">Hana Vali</text>

  <circle cx="75" cy="405" r="6" fill="#255ede"/>
  <text x="96" y="414" fill="#d0d0d0" font-family="Archivo SemiBold, Arial, sans-serif"
    font-size="23" font-weight="520" letter-spacing="1.1">GRAPHIC DESIGN &amp; ILLUSTRATION</text>

  <text x="67" y="553" fill="#f1f1f1" fill-opacity=".64"
    font-family="Archivo SemiBold, Arial, sans-serif" font-size="16" font-weight="520"
    letter-spacing="2.6">BRAND IDENTITY · UI · ART DIRECTION</text>
  <rect x="67" y="582" width="154" height="3" rx="1.5" fill="#255ede"/>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(path.join(rootDir, "public/og.png"));

await fs.rm(fontConfigPath, { force: true });
