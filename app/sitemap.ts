import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://miracontent.studio/',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://miracontent.studio/privacy',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://miracontent.studio/terms',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
