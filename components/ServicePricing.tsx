// Stripe Payment Links — test mode. Swap to live URLs at Track D-3.
const STRIPE_URLS: Record<string, string> = {
  'Try it': 'https://buy.stripe.com/test_cNi00kaGtejR4s18BUeIw01',
  'Brand Shoot': 'https://buy.stripe.com/test_14AdRa9CpfnV5w5dWeeIw02',
  Studio: 'https://buy.stripe.com/test_14A8wQ8ylejR4s1f0ieIw03',
};

interface Tier {
  name: string;
  price: string;
  cadence?: string;
  tagline: string;
  features: string[];
  recommended?: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Try it',
    price: '£99',
    tagline: 'Test the engine before you commit.',
    features: [
      '20 photos + one 10-second video',
      '2 looks · square and vertical',
      '2-day delivery',
      '2 revisions',
    ],
  },
  {
    name: 'Brand Shoot',
    price: '£349',
    tagline: 'A full campaign, ready to ship.',
    features: [
      '35 photos + three 10-second videos',
      '4 looks · all formats',
      '4-day delivery',
      'Unlimited revisions',
    ],
    recommended: true,
  },
  {
    name: 'Studio',
    price: '£699',
    cadence: '/mo',
    tagline: 'A Brand Shoot every month. Three-month minimum.',
    features: [
      'One Brand Shoot a month',
      'Ongoing social cuts',
      'Priority queue',
      'Cancel any time after month three',
    ],
  },
];

export function ServicePricing() {
  return (
    <section id="pricing" className="bg-paper px-space-4 py-space-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-space-7 text-center">
          <div className="text-kicker text-bottle mb-space-2">Service & price</div>
          <h2 className="text-h1 text-ink max-w-3xl mx-auto">
            Three ways to work<span className="text-bottle">.</span> Pick yours<span className="text-bottle">.</span>
          </h2>
          <p className="text-body text-ink/70 mt-space-3 max-w-xl mx-auto">
            Always below studio rates. No quote calls, no proposal decks.
          </p>
        </div>

        <div className="border-y border-border-faint">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-faint">
            {tiers.map((tier) => (
              <TierColumn key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TierColumn({ tier }: { tier: Tier }) {
  const href = STRIPE_URLS[tier.name];
  return (
    <div className="flex flex-col py-space-5 md:px-space-5">
      <div className="flex items-baseline justify-between mb-space-3 min-h-[1.25rem]">
        <h3 className="text-h3 text-ink">{tier.name}</h3>
        {tier.recommended && (
          <span className="text-kicker text-bottle">most picked</span>
        )}
      </div>
      <div className="flex items-baseline gap-space-1 mb-space-3">
        <span className="text-h2 text-ink leading-none">{tier.price}</span>
        {tier.cadence && (
          <span className="text-body-lg text-stone-500">{tier.cadence}</span>
        )}
      </div>
      <p className="text-body text-ink/70 mb-space-4 max-w-prose">{tier.tagline}</p>
      <ul className="space-y-space-2 text-body-sm text-ink/80 mb-space-5 flex-1">
        {tier.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start text-body font-medium text-bottle hover:text-bottle-deep transition-colors no-underline"
      >
        Start <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
