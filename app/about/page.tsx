import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import AboutContent from './AboutContent';







export const metadata: Metadata = {
  title: 'About Quiroz Auto Repair | Cicero Auto Repair & Car Repair Mechanic',
  description:
    "Learn how Quiroz Auto Repair became Cicero's trusted auto repair and car repair shop. Meet our experienced mechanic, mission, values, and story rooted in craftsmanship and transparency.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: absoluteUrl('/about'),
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

