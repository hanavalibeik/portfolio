import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";

/** Origin plus basePath, with no trailing slash — e.g. https://host/portfolio */
export const siteBase = site.url.replace(/\/$/, "");

/**
 * A canonical URL for a route. Routes are written the way they appear in the
 * app ("/work/recke/"); the basePath already lives in `site.url`, so it must
 * not be applied a second time here.
 */
export function canonical(route: string): string {
  const path = route === "/" ? "/" : `/${route.replace(/^\/|\/$/g, "")}/`;
  return `${siteBase}${path}`;
}

/**
 * An absolute URL for a file in /public. `assetPath` adds the basePath, which
 * is already part of `siteBase`, so strip it back off before joining.
 */
export function absoluteAsset(publicPath: string): string {
  const withBase = assetPath(publicPath);
  const origin = new URL(siteBase).origin;
  return `${origin}${withBase.startsWith("/") ? withBase : `/${withBase}`}`;
}

/** Breadcrumbs for a detail page, as schema.org expects them. */
export function breadcrumbs(trail: { name: string; route: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: canonical(crumb.route),
    })),
  };
}

/** Renders a JSON-LD block. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
