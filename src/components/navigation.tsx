"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/om-meg", label: "Om meg" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/blogg", label: "Blogg" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-[#0e0d0b]/90 backdrop-blur-md border-b border-white/5";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-xl tracking-wide text-foreground transition-colors hover:text-warm"
        >
          fotofyr
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 cursor-pointer ${
                  pathname.startsWith(link.href)
                    ? "text-warm"
                    : "text-muted-foreground hover:text-warm"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden text-foreground cursor-pointer"
            aria-label="Meny"
          >
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-surface border-l border-white/5 w-72"
          >
            <nav className="flex flex-col gap-8 mt-16 px-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-[family-name:var(--font-heading)] text-2xl transition-colors cursor-pointer ${
                    pathname.startsWith(link.href)
                      ? "text-warm"
                      : "text-foreground hover:text-warm"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
