import { BRAND_SHOOT_CHECKOUT_URL } from '@/lib/checkout';

export function Contact() {
  return (
    <section id="contact" className="bg-paper text-ink border-t border-stone-200">
      <div className="mx-auto max-w-6xl px-space-4 py-space-9 text-center">
        <div className="mb-space-6">
          <div className="text-kicker text-bottle mb-space-2">Contact</div>
          <h2 className="text-h1 text-ink max-w-3xl mx-auto">
            Your product<span className="text-bottle">.</span> Live this week<span className="text-bottle">.</span>
          </h2>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <a
            href={BRAND_SHOOT_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-space-4 py-space-2 rounded-full bg-bottle text-paper text-body font-medium hover:bg-bottle-deep transition-colors no-underline"
          >
            Start your shoot →
          </a>
          <p className="mt-space-3 text-body text-ink/70">
            Brand Shoot, £349. Four-day delivery.
          </p>
          <p className="mt-space-4 text-body text-ink/70">
            Or write first —{' '}
            <a
              href="mailto:hello@miracontent.studio"
              className="text-bottle hover:text-bottle-deep underline underline-offset-[3px] decoration-1"
            >
              hello@miracontent.studio
            </a>
            . We reply within one working day.
          </p>
        </div>
      </div>
    </section>
  );
}
