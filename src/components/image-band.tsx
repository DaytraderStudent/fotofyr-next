"use client";

import { useRef, useState, useEffect } from "react";

const bandImages = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
    alt: "Nordlys over fjell",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80",
    alt: "Brudepar i skogen",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    alt: "Solnedgang over dal",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
    alt: "Portrett med naturlig lys",
  },
  {
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80",
    alt: "Norsk fjordlandskap",
  },
];

export default function ImageBand() {
  const bandRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const onScroll = () => {
      if (bandRef.current) {
        const rect = bandRef.current.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        setOffset(progress * 100);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={bandRef} className="py-4 overflow-hidden">
      <div
        className="flex gap-4 transition-transform duration-100"
        style={{ transform: `translateX(${-offset}px)` }}
      >
        {bandImages.map((img, idx) => (
          <div
            key={idx}
            className="shrink-0 w-72 sm:w-80 lg:w-96 aspect-[3/2] overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        ))}
        {/* Duplicate for seamless feel */}
        {bandImages.map((img, idx) => (
          <div
            key={`dup-${idx}`}
            className="shrink-0 w-72 sm:w-80 lg:w-96 aspect-[3/2] overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
