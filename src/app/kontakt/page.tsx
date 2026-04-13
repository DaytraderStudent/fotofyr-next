import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Ta kontakt for et uforpliktende tilbud. Tilgjengelig for oppdrag i hele Norge.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="La oss snakke"
        description="Har du et prosjekt i tankene? Send meg en melding, så tar jeg kontakt innen 24 timer."
        breadcrumbs={[{ label: "Kontakt" }]}
      />
      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <Contact />
      </section>
    </>
  );
}
