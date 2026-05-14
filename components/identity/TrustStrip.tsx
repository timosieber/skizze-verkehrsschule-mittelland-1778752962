import { cn } from "@/lib/cn";

type Props = {
  items: string[];
  className?: string;
  onDark?: boolean;
};

export function TrustStrip({ items, className, onDark = true }: Props) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-6 gap-y-2 caption-mono",
        onDark ? "text-text-on-dark-muted" : "text-text-on-light-muted",
        className,
      )}
    >
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" />
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
}
