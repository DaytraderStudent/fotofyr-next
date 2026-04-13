import { Separator } from "@/components/ui/separator";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-surface-light border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-heading)] text-2xl tracking-wide mb-4">
              fotofyr
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Profesjonell fotograf basert i Oslo. Tilgjengelig for oppdrag i
              hele Norge og Norden.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Utforsk
            </p>
            <ul className="space-y-3">
              {[
                { href: "#portfolio", label: "Portfolio" },
                { href: "#om-meg", label: "Om meg" },
                { href: "#tjenester", label: "Tjenester" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-warm transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Sosiale medier
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-warm/30 hover:text-warm text-muted-foreground transition-all duration-300 cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-warm/30 hover:text-warm text-muted-foreground transition-all duration-300 cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/5 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fotofyr. Alle rettigheter reservert.</p>
          <p>
            Laget med lidenskap i Oslo
          </p>
        </div>
      </div>
    </footer>
  );
}
