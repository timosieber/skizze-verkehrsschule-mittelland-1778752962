import { cn } from "@/lib/cn";
import { MSymbol } from "./MSymbol";

type Props = {
  className?: string;
  onDark?: boolean;
  size?: "sm" | "md" | "lg";
};

export function Logo({ className, onDark = false, size = "md" }: Props) {
  const symbolSize =
    size === "sm" ? "h-5" : size === "lg" ? "h-9" : "h-7";

  const textSize =
    size === "sm"
      ? "text-[0.7rem]"
      : size === "lg"
        ? "text-base"
        : "text-xs";

  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <MSymbol className={cn(symbolSize, "w-auto")} variant="full" />
      <div
        className={cn(
          "font-display tracking-tight leading-none flex flex-col gap-0.5",
          textSize,
          onDark ? "text-text-on-dark" : "text-text-on-light",
        )}
      >
        <span className="font-bold uppercase tracking-[0.05em]">
          Verkehrsschule
          <span className="text-accent">.</span>
        </span>
        <span className="opacity-70 uppercase tracking-[0.18em]">Mittelland</span>
      </div>
    </div>
  );
}
