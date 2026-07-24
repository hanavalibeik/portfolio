import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-intro" style={{ paddingBlockEnd: "var(--section-gap)" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="page-title">Off the grid</h1>
        <p className="page-lede">
          This page doesn't exist — or it was cut in the last revision round.
        </p>
        <p style={{ marginBlockStart: "1.5rem" }}>
          <Link href="/" className="text-link">
            Back to the home page →
          </Link>
        </p>
      </div>
    </section>
  );
}
