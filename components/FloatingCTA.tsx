'use client';

import { useEffect, useState } from 'react';

// Stripe Payment Link (test mode) — Brand Shoot is the default tier for the
// floating CTA. Swap to live URL at Track D-3.
const STRIPE_BRAND_SHOOT_URL = 'https://buy.stripe.com/test_14AdRa9CpfnV5w5dWeeIw02';
const ctaLabel = 'Start your shoot →';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('section[aria-label="Mira Content Studio — hero"]');
    const contact = document.querySelector('#contact');
    if (!hero || !contact) return;

    let pastHero = false;
    let inContact = false;
    const update = () => setVisible(pastHero && !inContact);

    const heroObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        pastHero = entry.intersectionRatio < 0.2;
        update();
      },
      { threshold: [0, 0.2, 0.5, 1] }
    );
    const contactObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        inContact = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 }
    );

    heroObserver.observe(hero);
    contactObserver.observe(contact);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <a
      href={STRIPE_BRAND_SHOOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-space-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center px-space-4 py-space-2 rounded-full bg-paper text-ink text-body font-medium border border-border-faint shadow-lg hover:bg-stone-50 transition-all duration-300 no-underline motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {ctaLabel}
    </a>
  );
}
