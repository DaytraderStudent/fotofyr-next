"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const featured = projects.slice(0, 4);

export default function HomeFeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-end justify-between mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
              Utvalgte arbeider
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-light tracking-tight">
              Portfolio
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-warm tracking-wider uppercase transition-all duration-300 hover:gap-3 cursor-pointer"
          >
            Se alle
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {featured.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.kategoriSlug}/${project.slug}`}
              className={`group relative overflow-hidden aspect-[4/3] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6 lg:p-8">
                <div>
                  <p className="text-xs text-warm/80 uppercase tracking-wider mb-1.5">
                    {project.kategori}
                  </p>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-1">
                    {project.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-warm tracking-wider uppercase cursor-pointer"
          >
            Se alle arbeider
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
