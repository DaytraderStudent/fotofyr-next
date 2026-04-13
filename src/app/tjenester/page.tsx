import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ServicesContent from "@/components/services-content";

export const metadata: Metadata = {
  title: "Tjenester",
  description:
    "Bryllup, portrett, natur og eventfotografering. Se priser og hva som er inkludert.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Tjenester"
        subtitle="Hva jeg tilbyr"
        description="Hver pakke er et utgangspunkt. Jeg tilpasser alltid oppdraget til dine behov."
        breadcrumbs={[{ label: "Tjenester" }]}
      />
      <ServicesContent />
    </>
  );
}
