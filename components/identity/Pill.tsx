"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  variant?: "light" | "dark" | "accent" | "live";
  className?: string;
  pulse?: boolean;
};

export function Pill({ children, variant = "light", className, pulse = false }: Props) {
  const base = "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.7rem] font-mono uppercase tracking-[0.15em] whitespace-nowrap";

  const variantClasses = {
    light: "bg-neutral-900/5 text-neutral-800 border border-neutral-900/10",
    dark: "bg-white/8 text-text-on-dark border border-white/10 backdrop-blur",
    accent: "bg-accent/10 text-accent border border-accent/30",
    live: "bg-white/8 text-text-on-dark border border-white/15 backdrop-blur shadow-glow-accent-subtle",
  };

  return (
    <span className={cn(base, variantClasses[variant], className)}>
      {pulse && (
        <span className="relative inline-flex h-1.5 w-1.5">
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-accent"
            animate={{ scale: [1, 2.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
