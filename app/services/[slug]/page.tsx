import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { absoluteUrl } from '@/lib/seo';
import { getServiceBySlug, getAllServiceSlugs } from '../../data/services';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import ServiceDetailContent from './components/ServiceDetailContent';

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  const url = absoluteUrl(`/services/${service.slug}`);
  const ogUrl = absoluteUrl(service.image);

  return {
    title: `${service.title} | Quiroz Auto Heroes`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Quiroz Auto Heroes`,
      description: service.description,
      url,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Quiroz Auto Heroes`,
      description: service.description,
      images: [ogUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-900">
      <Navbar />
      <ServiceDetailContent service={service} />
      <Contact />
      <Footer />
    </main>
  );
}
