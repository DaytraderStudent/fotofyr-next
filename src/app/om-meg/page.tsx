import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "Om meg",
  description:
    "Bli kjent med Erik — fotografen bak Fotofyr. Over 12 års erfaring med bryllup, portrett, natur og event.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Om meg"
        subtitle="Fotofyr"
        breadcrumbs={[{ label: "Om meg" }]}
      />
      <AboutContent />
    </>
  );
}
