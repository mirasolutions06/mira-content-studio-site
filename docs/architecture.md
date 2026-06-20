# Architecture

How a customer brief becomes finished content, and where this repository sits in that flow.

```
Customer brief / Stripe / Tally
        |
        v
Private content engine
        |
        v
Claude + Higgsfield / provider tools / skills / prompts
        |
        v
Review + revisions
        |
        v
Final assets / Instagram / delivery
        |
        v
Public showcase site
```

## The stages

1. **Customer brief / Stripe / Tally.** A customer pays through a Stripe Payment Link and
   submits a structured brief through a Tally form. The public site in this repo owns this
   entry point: pricing, the intake flow, and the checkout and booking links.
2. **Private content engine.** The brief enters the private engine, which orchestrates the
   whole production run. This is the studio's core IP and is kept in a separate, private
   repository.
3. **Claude + provider tools, skills, prompts.** The engine uses Claude to direct the shoot
   (reading the brief, planning shots, writing the generation prompts) and calls provider
   tools for image and video generation. Reusable skills and prompt templates keep output
   consistent from one job to the next.
4. **Review and revisions.** Generated assets pass through human approval gates before
   anything is delivered. Revisions loop back into generation until the work meets the brief.
5. **Final assets / Instagram / delivery.** Approved assets are delivered to the customer and,
   where relevant, published to Instagram through the content-publishing API.
6. **Public showcase site.** Selected work feeds back into the portfolio shown on this site,
   closing the loop between what the engine produces and what new customers see.

## What is public versus private

| Layer | Repository | Contents |
|---|---|---|
| Presentation | **This repo (public)** | Marketing site, design system, portfolio data, launch assets |
| Generation | Engine (private) | Prompts, skills, orchestration, provider integrations, customer data |

The boundary is deliberate. The presentation layer is safe to read in full, which makes it a
useful public artifact. The generation layer holds prompts, credentials, and customer data, so
it stays private. The high-level overview of that layer is in
[`private-engine-overview.md`](private-engine-overview.md).
