import { MSymbol } from "@/components/identity/MSymbol";
import { TrustStrip } from "@/components/identity/TrustStrip";

const SERVICES = [
  "Kategorie B (Auto)",
  "Kategorie BE (Auto mit Anhänger)",
  "Kategorie BPT 121/122 (Taxi)",
  "Kategorie B (Auffrischung)",
  "Kontrollfahrten (Ausl. Führerausweise)",
  "Automat oder Gangschaltung",
  "Theorieunterricht",
  "Verkehrskundeunterricht (VKU)",
  "Nothelferkurs (eLearning oder klassisch)",
];

export function Footer() {
  return (
    <footer className="relative bg-bg-dark text-text-on-dark pt-24 md:pt-32 pb-10 overflow-hidden">
      {/* Watermark */}
      <div className="absolute -bottom-12 -right-12 opacity-[0.04] pointer-events-none">
        <MSymbol variant="full" className="h-[28rem] w-auto" />
      </div>

      <div className="relative container-padded">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
          {/* Left: Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <MSymbol className="h-10 w-auto" variant="full" />
              <div className="font-display text-base leading-none flex flex-col gap-1">
                <span className="uppercase tracking-[0.05em] font-bold">
                  Verkehrsschule<span className="text-accent">.</span>
                </span>
                <span className="uppercase tracking-[0.2em] opacity-70 text-xs">
                  Mittelland
                </span>
              </div>
            </div>

            <p className="text-text-on-dark-muted text-base leading-relaxed max-w-md mb-10">
              Eine Ausbildung mit Geduld, Freundlichkeit und Flexibilität, die auch noch Spass macht.
            </p>

            <TrustStrip
              items={["Eidg. geprüfte Fahrlehrer", "Du-Form", "Faire Preise", "6 Regionen"]}
              onDark
              className="!gap-y-3"
            />
          </div>

          {/* Center: Address */}
          <div className="lg:col-span-3">
            <p className="caption-mono text-text-on-dark-muted mb-5">— Kontakt</p>
            <dl className="grid grid-cols-[1ch_1fr] gap-x-4 gap-y-3 text-sm">
              <dt className="font-mono opacity-50">A</dt>
              <dd>Baslerstrasse 67<br />4632 Trimbach</dd>
              <dt className="font-mono opacity-50">P</dt>
              <dd>
                <a href="tel:+41791361616" className="hover:text-accent transition-colors">
                  +41 79 136 16 16
                </a>
              </dd>
              <dt className="font-mono opacity-50">E</dt>
              <dd>
                <a href="mailto:info@verkehrsschule-mittelland.ch" className="hover:text-accent transition-colors break-all">
                  info@verkehrsschule-mittelland.ch
                </a>
              </dd>
              <dt className="font-mono opacity-50">W</dt>
              <dd>verkehrsschule-mittelland.ch</dd>
            </dl>
          </div>

          {/* Right: Services */}
          <div className="lg:col-span-4">
            <p className="caption-mono text-text-on-dark-muted mb-5">— Was wir machen</p>
            <ul className="text-sm space-y-2">
              {SERVICES.map((s) => (
                <li key={s} className="text-text-on-dark-muted hover:text-text-on-dark transition-colors">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 caption-mono text-text-on-dark-muted">
          <div>© 2026 Verkehrsschule Mittelland</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">Impressum</a>
            <a href="#" className="hover:text-accent transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-accent transition-colors">AGB</a>
            <a
              href="/design-system"
              className="hover:text-accent transition-colors opacity-50 hover:opacity-100"
            >
              Design-System
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
