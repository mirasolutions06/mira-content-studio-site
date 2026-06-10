'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { heroProjects } from '@/lib/heroChoreography';
import { KenBurnsCrossfade } from '@/components/hero/KenBurnsCrossfade';
import { ChatHistory, type TurnStatus } from '@/components/hero/ChatHistory';
import { TypewriterInput } from '@/components/hero/TypewriterInput';

// LLM-chat phase machine, per project:
//   typing   — typewriter typing project[active]'s prompt
//   gen      — prompt card visible, "generating" dots below it
//   shown    — output card revealed below prompt
// After project N's `shown` holds, advance to project N+1's `typing`.
// After the LAST project shown, transition to `done` — terminal, no restart.
type Phase = 'typing' | 'gen' | 'shown' | 'done';

const GEN_TO_SHOWN_MS = 1000;       // dots → output reveal
const SHOWN_TO_NEXT_MS = 2900;      // hold revealed before next project starts typing

export function WorkflowVideo() {
  const reduceMotion = !!useReducedMotion();
  const projectCount = heroProjects.length;

  const [activeIndex, setActiveIndex] = useState(0);
  // Start the first project pre-revealed so the panel isn't empty on load.
  const [phase, setPhase] = useState<Phase>('shown');
  const [lastShownIndex, setLastShownIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = undefined;
  }, []);

  // Warm every demo image on mount. The choreography mounts each <Image> only
  // at its reveal, so on mobile connections the fetch otherwise starts mid-
  // animation and the card paints half-loaded.
  useEffect(() => {
    heroProjects.forEach((p) => {
      [p.outputSrc, ...p.refs.map((r) => r.src)].forEach((src) => {
        if (src) new window.Image().src = src;
      });
    });
  }, []);

  // Reduced-motion: render fully populated, no animation.
  useEffect(() => {
    if (!reduceMotion) return;
    clearTimer();
    setActiveIndex(projectCount - 1);
    setPhase('done');
  }, [reduceMotion, projectCount, clearTimer]);

  // Phase transitions.
  useEffect(() => {
    if (reduceMotion) return;
    clearTimer();

    if (phase === 'gen') {
      timerRef.current = setTimeout(() => setPhase('shown'), GEN_TO_SHOWN_MS);
      return clearTimer;
    }

    if (phase === 'shown') {
      timerRef.current = setTimeout(() => {
        if (activeIndex >= projectCount - 1) {
          setPhase('done');
        } else {
          setActiveIndex((i) => i + 1);
          setPhase('typing');
        }
      }, SHOWN_TO_NEXT_MS);
      return clearTimer;
    }

    // `done` is terminal — no further transitions.
    return clearTimer;
  }, [phase, activeIndex, projectCount, reduceMotion, clearTimer]);

  const handleTypewriterComplete = useCallback(() => {
    setPhase('gen');
  }, []);

  // Track the most recently revealed project so we can keep showing it on
  // the LEFT during the next project's typing/gen phase.
  useEffect(() => {
    if (phase === 'shown') setLastShownIndex(activeIndex);
  }, [phase, activeIndex]);

  const handleSelectOutput = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  // Per-turn statuses for the chat panel.
  // - i < activeIndex: revealed (completed turns)
  // - i === activeIndex: depends on phase
  // - phase 'done': all revealed (terminal state after final project)
  const statuses: (TurnStatus | null)[] = heroProjects.map((_, i) => {
    if (phase === 'done') return 'revealed';
    if (i < activeIndex) return 'revealed';
    if (i > activeIndex) return null;
    // i === activeIndex
    if (phase === 'typing') return null;
    if (phase === 'gen') return 'generating';
    if (phase === 'shown') return 'revealed';
    return null;
  });

  // Left panel:
  //   - Manual selection always wins (user clicked an output).
  //   - During 'shown' / 'done': mirror the activeIndex.
  //   - During 'typing' / 'gen': keep showing the last-revealed project so
  //     the LEFT only updates AFTER generation completes.
  let leftProjectIndex: number | null;
  if (selectedIndex !== null) {
    leftProjectIndex = selectedIndex;
  } else if (phase === 'shown' || phase === 'done') {
    leftProjectIndex = activeIndex;
  } else {
    leftProjectIndex = lastShownIndex;
  }

  // Typewriter is active during 'typing' phase.
  const isTyping = phase === 'typing';
  const currentPrompt = isTyping ? heroProjects[activeIndex].prompt : '';
  const typewriterActive = isTyping && !reduceMotion;

  return (
    <section id="how-it-works" className="bg-paper px-space-4 py-space-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-space-6">
          <div className="text-kicker text-bottle mb-space-2">Process</div>
          <h2 className="text-h1 text-ink">
            Any reference in<span className="text-bottle">.</span> Brand content out<span className="text-bottle">.</span>
          </h2>
          <p className="text-body text-ink/70 mt-space-3 max-w-xl mx-auto">
            Send anything you have — text, images, or video. We return a finished, on-brand campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-3 bg-stone-50 rounded-[28px] border border-border-faint p-space-3">
          <KenBurnsCrossfade
            projects={heroProjects}
            projectIndex={leftProjectIndex}
            reduceMotion={reduceMotion}
          />
          <div className="rounded-2xl bg-paper border border-border-faint p-space-3 sm:p-space-4 flex flex-col gap-space-3 aspect-[4/5]">
            <div className="text-kicker text-ink/70">Studio session</div>
            <ChatHistory
              projects={heroProjects}
              statuses={statuses}
              reduceMotion={reduceMotion}
              selectedIndex={selectedIndex}
              onSelect={handleSelectOutput}
            />
            <TypewriterInput
              text={currentPrompt}
              active={typewriterActive}
              reduceMotion={reduceMotion}
              onComplete={handleTypewriterComplete}
              cycleKey={activeIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
