import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE_URL, absoluteUrl } from '@/lib/seo';
import { LocaleProvider } from './providers/LocaleProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const businessDescription =
  'Expert auto repair and car repair shop in Cicero, IL offering diagnostics, brake repair, fleet maintenance, and same-day service with transparent pricing.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Quiroz Auto Repair | Premium Auto Repair in Cicero, IL',
    template: '%s | Quiroz Auto Repair',
  },
  description: businessDescription,
  keywords: [
    'auto repair Cicero',
    'car repair Cicero IL',
    'mechanic Cicero',
    'car maintenance Cook County',
    'fleet service Illinois',
    'brake repair Cicero',
    'auto repair near me',
    'oil change Cicero',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Quiroz Auto Repair | Premium Auto Repair in Cicero, IL',
    description: businessDescription,
    siteName: 'Quiroz Auto Repair',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiroz Auto Repair | Premium Auto Repair in Cicero, IL',
    description: businessDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${SITE_URL}/#business`,
  name: 'Quiroz Auto Repair',
  image: absoluteUrl('/apple-icon'),
  url: SITE_URL,
  telephone: '+1-708-652-4669',
  email: 'info@quirozautorepairs.com',
  priceRange: '$$',
  description: 'Expert auto repair and car repair mechanic in Cicero, IL. Offering diagnostics, brake repair, oil changes, fleet maintenance, and same-day service.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6027 W 26th St',
    addressLocality: 'Cicero',
    addressRegion: 'IL',
    postalCode: '60804',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.844,
    longitude: -87.768,
  },
  areaServed: [
    { '@type': 'City', name: 'Cicero' },
    { '@type': 'City', name: 'Berwyn' },
    { '@type': 'City', name: 'Oak Park' },
    { '@type': 'AdministrativeArea', name: 'Cook County' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sarah Johnson' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Exceptional service! The team diagnosed my brake issue quickly and had me back on the road the same day. Highly recommend.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Michael Rodriguez' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Honest, reliable, and professional. They explained everything clearly and the pricing was fair. My go-to shop now.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'David Thompson' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Fast turnaround, quality work, and great communication. Quiroz Auto Repair has earned my trust and loyalty.',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://www.google.com/maps/place/Quiroz+Auto+Repair+No.+2/data=!4m2!3m1!1s0x0:0x5f71255b193ea3df?sa=X&ved=1t:2428&ictx=111',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
