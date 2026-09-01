import type { Metadata } from "next";
import "../products.css";
import { OrderButton } from "@/components/OrderButton";
import { ProductCard } from "@/components/ProductCard";
import { collections, productsInCollection } from "@/data/products";
import { site } from "@/data/site";
import { absoluteAsset, canonical } from "@/lib/seo";

const productsDescription =
  "An independent side project for the Iranian market, turning Hana Vali's illustration work into small-run printed pieces ordered directly by message.";

export const metadata: Metadata = {
  title: "Products",
  description: productsDescription,
  alternates: { canonical: canonical("/products") },
  openGraph: {
    title: "Products",
    description: productsDescription,
    url: canonical("/products"),
    images: [{ url: absoluteAsset("/products/shiraz-mug/01.webp") }],
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Independent project · Iran</p>
          <h1 className="page-title">Products</h1>
          <p className="page-lede">
            An independent side project for the Iranian market, turning selected
            illustrations into small-run printed pieces. Orders are handled
            directly by message.
          </p>
        </div>
      </section>

      {collections.map((collection) => {
        const items = productsInCollection(collection.id);
        if (items.length === 0) return null;

        return (
          <section
            className="section collection"
            key={collection.id}
            aria-labelledby={`collection-${collection.id}`}
          >
            <div className="container">
              <header className="collection__head">
                <h2 id={`collection-${collection.id}`}>{collection.name}</h2>
                <p>{collection.intro}</p>
                <ul className="collection__notes">
                  {collection.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </header>

              <div className="product-grid">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section order-band" aria-labelledby="how-to-order">
        <div className="container">
          <h2 id="how-to-order">How ordering works</h2>
          <ol className="order-steps">
            <li>
              <span className="order-steps__n">01</span>
              <span>
                Message me on Instagram with what you&rsquo;d like and how many.
              </span>
            </li>
            <li>
              <span className="order-steps__n">02</span>
              <span>
                I confirm availability and the shipping cost to your address.
              </span>
            </li>
            <li>
              <span className="order-steps__n">03</span>
              <span>You pay, I post it.</span>
            </li>
          </ol>
          <OrderButton collection={collections[0]} />
          <p className="order-band__note">
            No checkout here — orders are handled personally through{" "}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
            >
              @{site.instagram.handle}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
