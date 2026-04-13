"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      const img = el.querySelector<HTMLElement>(".hero-image");
      if (img) {
        img.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
      }
    };

    const handleLeave = () => {
      const img = el.querySelector<HTMLElement>(".hero-image");
      if (img) {
        img.style.transform = "translate(0, 0) scale(1)";
      }
    };

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches) {
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-end"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format"
          alt="Dramatisk fjellandskap i gyllen solnedgang"
          className="hero-image h-full w-full object-cover transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d0b]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 pb-24 lg:pb-32">
        <div className="max-w-2xl">
          <p className="animate-fade-in-up text-warm text-sm tracking-[0.3em] uppercase mb-4 [animation-delay:0.3s]">
            Fotograf &mdash; Norge
          </p>
          <h1 className="animate-fade-in-up font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] tracking-tight [animation-delay:0.5s]">
            Øyeblikk
            <br />
            <span className="italic text-warm">som varer</span>
          </h1>
          <p className="animate-fade-in-up mt-6 text-lg text-muted-foreground max-w-md leading-relaxed [animation-delay:0.7s]">
            Jeg fanger de ekte, uforberedte øyeblikkene &mdash; de som blir til
            minner du aldri glemmer.
          </p>
          <div className="animate-fade-in-up mt-10 flex gap-4 [animation-delay:0.9s]">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-warm text-[#0e0d0b] px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-warm-light cursor-pointer"
            >
              Se portfolio
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 border border-white/20 px-7 py-3.5 text-sm font-medium tracking-wide uppercase text-foreground transition-all duration-300 hover:border-warm hover:text-warm cursor-pointer"
            >
              Ta kontakt
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in [animation-delay:1.5s]">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-warm/50 to-transparent relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-warm/60 animate-[scroll-line_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(48px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
