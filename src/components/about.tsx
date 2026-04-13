"use client";

import { useRef, useState, useEffect } from "react";
import { Camera, Mountain, Heart } from "lucide-react";

export default function About() {
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
    <section
      id="om-meg"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-light"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image side — asymmetric composition */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=700&q=80"
                  alt="Fotograf i arbeid bak kameraet"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative offset frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-warm/20 -z-10" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-2 lg:-left-6 bg-surface-elevated border border-white/5 px-6 py-4">
              <p className="font-[family-name:var(--font-heading)] text-3xl text-warm">
                12+
              </p>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">
                Års erfaring
              </p>
            </div>
          </div>

          {/* Text side */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
              Om meg
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-light tracking-tight mb-8">
              Bak linsen
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Hei, jeg heter Erik, og jeg har stått bak kameraet i over tolv
                år. Det hele startet med et lånt kamera og en soloppgang over
                Lofoten &mdash; og siden da har jeg aldri lagt det fra meg.
              </p>
              <p>
                Jeg tror på at de beste bildene oppstår når folk glemmer at
                kameraet er der. Derfor jobber jeg alltid diskret og tålmodig,
                enten det er i virvaret av en bryllupsdag eller i stillheten på
                et fjellplatå.
              </p>
              <p>
                Hvert oppdrag er unikt. Jeg tar meg tid til å bli kjent med deg,
                forstå hva som betyr noe, og finne de rette øyeblikkene å fange.
                Resultatet er bilder som føles ekte &mdash; fordi de er det.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5">
              <div className="flex flex-col items-start gap-3">
                <Camera className="w-5 h-5 text-warm" />
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
                    500+
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    Oppdrag
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <Heart className="w-5 h-5 text-warm" />
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
                    300+
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    Bryllup
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <Mountain className="w-5 h-5 text-warm" />
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
                    50+
                  </p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    Utstillinger
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
