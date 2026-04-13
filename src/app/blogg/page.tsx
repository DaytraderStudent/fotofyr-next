import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/page-header";
import { blogPosts, formatDate } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blogg",
  description:
    "Tanker om fotografi, tips og historier fra oppdrag. Les siste innlegg fra Fotofyr.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blogg"
        subtitle="Tanker & historier"
        description="Fra tips om fotografering til historier fra oppdrag. Her deler jeg det som inspirerer meg."
        breadcrumbs={[{ label: "Blogg" }]}
      />

      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Featured post */}
          {blogPosts[0] && (
            <Link
              href={`/blogg/${blogPosts[0].slug}`}
              className="group grid lg:grid-cols-2 gap-8 mb-16"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={blogPosts[0].coverImage}
                  alt={blogPosts[0].title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span className="text-warm uppercase tracking-wider text-xs">
                    {blogPosts[0].category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-warm/50" />
                  <span>{formatDate(blogPosts[0].date)}</span>
                  <span className="w-1 h-1 rounded-full bg-warm/50" />
                  <span>{blogPosts[0].readTime} lesetid</span>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl lg:text-3xl font-light tracking-tight mb-4 group-hover:text-warm transition-colors duration-300">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
              </div>
            </Link>
          )}

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="group"
              >
                <div className="aspect-[4/3] overflow-hidden mb-5">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="text-warm uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-warm/50" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-light tracking-tight mb-2 group-hover:text-warm transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
