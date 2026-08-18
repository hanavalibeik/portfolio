import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../products.css";
import { OrderButton } from "@/components/OrderButton";
import { Registration } from "@/components/Marks";
import {
  adjacentProducts,
  getCollection,
  getProduct,
  products,
} from "@/data/products";
import { site } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { JsonLd, absoluteAsset, breadcrumbs, canonical } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const description = `${product.blurb} ${product.priceLabel}. Order by message from ${site.fullName}.`;
  const route = `/products/${product.slug}`;

  return {
    title: `${product.name} — Products`,
    description,
    alternates: { canonical: canonical(route) },
    openGraph: {
      title: `${product.name} — ${site.fullName}`,
      description,
      url: canonical(route),
      type: "website",
      images: product.images.map((image) => ({ url: absoluteAsset(image.src) })),
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const collection = getCollection(product.collection);
  const { prev, next } = adjacentProducts(slug);

  /* Google will not show a product rich result without an image, so the
     photography is part of the structured data rather than only the markup.
     Prices are quoted in toman; schema.org needs a currency code, and the
     ISO code for Iran is IRR (1 toman = 10 rial), so the figure is converted
     rather than mislabelled. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    alternateName: product.nameFa,
    description: product.blurb,
    sku: product.slug,
    material: product.material,
    ...(product.size ? { size: product.size } : {}),
    image: product.images.map((image) => absoluteAsset(image.src)),
    brand: { "@type": "Person", name: site.fullName },
    offers: {
      "@type": "Offer",
      price: product.priceToman * 10,
      priceCurrency: "IRR",
      itemCondition: "https://schema.org/NewCondition",
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: canonical(`/products/${product.slug}`),
      seller: { "@type": "Person", name: site.fullName },
    },
  };

  const crumbs = breadcrumbs([
    { name: "Home", route: "/" },
    { name: "Products", route: "/products" },
    { name: product.name, route: `/products/${product.slug}` },
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={crumbs} />

      <article className="product">
        <div className="container">
          <p className="product__crumb">
            <Link href="/products/">Products</Link>
            <span aria-hidden="true"> / </span>
            {collection?.name}
          </p>

          <div className="product__layout">
            <div className="product__gallery">
              {product.images.map((image, i) => (
                <figure className="product__figure" key={image.src}>
                  <span className="product__plate">
                    <img
                      src={assetPath(image.src)}
                      alt={image.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : undefined}
                      decoding="async"
                      width="1200"
                      height="1200"
                    />
                    {image.placeholder && (
                      <span className="product-card__pending">
                        Photo coming soon
                      </span>
                    )}
                    <Registration className="trim trim--tl" />
                    <Registration className="trim trim--tr" />
                    <Registration className="trim trim--br" />
                    <Registration className="trim trim--bl" />
                  </span>
                  {image.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
              ))}
            </div>

            <div className="product__spec">
              <p className="eyebrow">{collection?.name}</p>
              <h1 className="product__title">{product.name}</h1>
              <p className="product__title-fa" lang="fa" dir="rtl">
                {product.nameFa}
              </p>
              <p className="product__blurb">{product.blurb}</p>

              <dl className="spec-list">
                {product.size && (
                  <div>
                    <dt>Size</dt>
                    <dd>{product.size}</dd>
                  </div>
                )}
                <div>
                  <dt>Material</dt>
                  <dd>{product.material}</dd>
                </div>
                <div>
                  <dt>Collection</dt>
                  <dd>{collection?.name}</dd>
                </div>
                <div>
                  <dt>Availability</dt>
                  <dd>
                    {product.available ? "Made to order" : "Currently unavailable"}
                  </dd>
                </div>
              </dl>

              <p className="product__price">{product.priceLabel}</p>

              <OrderButton product={product} collection={collection} />

              {collection && (
                <ul className="collection__notes collection__notes--spec">
                  {collection.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <nav className="product__nav" aria-label="More products">
            {prev ? (
              <Link href={`/products/${prev.slug}/`}>
                <span aria-hidden="true">←</span> {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/products/${next.slug}/`}>
                {next.name} <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>
    </>
  );
}
