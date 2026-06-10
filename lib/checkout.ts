// ───────────────────────────────────────────────────────────────────────────
//  STRIPE CHECKOUT LINKS — single source of truth
//
//  ⚠️  CURRENTLY IN TEST MODE.
//
//  To take real orders, replace the three URLs below with your LIVE Stripe
//  Payment Links:
//      Stripe Dashboard → toggle OFF "Test mode" → Payment Links → copy each link.
//  Live links look like  https://buy.stripe.com/xxxxxxxx  (no "test_" prefix).
//
//  This is the ONLY place to change them — every buy button on the site reads
//  from here (pricing cards, the Contact CTA, and the floating CTA).
// ───────────────────────────────────────────────────────────────────────────

export const CHECKOUT_URLS: Record<string, string> = {
  'Try it': 'https://buy.stripe.com/test_cNi00kaGtejR4s18BUeIw01',
  'Brand Shoot': 'https://buy.stripe.com/test_14AdRa9CpfnV5w5dWeeIw02',
  Studio: 'https://buy.stripe.com/test_14A8wQ8ylejR4s1f0ieIw03',
};

// Brand Shoot is the default tier behind the homepage Contact CTA and the
// floating CTA.
export const BRAND_SHOOT_CHECKOUT_URL = CHECKOUT_URLS['Brand Shoot'];

// True while any link is still a Stripe *test* link. Use this to guard against
// shipping test checkout to production.
export const CHECKOUT_IS_TEST_MODE = Object.values(CHECKOUT_URLS).some((url) =>
  url.includes('/test_'),
);
