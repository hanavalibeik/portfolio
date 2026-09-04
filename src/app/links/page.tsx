import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/TrackedLink";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { canonical } from "@/lib/seo";
import styles from "./links.module.css";

const description =
  "Explore selected work, the Shiraz Collection, contact details and profiles for Hana Vali.";

export const metadata: Metadata = {
  title: "Links",
  description,
  robots: { index: false, follow: true },
  alternates: { canonical: canonical(site.linksPage.route) },
  openGraph: {
    title: `Links — ${site.fullName}`,
    description,
    url: canonical(site.linksPage.route),
    images: [
      {
        url: assetPath("/og-hana-vali-20260901.png"),
        width: 1200,
        height: 630,
        alt: `${site.fullName} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Links — ${site.fullName}`,
    description,
    images: [assetPath("/og-hana-vali-20260901.png")],
  },
};

function glyphFor(href: string) {
  if (href.toLowerCase().endsWith(".pdf")) return "↓";
  if (/^https?:\/\//i.test(href) || href.startsWith("mailto:")) return "↗";
  return "→";
}

export default function LinksPage() {
  return (
    <div className={styles.page}>
      <header className={styles.identity}>
        <Link
          href={site.linksPage.homeHref}
          className={styles.logoLink}
          aria-label={`${site.fullName} — home`}
        >
          <img
            className={styles.logo}
            src={assetPath("/brand/hana-logo.svg")}
            alt=""
            width="200"
            height="200"
          />
        </Link>
        <div className={styles.identityCopy}>
          <p className={styles.name}>{site.fullName}</p>
          <p className={styles.role}>{site.role}</p>
        </div>
      </header>

      <nav className={styles.launcher} aria-label={site.linksPage.ariaLabel}>
        {site.linksPage.groups.map((group) => (
          <section
            className={styles.group}
            aria-labelledby={`links-${group.id}`}
            key={group.id}
          >
            <h2 className={styles.groupLabel} id={`links-${group.id}`}>
              {group.label}
            </h2>
            <ul className={styles[`${group.id}Grid`]}>
              {group.items.map((item) => (
                <li
                  className={
                    item.href.toLowerCase().endsWith(".pdf")
                      ? styles.pdfItem
                      : undefined
                  }
                  key={item.href}
                >
                  <TrackedLink
                    className={`${styles.link} ${styles[`${group.id}Link`]}`}
                    href={item.href}
                    label={item.label}
                    ariaLabel={
                      item.meta ? `${item.label}, ${item.meta}` : item.label
                    }
                    group={group.id}
                  >
                    <span className={styles.linkCopy}>
                      <span>{item.label}</span>
                      {item.meta ? <small>{item.meta}</small> : null}
                    </span>
                    <span className={styles.glyph} aria-hidden="true">
                      {glyphFor(item.href)}
                    </span>
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </div>
  );
}
