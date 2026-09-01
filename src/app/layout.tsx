import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/spline-sans-mono";
import "@fontsource-variable/vazirmatn";
import "./globals.css";
import "./services-motion.css";
import "./hero-frame-fix.css";
import "./site-polish.css";
import "./cta-system.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  // Next.js applies `basePath` to metadata asset paths. Use the origin here so
  // social image URLs resolve to /portfolio/og.png exactly once.
  metadataBase: new URL("/", site.url),
  title: {
    default: `${site.fullName} — ${site.role}`,
    template: `%s — ${site.fullName}`,
  },
  description: site.tagline,
  icons: {
    icon: assetPath("/brand/hana-favicon.svg"),
    shortcut: assetPath("/brand/hana-favicon.svg"),
    apple: assetPath("/apple-icon.png"),
  },
  alternates: { canonical: canonical("/") },
  openGraph: {
    siteName: site.fullName,
    locale: "en",
    url: canonical("/"),
    title: `${site.fullName} — ${site.role}`,
    description: site.tagline,
    type: "website",
    images: [{ url: assetPath("/og-hana-vali-20260901.png"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.role}`,
    description: site.tagline,
    images: [assetPath("/og-hana-vali-20260901.png")],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
