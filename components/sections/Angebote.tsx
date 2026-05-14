"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/identity/SectionLabel";

const PRICING = [
  { service: "Fahrstunde", duration: "45 Min", price: "CHF 95.–", included: "Abholung & Rückbringung · Automat oder Gangschaltung" },
  { service: "Fahrstunde", duration: "90 Min", price: "CHF 180.–", included: "Einzelunterricht · individuelle Betreuung" },
  { service: "Verkehrskundeunterricht (VKU)", duration: "4 × 120 Min", price: "CHF 190.–", included: "Interaktiver Unterricht · zentral in Trimbach" },
  { service: "Nothelferkurs · klassisch", duration: "10 Std · 2 Tage", price: "CHF 140.–", included: "Kursunterlagen · Nothelferausweis (6 J. gültig)" },
  { service: "Nothelferkurs · eLearning", duration: "3 h Online + 7 h Praxis", price: "CHF 99.– + 15.–", included: "Selbstlern-Zugang · Praxiskurs" },
  { service: "Anhänger · Kat. BE", duration: "individuell", price: "ab CHF 95.–", included: "Auto mit Anhänger" },
  { service: "Kontrollfahrt", duration: "individuell", price: "ab CHF 95.–", included: "Für ausländische Führerausweise" },
  { service: "Taxi BPT · 121/122", duration: "individuell", price: "ab CHF 95.–", included: "Taxiausbildung" },
];

export function Angebote() {
  return (
    <section
      id="angebote"
      className="bg-bg-primary-alt text-text-on-light py-24 md:py-32"
    >
      <div className="container-padded">
        <SectionLabel className="mb-10">— 02 / ANGEBOTE</SectionLabel>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 mb-16">
          <div className="lg:col-span-7">
            <motion.h2
              className="display-1 max-w-[16ch] text-balance"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Alle Preise. Keine versteckten Details.
            </motion.h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="text-text-on-light-muted text-base md:text-lg leading-relaxed max-w-md">
              Was du brauchst, was es kostet, was inkludiert ist. Anmelden direkt aus der Tabelle.
            </p>
          </div>
        </div>

        {/* Editorial Pricing Table */}
        <div className="rounded-lg overflow-hidden border border-neutral-900/10 bg-bg-primary">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 caption-mono text-text-on-light-muted border-b border-neutral-900/10 bg-bg-primary-alt">
            <div className="col-span-4">Leistung</div>
            <div className="col-span-3">Dauer</div>
            <div className="col-span-2">Preis</div>
            <div className="col-span-3">Inkludiert</div>
          </div>

          {PRICING.map((row, i) => (
            <motion.div
              key={i}
              className="grid md:grid-cols-12 gap-2 md:gap-4 px-6 py-5 border-b last:border-b-0 border-neutral-900/8 hover:bg-bg-primary-alt transition-colors group"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <div className="md:col-span-4 font-medium text-base md:text-[0.95rem] flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent shrink-0" />
                <span>{row.service}</span>
              </div>
              <div className="md:col-span-3 caption-mono text-text-on-light-muted normal-case tracking-normal">
                {row.duration}
              </div>
              <div className="md:col-span-2 font-display font-bold text-lg md:text-xl tabular-nums">
                {row.price}
              </div>
              <div className="md:col-span-3 text-sm text-text-on-light-muted">
                {row.included}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 caption-mono text-text-on-light-muted normal-case tracking-wide">
          Preise gültig Stand 2026 · Eidg. geprüfte Fahrlehrer
        </p>
      </div>
    </section>
  );
}
