"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/identity/SectionLabel";

const REGIONS = [
  { name: "Trimbach", canton: "SO", isHQ: true, address: "Baslerstrasse 67, 4632 Trimbach", services: "Fahrstunden · VKU · Nothelferkurs" },
  { name: "Olten", canton: "SO", isHQ: false, services: "Fahrstunden · VKU · Nothelferkurs" },
  { name: "Aarau", canton: "AG", isHQ: false, services: "Fahrstunden" },
  { name: "Basel", canton: "BS", isHQ: false, services: "Fahrstunden" },
  { name: "Baselland", canton: "BL", isHQ: false, services: "Fahrstunden" },
  { name: "Langenthal", canton: "BE", isHQ: false, services: "Fahrstunden" },
];

export function Standorte() {
  return (
    <section
      id="standorte"
      className="bg-bg-primary text-text-on-light py-24 md:py-32"
    >
      <div className="container-padded">
        <SectionLabel className="mb-10">— 01 / STANDORTE</SectionLabel>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 mb-16">
          <div className="lg:col-span-7">
            <motion.h2
              className="display-1 max-w-[14ch] text-balance"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Sechs Regionen. Ein Team.
            </motion.h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="text-text-on-light-muted text-base md:text-lg leading-relaxed max-w-md">
              Hauptwerkstatt in Trimbach, präsent in Olten, Aarau, Basel, Baselland und Langenthal.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900/10 border border-neutral-900/10 rounded-lg overflow-hidden">
          {REGIONS.map((r, i) => (
            <motion.div
              key={r.name}
              className="bg-bg-primary p-6 md:p-8 group hover:bg-bg-primary-alt transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 caption-mono text-text-on-light-muted mb-4">
                <span className="size-1.5 rounded-full bg-accent" />
                <span>{r.canton}</span>
                {r.isHQ && <span className="ml-auto text-accent">HQ</span>}
              </div>

              <h3 className="display-2 mb-3">{r.name}</h3>

              {r.address && (
                <p className="caption-mono text-text-on-light-muted mb-3 normal-case tracking-normal">
                  {r.address}
                </p>
              )}

              <p className="text-sm text-text-on-light-muted">
                {r.services}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
