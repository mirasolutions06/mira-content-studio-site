export type ImageSize = 'hero' | 'regular';

export interface ProjectImage {
  src: string;
  alt: string;
  size: ImageSize;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  kicker: string;
  summary: string;
  cover: string;
  /**
   * Optional looping video (mp4/webm) for the Carousel bottom-row "animated"
   * tile. If omitted, the bottom row falls back to the cover image with a
   * slow Ken Burns drift to read as animated.
   */
  coverVideo?: string;
  images: ProjectImage[];
}
