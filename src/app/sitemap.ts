import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://believersnetworkintl.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/what-we-do',
    '/who-we-are',
    '/stories-of-impact',
    '/get-involved',
    '/life-skills',
    '/see-gods-goodness',
    '/donate',
    '/sponsor-a-program',
    '/financials',
    '/daily-devotionals',
    '/stay-connected',
    '/salvation',
  ];

  return staticPages.map((page) => ({
    url: `${siteUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }));
}
