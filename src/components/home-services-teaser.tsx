"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Heart, User, TreePine, PartyPopper, ArrowRight } from "lucide-react";

const services = [
  { icon: Heart, title: "Bryllup", price: "Fra 18 000 kr", description: "Full dekning av den store dagen." },
  { icon: User, title: "Portrett", price: "Fra 3 500 kr", description: "Bilder som viser hvem du egentlig er." },
  { icon: TreePine, title: "Natur", price: "Fra 5 000 kr", description: "Norsk natur som kunsttrykk eller bestillingsverk." },
  { icon: PartyPopper, title: "Event", price: "Fra 6 000 kr", description: "Stemningen, detaljene og menneskene." },
];

export default function HomeServicesTeaser() {
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
              Tjenester
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-light tracking-tight">
              Hva jeg tilbyr
            </h2>
          </div>
          <Link
            href="/tjenester"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-warm tracking-wider uppercase transition-all duration-300 hover:gap-3 cursor-pointer"
          >
            Se detaljer
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`bg-background p-8 group transition-all duration-700 hover:bg-surface-elevated ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                <Icon className="w-6 h-6 text-warm mb-5 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-[family-name:var(--font-heading)] text-lg mb-1">
                  {svc.title}
                </h3>
                <p className="text-warm text-sm font-medium mb-3">
                  {svc.price}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
