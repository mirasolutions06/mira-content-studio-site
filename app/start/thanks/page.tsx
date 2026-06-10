import { Suspense } from 'react';
import Script from 'next/script';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { TallyEmbed } from './TallyEmbed';
import { KICKOFF_CALENDLY_URL } from '@/lib/booking';

export const metadata = {
  title: 'Brief — Mira Content Studio',
  description: 'Your payment is in. Tell us what to shoot.',
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-paper px-space-4 py-space-8 min-h-[80vh]">
          <div className="mx-auto max-w-3xl">
            <div className="mb-space-6 text-center">
              <div className="text-kicker text-bottle mb-space-2">Brief</div>
              <h1 className="text-h1 text-ink">
                Payment received<span className="text-bottle">.</span> Now the brief<span className="text-bottle">.</span>
              </h1>
              <p className="text-body text-ink/70 mt-space-3 max-w-xl mx-auto">
                Tell us what to shoot. Once you submit, we&apos;ll be in touch within one working day.
              </p>
            </div>
            <Suspense fallback={<div className="h-[900px]" />}>
              <TallyEmbed />
            </Suspense>

            {KICKOFF_CALENDLY_URL ? (
              <div className="mt-space-7 border-t border-border-faint pt-space-6 text-center">
                <div className="text-kicker text-bottle mb-space-2">Optional</div>
                <h2 className="text-h3 text-ink">Talk it through first.</h2>
                <p className="text-body text-ink/70 mt-space-2 max-w-md mx-auto">
                  Book a 15-minute kickoff call and we&apos;ll align on looks, references, and
                  timing before the shoot starts.
                </p>
                <a
                  href={KICKOFF_CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-space-4 inline-flex items-center px-space-4 py-space-2 rounded-full border border-bottle text-bottle text-body font-medium hover:bg-bottle hover:text-paper transition-colors no-underline"
                >
                  Book a kickoff call →
                </a>
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
    </>
  );
}
