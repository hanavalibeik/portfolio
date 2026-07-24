import type { Metadata } from "next";
import { WorkGrid } from "@/components/WorkGrid";
import { ContactCta } from "@/components/ContactCta";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected logo, identity, print and editorial projects.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Index</p>
          <h1 className="page-title">Work</h1>
          <p className="page-lede">
            Logos, identities and printed matter, 2022–2026. Every project
            starts the same way: a sharp brief and a soft pencil.
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
