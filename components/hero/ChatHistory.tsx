'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { HeroProject } from '@/lib/heroChoreography';
import { LoadingDots } from './LoadingDots';
import { PromptText } from './PromptText';

export type TurnStatus = 'sent' | 'generating' | 'revealed';

const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const;

type Props = {
  projects: HeroProject[];
  /**
   * Per-project status. `null` means the turn is not yet visible in the chat.
   * Length must match projects.length.
   */
  statuses: (TurnStatus | null)[];
  reduceMotion: boolean;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
};

function RefThumb({ src, alt }: { src: string | null; alt: string }) {
  return (
    <div className="relative w-8 h-8 rounded-md overflow-hidden bg-stone-200 border border-border-faint">
      {src ? (
        <Image src={src} alt={alt} fill sizes="32px" className="object-cover" />
      ) : (
        <span className="sr-only">{alt}</span>
      )}
    </div>
  );
}

function PromptCard({ project }: { project: HeroProject }) {
  return (
    <div className="rounded-2xl border border-border-faint bg-paper p-space-3 flex flex-col gap-space-2">
      <div className="flex items-center justify-between gap-space-2">
        <div className="flex gap-space-1">
          {project.refs.map((ref, t) => (
            <RefThumb key={t} src={ref.src} alt={ref.alt} />
          ))}
        </div>
        <span className="text-kicker text-bottle shrink-0">
          {project.brand}
        </span>
      </div>
      <p className="text-body-sm text-ink leading-snug">
        <PromptText text={project.prompt} />
      </p>
    </div>
  );
}

function OutputCard({
  project,
  onClick,
  selected,
}: {
  project: HeroProject;
  onClick: () => void;
  selected: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show ${project.brand} on the left`}
      className={`relative aspect-[4/5] w-full max-w-[170px] rounded-2xl overflow-hidden bg-stone-200 self-start cursor-pointer transition-all duration-300 ${
        selected
          ? 'border-2 border-bottle ring-2 ring-bottle/20'
          : 'border border-border-faint hover:border-bottle/40'
      }`}
    >
      {project.outputSrc ? (
        <Image
          src={project.outputSrc}
          alt={project.outputAlt}
          fill
          sizes="170px"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-h3 text-ink/30 px-space-3 text-center">
            {project.brand}
          </span>
        </div>
      )}
    </button>
  );
}

function ChatTurn({
  project,
  index,
  status,
  reduceMotion,
  selected,
  onSelect,
}: {
  project: HeroProject;
  index: number;
  status: TurnStatus;
  reduceMotion: boolean;
  selected: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <motion.div
      className="flex flex-col gap-space-2"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        ease: EASE_OUT_QUART,
      }}
    >
      <PromptCard project={project} />
      <AnimatePresence mode="wait">
        {status === 'generating' ? (
          <motion.div
            key="dots"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: EASE_OUT_QUART }}
          >
            <LoadingDots reduceMotion={reduceMotion} />
          </motion.div>
        ) : status === 'revealed' ? (
          <motion.div
            key="output"
            initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: EASE_OUT_QUART,
            }}
          >
            <OutputCard
              project={project}
              selected={selected}
              onClick={() => onSelect(index)}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export function ChatHistory({
  projects,
  statuses,
  reduceMotion,
  selectedIndex,
  onSelect,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever a status change adds visible content.
  // Stringify so a new array each render with the same content doesn't fire.
  const statusKey = statuses?.join(',') ?? '';
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, [statusKey, reduceMotion]);

  return (
    <div
      ref={scrollRef}
      className="flex flex-col gap-space-4 min-h-0 flex-1 overflow-y-auto pr-space-1"
    >
      {projects.map((project, i) => {
        const status = statuses?.[i];
        if (status === null || status === undefined) return null;
        return (
          <ChatTurn
            key={project.id}
            project={project}
            index={i}
            status={status}
            reduceMotion={reduceMotion}
            selected={selectedIndex === i}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
}
