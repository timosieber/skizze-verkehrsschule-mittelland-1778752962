"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/identity/SectionLabel";
import { Pill } from "@/components/identity/Pill";
import { Accent } from "@/components/identity/Accent";

export function Termine() {
  return (
    <section
      id="termine"
      className="relative py-24 md:py-32 text-text-on-light overflow-hidden"
      style={{ backgroundColor: "rgba(30, 143, 212, 0.06)" }}
    >
      <div className="absolute inset-0 bg-bg-primary opacity-30 pointer-events-none" />

      <div className="relative container-padded">
        <SectionLabel className="mb-10">— 06 / TERMINE</SectionLabel>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <motion.h2
              className="display-1 max-w-[14ch] text-balance"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Accent>Jetzt</Accent> anmelden. 8 Plätze frei.
            </motion.h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="text-text-on-light-muted text-base md:text-lg leading-relaxed max-w-md">
              Aktueller Nothelferkurs und Fahrstunden-Buchung – beides ohne Wartezeit.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
          {/* Live-Card */}
          <motion.div
            className="lg:col-span-7 bg-bg-primary border border-accent/30 rounded-lg p-8 md:p-10 shadow-glow-accent-subtle"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Pill variant="accent" pulse>
                8 Plätze frei
              </Pill>
              <span className="caption-mono text-text-on-light-muted normal-case tracking-wide">
                Klassischer Nothelferkurs
              </span>
            </div>

            <h3 className="display-2 mb-6 leading-tight">
              Nothelferkurs Trimbach
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div>
                <p className="caption-mono text-text-on-light-muted mb-1">Kurs-Nr.</p>
                <p className="font-mono text-sm">4632-3-2026-4</p>
              </div>
              <div>
                <p className="caption-mono text-text-on-light-muted mb-1">Ort</p>
                <p className="text-sm">Baslerstrasse 67, 4632 Trimbach</p>
              </div>
              <div>
                <p className="caption-mono text-text-on-light-muted mb-1">Freitag</p>
                <p className="text-sm">22. Mai 2026 · 18:00 – 22:00</p>
              </div>
              <div>
                <p className="caption-mono text-text-on-light-muted mb-1">Samstag</p>
                <p className="text-sm">23. Mai 2026 · 09:00 – 16:30</p>
              </div>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-4 pt-6 border-t border-neutral-900/10">
              <div>
                <p className="caption-mono text-text-on-light-muted mb-1">Kursgebühr</p>
                <p className="display-2 leading-none">CHF 140.–</p>
                <p className="text-xs text-text-on-light-muted mt-1">
                  inkl. Nothelferausweis · 6 Jahre gültig
                </p>
              </div>
              <a
                href="https://wa.me/41791361616?text=Hi%2C%20ich%20m%C3%B6chte%20einen%20Platz%20im%20Nothelferkurs%204632-3-2026-4%20reservieren."
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-full bg-bg-dark text-text-on-dark px-7 py-3.5 text-sm font-medium transition-colors hover:bg-accent"
              >
                Platz reservieren
              </a>
            </div>
          </motion.div>

          {/* Alternativ-Card */}
          <motion.div
            className="lg:col-span-5 bg-bg-dark text-text-on-dark rounded-lg p-8 md:p-10 flex flex-col justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="caption-mono text-text-on-dark-muted mb-5 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" />
                <span>Fahrstunden direkt</span>
              </div>

              <h3 className="display-2 mb-5 leading-tight">
                Wir holen dich beim ersten Termin zuhause ab.
              </h3>

              <p className="text-text-on-dark-muted text-base leading-relaxed">
                WhatsApp uns – wir melden uns innerhalb eines Werktags zurück.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              <a
                href="https://wa.me/41791361616"
                target="_blank"
                rel="noopener"
                className="inline-flex w-full items-center justify-center rounded-full bg-accent text-white px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white hover:text-bg-dark shadow-glow-accent"
              >
                WhatsApp +41 79 136 16 16
              </a>
              <p className="caption-mono text-text-on-dark-muted text-center normal-case tracking-wide">
                ab 17 Jahren · Automat oder Gangschaltung
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
