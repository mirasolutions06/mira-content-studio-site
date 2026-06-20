# Private Engine Overview

The generation engine behind Mira Content Studio lives in a separate, private repository. This
document describes its shape at a high level. It contains no code, no prompts, and no
credentials. The intent is to make the public showcase legible without exposing the part of
the product that is the studio's IP.

## What it does

The engine turns a customer brief into finished product photography and campaign video. A run
moves from brief to a planned set of shots, to generated assets, through human review and
revisions, to delivery and, where relevant, publishing.

## How it is built, conceptually

- **Claude as the director.** Claude reads the brief and plans the work: the shot list, the
  look, and the generation prompts for each asset. It is the orchestration layer that decides
  what to produce rather than a single one-shot prompt.
- **Provider tools, coordinated.** Image and video generation run through external provider
  tools (for example, video generation services such as Higgsfield) exposed to the engine as
  tools. The engine selects and sequences them per asset, so each job uses the right provider
  for the shot rather than a fixed pipeline.
- **Skills and prompt templates.** Repeatable parts of the work (framing a hero shot, building
  a carousel, compositing a short video) are captured as reusable skills and prompt templates.
  This is what keeps quality consistent across jobs and makes the studio's style portable.
- **Approval gates.** Generated assets are not auto-delivered. A human reviews each set, and
  revisions loop back into generation until the work matches the brief. The gate is a
  deliberate quality control, not a bottleneck to remove.
- **Publishing.** Approved assets can be published to Instagram through the official
  content-publishing API, which fetches media from public URLs.

## What is private, and why

| Kept private | Reason |
|---|---|
| Prompts and skills | They encode the studio's craft and are the core competitive asset |
| Orchestration logic | How briefs become shot lists and provider calls is the product |
| Provider integrations and keys | They carry credentials and contractual terms |
| Customer briefs and assets | Client work and data are confidential |

The public showcase in this repository is the inverse: it is meant to be read. It demonstrates
the front end, the design system, the content model, and the commerce flow, while the engine
that does the generation stays where it belongs.

For the end-to-end flow, see [`architecture.md`](architecture.md). For what the public layer
demonstrates, see [`../CASE_STUDY.md`](../CASE_STUDY.md).
