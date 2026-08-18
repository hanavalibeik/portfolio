import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPages = ["", "/work", "/products", "/about", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
  const projectPages = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
  }));
  const productPages = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
  }));
  return [...staticPages, ...projectPages, ...productPages];
}
