import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE_URL, absoluteUrl } from '@/lib/seo';
import PromotionModal from './components/PromotionModal';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const businessDescription =
  'Expert auto repair and car repair shop in Villa Park, IL offering diagnostics, brake repair, fleet maintenance, and same-day service with transparent pricing.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Quiroz Auto Heroes | Premium Auto Repair in Villa Park, IL',
    template: '%s | Quiroz Auto Heroes',
  },
  description: businessDescription,
  keywords: [
    'auto repair Villa Park',
    'car repair Villa Park IL',
    'mechanic Villa Park',
    'car maintenance DuPage County',
    'fleet service Illinois',
    'brake repair Villa Park',
    'auto repair near me',
    'oil change Villa Park',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Quiroz Auto Heroes | Premium Auto Repair in Villa Park, IL',
    description: businessDescription,
    siteName: 'Quiroz Auto Heroes',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiroz Auto Heroes | Premium Auto Repair in Villa Park, IL',
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
  icons: {
    icon: [
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
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
  name: 'Quiroz Auto Heroes',
  image: absoluteUrl('/icon-512x512.png'),
  url: SITE_URL,
  telephone: '+1-630-276-0478',
  email: 'quirozautoheroes@gmail.com',
  priceRange: '$$',
  description: 'Expert auto repair and car repair mechanic in Villa Park, IL. Offering diagnostics, brake repair, oil changes, fleet maintenance, and same-day service.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '201 W North Ave, Unit 201',
    addressLocality: 'Villa Park',
    addressRegion: 'IL',
    postalCode: '60181',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.89,
    longitude: -87.98,
  },
  areaServed: [
    { '@type': 'City', name: 'Villa Park' },
    { '@type': 'City', name: 'Lombard' },
    { '@type': 'City', name: 'Elmhurst' },
    { '@type': 'AdministrativeArea', name: 'DuPage County' },
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
      reviewBody: 'Fast turnaround, quality work, and great communication. Quiroz Auto Heroes has earned my trust and loyalty.',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '17:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:30',
      closes: '14:30',
    },
  ],
  sameAs: [
    'https://maps.google.com/?q=201+W+North+Ave,+Villa+Park,+IL+60181',
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
          <PromotionModal />
          {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
