"use client";

import { motion } from "framer-motion";
import { Pill } from "@/components/identity/Pill";
import { Accent } from "@/components/identity/Accent";
import { SectionLabel } from "@/components/identity/SectionLabel";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-bg-dark text-text-on-dark overflow-hidden"
    >
      {/* Subtile animierte Grid-Background */}
      <div className="absolute inset-0 grid-bg animate-grid-fade pointer-events-none" />

      {/* Cyan-Glow oben-links als atmosphärischer Marker */}
      <div
        className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,143,212,0.30), transparent 70%)",
        }}
      />

      {/* Top-Right Live-Status */}
      <div className="absolute top-24 md:top-28 right-6 md:right-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Pill variant="live" pulse>
            Live · Nothelferkurs 22.–23. Mai · 8 Plätze frei
          </Pill>
        </motion.div>
      </div>

      {/* Center Stage – Massive Quote */}
      <div className="relative flex-1 flex flex-col justify-center container-padded pt-32 md:pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionLabel onDark className="mb-8">— 00 / DEINE FAHRSCHULE</SectionLabel>
        </motion.div>

        <motion.h1
          className="display-hero max-w-[16ch] text-balance"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Eine Ausbildung mit Geduld, Freundlichkeit und Flexibilität, die auch noch <Accent>Spass</Accent> macht.
        </motion.h1>

        <motion.p
          className="mt-10 max-w-2xl text-text-on-dark-muted text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Verkehrsschule Mittelland – deine Auto-Fahrschule in Trimbach, Olten, Aarau, Basel, Baselland und Langenthal.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#termine"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-bg-dark shadow-glow-accent"
          >
            Probelektion 95.– buchen
          </a>
          <a
            href="https://wa.me/41791361616"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-text-on-dark transition-colors hover:bg-white/10"
          >
            WhatsApp +41 79 136 16 16
          </a>
        </motion.div>
      </div>

      {/* Bottom-Indicator */}
      <div className="container-padded pb-8 md:pb-12 caption-mono text-text-on-dark-muted">
        <div className="flex items-center justify-between">
          <span>— 01 STANDORTE · Scroll</span>
          <span className="hidden md:inline opacity-60">SO · AG · BS · BL · BE</span>
        </div>
      </div>
    </section>
  );
}
