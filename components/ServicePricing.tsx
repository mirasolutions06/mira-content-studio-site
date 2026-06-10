import { CHECKOUT_URLS } from '@/lib/checkout';

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
    tagline: 'Test the studio before you commit.',
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
    tagline: 'Fresh creative every month, before your ads fatigue. Three-month minimum.',
    features: [
      'One Brand Shoot a month + ongoing social cuts',
      'Photos and video cuts, all formats',
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
            Always below studio rates. No quote calls, no proposal decks. Pay,
            send the brief, get the work inside the window.
          </p>
        </div>

        <div className="border-y border-border-faint">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-faint">
            {tiers.map((tier) => (
              <TierColumn key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
        <p className="text-body text-ink/70 mt-space-4 text-center">
          If a frame is not working, we re-shoot at our cost.
        </p>
      </div>
    </section>
  );
}

function TierColumn({ tier }: { tier: Tier }) {
  const href = CHECKOUT_URLS[tier.name];
  return (
    <div className="flex flex-col py-space-5 md:px-space-5">
      <div className="flex items-baseline justify-between mb-space-3 min-h-[1.25rem]">
        <h3 className="text-h3 text-ink">{tier.name}</h3>
        {tier.recommended && (
          <span className="text-kicker text-bottle">recommended</span>
        )}
      </div>
      <div className="flex items-baseline gap-space-1 mb-space-3">
        <span className="text-h2 text-ink leading-none">{tier.price}</span>
        {tier.cadence && (
          <span className="text-body text-ink/70">{tier.cadence}</span>
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
