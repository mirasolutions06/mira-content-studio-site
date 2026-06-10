'use client';

import { useEffect, useState } from 'react';

const ctaLabel = 'See pricing →';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('section[aria-label="Mira Content Studio — hero"]');
    const pricing = document.querySelector('#pricing');
    const contact = document.querySelector('#contact');
    if (!hero || !pricing || !contact) return;

    let pastHero = false;
    let inPricing = false;
    let inContact = false;
    const update = () => setVisible(pastHero && !inPricing && !inContact);

    const heroObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        pastHero = entry.intersectionRatio < 0.2;
        update();
      },
      { threshold: [0, 0.2, 0.5, 1] }
    );
    const pricingObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        inPricing = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 }
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
    pricingObserver.observe(pricing);
    contactObserver.observe(contact);
    return () => {
      heroObserver.disconnect();
      pricingObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <a
      href="/#pricing"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-space-4 left-1/2 -translate-x-1/2 z-30 inline-flex items-center px-space-4 py-space-2 rounded-full bg-paper text-ink text-body font-medium border border-border-faint shadow-brand hover:bg-stone-50 transition-all duration-300 no-underline motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {ctaLabel}
    </a>
  );
}
