import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/spline-sans-mono";
import "@fontsource-variable/vazirmatn";
import "./globals.css";
import "./services-motion.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

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
    icon: assetPath("/brand/hana-logo.svg"),
    shortcut: assetPath("/brand/hana-logo.svg"),
    apple: assetPath("/apple-icon.png"),
  },
  openGraph: {
    title: `${site.fullName} — ${site.role}`,
    description: site.tagline,
    type: "website",
    images: [{ url: assetPath("/og.png"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.role}`,
    description: site.tagline,
    images: [assetPath("/og.png")],
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
