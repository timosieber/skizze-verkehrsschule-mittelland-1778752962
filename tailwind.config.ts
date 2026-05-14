import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#f5efe7",
          "primary-alt": "#ebe5dc",
          dark: "#0a0a0a",
          "dark-alt": "#141414",
          accent: "#e7f0f7",
        },
        text: {
          "on-light": "#0a0a0a",
          "on-light-muted": "#525252",
          "on-dark": "#f5efe7",
          "on-dark-muted": "#a3a3a3",
        },
        accent: {
          DEFAULT: "#1E8FD4",
          subtle: "rgba(30, 143, 212, 0.20)",
          muted: "rgba(30, 143, 212, 0.60)",
          deep: "#1B4F7B",
          light: "#8BC8E4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Anton", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "Menlo", "monospace"],
      },
      fontSize: {
        "display-hero": ["clamp(3.5rem, 8vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-1": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "1.0", letterSpacing: "-0.015em" }],
        h1: ["clamp(2rem, 3.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        h2: ["clamp(1.5rem, 2.5vw, 2.5rem)", { lineHeight: "1.15" }],
        h3: ["clamp(1.25rem, 1.8vw, 1.75rem)", { lineHeight: "1.2" }],
      },
      letterSpacing: {
        "ultra": "0.25em",
      },
      boxShadow: {
        "glow-accent": "0 0 32px rgba(30,143,212,0.35)",
        "glow-accent-subtle": "0 0 16px rgba(30,143,212,0.20)",
        "card": "0 4px 12px rgba(0,0,0,0.05)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.40)",
      },
      animation: {
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
        "grid-fade": "grid-fade 12s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.06" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
