"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  description,
  breadcrumbs,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0b]/60 via-[#0e0d0b]/80 to-[#0e0d0b]" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Brødsmulesti"
            className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 animate-fade-in"
          >
            <Link
              href="/"
              className="hover:text-warm transition-colors cursor-pointer"
            >
              Hjem
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-warm transition-colors cursor-pointer"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        {subtitle && (
          <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3 animate-fade-in-up [animation-delay:0.1s]">
            {subtitle}
          </p>
        )}
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight animate-fade-in-up [animation-delay:0.2s]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:0.3s]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
