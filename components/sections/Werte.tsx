"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/identity/SectionLabel";
import { Accent } from "@/components/identity/Accent";

const WERTE = [
  {
    num: "01",
    title: "Unkompliziert",
    body: "Digitale Lösungen stehen bei uns im Mittelpunkt – unnötige Bürokratie und versteckte Details haben keinen Platz.",
  },
  {
    num: "02",
    title: "Rundum begleitet",
    body: "Wir stehen dir vom ersten Schritt bis zum Abschluss zuverlässig zur Seite und sind jederzeit für dich erreichbar.",
  },
  {
    num: "03",
    title: "Gerecht & respektvoll",
    body: "Bei uns zählt Gleichbehandlung und ein wertschätzender Umgang auf Augenhöhe.",
  },
  {
    num: "04",
    title: "Gemeinsam stark",
    body: "Wir denken positiv, unterstützen uns gegenseitig und teilen unsere Erfolge – denn als Team erreichen wir mehr.",
  },
];

export function Werte() {
  return (
    <section
      id="werte"
      className="bg-bg-primary text-text-on-light py-24 md:py-36"
    >
      <div className="container-padded">
        <SectionLabel className="mb-10">— 04 / WERTE</SectionLabel>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
          <div className="lg:col-span-8">
            <motion.h2
              className="display-1 max-w-[18ch] text-balance"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Vier Werte. <Accent>Klar</Accent> ausformuliert.
            </motion.h2>
          </div>
          <div className="lg:col-span-4 flex lg:items-end">
            <p className="text-text-on-light-muted text-base md:text-lg leading-relaxed max-w-md">
              Keine Floskeln, kein Wertekanon-Display. Das hier ist, was uns wirklich wichtig ist.
            </p>
          </div>
        </div>

        <div className="space-y-px bg-neutral-900/10 border-y border-neutral-900/10">
          {WERTE.map((w, i) => (
            <motion.div
              key={w.num}
              className="bg-bg-primary py-10 md:py-14 px-0 md:px-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                <div className="lg:col-span-1 caption-mono text-accent text-lg tracking-normal">
                  {w.num}
                </div>
                <h3 className="lg:col-span-4 display-2 leading-tight">
                  {w.title}
                </h3>
                <p className="lg:col-span-7 text-text-on-light-muted text-base md:text-lg leading-relaxed max-w-prose">
                  {w.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 md:mt-24 font-display text-2xl md:text-4xl leading-snug text-balance max-w-[20ch]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          Ein Fahrschulerlebnis, das überzeugt.
        </motion.p>
      </div>
    </section>
  );
}
