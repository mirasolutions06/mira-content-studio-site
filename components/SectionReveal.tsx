'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

/**
 * Fade-and-rise reveal for homepage sections.
 *
 * The hidden state is applied by CSS only under `html.js` (set by the inline
 * script in layout.tsx before first paint), so the static HTML ships fully
 * visible — no JS, broken JS, or slow hydration can blank the page below the
 * fold. Reduced-motion users get the sections without animation.
 */
export function SectionReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in-view');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          io.disconnect();
        }
      },
      { rootMargin: '-80px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="section-reveal">
      {children}
    </div>
  );
}
