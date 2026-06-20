# Social Output System

Mira Content Studio's public Instagram surface is
[@miracontentstudio](https://instagram.com/miracontentstudio). The account is an output
surface for selected work, not the whole product.

The private studio workbench contains the renderers that package finished assets for social.
This public repository keeps only curated examples and the operating model, so the showcase is
legible without exposing source prompts, provider workflow, or unpublished client material.

## What It Packages

- **Feed images.** Output images are cropped to Instagram-ready 4:5 frames and receive a small
  `m.` watermark in the corner. The mark switches between ink and paper variants so it stays
  visible without dominating the image.
- **Carousel cards.** Each carousel can pair the image output with a Mira brand card: paper
  background, Inter Tight type, bottle-green accent, short brief headline, and the studio URL.
- **Breakdown carousels.** Longer posts can explain the work in beats: brief, light,
  consistency, detail, and a closing call-to-action card.
- **Video surfaces.** 9:16 video outputs can receive the Mira wordmark for Reels, Stories, or
  paid-social cuts. Publishing is still an operator step; this repo does not contain a live
  Instagram publishing bot.

## Examples

![Zappy carousel slide with Mira branding](screenshots/social-zappy-carousel.jpg)

![Mira brand card](screenshots/social-brand-card.jpg)

![Breakdown carousel example](screenshots/social-carousel-proof.jpg)

## Brand Rules

The social output layer uses the same brand system as the site:

- Colors come from the Mira palette: paper `#fbfaf6`, ink `#0e110d`, bottle `#1f4d34`, and
  stone neutrals.
- Type is Inter Tight across site, cards, captions, and marks.
- Captions avoid hype language and keep the brief or production constraint in focus.
- Client work is only posted with explicit approval. Demo work is labeled and treated as launch
  portfolio material.

## Boundary

This repository proves the public presentation layer: site, design system, content structure,
and channel-ready examples. The generation engine, social renderers, prompts, customer briefs,
and provider integrations remain private.
