import Link from "next/link";
import type { Product } from "@/data/products";
import { assetPath } from "@/lib/assetPath";
import { Registration } from "./Marks";
import { Price } from "./Price";

/**
 * A product reads as a print spec plate rather than a shop tile: trim marks at
 * the corners of the image, and a drawn dimension rule underneath carrying the
 * real physical size. Items with no flat dimension show their material instead.
 */
export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];

  return (
    <Link href={`/products/${product.slug}/`} className="product-card">
      <span className="product-card__plate">
        <span className="product-card__media">
          {image ? (
            <img
              src={assetPath(image.src)}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              width="1200"
              height="1200"
            />
          ) : null}
          {image?.placeholder && (
            <span className="product-card__pending">Photo coming soon</span>
          )}
        </span>
        <Registration className="trim trim--tl" />
        <Registration className="trim trim--tr" />
        <Registration className="trim trim--br" />
        <Registration className="trim trim--bl" />
      </span>

      <span className="product-card__rule" aria-hidden="true">
        <span>{product.size ?? product.material}</span>
      </span>

      <span className="product-card__meta">
        <span className="product-card__names">
          <strong>{product.name}</strong>
          <em lang="fa" dir="rtl">
            {product.nameFa}
          </em>
        </span>
        <Price product={product} className="product-card__price" />
      </span>

      <span className="product-card__blurb">{product.blurb}</span>
    </Link>
  );
}
