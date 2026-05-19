import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { absoluteUrl } from '@/lib/seo';
import { getVehicleBySlug, getAllVehicleSlugs } from '../../data/vehicles';
import Navbar from '../../components/Navbar';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import VehicleDetailContent from './components/VehicleDetailContent';
import Link from 'next/link';
import { vehicles } from '../../data/vehicles';

// Re-using the imported vehicles for the "Other Vehicles" section in the client component?
// Actually, let's keep the "Other Vehicles" section in the Client Component as well, or pass it as props.
// The previous file had it inside. I should probably add it to VehicleDetailContent or keep it here and pass it?
// The plan said "Move the Hero, Grid, and CTA sections here from page.tsx".
// Let's defer "Other Vehicles" to the client component too for better client-side navigation.
// I will update VehicleDetailContent to include it in a second pass or just add it now if I didn't include it in the previous write.
// Wait, I missed the "Other Vehicles" section in the previous write_to_file call (I left a comment). 
// I should update VehicleDetailContent first or include it in this refactor.
// Actually, I can just render it here in the Server Component and pass it as children? 
// No, standard practice is full page content or distinct slots. 
// Let's put it in the Client Component. I will update VehicleDetailContent.tsx first.

export function generateStaticParams() {
  return getAllVehicleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) {
    return {
      title: 'Vehicle Not Found',
      description: 'The requested vehicle brand is not available.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = absoluteUrl(`/vehicles/${slug}`);
  const description = `Expert ${vehicle.name} service and repair in Villa Park, IL. Quiroz Auto Heroes provides quality maintenance, diagnostics, and repairs for all ${vehicle.name} models.`;
  return {
    title: `${vehicle.name} Service & Repair - Quiroz Auto Heroes | Villa Park, IL`,
    description,
    alternates: {
      canonical: `/vehicles/${slug}`,
    },
    openGraph: {
      url: canonicalUrl,
      title: `${vehicle.name} Service & Repair | Quiroz Auto Heroes`,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${vehicle.name} Service & Repair | Quiroz Auto Heroes`,
      description,
    },
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }
  const canonicalUrl = absoluteUrl(`/vehicles/${slug}`);
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Vehicles', item: absoluteUrl('/vehicles') },
      { '@type': 'ListItem', position: 3, name: vehicle.name, item: canonicalUrl },
    ],
  };
  const vehicleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${vehicle.name} Service`,
    description: `Maintenance and repair for all ${vehicle.name} models in Villa Park, Illinois.`,
    serviceType: `${vehicle.name} auto repair`,
    provider: {
      '@type': 'AutoRepair',
      name: 'Quiroz Auto Heroes',
      url: absoluteUrl('/'),
    },
    brand: {
      '@type': 'Brand',
      name: vehicle.name,
    },
    url: canonicalUrl,
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />

      <VehicleDetailContent vehicle={vehicle} />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
