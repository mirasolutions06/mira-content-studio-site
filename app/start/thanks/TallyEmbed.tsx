'use client';

import { useSearchParams } from 'next/navigation';

const TALLY_BASE = 'https://tally.so/embed/9qRJJV';
const TALLY_PARAMS = 'alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

export function TallyEmbed() {
  const params = useSearchParams();
  const tier = params.get('tier') ?? '';
  const src = `${TALLY_BASE}?${TALLY_PARAMS}${tier ? `&tier=${encodeURIComponent(tier)}` : ''}`;

  return (
    <iframe
      src={src}
      loading="lazy"
      width="100%"
      height="900"
      frameBorder={0}
      title="Mira brief"
      className="bg-paper"
    />
  );
}
