'use client';

import { useEffect, useRef, useState } from 'react';
import { PromptText } from './PromptText';

const CHAR_MS = 55;
const TRAILING_HOLD_MS = 250;

type Props = {
  text: string;
  active: boolean;
  reduceMotion: boolean;
  onComplete: () => void;
  cycleKey: number;
};

export function TypewriterInput({ text, active, reduceMotion, onComplete, cycleKey }: Props) {
  const [typed, setTyped] = useState('');

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Track the "run" via cycleKey + active. Each run owns its own interval.
  // Refs hold the run state so re-renders never restart the loop.
  const runRef = useRef<{
    cycleKey: number;
    active: boolean;
    text: string;
    interval: ReturnType<typeof setInterval> | undefined;
    completedTimer: ReturnType<typeof setTimeout> | undefined;
    i: number;
  } | null>(null);

  useEffect(() => {
    // If a run is already active for this cycleKey, do nothing.
    const current = runRef.current;
    if (
      current &&
      current.cycleKey === cycleKey &&
      current.active === active &&
      current.text === text
    ) {
      return;
    }

    // Stop any previous run.
    if (current) {
      if (current.interval) clearInterval(current.interval);
      if (current.completedTimer) clearTimeout(current.completedTimer);
      runRef.current = null;
    }

    if (!active) {
      setTyped('');
      return;
    }

    if (reduceMotion) {
      setTyped(text);
      return;
    }

    setTyped('');
    const run = {
      cycleKey,
      active,
      text,
      interval: undefined as ReturnType<typeof setInterval> | undefined,
      completedTimer: undefined as ReturnType<typeof setTimeout> | undefined,
      i: 0,
    };
    runRef.current = run;

    run.interval = setInterval(() => {
      run.i += 1;
      setTyped(run.text.slice(0, run.i));

      if (run.i >= run.text.length) {
        if (run.interval) clearInterval(run.interval);
        run.interval = undefined;
        run.completedTimer = setTimeout(() => {
          if (runRef.current === run) {
            onCompleteRef.current();
          }
        }, TRAILING_HOLD_MS);
      }
    }, CHAR_MS);

    return () => {
      if (run.interval) clearInterval(run.interval);
      if (run.completedTimer) clearTimeout(run.completedTimer);
      if (runRef.current === run) runRef.current = null;
    };
  }, [cycleKey, active, reduceMotion, text]);

  return (
    <div className="rounded-full bg-stone-50 border border-border-faint px-space-3 py-space-2 flex items-center gap-space-2">
      <span className="text-body-sm text-ink/70 truncate flex-1">
        {typed.length > 0 ? <PromptText text={typed} /> : <span className="text-ink/40">Describe your image…</span>}
        {active && !reduceMotion && typed.length < text.length ? (
          <span className="inline-block w-[1px] h-3 bg-ink/60 ml-[1px] align-middle animate-pulse" />
        ) : null}
      </span>
      <span className="w-7 h-7 rounded-full bg-bottle text-paper flex items-center justify-center text-kicker shrink-0">
        ↑
      </span>
    </div>
  );
}
