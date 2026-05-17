// Stripe Payment Link (test mode) — Brand Shoot is the default tier for the
// homepage Contact CTA. Swap to live URL at Track D-3.
const STRIPE_BRAND_SHOOT_URL = 'https://buy.stripe.com/test_14AdRa9CpfnV5w5dWeeIw02';

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-paper text-ink"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, var(--color-paper) 0%, var(--color-stone-200) 100%)',
      }}
    >
      <div className="mx-auto max-w-6xl px-space-4 py-space-9 text-center">
        <div className="mb-space-6">
          <div className="text-kicker text-bottle mb-space-2">Contact</div>
          <h2 className="text-h1 text-ink max-w-3xl mx-auto">
            Your product<span className="text-bottle">.</span> Live this week<span className="text-bottle">.</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <a
            href={STRIPE_BRAND_SHOOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-space-4 py-space-2 rounded-full bg-bottle text-paper text-body font-medium hover:bg-bottle-deep transition-colors no-underline"
          >
            Start your shoot →
          </a>
        </div>
      </div>
    </section>
  );
}
