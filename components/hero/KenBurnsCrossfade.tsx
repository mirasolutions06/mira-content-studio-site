'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { HeroProject } from '@/lib/heroChoreography';

type Props = {
  projects: HeroProject[];
  /** null = nothing has been generated yet (very first typing/gen of the cycle) */
  projectIndex: number | null;
  reduceMotion: boolean;
};

const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const;

export function KenBurnsCrossfade({ projects, projectIndex, reduceMotion }: Props) {
  const project = projectIndex !== null ? projects[projectIndex] : null;

  return (
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200">
      <AnimatePresence mode="sync">
        {project ? (
          <motion.div
            key={project.id}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 1.2,
              ease: EASE_OUT_QUART,
            }}
          >
            {project.outputSrc ? (
              <motion.div
                className="absolute inset-0"
                initial={reduceMotion ? false : { scale: 1 }}
                animate={reduceMotion ? undefined : { scale: 1.045 }}
                transition={{
                  duration: reduceMotion ? 0 : 9,
                  ease: 'linear',
                }}
              >
                <Image
                  src={project.outputSrc}
                  alt={project.outputAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            ) : (
              <div
                className="absolute inset-0 bg-stone-200 flex items-center justify-center"
                role="img"
                aria-label={project.outputAlt}
              >
                <span className="text-h3 text-ink/30 px-space-4 text-center">
                  {project.brand}
                </span>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="awaiting"
            className="absolute inset-0 bg-stone-200 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE_OUT_QUART }}
            aria-hidden="true"
          >
            <span className="text-kicker text-ink/30">Awaiting first generation</span>
          </motion.div>
        )}
      </AnimatePresence>

      {project ? (
        <motion.div
          key={`label-${project.id}`}
          className="absolute inset-x-0 bottom-0 flex items-end p-space-4 pointer-events-none z-10"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.4,
            ease: EASE_OUT_QUART,
          }}
        >
          <div className="text-kicker text-paper bg-ink/60 px-space-2 py-1 rounded-full backdrop-blur-sm">
            Output — {project.brand}
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
