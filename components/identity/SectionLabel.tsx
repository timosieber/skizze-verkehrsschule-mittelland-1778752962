import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
};

export function SectionLabel({ children, onDark = false, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 caption-mono",
        onDark ? "text-text-on-dark-muted" : "text-text-on-light-muted",
        className,
      )}
    >
      <span className="block h-px w-12 bg-accent" />
      <span>{children}</span>
    </div>
  );
}
