"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeAboutTeaser() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="Fotograf i arbeid"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-warm/20 -z-10" />
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
              Om meg
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-light tracking-tight mb-6">
              Bak linsen
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hei, jeg heter Erik. I over tolv år har jeg jaktet på øyeblikk —
              de ekte, ufiltrerte, uforberedte. De som blir til minner du blar
              tilbake til igjen og igjen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Enten det er virvaret av en bryllupsdag, stillheten på et
              fjellplatå eller energien i et fullsatt lokale — jeg er der,
              diskret og tålmodig, klar til å fange det som betyr noe.
            </p>
            <Link
              href="/om-meg"
              className="inline-flex items-center gap-2 text-sm text-warm tracking-wider uppercase transition-all duration-300 hover:gap-3 cursor-pointer"
            >
              Les mer om meg
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
