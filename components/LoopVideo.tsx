'use client';

import { useEffect, useRef, useState } from 'react';

const FADE_MS = 380;

/**
 * Autoplaying muted loop video that softens the loop seam.
 *
 * Browser-native `loop` causes a visible jump because the last frame
 * rarely matches the first. We fade opacity to 0 over the last FADE_MS
 * and back to 1 over the first FADE_MS. The tile underneath uses the
 * poster image as a CSS background, so the dip reads as a brief
 * crossfade to the still cover (also from the same brand) rather than a
 * flash to bg color.
 *
 * Single video element per tile keeps us under Chrome's concurrent
 * decoder cap — a two-video crossfade hits that limit and freezes lanes.
 */
export function LoopVideo({
  src,
  poster,
  className = '',
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    let raf = 0;
    const tick = () => {
      const t = v.currentTime;
      const d = v.duration;
      if (d > 0 && Number.isFinite(d)) {
        const msRemaining = (d - t) * 1000;
        const msFromStart = t * 1000;
        if (msRemaining < FADE_MS) {
          setOpacity(Math.max(0, msRemaining / FADE_MS));
        } else if (msFromStart < FADE_MS) {
          setOpacity(Math.min(1, msFromStart / FADE_MS));
        } else {
          setOpacity(1);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    />
  );
}
