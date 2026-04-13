"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function HomeCta() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-40 px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/70 to-[#0e0d0b]" />
      </div>

      <div
        className={`relative max-w-2xl mx-auto text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6">
          Har du et prosjekt
          <br />
          <span className="italic text-warm">i tankene?</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Enten du planlegger bryllup, trenger nye portretter eller har et event
          på gang — ta kontakt for en uforpliktende prat.
        </p>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 bg-warm text-[#0e0d0b] px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-warm-light cursor-pointer"
        >
          Ta kontakt
        </Link>
      </div>
    </section>
  );
}
