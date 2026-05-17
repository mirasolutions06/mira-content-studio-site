interface Props {
  variant?: 'thin' | 'medium' | 'large';
  /** Mirror the tear vertically — use when the edge is a TOP edge (e.g. footer). */
  flip?: boolean;
  className?: string;
}

const heights = {
  thin: 'h-space-3',   // 16px between sections
  medium: 'h-space-3', // 16px on cards
  large: 'h-space-4'   // 24px on footer top
} as const;

/**
 * Mira's signature visual — a torn-paper edge SVG.
 *
 * Same path everywhere; three size variants. Color comes from `currentColor`,
 * so the parent sets it via Tailwind utility (e.g. `text-stone-200` for
 * subtle dividers, `text-bottle-deep` on a paper ground for the footer mark).
 */
export function PaperEdge({ variant = 'thin', flip = false, className = '' }: Props) {
  return (
    <svg
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox="0 0 100 8"
      className={`block w-full ${heights[variant]} ${className}`}
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <path
        d="M0 5 L3 3 L7 6 L12 2.5 L18 5 L24 2 L30 4.5 L35 6 L41 3 L47 5 L53 2 L59 6 L65 3 L71 5 L77 2.5 L83 6 L89 4 L95 3 L100 5 L100 8 L0 8 Z"
        fill="currentColor"
      />
    </svg>
  );
}
