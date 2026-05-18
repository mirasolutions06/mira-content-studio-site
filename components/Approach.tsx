/**
 * Approach — narrative bridge between the work gallery (Carousel) and the
 * offer tiers (ServicePricing). Says what the studio actually does and how
 * it thinks about the work, in voice. Sits between "look at the work" and
 * "here's how to buy" so the reader has earned the right to look at price.
 *
 * Voice ref: brand/03-voice/tone.md (short declaratives, no marketing tics,
 * sentence-case, periods only).
 */
export function Approach() {
  return (
    <section id="approach" className="bg-paper px-space-4 py-space-8 sm:py-space-9">
      <div className="mx-auto max-w-3xl">
        <div className="mb-space-6 text-center">
          <div className="text-kicker text-bottle mb-space-2">Approach</div>
          <h2 className="text-h1 text-ink">
            A real shoot starts with a brief, not a prompt
            <span className="text-bottle">.</span>
          </h2>
        </div>
        <div className="space-y-space-4 text-body-lg text-ink/80 max-w-prose mx-auto">
          <p>
            You tell us the brand, the products, the references. We art-direct
            the shoot. Light, composition, hero frame, supporting frames. We
            deliver the finished campaign. Made with AI. Directed by people.
            Either alone falls short.
          </p>
          <p>
            No subscriptions. No prompt-writing. No revision treadmills. You
            brief us once. The work comes back finished, on time, sized for
            every channel.
          </p>
        </div>
      </div>
    </section>
  );
}
