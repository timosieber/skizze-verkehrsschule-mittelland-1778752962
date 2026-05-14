"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/identity/SectionLabel";

const TEAM = [
  {
    name: "Mehmet",
    role: "Inhaber & Fahrlehrer",
    caption: "Eidg. geprüfter Fahrlehrer · Kat. B",
    bio: "Gründer der Verkehrsschule Mittelland – mit dem Ziel, die Fahrausbildung modern und zeitgemäss zu gestalten.",
  },
  {
    name: "Prparim",
    role: "Fahrlehrer Kat. B & BE",
    caption: "Auto + Anhänger",
    bio: "Fahrlehrer für Auto und Anhänger – mit Geduld, Freundlichkeit und einer ordentlichen Portion Spass.",
  },
  {
    name: "Florian",
    role: "Social Media Creator",
    caption: "Content · Community",
    bio: "Bringt unsere Geschichten und den Fahrschul-Alltag dorthin, wo unsere Schüler sind.",
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="bg-bg-primary-alt text-text-on-light py-24 md:py-32"
    >
      <div className="container-padded">
        <SectionLabel className="mb-10">— 05 / TEAM</SectionLabel>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 mb-16">
          <div className="lg:col-span-7">
            <motion.h2
              className="display-1 max-w-[14ch] text-balance"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Drei Menschen. Eine Werkstatt.
            </motion.h2>
          </div>
          <div className="lg:col-span-5 flex lg:items-end">
            <p className="text-text-on-light-muted text-base md:text-lg leading-relaxed max-w-md">
              Wir begleiten dich in ruhiger Atmosphäre – mit motivierten Leuten und einer ordentlichen Portion Spass.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {TEAM.map((m, i) => (
            <motion.figure
              key={m.name}
              className="group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="aspect-[3/4] w-full bg-neutral-900/8 rounded-lg overflow-hidden mb-5 relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="display-1 text-neutral-900/12 select-none">
                    {m.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 caption-mono text-text-on-light-muted opacity-70">
                  TODO Portrait
                </div>
              </div>

              <div className="caption-mono text-text-on-light-muted mb-2 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" />
                <span>{m.caption}</span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl mb-1">
                {m.name}
              </h3>

              <p className="text-sm text-text-on-light-muted mb-3">
                {m.role}
              </p>

              <p className="text-sm text-text-on-light-muted/90 leading-relaxed max-w-prose">
                {m.bio}
              </p>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
