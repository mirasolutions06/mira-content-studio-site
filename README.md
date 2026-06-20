# Mira Content Studio — Marketing Site

The marketing site for Mira Content Studio, a done-for-you creative studio producing
product photography and campaign video for DTC e-commerce brands.

**Live:** [miracontent.studio](https://miracontent.studio)

A static-exported Next.js site built around a single design-token source, a self-hosted
type system, and a motion-led hero. Deployed to Cloudflare as static assets.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4, driven entirely by design tokens |
| Motion | Framer Motion |
| Fonts | Inter Tight, self-hosted via `next/font` (no external font requests) |
| Output | Static export (`output: 'export'`), no server runtime |
| Hosting | Cloudflare |

## What's worth a look

- **One source for color and type.** Every color, font size, weight, and spacing step lives
  in [`design-tokens/`](design-tokens/) as both CSS custom properties (`tokens.css`) and a
  typed Tailwind theme (`tokens.ts`). Components reference tokens only, never raw hex. The two
  files are generated from the brand spec, so the site and the rest of the brand system never
  drift.
- **Motion-led hero.** [`components/hero/`](components/hero/) composes a typed-prompt input, a
  streaming-style chat sequence, and a Ken Burns crossfade between result stills, choreographed
  from a single timeline in [`lib/heroChoreography.ts`](lib/heroChoreography.ts).
- **Data-driven work grid.** Case studies are plain JSON in
  [`content/projects/`](content/projects/), read at build time by
  [`lib/projects.ts`](lib/projects.ts). Adding a project is a file, not a code change.
- **Built for sharing.** Generated `sitemap.ts` and `robots.ts`, an Open Graph card, and a
  self-hosted favicon set. The OG image is built from a source photo by
  [`scripts/build-og-image.py`](scripts/build-og-image.py).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Structure

```
app/                 App Router routes (home, privacy, terms, intake thank-you)
components/           Section + UI components
  hero/              The animated prompt-to-image hero
content/projects/    Case-study data (JSON)
design-tokens/       Color + type tokens — the single styling source
lib/                 Data loading, checkout/booking links, hero choreography
public/              Imagery, video loops, favicons, OG card
scripts/             Build helpers (OG image, image tiles)
```

## A note on the imagery

The brands shown in the portfolio (GJeans, Avenir, Botanica, Mare, Objet, Tildeo) are demo
work created to fill the studio's launch portfolio. They are illustrative, not real clients.
