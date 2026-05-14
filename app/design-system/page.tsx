import type { Metadata } from "next";
import Link from "next/link";
import { MSymbol } from "@/components/identity/MSymbol";
import { Logo } from "@/components/identity/Logo";
import { Pill } from "@/components/identity/Pill";
import { SectionLabel } from "@/components/identity/SectionLabel";
import { Accent } from "@/components/identity/Accent";
import { TrustStrip } from "@/components/identity/TrustStrip";

export const metadata: Metadata = {
  title: "Design-System · Verkehrsschule Mittelland",
  description: "Foundations, Identity, Komponenten und Tonalitäts-Logik der Marken-Skizze.",
  robots: {
    index: false,
    follow: false,
  },
};

const COLORS = [
  { name: "Accent", hex: "#1E8FD4", note: "Brand-Cyan · aus Original-Logo erhalten" },
  { name: "Accent Deep", hex: "#1B4F7B", note: "Trust-Anchor für Pricing" },
  { name: "Accent Light", hex: "#8BC8E4", note: "M-Symbol Top-Layer" },
  { name: "BG Dark", hex: "#0a0a0a", note: "Hero · Wow · Footer" },
  { name: "BG Primary", hex: "#f5efe7", note: "Standorte · Werte · Team" },
  { name: "BG Primary Alt", hex: "#ebe5dc", note: "Angebote · Team-Background" },
];

const TYPE_SAMPLES = [
  { tag: "Display Hero (clamp 3.5–9rem)", className: "display-hero", text: "Spass macht." },
  { tag: "Display 1 (clamp 2.5–6rem)", className: "display-1", text: "Sechs Regionen." },
  { tag: "Display 2 (clamp 2–4rem)", className: "display-2", text: "Trimbach SO" },
  { tag: "H2 Display", className: "font-display text-2xl", text: "Acht Schritte zum Ausweis." },
  { tag: "Body LG (1.125rem)", className: "text-lg", text: "Aktueller Nothelferkurs am 22.–23. Mai." },
  { tag: "Body (1rem)", className: "text-base", text: "Wir holen dich beim ersten Termin zuhause ab." },
  { tag: "Caption Mono", className: "caption-mono", text: "— 01 / STANDORTE" },
];

export default function DesignSystem() {
  return (
    <main className="bg-bg-primary text-text-on-light min-h-screen">
      {/* Hero */}
      <section className="bg-bg-dark text-text-on-dark py-16 md:py-24 grid-bg relative overflow-hidden">
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full pointer-events-none"
             style={{ background: "radial-gradient(closest-side, rgba(30,143,212,0.30), transparent 70%)" }} />

        <div className="relative container-padded grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <SectionLabel onDark className="mb-6">— Design-System · v1</SectionLabel>
            <h1 className="display-1 max-w-[16ch] text-balance">
              Tokens, Identity, Komponenten — <Accent>Form</Accent> + Substanz.
            </h1>
            <p className="mt-8 max-w-2xl text-text-on-dark-muted text-base md:text-lg leading-relaxed">
              Die visuelle Sprache der Verkehrsschule Mittelland: aus dem Original-Brand abgeleitet, auf Tier-1-Modernität gehoben. Profile <strong className="text-text-on-dark">Energetic-Performance</strong> für die 17-25-Du-Form-Zielgruppe.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Pill variant="dark" pulse>Live · Marken-Skizze</Pill>
              <Pill variant="dark">Profile: Energetic-Performance</Pill>
              <Pill variant="dark">Hero-Pattern: H3 · Massive Quote</Pill>
            </div>
          </div>

          <div className="lg:col-span-4 flex lg:items-center lg:justify-end">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 max-w-sm">
              <MSymbol className="h-12 w-auto mb-4" variant="full" />
              <p className="caption-mono text-text-on-dark-muted mb-2">Brand-Mark · M-Symbol</p>
              <p className="text-sm text-text-on-dark-muted leading-relaxed">
                Drei gestaffelte Schichten. Aus dem Original-Logo erhalten, geometrisch geschärft. Erscheint im Header, Footer-Watermark, Loading-State.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundations · Colors */}
      <section className="py-20 md:py-28 container-padded">
        <SectionLabel className="mb-10">— 01 / FOUNDATIONS · COLORS</SectionLabel>
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <h2 className="lg:col-span-7 display-2 max-w-[18ch] text-balance">
            Cyan-Family aus dem Original. Modernisiert, nicht verschoben.
          </h2>
          <p className="lg:col-span-5 flex lg:items-end text-text-on-light-muted text-base leading-relaxed">
            Hue-Distance zum Original: 0–20°. Drei Tonalitäten + drei Backgrounds.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COLORS.map((c) => (
            <div key={c.name} className="bg-bg-primary-alt rounded-lg overflow-hidden border border-neutral-900/8">
              <div
                className="h-32 w-full border-b border-neutral-900/5"
                style={{ backgroundColor: c.hex }}
              />
              <div className="p-5">
                <p className="font-display text-xl mb-1">{c.name}</p>
                <p className="caption-mono text-text-on-light-muted normal-case tracking-wide mb-3">{c.hex}</p>
                <p className="text-sm text-text-on-light-muted">{c.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 md:py-28 bg-bg-primary-alt">
        <div className="container-padded">
          <SectionLabel className="mb-10">— 02 / TYPOGRAPHY</SectionLabel>
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <h2 className="lg:col-span-7 display-2 max-w-[18ch] text-balance">
              Anton Display + Inter Body + IBM Plex Mono.
            </h2>
            <p className="lg:col-span-5 flex lg:items-end text-text-on-light-muted text-base leading-relaxed">
              Sans-Display mit Personality. Kein Editorial-Serif – das würde die Tonalität zu konservativ verschieben.
            </p>
          </div>

          <div className="space-y-8 bg-bg-primary rounded-lg border border-neutral-900/8 p-8 md:p-12">
            {TYPE_SAMPLES.map((s) => (
              <div key={s.tag} className="grid lg:grid-cols-12 gap-4 items-baseline">
                <p className="lg:col-span-3 caption-mono text-text-on-light-muted normal-case tracking-wide">{s.tag}</p>
                <p className={`lg:col-span-9 ${s.className}`}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tonal Pacing */}
      <section className="py-20 md:py-28 container-padded">
        <SectionLabel className="mb-10">— 03 / TONAL PACING</SectionLabel>
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <h2 className="lg:col-span-7 display-2 max-w-[18ch] text-balance">
            Pattern P2-mixed. Dark, Cream, Accent — drei Rhythmen.
          </h2>
          <p className="lg:col-span-5 flex lg:items-end text-text-on-light-muted text-base leading-relaxed">
            Hero und Wow-Moment auf Dark-Bühne. Standorte, Pricing, Werte, Team auf Cream. Termine im Accent-Tint. Footer Dark.
          </p>
        </div>

        <div className="flex items-stretch h-32 rounded-lg overflow-hidden border border-neutral-900/10">
          {[
            { bg: "bg-bg-dark", label: "Hero" },
            { bg: "bg-bg-primary", label: "Standorte" },
            { bg: "bg-bg-primary-alt", label: "Angebote" },
            { bg: "bg-bg-dark", label: "Dein Weg" },
            { bg: "bg-bg-primary", label: "Werte" },
            { bg: "bg-bg-primary-alt", label: "Team" },
            { bg: "bg-bg-accent", label: "Termine" },
            { bg: "bg-bg-dark", label: "Footer" },
          ].map((s, i) => (
            <div
              key={i}
              className={`${s.bg} flex-1 flex items-end p-3`}
            >
              <span className={`caption-mono ${["bg-bg-dark"].includes(s.bg) ? "text-text-on-dark-muted" : "text-text-on-light-muted"} normal-case tracking-wide`}>
                {i + 1}. {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Identity-Komponenten */}
      <section className="py-20 md:py-28 bg-bg-primary-alt">
        <div className="container-padded">
          <SectionLabel className="mb-10">— 04 / IDENTITY-KOMPONENTEN</SectionLabel>

          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <h2 className="lg:col-span-7 display-2 max-w-[18ch] text-balance">
              Drei wiederkehrende Mikro-Elemente.
            </h2>
            <p className="lg:col-span-5 flex lg:items-end text-text-on-light-muted text-base leading-relaxed">
              M-Symbol + Cyan-Punkt + Status-Dot. Tauchen an mind. sieben Stellen auf der Page auf.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ComponentCard label="Logo">
              <Logo size="md" />
            </ComponentCard>

            <ComponentCard label="Pill · Live mit Pulse">
              <Pill variant="accent" pulse>8 Plätze frei</Pill>
            </ComponentCard>

            <ComponentCard label="Pill · Standard">
              <Pill variant="light">Kategorie B · ab 17 J.</Pill>
            </ComponentCard>

            <ComponentCard label="Section-Label">
              <SectionLabel>— 03 / DEIN WEG</SectionLabel>
            </ComponentCard>

            <ComponentCard label="Accent · Italic-Cyan-Wort">
              <p className="display-2">
                Vier Werte. <Accent>Klar</Accent> ausformuliert.
              </p>
            </ComponentCard>

            <ComponentCard label="Trust-Strip">
              <TrustStrip
                items={["Eidg. geprüfte Fahrlehrer", "Du-Form", "Faire Preise", "6 Regionen"]}
                onDark={false}
                className="!text-text-on-light-muted"
              />
            </ComponentCard>
          </div>
        </div>
      </section>

      {/* Voice & Tonalität */}
      <section className="py-20 md:py-28 container-padded">
        <SectionLabel className="mb-10">— 05 / VOICE & TONALITÄT</SectionLabel>
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <h2 className="lg:col-span-7 display-2 max-w-[18ch] text-balance">
            Du-Form. Warm-energetisch mit sachlicher Tiefe.
          </h2>
          <p className="lg:col-span-5 flex lg:items-end text-text-on-light-muted text-base leading-relaxed">
            100% übernommen aus dem Original. Schweizer Hochdeutsch: doppel-s statt Eszett, Guillemets « » statt deutsche Anführungs-Zeichen, 1'000.– als Tausender-Trenner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-bg-primary-alt rounded-lg p-8">
            <p className="caption-mono text-text-on-light-muted mb-4">Original-Statement (verbatim)</p>
            <p className="font-display text-2xl md:text-3xl leading-snug">
              "Eine Ausbildung mit Geduld, Freundlichkeit und Flexibilität, die auch noch <Accent>Spass</Accent> macht."
            </p>
            <p className="caption-mono text-text-on-light-muted normal-case tracking-wide mt-4">
              Aus Hero-Subline der Original-Site
            </p>
          </div>

          <div className="bg-bg-dark text-text-on-dark rounded-lg p-8">
            <p className="caption-mono text-text-on-dark-muted mb-4">Verbotene Wörter</p>
            <ul className="text-sm space-y-2 text-text-on-dark-muted">
              <li>nahtlos · innovativ · ganzheitlich</li>
              <li>massgeschneidert · revolutionär · einzigartig</li>
              <li>hochwertig · erstklassig · professionell (ohne Beleg)</li>
              <li>persönlich (als Versprechen) · authentisch</li>
              <li>Em-Dash-Inflation (mehr als 1 pro Absatz)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hero-Pattern */}
      <section className="py-20 md:py-28 bg-bg-primary-alt">
        <div className="container-padded">
          <SectionLabel className="mb-10">— 06 / HERO-PATTERN H3</SectionLabel>
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <h2 className="lg:col-span-7 display-2 max-w-[18ch] text-balance">
              Massive Editorial Quote. Aus dem Original.
            </h2>
            <p className="lg:col-span-5 flex lg:items-end text-text-on-light-muted text-base leading-relaxed">
              Statt Standard-Headline+CTA: die Original-About-Phrase wird Hero. Bedeutung statt Sales-Pitch.
            </p>
          </div>

          <div className="bg-bg-primary border border-neutral-900/10 rounded-lg p-8">
            <p className="caption-mono text-text-on-light-muted mb-6">Pattern-Reference</p>
            <p className="text-sm leading-relaxed max-w-3xl">
              Tier-1-Hero-Pattern <strong>H3 · Massive Editorial Quote</strong> (REF.digital / Floema). Im Energetic-Performance-Profile auf Dark-BG mit Italic-Cyan-Accent. Live-Status-Pill mit Pulse oben rechts. Subtle animated Grid 5% als Background-Pattern. Cyan-Glow von oben-links als atmosphärischer Marker.
            </p>
            <p className="caption-mono text-text-on-light-muted normal-case tracking-wide mt-6">
              Source: scraped_pages[0] · About-Statement + Hero-Subline + Live-Termin
            </p>
          </div>
        </div>
      </section>

      {/* Was übernommen / modernisiert / hinzugefügt */}
      <section className="py-20 md:py-28 container-padded">
        <SectionLabel className="mb-10">— 07 / REDESIGN · ÜBERSICHT</SectionLabel>
        <div className="grid lg:grid-cols-3 gap-px bg-neutral-900/10 border border-neutral-900/10 rounded-lg overflow-hidden">
          <div className="bg-bg-primary p-8">
            <p className="caption-mono text-accent mb-4">— Erhalten</p>
            <h3 className="font-display text-2xl mb-4">Substanz</h3>
            <ul className="text-sm text-text-on-light-muted space-y-2 leading-relaxed">
              <li>· Cyan-Blau-Family aus Original-Logo</li>
              <li>· Du-Form 100% (Original-Voice)</li>
              <li>· Alle 4 Werte verbatim</li>
              <li>· 8 Steps "Dein Weg" verbatim</li>
              <li>· Transparente Preise (95.– / 180.– / 190.– / 140.– / 99.–)</li>
              <li>· Team-Namen + Rollen</li>
              <li>· 6 Regionen + Kanton-Mapping</li>
              <li>· Hero-Quote: "Geduld, Freundlichkeit, Flexibilität... Spass"</li>
            </ul>
          </div>

          <div className="bg-bg-primary p-8">
            <p className="caption-mono text-accent mb-4">— Modernisiert</p>
            <h3 className="font-display text-2xl mb-4">Form</h3>
            <ul className="text-sm text-text-on-light-muted space-y-2 leading-relaxed">
              <li>· Layout: Editorial-Long-Form statt Card-Grid</li>
              <li>· Typografie: Anton + Inter + IBM Plex Mono (statt Default-Sans)</li>
              <li>· Hero: Dark-Mode statt Weiss-Default</li>
              <li>· Pricing: Editorial-Tabelle statt 6 Cards</li>
              <li>· Wow-Moment: Pin-Scroll-Choreography</li>
              <li>· Tonal-Pacing: 3 Dark-Brüche</li>
              <li>· Animations: Framer-Motion · Reveals + Pulse</li>
            </ul>
          </div>

          <div className="bg-bg-primary p-8">
            <p className="caption-mono text-accent mb-4">— Hinzugefügt</p>
            <h3 className="font-display text-2xl mb-4">Identity</h3>
            <ul className="text-sm text-text-on-light-muted space-y-2 leading-relaxed">
              <li>· M-Symbol als wiederkehrender Brand-Mark</li>
              <li>· Cyan-Punkt nach "Verkehrsschule"</li>
              <li>· Pulse-Status-Dot in Live-Pills</li>
              <li>· Italic-Cyan auf Spass / Klar / Jetzt</li>
              <li>· Section-Strich-Marker in Cyan (6×)</li>
              <li>· Trust-Strip mit 4 Status-Dots</li>
              <li>· Editorial Footer-Address A/P/E/W-Grid</li>
              <li>· Footer-Watermark M-Symbol</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Site */}
      <section className="py-16 bg-bg-dark text-text-on-dark text-center">
        <div className="container-padded">
          <Link
            href="/"
            className="inline-flex items-center gap-3 caption-mono hover:text-accent transition-colors"
          >
            <span className="block h-px w-12 bg-accent" />
            <span>Zurück zur Skizze</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ComponentCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-bg-primary rounded-lg border border-neutral-900/8 p-8 flex flex-col gap-6">
      <p className="caption-mono text-text-on-light-muted normal-case tracking-wide">{label}</p>
      <div className="flex-1 flex items-center min-h-[5rem]">{children}</div>
    </div>
  );
}
