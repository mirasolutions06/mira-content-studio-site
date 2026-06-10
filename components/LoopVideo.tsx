'use client';

import { useEffect, useRef, useState } from 'react';

const FADE_MS = 380;

/**
 * Muted loop video that fetches nothing until first asked to play.
 *
 * `playing` is controlled by the parent (hover on pointer devices, in-view on
 * touch). The element isn't mounted at all until the first play request, so
 * the page never pays for video bytes the visitor doesn't look at. Once
 * mounted it stays mounted — pausing keeps the decoded frames warm for the
 * next hover.
 *
 * Browser-native `loop` causes a visible jump because the last frame rarely
 * matches the first. We fade opacity to 0 over the last FADE_MS and back in
 * over the first FADE_MS; the still image underneath reads as a brief
 * crossfade rather than a flash.
 */
export function LoopVideo({
  src,
  poster,
  playing,
  className = '',
}: {
  src: string;
  poster: string;
  playing: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (playing && !started) setStarted(true);
  }, [playing, started]);

  useEffect(() => {
    const v = ref.current;
    if (!v || !started) return;
    if (playing) v.play().catch(() => {});
    else v.pause();
  }, [playing, started]);

  useEffect(() => {
    if (!started) return;
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
  }, [started]);

  if (!started) return null;

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
      // Floor at 0.05 while playing: Chrome auto-pauses muted autoplay video
      // it considers invisible, and opacity:0 counts as invisible.
      style={{
        opacity: playing ? Math.max(opacity, 0.05) : 0,
        transition: 'opacity 300ms ease-out',
      }}
    />
  );
}
