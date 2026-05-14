import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Italic-Accent-Wort in Brand-Cyan – die Identity-Coherence-Komponente
 * für hervorgehobene Wörter in Headlines.
 */
export function Accent({ children, className }: Props) {
  return (
    <em className={cn("not-italic font-display italic text-accent", className)}>
      {children}
    </em>
  );
}
