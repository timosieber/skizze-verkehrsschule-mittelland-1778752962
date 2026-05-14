import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  variant?: "full" | "mono" | "outline";
};

/**
 * Brand-Mark: M-Symbol abgeleitet aus dem Original-Logo der Verkehrsschule Mittelland.
 * Drei gestaffelte parallelogramm-artige Schichten in Cyan-Blau-Tönen.
 */
export function MSymbol({ className, variant = "full" }: Props) {
  if (variant === "mono") {
    return (
      <svg
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-6 w-auto", className)}
        aria-hidden
      >
        <path d="M5 55 L25 5 L50 35 L75 5 L95 55 L80 55 L62 25 L50 50 L38 25 L20 55 Z" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "outline") {
    return (
      <svg
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-6 w-auto", className)}
        aria-hidden
      >
        <path d="M5 55 L25 5 L50 35 L75 5 L95 55 L80 55 L62 25 L50 50 L38 25 L20 55 Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-auto", className)}
      aria-hidden
    >
      <path d="M0 58 L20 8 L45 38 L40 50 L20 58 Z" fill="#8BC8E4" opacity="0.9" />
      <path d="M5 55 L25 5 L50 35 L45 50 L25 55 Z" fill="#1E8FD4" />
      <path d="M50 35 L75 5 L95 55 L80 55 L62 25 Z" fill="#1B4F7B" />
    </svg>
  );
}
