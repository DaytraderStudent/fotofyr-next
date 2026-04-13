"use client";

import { useRef, useState, useEffect } from "react";
import { Camera, Mountain, Heart, Award } from "lucide-react";

const timeline = [
  {
    year: "2013",
    title: "Starten",
    text: "Lånte et kamera av en kompis og dro til Lofoten. Kom hjem med 2000 bilder og en ny lidenskap.",
  },
  {
    year: "2015",
    title: "Første bryllup",
    text: "Fotograferte bryllupet til en venninne — og skjønte at dette var det jeg ville gjøre.",
  },
  {
    year: "2017",
    title: "Fotofyr ble til",
    text: "Startet Fotofyr som fulltidsjobb. Det første året var skummelt. Det andre var fantastisk.",
  },
  {
    year: "2019",
    title: "Første utstilling",
    text: "Viste landskapsbilder fra Nord-Norge på Fotogalleriet i Oslo. Solgte ut på åpningen.",
  },
  {
    year: "2022",
    title: "Nordisk pris",
    text: "Vant «Årets bryllupsfotograf» i Nordic Photography Awards.",
  },
  {
    year: "2025",
    title: "I dag",
    text: "Over 500 oppdrag, 300 bryllup og 50 utstillinger senere — og jeg elsker det like mye.",
  },
];

const gear = [
  { name: "Sony A7R V", type: "Kamerahus" },
  { name: "Sony A7 IV", type: "Backup-kamera" },
  { name: "Sony 35mm f/1.4 GM", type: "Hovedobjektiv" },
  { name: "Sony 85mm f/1.4 GM", type: "Portrettobjektiv" },
  { name: "Sony 16-35mm f/2.8 GM II", type: "Vidvinkel" },
  { name: "Sony 70-200mm f/2.8 GM II", type: "Teleobjektiv" },
];

export default function AboutContent() {
  const bioRef = useRef<HTMLDivElement>(null);
  const [bioVisible, setBioVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBioVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (bioRef.current) observer.observe(bioRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Bio section */}
      <section ref={bioRef} className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div
              className={`lg:col-span-5 relative transition-all duration-1000 ${bioVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <div className="aspect-[3/4] overflow-hidden sticky top-28">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                  alt="Erik — Fotofyr"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={`lg:col-span-7 transition-all duration-1000 delay-300 ${bioVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-light tracking-tight mb-8">
                Fotografering er ikke bare jobben min &mdash;{" "}
                <span className="italic text-warm">det er måten jeg ser verden på.</span>
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Jeg heter Erik, er 35 år og bor i Oslo. Jeg har stått bak
                  kameraet i over tolv år, men fascinasjonen for lys og
                  komposisjon startet lenge før det.
                </p>
                <p>
                  Som barn satt jeg i timevis og studerte hvordan sollyset falt
                  gjennom vinduet hjemme. Hvordan skyggene beveget seg gjennom
                  rommet. Hvordan det samme rommet så helt annerledes ut klokken
                  åtte om morgenen og klokken fire om ettermiddagen.
                </p>
                <p>
                  Den nysgjerrigheten driver meg fortsatt. Hvert oppdrag er en
                  mulighet til å se noe nytt — et lys, et uttrykk, et øyeblikk
                  som aldri kommer tilbake. Jeg elsker presset av å vite at jeg
                  bare har ett forsøk, og at hvert bilde må telle.
                </p>
                <p>
                  Utenom fotografering finner du meg på fjelltur med hunden min,
                  Birk, eller på et mørkerom der jeg leker med analog film. Jeg
                  tror nemlig at det analoge håndverket gjør meg til en bedre
                  digital fotograf — det tvinger meg til å tenke før jeg trykker.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/5">
                {[
                  { icon: Camera, value: "500+", label: "Oppdrag" },
                  { icon: Heart, value: "300+", label: "Bryllup" },
                  { icon: Mountain, value: "50+", label: "Utstillinger" },
                  { icon: Award, value: "12+", label: "Års erfaring" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex flex-col items-start gap-2">
                      <Icon className="w-5 h-5 text-warm" />
                      <p className="font-[family-name:var(--font-heading)] text-2xl text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground tracking-wider uppercase">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-light">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
            Min filosofi
          </p>
          <blockquote className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-snug italic text-foreground">
            &ldquo;De beste bildene oppstår når folk glemmer at kameraet er
            der. Mitt jobb er å være usynlig — og å se alt.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light tracking-tight mb-16 text-center">
            Reisen så langt
          </h2>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={item.year}
                  className={`relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 ${
                    idx % 2 === 0 ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-2.5 h-2.5 rounded-full bg-warm -translate-x-1/2 top-1.5" />

                  <div className={idx % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:col-start-2 lg:pl-12"}>
                    <p className="text-warm text-sm font-medium mb-1">
                      {item.year}
                    </p>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gear */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-light">
        <div className="max-w-4xl mx-auto">
          <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
            Utstyr
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-light tracking-tight mb-4">
            Hva jeg bruker
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Utstyret er ikke det viktigste — men det hjelper å ha pålitelige
            verktøy. Her er det jeg stoler på daglig.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {gear.map((item) => (
              <div
                key={item.name}
                className="bg-background p-6 hover:bg-surface-elevated transition-colors duration-300"
              >
                <p className="text-foreground font-medium text-sm">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {item.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
