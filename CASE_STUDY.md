# Case Study: Mira Content Studio

## What it is

Mira Content Studio is a done-for-you creative studio that produces product photography and
campaign video for DTC e-commerce brands. The studio runs on a private content engine that
handles generation and orchestration. This repository is the public face: the marketing site,
the design system it is built on, the portfolio data, and the launch assets.

**Live site:** [miracontent.studio](https://miracontent.studio)

## The two layers

The product is split into a private engineering layer and a public presentation layer. They
are intentionally separate repositories.

- **Private engine (not in this repo).** Turns a customer brief into finished assets:
  prompt and skill orchestration, provider tools for image and video generation, human
  approval gates, revisions, and publishing. It holds the prompts, the orchestration logic,
  the provider integrations, and customer data, so it stays private. A high-level,
  no-secrets overview lives in [`docs/private-engine-overview.md`](docs/private-engine-overview.md).
- **Public showcase (this repo).** The customer-facing static site that presents the work,
  explains the offer, and takes the order. This is the layer recruiters and clients can
  read end to end.

For how a brief flows from one layer to the other, see
[`docs/architecture.md`](docs/architecture.md).

## What this repo demonstrates

This repository is front-end and brand-system proof, not engine proof. Concretely:

- **Front-end engineering.** A Next.js 15 App Router site in strict TypeScript, with a
  motion-led hero built from a single choreography timeline, responsive layout, and an
  accessible, SEO-ready structure (generated sitemap and robots, Open Graph card, self-hosted
  fonts with no external requests).
- **A design system, enforced.** Color, type, weight, and spacing live once in
  [`design-tokens/`](design-tokens/) as paired CSS variables and a typed Tailwind theme.
  Components consume tokens only. Nothing hardcodes a hex value, so the site cannot drift from
  the brand.
- **Static export and deployment.** The site builds to a fully static `out/` directory
  (`output: 'export'`) and is served from Cloudflare. No server runtime, fast to host, cheap
  to run, and a small attack surface.
- **Typed content structure.** Portfolio case studies are plain JSON validated against a
  TypeScript type and read at build time. Content is data, not markup, so the work grid grows
  by adding a file.
- **Product presentation and commerce, end to end.** The path from visitor to paying customer
  is real, not a mockup: visitor, to a Stripe Payment Link
  ([`lib/checkout.ts`](lib/checkout.ts)), to a structured Tally brief, to an optional kickoff
  call ([`lib/booking.ts`](lib/booking.ts)). Each link has a single source of truth, and a
  `CHECKOUT_IS_TEST_MODE` guard stops test checkout from shipping to production unnoticed.
- **Social output layer.** The work is not only presented on the site. Selected outputs are
  packaged for Instagram and other social surfaces with a lightweight brand system: a small
  `m.` watermark on image/video output, a Mira brand-card slide for carousels, and 4:5 or
  9:16 channel crops. The source renderers live in the private studio workbench; this public
  repo includes curated examples and the high-level operating model in
  [`docs/social-output-system.md`](docs/social-output-system.md).

## How to read it quickly

1. [`README.md`](README.md) for the stack and the highlights.
2. [`design-tokens/`](design-tokens/) and [`components/hero/`](components/hero/) for the most
   representative engineering.
3. [`content/projects/`](content/projects/) for the data-driven content model.
4. [`docs/social-output-system.md`](docs/social-output-system.md) for the Instagram-ready output layer.
5. The live site at [miracontent.studio](https://miracontent.studio) for the result.
