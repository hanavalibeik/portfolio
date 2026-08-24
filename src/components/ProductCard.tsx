import Link from "next/link";
import type { Product } from "@/data/products";
import { assetPath } from "@/lib/assetPath";

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
      </span>

      <span className="product-card__meta">
        <span className="product-card__names">
          <strong>{product.name}</strong>
        </span>
      </span>

      <span className="product-card__blurb">{product.blurb}</span>
    </Link>
  );
}
