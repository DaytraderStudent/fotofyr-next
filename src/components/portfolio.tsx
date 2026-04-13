"use client";

import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const categories = [
  { id: "alle", label: "Alle" },
  { id: "bryllup", label: "Bryllup" },
  { id: "portrett", label: "Portrett" },
  { id: "natur", label: "Natur" },
  { id: "event", label: "Event" },
];

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Brudepar i solnedgang",
    category: "bryllup",
    aspect: "portrait",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    alt: "Portrett av kvinne i naturlig lys",
    category: "portrett",
    aspect: "portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    alt: "Tåkete fjelllandskap ved daggry",
    category: "natur",
    aspect: "landscape",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Bryllupsseremoni utendørs",
    category: "bryllup",
    aspect: "landscape",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    alt: "Kreativt portrett med skygger",
    category: "portrett",
    aspect: "portrait",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    alt: "Dramatiske fjelltopper",
    category: "natur",
    aspect: "landscape",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Konsert med stemningslys",
    category: "event",
    aspect: "landscape",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&q=80",
    alt: "Brudepar danser",
    category: "bryllup",
    aspect: "portrait",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    alt: "Grønn dal med elv",
    category: "natur",
    aspect: "landscape",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    alt: "Festivalscene med publikum",
    category: "event",
    aspect: "landscape",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    alt: "Portrett av mann i studio",
    category: "portrett",
    aspect: "portrait",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    alt: "Konferanse foredragsholder",
    category: "event",
    aspect: "landscape",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("alle");
  const [lightbox, setLightbox] = useState<(typeof images)[0] | null>(null);
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

  const filtered =
    active === "alle" ? images : images.filter((i) => i.category === active);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
            Utvalgte arbeider
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-light tracking-tight">
            Portfolio
          </h2>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap gap-2 mb-12 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                active === cat.id
                  ? "bg-warm text-[#0e0d0b]"
                  : "text-muted-foreground hover:text-foreground border border-white/10 hover:border-warm/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, idx) => (
            <div
              key={img.id}
              className={`break-inside-avoid group relative overflow-hidden cursor-pointer transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + idx * 100}ms` }}
              onClick={() => setLightbox(img)}
            >
              <div
                className={
                  img.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                }
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <div>
                  <p className="text-sm text-white/90 font-medium">
                    {img.alt}
                  </p>
                  <p className="text-xs text-warm/80 uppercase tracking-wider mt-1">
                    {img.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-5xl bg-[#0e0d0b] border-white/5 p-2 sm:p-4">
          <DialogTitle className="sr-only">{lightbox?.alt ?? "Bilde"}</DialogTitle>
          {lightbox && (
            <img
              src={lightbox.src.replace("w=800", "w=1600")}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
