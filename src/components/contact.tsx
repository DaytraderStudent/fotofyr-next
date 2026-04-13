"use client";

import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulated send
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left side */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-warm text-sm tracking-[0.3em] uppercase mb-3">
              Kontakt
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl lg:text-5xl font-light tracking-tight mb-6">
              La oss snakke
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Har du et prosjekt i tankene, eller lurer du på noe? Send meg en
              melding, så tar jeg kontakt innen 24 timer.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10">
                  <Mail className="w-4 h-4 text-warm" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    E-post
                  </p>
                  <p className="text-foreground text-sm">hei@fotofyr.no</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10">
                  <Phone className="w-4 h-4 text-warm" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    Telefon
                  </p>
                  <p className="text-foreground text-sm">+47 900 00 000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10">
                  <MapPin className="w-4 h-4 text-warm" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">
                    Basert i
                  </p>
                  <p className="text-foreground text-sm">
                    Oslo &mdash; tilgjengelig i hele Norge
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {sent ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 border border-warm/30 flex items-center justify-center">
                    <Send className="w-6 h-6 text-warm" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-3">
                    Takk for meldingen
                  </h3>
                  <p className="text-muted-foreground">
                    Jeg svarer deg så fort jeg kan.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs text-muted-foreground tracking-wider uppercase mb-2"
                    >
                      Navn
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-foreground placeholder:text-muted-foreground/50 focus:border-warm focus:outline-none transition-colors duration-300"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs text-muted-foreground tracking-wider uppercase mb-2"
                    >
                      E-post
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-white/10 pb-3 text-foreground placeholder:text-muted-foreground/50 focus:border-warm focus:outline-none transition-colors duration-300"
                      placeholder="din@epost.no"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs text-muted-foreground tracking-wider uppercase mb-2"
                  >
                    Hva er du interessert i?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-foreground focus:border-warm focus:outline-none transition-colors duration-300 cursor-pointer appearance-none"
                  >
                    <option value="" className="bg-[#0e0d0b]">
                      Velg tjeneste
                    </option>
                    <option value="bryllup" className="bg-[#0e0d0b]">
                      Bryllup
                    </option>
                    <option value="portrett" className="bg-[#0e0d0b]">
                      Portrett
                    </option>
                    <option value="natur" className="bg-[#0e0d0b]">
                      Natur &amp; landskap
                    </option>
                    <option value="event" className="bg-[#0e0d0b]">
                      Event
                    </option>
                    <option value="annet" className="bg-[#0e0d0b]">
                      Annet
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs text-muted-foreground tracking-wider uppercase mb-2"
                  >
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-foreground placeholder:text-muted-foreground/50 focus:border-warm focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Fortell meg litt om hva du har i tankene..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 bg-warm text-[#0e0d0b] px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-warm-light disabled:opacity-50 cursor-pointer"
                >
                  {sending ? "Sender..." : "Send melding"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
