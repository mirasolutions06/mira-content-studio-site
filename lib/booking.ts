// ───────────────────────────────────────────────────────────────────────────
//  CALENDLY KICKOFF-CALL LINK — single source of truth
//
//  Shown on /start/thanks (AFTER payment) so a new client can book an optional
//  onboarding call. It deliberately does NOT appear on the sales pages — the
//  pre-purchase flow stays self-serve ("no quote calls, no proposal decks").
//
//  ▶ To enable: paste your Calendly event URL below, e.g.
//      https://calendly.com/miracontentstudio/kickoff
//    While this is an empty string the kickoff card simply doesn't render —
//    nothing breaks, the page just shows the brief form on its own.
// ───────────────────────────────────────────────────────────────────────────

export const KICKOFF_CALENDLY_URL: string = '';
