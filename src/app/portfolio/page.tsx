import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import { categories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Utforsk mine arbeider innen bryllup, portrett, natur og eventfotografering.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Utvalgte arbeider"
        description="Hvert prosjekt har sin egen historie. Utforsk mine arbeider innen bryllup, portrett, natur og event."
        breadcrumbs={[{ label: "Portfolio" }]}
      />

      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/portfolio/${cat.slug}`}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <img
                  src={cat.coverImage}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 flex flex-col justify-end p-8">
                  <h2 className="font-[family-name:var(--font-heading)] text-3xl text-white mb-2">
                    {cat.title}
                  </h2>
                  <p className="text-white/70 text-sm max-w-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
