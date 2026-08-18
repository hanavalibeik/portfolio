import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { products } from "@/data/products";
import { canonical } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Every URL here goes through the same `canonical()` helper the pages use for
 * their <link rel="canonical">. The two used to disagree: next.config sets
 * `trailingSlash: true`, so the real page is /products/shiraz-mug/, while the
 * sitemap advertised /products/shiraz-mug — a redirect on all 22 entries, and
 * a sitemap that never quite matched what it pointed at.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { route: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { route: "/", priority: 1, changeFrequency: "weekly" },
    { route: "/work", priority: 0.9, changeFrequency: "monthly" },
    { route: "/products", priority: 0.8, changeFrequency: "monthly" },
    { route: "/about", priority: 0.7, changeFrequency: "yearly" },
    { route: "/contact", priority: 0.7, changeFrequency: "yearly" },
    ...projects.map((p) => ({
      route: `/work/${p.slug}`,
      priority: 0.8,
      changeFrequency: "yearly" as const,
    })),
    ...products.map((p) => ({
      route: `/products/${p.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  ];

  return pages.map(({ route, priority, changeFrequency }) => ({
    url: canonical(route),
    lastModified,
    changeFrequency,
    priority,
  }));
}
