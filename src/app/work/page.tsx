import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";
import { canonical } from "@/lib/seo";

const workDescription =
  "Identity, packaging, editorial, campaign and illustration work — from logotypes to complete visual systems.";

export const metadata: Metadata = {
  title: "Work",
  description: workDescription,
  alternates: { canonical: canonical("/work") },
  openGraph: {
    title: "Work",
    description: workDescription,
    url: canonical("/work"),
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Index</p>
          <h1 className="page-title">Work</h1>
          <p className="page-lede">
            Identity, packaging, editorial, campaign and illustration work —
            from logotypes to complete visual systems.
          </p>
        </div>
      </section>

      <section className="section" aria-label="All projects">
        <div className="container">
          <WorkGrid />
        </div>
      </section>
    </>
  );
}
