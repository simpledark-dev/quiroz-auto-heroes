import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getAllServiceSlugs } from '@/app/data/services';
import { getAllVehicleSlugs } from '@/app/data/vehicles';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseEntries: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact',
    '/services',
    '/vehicles',
  ].map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: index === 0 ? 1 : 0.8,
  }));

  const serviceEntries = getAllServiceSlugs().map<MetadataRoute.Sitemap[number]>((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const vehicleEntries = getAllVehicleSlugs().map<MetadataRoute.Sitemap[number]>((slug) => ({
    url: `${SITE_URL}/vehicles/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...baseEntries, ...serviceEntries, ...vehicleEntries];
}
