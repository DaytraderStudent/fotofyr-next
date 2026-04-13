import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import ProjectGallery from "@/components/project-gallery";
import { projects, getProject, getCategory } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({
    kategori: p.kategoriSlug,
    prosjekt: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kategori: string; prosjekt: string }>;
}): Promise<Metadata> {
  const { kategori, prosjekt } = await params;
  const project = getProject(kategori, prosjekt);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.kategori}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ kategori: string; prosjekt: string }>;
}) {
  const { kategori, prosjekt } = await params;
  const project = getProject(kategori, prosjekt);
  if (!project) notFound();

  const cat = getCategory(kategori);

  return (
    <>
      <PageHeader
        title={project.title}
        subtitle={`${project.kategori} — ${project.date}`}
        description={project.description}
        breadcrumbs={[
          { label: "Portfolio", href: "/portfolio" },
          { label: cat?.title ?? project.kategori, href: `/portfolio/${kategori}` },
          { label: project.title },
        ]}
      />

      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
            <span>{project.date}</span>
            <span className="w-1 h-1 rounded-full bg-warm/50" />
            <span>{project.location}</span>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </div>
      </section>

      <ProjectGallery images={project.images} />

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">
            Liker du det du ser? Jeg tar gjerne på meg lignende oppdrag.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-warm text-[#0e0d0b] px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-warm-light cursor-pointer"
          >
            Ta kontakt
          </a>
        </div>
      </section>
    </>
  );
}
