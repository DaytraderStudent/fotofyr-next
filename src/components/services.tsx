"use client";

import { useRef, useState, useEffect } from "react";
import { Heart, User, TreePine, PartyPopper, ArrowRight } from "lucide-react";

const packages = [
  {
    icon: Heart,
    title: "Bryllup",
    price: "Fra 18 000 kr",
    description:
      "Full dekning av dagen din, fra forberedelser til siste dans. Diskret og tilstede gjennom hele feiringen.",
    features: [
      "Forsamtale og befaring",
      "8-12 timer dekning",
      "300+ redigerte bilder",
      "Privat nettgalleri",
      "Trykkeklare filer",
    ],
  },
  {
    icon: User,
    title: "Portrett",
    price: "Fra 3 500 kr",
    description:
      "Enten det er til LinkedIn, familien eller bare for deg selv. Vi finner lyset og uttrykket som passer deg.",
    features: [
      "Konsultasjon på forhånd",
      "1-2 timer fotografering",
      "20+ redigerte bilder",
      "Studio eller on-location",
      "Digitale filer i høy oppløsning",
    ],
  },
  {
    icon: TreePine,
    title: "Natur & landskap",
    price: "Fra 5 000 kr",
    description:
      "Norsk natur i sitt rette element. Tilgjengelig som kunsttrykk, lisensbilder eller bestillingsverk.",
    features: [
      "Fine art prints",
      "Lisens for kommersiell bruk",
      "Bestillingsverk etter ønske",
      "Innramming tilgjengelig",
      "Levering i stort format",
    ],
  },
  {
    icon: PartyPopper,
    title: "Event",
    price: "Fra 6 000 kr",
    description:
      "Konferanser, fester, konserter og lanseringer. Jeg dokumenterer stemningen og de viktige øyeblikkene.",
    features: [
      "Forsamtale om behov",
      "Fleksibel timedekning",
      "100+ redigerte bilder",
      "Rask levering (48t)",
      "Tilpasset til markedsføring",
    ],
  },
];

export default function Services() {
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
    <section
      id="tjenester"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 max-w-xl transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
            Tjenester
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Hva jeg tilbyr
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Hver pakke er et utgangspunkt. Jeg tilpasser alltid oppdraget til
            dine behov &mdash; ta gjerne kontakt for et uforpliktende tilbud.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.title}
                className={`bg-background p-8 lg:p-10 group transition-all duration-700 hover:bg-surface-elevated ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                <Icon className="w-6 h-6 text-warm mb-6 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-[family-name:var(--font-heading)] text-xl mb-2">
                  {pkg.title}
                </h3>
                <p className="text-warm text-sm font-medium mb-4">
                  {pkg.price}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-warm mt-2 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-sm text-warm tracking-wider uppercase transition-all duration-300 group-hover:gap-3 cursor-pointer"
                >
                  Bestill
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
