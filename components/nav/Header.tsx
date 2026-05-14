"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/identity/Logo";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { label: "Standorte", href: "#standorte" },
  { label: "Angebote", href: "#angebote" },
  { label: "Dein Weg", href: "#weg" },
  { label: "Werte", href: "#werte" },
  { label: "Team", href: "#team" },
  { label: "Termine", href: "#termine" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setPastHero(window.scrollY > window.innerHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = !pastHero;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? onDark
            ? "bg-bg-dark/85 backdrop-blur-md border-b border-white/5"
            : "bg-bg-primary/85 backdrop-blur-md border-b border-black/5"
          : "bg-transparent",
      )}
    >
      <div className="container-padded h-16 md:h-20 flex items-center justify-between gap-6">
        <a href="#hero" aria-label="Verkehrsschule Mittelland Home">
          <Logo onDark={onDark} size="sm" />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-1.5 caption-mono transition-colors",
                onDark
                  ? "text-text-on-dark-muted hover:text-accent"
                  : "text-text-on-light-muted hover:text-accent",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#termine"
          className={cn(
            "hidden md:inline-flex items-center rounded-full px-4 py-2 caption-mono font-medium transition-colors",
            onDark
              ? "bg-accent text-text-on-dark hover:bg-white hover:text-bg-dark"
              : "bg-bg-dark text-text-on-dark hover:bg-accent",
          )}
        >
          Probelektion buchen
        </a>

        <a
          href="https://wa.me/41791361616"
          target="_blank"
          rel="noopener"
          className={cn(
            "md:hidden inline-flex items-center rounded-full px-3 py-1.5 caption-mono",
            onDark ? "bg-accent text-text-on-dark" : "bg-bg-dark text-text-on-dark",
          )}
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
