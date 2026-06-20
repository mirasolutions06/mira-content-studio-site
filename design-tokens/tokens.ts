/* Mira Content Studio — Tailwind theme tokens
 *
 * Typed counterpart to design-tokens/tokens.css. Imported by tailwind.config.ts:
 *
 *   import { tokens } from './design-tokens/tokens'
 *   export default { theme: { extend: tokens } }
 *
 * Generated from the brand system's color and type spec. Keep in sync with
 * tokens.css; do not introduce values that aren't part of the brand palette.
 */

export const tokens = {
  colors: {
    paper: '#fbfaf6',
    'paper-pure': '#ffffff',
    'stone-50': '#f3efe5',
    'stone-200': '#ece9df',
    'stone-500': '#857c6b',
    bottle: '#1f4d34',
    'bottle-deep': '#0d2c1c',
    ink: '#0e110d',
    'border-faint': 'rgba(14, 17, 13, 0.06)',
  },

  fontFamily: {
    sans: [
      'var(--font-inter-tight, "Inter Tight")',
      'Inter Tight',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Helvetica',
      'Arial',
      'sans-serif',
    ],
    mono: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Consolas',
      '"Liberation Mono"',
      'monospace',
    ],
  },

  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Tailwind fontSize accepts a tuple [size, { lineHeight, letterSpacing, fontWeight }].
  // Each role here is self-contained — using `text-h1` sets size, leading, tracking,
  // and weight in one utility.
  fontSize: {
    'display-xl': ['5rem',      { lineHeight: '1.0', letterSpacing: '-0.045em', fontWeight: '600' }],
    'display':    ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.0', letterSpacing: '-0.040em', fontWeight: '600' }],
    'h1':         ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.2', letterSpacing: '-0.035em', fontWeight: '600' }],
    'h2':         ['1.875rem',  { lineHeight: '1.2', letterSpacing: '-0.025em', fontWeight: '600' }],
    'h3':         ['1.375rem',  { lineHeight: '1.2', letterSpacing: '-0.020em', fontWeight: '600' }],
    'body-lg':    ['1.125rem',  { lineHeight: '1.5', letterSpacing: '-0.005em', fontWeight: '400' }],
    'body':       ['1rem',      { lineHeight: '1.5', letterSpacing: '-0.003em', fontWeight: '400' }],
    'body-sm':    ['0.875rem',  { lineHeight: '1.5', letterSpacing: '0',         fontWeight: '400' }],
    'kicker':     ['0.6875rem', { lineHeight: '1.6', letterSpacing: '0.10em',    fontWeight: '600' }],
    'mono':       ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0',         fontWeight: '400' }],
  },

  // Standalone scales for cases where size and tracking/leading are set separately.
  letterSpacing: {
    'display-xl': '-0.045em',
    'display':    '-0.040em',
    'h1':         '-0.035em',
    'h2':         '-0.025em',
    'h3':         '-0.020em',
    'body-lg':    '-0.005em',
    'body':       '-0.003em',
    'body-sm':    '0',
    'kicker':     '0.10em',
  },

  lineHeight: {
    display: '1.0',
    heading: '1.2',
    body:    '1.5',
    meta:    '1.6',
  },

  // Spacing scale (8px base, one 4px micro-step). Apply to padding/margin/gap
  // utilities — e.g. `p-space-4`, `gap-space-3`, `py-space-8`. Every layout value
  // in components must come from this scale.
  spacing: {
    'space-1':  '4px',
    'space-2':  '8px',
    'space-3':  '16px',
    'space-4':  '24px',
    'space-5':  '32px',
    'space-6':  '48px',
    'space-7':  '64px',
    'space-8':  '96px',
    'space-9':  '144px',
    'space-10': '192px',
  },
} as const
