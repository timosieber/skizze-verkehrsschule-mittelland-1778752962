"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionLabel } from "@/components/identity/SectionLabel";

const STEPS = [
  { num: "01", title: "Nothelferkurs", body: "Der Besuch ist bereits vor dem 17. Geburtstag möglich.", caption: "ab 16 J. · 2 Tage" },
  { num: "02", title: "Lernfahrausweis bestellen", body: "Formular bei der Gemeinde, Augentest beim Optiker, Formular zurück zur Gemeinde.", caption: "bei Gemeinde · Augentest" },
  { num: "03", title: "Anmeldung Theorieprüfung", body: "Das Strassenverkehrsamt schickt dir den Anmeldetalon.", caption: "via Strassenverkehrsamt" },
  { num: "04", title: "Theorieprüfung", body: "Frühestens 4 Wochen vor dem 17. Geburtstag möglich.", caption: "ab 17 J. minus 4 Wochen" },
  { num: "05", title: "Verkehrskundeunterricht (VKU)", body: "Bei uns – 4 × 120 Minuten, interaktiv, zentral in Trimbach.", caption: "8 Lektionen · CHF 190.–" },
  { num: "06", title: "Fahrlektionen", body: "Mit deinem Fahrlehrer oder einer Begleitperson. Wir holen dich ab und bringen dich zurück.", caption: "ab CHF 95.– / 45 Min" },
  { num: "07", title: "Praktische Führerprüfung", body: "Anmeldung beim Strassenverkehrsamt des Kantons – PIN-Code und PID kriegst du dort.", caption: "via Strassenverkehrsamt" },
  { num: "08", title: "WAB-Kurs", body: "Die Weiterausbildung nach bestandener Prüfung.", caption: "innerhalb 12 Monaten" },
];

export function Weg() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Progress-Linie wächst mit Scroll
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="weg"
      ref={ref}
      className="relative bg-bg-dark text-text-on-dark"
      style={{ minHeight: `${STEPS.length * 70}vh` }}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="container-padded pt-24 md:pt-28">
          <SectionLabel onDark className="mb-6">— 03 / DEIN WEG</SectionLabel>
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <h2 className="lg:col-span-8 display-1 max-w-[18ch] text-balance">
              Acht Schritte. Vom Nothelferkurs bis zum Ausweis.
            </h2>
            <p className="lg:col-span-4 text-text-on-dark-muted text-base md:text-lg leading-relaxed flex lg:items-end">
              Wir begleiten dich bei jedem.
            </p>
          </div>
        </div>

        {/* Steps Container */}
        <div className="flex-1 relative container-padded pb-10">
          <div className="relative grid grid-cols-[3.5rem_1px_1fr] md:grid-cols-[6rem_1px_1fr] gap-x-6 md:gap-x-10 max-w-5xl mx-auto h-full">
            {/* Progress Line */}
            <div className="hidden md:block col-start-2 row-span-full relative">
              <div className="absolute inset-0 w-px bg-white/10" />
              <motion.div
                className="absolute top-0 left-0 w-px bg-accent shadow-glow-accent"
                style={{ height: progressHeight }}
              />
            </div>

            {/* Steps */}
            <div className="col-span-3 md:col-start-3 md:col-end-4 flex flex-col justify-center gap-12 md:gap-14 py-6 md:py-12">
              {STEPS.map((step, i) => {
                const stepStart = i / STEPS.length;
                const stepEnd = (i + 1) / STEPS.length;

                return (
                  <StepRow
                    key={step.num}
                    step={step}
                    scrollYProgress={scrollYProgress}
                    start={stepStart}
                    end={stepEnd}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="container-padded pb-8 md:pb-10 caption-mono text-text-on-dark-muted">
          Mit uns kommst du zum Ziel.
        </div>
      </div>
    </section>
  );
}

function StepRow({
  step,
  scrollYProgress,
  start,
  end,
}: {
  step: (typeof STEPS)[number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.08)],
    [0.25, 1, 1, 0.25],
  );
  const x = useTransform(scrollYProgress, [start - 0.05, start], [12, 0]);
  const numColor = useTransform(scrollYProgress, [start, end], ["#1E8FD4", "#1E8FD4"]);

  return (
    <motion.div
      className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-x-4 md:gap-x-8 items-start"
      style={{ opacity, x }}
    >
      <motion.span
        className="display-2 leading-none tabular-nums font-bold"
        style={{ color: numColor }}
      >
        {step.num}
      </motion.span>
      <div className="space-y-2 md:space-y-3">
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight">
          {step.title}
        </h3>
        <p className="text-text-on-dark-muted text-sm md:text-base leading-relaxed max-w-prose">
          {step.body}
        </p>
        <p className="caption-mono text-text-on-dark-muted/80 normal-case tracking-wider">
          {step.caption}
        </p>
      </div>
    </motion.div>
  );
}
