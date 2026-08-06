import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Identity, packaging, editorial, campaign and illustration work — from logotypes to complete visual systems.",
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

      <ContactCta />
    </>
  );
}
