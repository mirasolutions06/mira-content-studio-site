'use client';

type Props = {
  reduceMotion: boolean;
};

export function LoadingDots({ reduceMotion }: Props) {
  return (
    <div className="flex items-center gap-space-2 px-space-3 py-space-2 rounded-full bg-stone-50 border border-border-faint w-fit">
      <span className="text-kicker text-ink/70">Generating</span>
      <span className="flex items-end gap-1 h-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="inline-block w-[5px] h-[5px] rounded-full bg-bottle/70"
            style={
              reduceMotion
                ? undefined
                : {
                    animation: 'mira-dot-bounce 1.1s ease-in-out infinite',
                    animationDelay: `${i * 160}ms`,
                  }
            }
          />
        ))}
      </span>
    </div>
  );
}
