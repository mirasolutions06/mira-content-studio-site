import Image from 'next/image';
import { getProjects } from '@/lib/projects';
import type { Project } from '@/lib/types';
import { LoopVideo } from './LoopVideo';

type RowVariant = 'still' | 'motion';

function Tile({ project, variant }: { project: Project; variant: RowVariant }) {
  // Motion row: render real video if provided. Otherwise render an empty
  // placeholder tile — these slots wait for looping campaign videos.
  if (variant === 'motion') {
    return (
      <div
        aria-hidden="true"
        style={
          project.coverVideo
            ? { backgroundImage: `url(${project.cover})` }
            : undefined
        }
        className={`relative aspect-[4/5] w-[clamp(190px,17vw,270px)] shrink-0 rounded-md overflow-hidden bg-cover bg-center ${
          project.coverVideo ? 'bg-paper' : 'bg-stone-200'
        }`}
      >
        {project.coverVideo ? (
          <LoopVideo
            src={project.coverVideo}
            poster={project.cover}
            className="absolute inset-0 w-full h-full object-cover outline-none border-0 scale-[1.005] transition-opacity duration-100"
          />
        ) : (
          <span className="absolute inset-x-0 bottom-0 px-space-3 py-space-2 text-kicker text-ink/30">
            Video — coming
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      aria-label={`${project.name} — ${project.category}`}
      className="relative aspect-[4/5] w-[clamp(190px,17vw,270px)] shrink-0 rounded-md overflow-hidden bg-stone-200"
    >
      <Image
        src={project.cover}
        alt={project.name}
        fill
        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 25vw, 50vw"
        className="object-cover"
      />
      <span className="absolute inset-x-0 bottom-0 px-space-3 py-space-2 text-kicker text-bottle bg-gradient-to-t from-paper to-transparent z-10">
        {project.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  projects,
  direction,
  variant,
}: {
  projects: Project[];
  direction: 'left' | 'right';
  variant: RowVariant;
}) {
  // Two copies of the tile set — animation translates -50% to loop seamlessly.
  const tiles = [...projects, ...projects];
  const animClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-space-2 ${animClass}`}>
        {tiles.map((p, i) => (
          <Tile key={`${direction}-${p.slug}-${i}`} project={p} variant={variant} />
        ))}
      </div>
    </div>
  );
}

export function Carousel() {
  const projects = getProjects();

  return (
    <section id="work" className="bg-paper py-space-8">
      <div className="mx-auto max-w-6xl px-space-4 mb-space-6 text-center">
        <div className="text-kicker text-bottle mb-space-2">Studio</div>
        <h2 className="text-h1 text-ink">
          The look<span className="text-bottle">.</span> The feel
          <span className="text-bottle">.</span>
        </h2>
      </div>
      <div className="flex flex-col gap-space-2">
        <MarqueeRow projects={projects} direction="left" variant="still" />
        <MarqueeRow projects={projects} direction="right" variant="motion" />
      </div>
    </section>
  );
}
