'use client';

interface Props {
  className?: string;
  /** Override the rendered size — defaults to inheriting from parent. */
  style?: React.CSSProperties;
  /** Show "Content Studio" beneath the wordmark. */
  subline?: boolean;
  /** Color of the subline text. Defaults to a 70% opacity of currentColor. */
  sublineColor?: string;
  /** Color of the "mıra" letters. Defaults to ink — override on dark backgrounds. */
  textColor?: string;
}

/**
 * Mira wordmark — lowercase "mıra" (dotless i) in ink with a bottle-green period.
 * Optional "Content Studio" subline for footer / formal lockups.
 */
export function AnimatedWordmark({ className, style, subline = false, sublineColor, textColor }: Props) {
  return (
    <span
      className={className}
      aria-label="Mira Content Studio"
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        lineHeight: 1,
        ...style,
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'baseline',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        <span style={{ color: textColor ?? 'var(--color-ink)' }}>mıra</span>
        <span style={{ color: 'var(--color-bottle)' }}>.</span>
      </span>
      {subline && (
        <span
          style={{
            marginTop: '0.4em',
            fontSize: '0.22em',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: sublineColor ?? 'currentColor',
            opacity: sublineColor ? 1 : 0.7,
          }}
        >
          Content Studio
        </span>
      )}
    </span>
  );
}
