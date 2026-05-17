/* Mira Content Studio — Hero animation manifest
 *
 * Single edit point for the WorkflowVideo hero choreography. The hero shows
 * three distinct projects: each project has its own input ref images, its
 * own brand label, its own typed prompt, and its own large output image
 * (which renders on the left as the focus). The right pane is the input
 * stack (chat history of refs + prompts); the left pane is the output.
 *
 * Refs is a variable-length array — render whatever's in it as 32×32 chips.
 * The choreography (3 projects per cycle, ~14s loop) is fixed in
 * site/components/WorkflowVideo.tsx — adding/removing projects here only
 * works if the count remains three.
 */

export type RefImage = {
  src: string | null;
  alt: string;
};

export type HeroProject = {
  id: string;
  brand: string;            // short distinctive label, shown as a chip
  prompt: string;           // text the typewriter types
  refs: RefImage[];         // 1–N input refs per project
  outputSrc: string | null; // large output image (left panel)
  outputAlt: string;
};

export const heroProjects: HeroProject[] = [
  {
    id: 'halver-portrait',
    brand: 'Halver — Daily oil',
    prompt: 'Studio beauty portrait — pink sweep, candid laugh, real skin texture. @dropper @model',
    refs: [
      { src: '/hero-thumbs/halver-product.jpg', alt: 'Halver reference: dropper bottle' },
      { src: '/hero-thumbs/halver-model.jpg', alt: 'Halver reference: model portrait' },
    ],
    outputSrc: '/hero-stills/halver-output.jpg',
    outputAlt: 'Halver hero — model laughing while holding the dropper bottle against a pink studio backdrop',
  },
  {
    id: 'mara-field',
    brand: 'Mara — Field track set',
    prompt: 'Golden-hour countryside editorial — hay-bale field, Land Rover patina, warm low sun. @tracksuit @model',
    refs: [
      { src: '/hero-thumbs/mara-product.jpg', alt: 'Mara reference: sage nylon track jacket and joggers' },
      { src: '/hero-thumbs/mara-model.jpg', alt: 'Mara reference: model portrait' },
    ],
    outputSrc: '/hero-stills/mara-output.jpg',
    outputAlt: 'Mara hero — model in sage track set leaning on a Land Rover in a hay-bale field',
  },
  {
    id: 'g7-eyewear',
    brand: 'G7 — Silver frame',
    prompt: 'Macro eyewear campaign — anamorphic lens flare, burgundy ground, single hard key. @sunglasses @model',
    refs: [
      { src: '/hero-thumbs/g7-product.jpg', alt: 'G7 reference: silver wraparound frame' },
      { src: '/hero-thumbs/g7-model.jpg', alt: 'G7 reference: model portrait' },
    ],
    outputSrc: '/hero-stills/g7-output.jpg',
    outputAlt: 'G7 hero — macro on the silver wraparound frame with anamorphic flare',
  },
];
