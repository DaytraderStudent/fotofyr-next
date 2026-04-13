import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import {
  categories,
  getCategory,
  getProjectsByCategory,
} from "@/data/projects";

export function generateStaticParams() {
  return categories.map((c) => ({ kategori: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kategori: string }>;
}): Promise<Metadata> {
  const { kategori } = await params;
  const cat = getCategory(kategori);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ kategori: string }>;
}) {
  const { kategori } = await params;
  const cat = getCategory(kategori);
  if (!cat) notFound();

  const projects = getProjectsByCategory(kategori);

  return (
    <>
      <PageHeader
        title={cat.title}
        subtitle="Portfolio"
        description={cat.description}
        backgroundImage={cat.coverImage}
        breadcrumbs={[
          { label: "Portfolio", href: "/portfolio" },
          { label: cat.title },
        ]}
      />

      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${kategori}/${project.slug}`}
                className="group relative overflow-hidden aspect-[4/3]"
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    {project.location} — {project.date}
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
