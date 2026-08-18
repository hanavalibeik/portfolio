import { PRICE_UNIT, type Product } from "@/data/products";

/**
 * Renders a price as "۹۸٬۰۰۰ تومان" — number first, unit after.
 *
 * Each part is a <bdi>, so the bidi algorithm treats it as a single opaque
 * object and resolves the two in the writing direction of the surrounding
 * block instead of reordering across the boundary. Without the isolation the
 * unit is painted to the left of the number, which reads as the wrong price.
 */
export function Price({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <span className={className} dir="ltr">
      <bdi>{product.priceAmount}</bdi>{" "}
      <bdi lang="fa">{PRICE_UNIT}</bdi>
    </span>
  );
}
