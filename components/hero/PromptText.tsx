/**
 * Renders a prompt string with @-mentions highlighted in bottle-green.
 * Splits on @-tokens (e.g. `@dropper`, `@model`) and wraps them in a styled span.
 * Used by both the typewriter (partial typing) and the rendered chat card.
 *
 * Partial mentions match too (e.g. `@dro` while typing) — the regex allows
 * zero-or-more word chars after the `@`.
 */
export function PromptText({ text }: { text: string }) {
  const segments = text.split(/(@[\w-]*)/g);
  return (
    <>
      {segments.map((seg, i) =>
        seg.startsWith('@') ? (
          <span key={i} className="text-bottle font-medium">{seg}</span>
        ) : (
          <span key={i}>{seg}</span>
        ),
      )}
    </>
  );
}
