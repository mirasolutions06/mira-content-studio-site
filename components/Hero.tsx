'use client';

import { useLayoutEffect, useRef } from 'react';

export function Hero() {
  const slotRef = useRef<HTMLDivElement | null>(null);

  // Build the <video> element imperatively so muted/autoplay/playsinline
  // are set BEFORE any <source> child attaches. Safari's autoplay
  // eligibility is decided at insertion time and React's render order
  // doesn't reliably set attributes before children.
  useLayoutEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;

    // Reduced motion: keep the server-rendered poster, never fetch the video.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const v = document.createElement('video');
    v.muted = true;
    v.defaultMuted = true;
    v.autoplay = true;
    v.loop = true;
    v.playsInline = true;
    v.controls = false;
    v.preload = 'metadata';
    v.poster = '/hero/hero-poster.jpg';
    v.setAttribute('muted', '');
    v.setAttribute('autoplay', '');
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    v.setAttribute('disablepictureinpicture', '');
    v.setAttribute('disableremoteplayback', '');
    v.setAttribute('aria-hidden', 'true');
    v.dataset.heroLoop = 'true';
    // Below md: object-position 75% lands the model in the centre of a portrait
    //   container (the source is 16:9 with the subject right-of-centre, so pure
    //   `center` pushes her off to the right and `right` clips her to the left edge).
    // md and up: shift fully right so the left half is clear for the text column.
    v.className = 'absolute inset-0 h-full w-full object-cover object-[75%_50%] md:object-right';

    const webm = document.createElement('source');
    webm.src = '/hero/hero-loop.webm';
    webm.type = 'video/webm';
    v.appendChild(webm);

    const mp4 = document.createElement('source');
    mp4.src = '/hero/hero-loop.mp4';
    mp4.type = 'video/mp4';
    v.appendChild(mp4);

    slot.appendChild(v);

    const kick = () => v.play().catch(() => {});
    const tryPlay = () => {
      v.muted = true;
      v.play().catch(() => {
        window.addEventListener('pointerdown', kick, { once: true });
        window.addEventListener('keydown', kick, { once: true });
        window.addEventListener('scroll', kick, { once: true, passive: true });
        window.addEventListener('touchstart', kick, { once: true, passive: true });
      });
    };
    const onVisible = () => {
      if (document.visibilityState === 'visible' && v.paused) v.play().catch(() => {});
    };

    // play() initiates data fetch even with preload='metadata' — call it
    // directly rather than waiting on canplay (which never fires while the
    // browser idles at metadata).
    tryPlay();
    document.addEventListener('visibilitychange', onVisible);

    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('pointerdown', kick);
      window.removeEventListener('keydown', kick);
      window.removeEventListener('scroll', kick);
      window.removeEventListener('touchstart', kick);
      v.pause();
      v.removeAttribute('src');
      v.load();
      slot.removeChild(v);
    };
  }, []);

  return (
    <section
      className="relative bg-paper text-ink overflow-hidden"
      aria-label="Mira Content Studio — hero"
    >
      <div ref={slotRef} className="absolute inset-0" aria-hidden="true">
        {/* Server-rendered poster: the hero paints from the initial HTML
         *  instead of waiting for JS to hydrate and inject the video.
         *  The injected <video> layers on top once it can play. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/hero-poster.jpg"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[75%_50%] md:object-right"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40 md:h-56 z-[5]"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--color-paper) 60%, transparent) 55%, var(--color-paper) 100%)',
        }}
      />
      {/* Text scrim — paper-toned vertical fade behind the centred headline so
       *  the type lifts off the model's face instead of fighting it. Strong in
       *  the text band (~65% paper), feathered at the edges so it reads as soft
       *  light, not a wash. Hidden from lg upward, where the text sits in the
       *  left half and doesn't overlap her. */}
      <div
        className="lg:hidden pointer-events-none absolute inset-0 z-[5]"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, transparent 8%, color-mix(in srgb, var(--color-paper) 65%, transparent) 35%, color-mix(in srgb, var(--color-paper) 65%, transparent) 65%, transparent 92%)',
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-space-4 sm:px-space-6 py-space-8 min-h-[80vh] flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="max-w-md md:max-w-2xl">
          <h1 className="text-display font-semibold text-ink">
            <span className="block">Brand content<span className="text-bottle">.</span></span>
            <span className="block">Without the agency<span className="text-bottle">.</span></span>
          </h1>
          <p className="mt-space-5 text-body text-ink max-w-md">
            Product photography and campaign video for e-commerce founders.
            One brief in, one finished campaign out.
          </p>
          <div className="mt-space-6 flex flex-wrap justify-center md:justify-start gap-space-2">
            <a
              href="#pricing"
              className="inline-flex items-center px-space-4 py-space-2 rounded-full bg-bottle text-paper text-body font-medium hover:bg-bottle-deep transition-colors no-underline"
            >
              Start your shoot →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
