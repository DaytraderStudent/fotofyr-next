"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Heart,
  User,
  TreePine,
  PartyPopper,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const packages = [
  {
    icon: Heart,
    title: "Bryllup",
    price: "Fra 18 000 kr",
    popular: true,
    description:
      "Full dekning av dagen din, fra forberedelser til siste dans. Diskret og tilstede gjennom hele feiringen.",
    features: [
      "Forsamtale og befaring av lokale",
      "8-12 timer fotografering",
      "300+ profesjonelt redigerte bilder",
      "Privat nettgalleri med nedlasting",
      "Trykkeklare filer i høy oppløsning",
      "Slideshow av utvalgte bilder",
      "Levering innen 4-6 uker",
    ],
    extras: [
      "Forlovelsesfotografering +3 000 kr",
      "Ekstra fotograf +5 000 kr",
      "Fotoalbum i skinn fra 4 500 kr",
      "Same-day edit (slideshow på festen) +4 000 kr",
    ],
  },
  {
    icon: User,
    title: "Portrett",
    price: "Fra 3 500 kr",
    popular: false,
    description:
      "Enten det er til LinkedIn, familien eller bare for deg selv. Vi finner lyset og uttrykket som passer deg.",
    features: [
      "Konsultasjon i forkant",
      "1-2 timer fotografering",
      "20+ redigerte bilder",
      "Studio eller on-location",
      "Digitale filer i høy oppløsning",
      "Retusj inkludert",
      "Levering innen 1-2 uker",
    ],
    extras: [
      "Ekstra lokasjon +1 500 kr",
      "Antrekkskifte +500 kr",
      "Utvidet pakke (40+ bilder) +2 000 kr",
      "Print-pakke fra 1 200 kr",
    ],
  },
  {
    icon: TreePine,
    title: "Natur & landskap",
    price: "Fra 5 000 kr",
    popular: false,
    description:
      "Norsk natur i sitt rette element. Tilgjengelig som kunsttrykk, lisensbilder eller bestillingsverk.",
    features: [
      "Fine art prints på museumspapir",
      "Lisens for kommersiell bruk",
      "Bestillingsverk etter ønske",
      "Innramming tilgjengelig",
      "Levering i stort format",
      "Signerte og nummererte opplag",
      "Konsultasjon for bedrifter",
    ],
    extras: [
      "Tilpasset størrelser etter mål",
      "Bilderettigheter for digital bruk",
      "Redaksjonell bruk: kontakt for pris",
    ],
  },
  {
    icon: PartyPopper,
    title: "Event",
    price: "Fra 6 000 kr",
    popular: false,
    description:
      "Konferanser, fester, konserter og lanseringer. Jeg dokumenterer stemningen og de viktige øyeblikkene.",
    features: [
      "Forsamtale om behov og program",
      "Fleksibel timedekning",
      "100+ redigerte bilder",
      "Rask levering (48 timer for utvalg)",
      "Tilpasset til markedsføring og SoMe",
      "Høyoppløselige filer",
      "Komplett galleri innen 1 uke",
    ],
    extras: [
      "Ekstra fotograf +4 000 kr",
      "Videosnutter for SoMe +3 000 kr",
      "On-site redigering (same-day) +2 500 kr",
    ],
  },
];

const faqs = [
  {
    q: "Hvor lang tid i forveien bør jeg bestille?",
    a: "For bryllup anbefaler jeg å booke 6-12 måneder i forveien, spesielt for sommermånedene. Portrett og event kan ofte ordnes med kortere varsel — ta kontakt, så finner vi en løsning.",
  },
  {
    q: "Hva skjer hvis det regner på bryllupsdagen?",
    a: "Noen av de vakreste bryllupsbildene jeg har tatt er i regnet. Jeg har alltid en plan B, og erfaringen min tilsier at dårlig vær sjelden betyr dårlige bilder — bare andre bilder.",
  },
  {
    q: "Kan jeg velge hvilke bilder som redigeres?",
    a: "Jeg går gjennom alle bildene og velger ut de beste, men du får alltid se hele galleriet og kan be om at spesifikke bilder inkluderes.",
  },
  {
    q: "Reiser du utenfor Oslo?",
    a: "Absolutt. Jeg tar oppdrag over hele Norge og reiser gjerne til utlandet. For oppdrag utenfor Stor-Oslo kommer reise og eventuelt overnatting i tillegg.",
  },
  {
    q: "Hvor lenge beholder du bildene?",
    a: "Jeg arkiverer alle bilder i minimum 2 år. Du får selvfølgelig alle filene levert digitalt, så du har dine egne kopier fra dag én.",
  },
  {
    q: "Tilbyr du videoproduksjon?",
    a: "Jeg fokuserer på stillbilder, men samarbeider med dyktige videografer som jeg kan anbefale. Vi kan koordinere slik at begge deler dekkes sømløst.",
  },
];

export default function ServicesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const processRef = useRef<HTMLElement>(null);
  const [processVisible, setProcessVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (processRef.current) observer.observe(processRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Packages */}
      <section className="pb-24 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.title}
                  className={`relative p-8 lg:p-10 border transition-colors duration-300 ${
                    pkg.popular
                      ? "border-warm/30 bg-surface-elevated/30"
                      : "border-white/5 hover:border-white/10"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute top-0 right-8 -translate-y-1/2 bg-warm text-[#0e0d0b] text-xs font-medium tracking-wider uppercase px-3 py-1">
                      Mest populær
                    </span>
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="w-6 h-6 text-warm shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-2xl">
                        {pkg.title}
                      </h3>
                      <p className="text-warm font-medium mt-1">{pkg.price}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {pkg.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
                      Inkludert
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((f) => (
                        <li
                          key={f}
                          className="text-sm text-foreground flex items-start gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-warm mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.extras && (
                    <div className="mb-8 pt-6 border-t border-white/5">
                      <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
                        Tillegg
                      </p>
                      <ul className="space-y-2">
                        {pkg.extras.map((e) => (
                          <li
                            key={e}
                            className="text-sm text-muted-foreground"
                          >
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href="/kontakt"
                    className={`inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                      pkg.popular
                        ? "bg-warm text-[#0e0d0b] hover:bg-warm-light"
                        : "border border-white/20 text-foreground hover:border-warm hover:text-warm"
                    }`}
                  >
                    Bestill {pkg.title.toLowerCase()}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        ref={processRef}
        className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-light"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
              Prosessen
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-light tracking-tight">
              Slik jobber jeg
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Samtale",
                text: "Vi snakker om hva du ser for deg, og jeg lytter. Ingen oppdrag er for smått eller for stort.",
              },
              {
                step: "02",
                title: "Planlegging",
                text: "Jeg utarbeider en plan basert på dine ønsker, lokasjon og lysforhold.",
              },
              {
                step: "03",
                title: "Fotografering",
                text: "Selve dagen. Jeg er forberedt, diskret og fokusert på å fange de ekte øyeblikkene.",
              },
              {
                step: "04",
                title: "Levering",
                text: "Hvert bilde gjennomgår nøye utvelgelse og redigering. Du får et komplett galleri levert digitalt.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`transition-all duration-700 ${processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <p className="font-[family-name:var(--font-heading)] text-4xl text-warm/20 mb-4">
                  {item.step}
                </p>
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
              Spørsmål
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl font-light tracking-tight">
              Ofte stilte spørsmål
            </h2>
          </div>

          <div className="space-y-px bg-white/5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-background">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                >
                  <span className="text-foreground font-medium pr-8">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-warm" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
