"use client";

import { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Marte & Jonas",
    role: "Bryllup, Lofoten",
    text: "Erik klarte å fange de små øyeblikkene vi ikke engang visste skjedde. Hver gang vi blar gjennom albumet, oppdager vi noe nytt. Det var som å ha en usynlig gjest som så alt det vakre.",
  },
  {
    name: "Hanne Kristiansen",
    role: "Portrettfoto",
    text: "Jeg har aldri vært komfortabel foran kameraet, men Erik fikk det til å føles helt naturlig. Bildene ble mye mer enn jeg forventet &mdash; de fanger virkelig hvem jeg er.",
  },
  {
    name: "Oslo Tech Summit",
    role: "Eventfotografering",
    text: "Profesjonell, diskret og utrolig dyktig. Bildene fra konferansen vår ble brukt i sosiale medier i flere måneder etterpå. Erik leverte raskt og kvaliteten var gjennomgående høy.",
  },
];

export default function Testimonials() {
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
        <div
          className={`mb-16 text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
            Tilbakemeldinger
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-light tracking-tight">
            Hva kundene sier
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={review.name}
              className={`relative p-8 lg:p-10 bg-surface-elevated/50 border border-white/5 transition-all duration-700 hover:border-warm/10 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${200 + idx * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-warm/20 mb-6" />
              <p
                className="text-muted-foreground leading-relaxed mb-8 text-[15px]"
                dangerouslySetInnerHTML={{ __html: review.text }}
              />
              <div className="border-t border-white/5 pt-5">
                <p className="text-foreground text-sm font-medium">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
