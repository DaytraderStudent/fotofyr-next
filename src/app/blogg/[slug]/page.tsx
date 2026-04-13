import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import { blogPosts, getBlogPost, formatDate } from "@/data/blog-posts";
import BlogArticle from "@/components/blog-article";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // Find related posts (same category, excluding current)
  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <PageHeader
        title={post.title}
        breadcrumbs={[
          { label: "Blogg", href: "/blogg" },
          { label: post.title },
        ]}
        backgroundImage={post.coverImage}
      />

      <article className="pb-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-12">
            <span className="text-warm uppercase tracking-wider text-xs">
              {post.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-warm/50" />
            <span>{formatDate(post.date)}</span>
            <span className="w-1 h-1 rounded-full bg-warm/50" />
            <span>{post.readTime} lesetid</span>
          </div>

          {/* Cover image */}
          <div className="aspect-[16/9] overflow-hidden mb-12">
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <BlogArticle content={post.content} />
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 px-6 lg:px-8 bg-surface-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-light tracking-tight mb-10 text-center">
              Mer lesestoff
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blogg/${rp.slug}`}
                  className="group"
                >
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img
                      src={rp.coverImage}
                      alt={rp.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg group-hover:text-warm transition-colors duration-300">
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
