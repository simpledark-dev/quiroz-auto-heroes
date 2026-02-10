import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE_URL, absoluteUrl } from '@/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const businessDescription =
  'ASE-certified auto repair shop in Villa Park, IL offering diagnostics, brake repair, fleet maintenance, and same-day service with transparent pricing.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Quiroz Auto Heroes | Premium Auto Repair in Villa Park, IL',
    template: '%s | Quiroz Auto Heroes',
  },
  description: businessDescription,
  keywords: [
    'auto repair Villa Park',
    'ASE certified mechanic',
    'car maintenance DuPage County',
    'fleet service Illinois',
    'brake repair Villa Park',
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
    images: [
      {
        url: absoluteUrl('/icon-512x512.png'),
        width: 512,
        height: 512,
        alt: 'Quiroz Auto Heroes logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@QuirozAutoHeroes',
    title: 'Quiroz Auto Heroes | Premium Auto Repair in Villa Park, IL',
    description: businessDescription,
    images: [absoluteUrl('/icon-512x512.png')],
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
  name: 'Quiroz Auto Heroes',
  image: absoluteUrl('/icon-512x512.png'),
  url: SITE_URL,
  telephone: '+1-630-276-0478',
  email: 'mailto:quirozautoheroes@gmail.com',
  priceRange: '$$',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
