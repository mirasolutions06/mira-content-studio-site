# site/

Mira Content Studio's marketing site. Fresh Next.js 15 + React + Tailwind 4 scaffold.

## Status

Not yet scaffolded. Phase 5 in the plan.

## When scaffolding

```bash
npx create-next-app@latest site --ts --tailwind --app --src-dir --import-alias "@/*"
```

Run from `/Users/mj/Projects/mira-studio/` — output should land directly in this folder (the empty placeholder folder will be replaced).

## Routes

- `/` — Home (hero, what we make, three case studies, CTA)
- `/work` — Portfolio grid
- `/work/[slug]` — Single case study (reads from `../portfolio/case-XX-{slug}/`)
- `/approach` — How we work, honest about the Director AI
- `/contact` — Structured intake brief form

## Tokens

`app/globals.css` must import `../../brand/04-tokens/tokens.css` and the Tailwind config must extend from `../../brand/04-tokens/tailwind.tokens.ts`. No hardcoded colors anywhere in components — see `../CLAUDE.md` rule 6.
