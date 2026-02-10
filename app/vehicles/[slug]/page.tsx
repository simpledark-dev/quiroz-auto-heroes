import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { absoluteUrl } from '@/lib/seo';
import { vehicles, getVehicleBySlug, getAllVehicleSlugs } from '../../data/vehicles';
import { services } from '../../data/services';
import Navbar from '../../components/Navbar';
import Testimonials from '../../components/Testimonials';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

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

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--qah-light)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--qah-accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--qah-accent)]/3 rounded-full blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--qah-dark)]/60">
              <Link href="/" className="hover:text-[var(--qah-accent)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/vehicles" className="hover:text-[var(--qah-accent)] transition-colors">
                Vehicles
              </Link>
              <span>/</span>
              <span className="text-[var(--qah-accent)]">{vehicle.name}</span>
            </nav>

            <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
              Vehicle Specialist
            </span>
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
              {vehicle.name} Services in Villa Park, IL
            </h1>
            <p className="text-lg md:text-xl text-[var(--qah-dark)]/80 leading-relaxed">
              Expert service and repair for all {vehicle.name} models. Our experienced technicians keep your {vehicle.name} running at its best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200"
              >
                Schedule Service
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="tel:6302760478"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[var(--qah-section-light)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* About This Vehicle */}
              <div className="space-y-4">
                <h2 className="text-[28px] md:text-[32px] font-bold text-[var(--qah-text-heading)] leading-tight">
                  Service and Repair of {vehicle.name} Vehicles
                </h2>
                {vehicle.description.map((paragraph, i) => (
                  <p key={i} className="text-[var(--qah-text-body)] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Our Services for This Vehicle */}
              <div className="bg-gradient-to-br from-[var(--qah-primary)] to-[var(--qah-primary)]/90 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--qah-accent)]/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--qah-accent)]/10 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-6">
                  <h3 className="text-[24px] md:text-[28px] font-bold">
                    Our {vehicle.name} Services
                  </h3>
                  <p className="text-white/85 leading-relaxed">
                    From routine maintenance to complex repairs, Quiroz Auto Heroes has you covered. Our experienced technicians are equipped to handle all your {vehicle.name} service needs.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors duration-200"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--qah-accent)] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm font-medium text-white/90">
                          {service.shortTitle}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-4">
                <h3 className="text-[24px] md:text-[28px] font-bold text-[var(--qah-text-heading)]">
                  Why Choose Quiroz Auto Heroes for Your {vehicle.name}?
                </h3>
                <p className="text-[var(--qah-text-body)] leading-relaxed">
                  Villa Park and DuPage County {vehicle.name} owners trust Quiroz Auto Heroes because we combine technical excellence with honest, transparent service. Our experienced technicians receive ongoing training to stay current with the latest {vehicle.name} technologies and repair techniques.
                </p>
                <p className="text-[var(--qah-text-body)] leading-relaxed">
                  Every repair comes with our comprehensive warranty, giving you peace of mind that your {vehicle.name} is in the best hands. We use quality parts that meet or exceed manufacturer specifications.
                </p>
                <a
                  href="tel:6302760478"
                  className="inline-flex items-center gap-2 bg-[var(--qah-accent)] text-white px-6 py-3 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200 font-medium mt-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call (630) 276-0478
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Other Vehicles */}
      <section className="py-16 md:py-20 bg-[var(--qah-light)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--qah-white)]">
              Other Vehicles We Service
            </h2>
            <p className="mt-3 text-[var(--qah-dark)]/70 max-w-2xl mx-auto">
              We service all makes and models. Explore our full list of vehicle brands.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {vehicles
              .filter((v) => v.slug !== slug)
              .slice(0, 12)
              .map((v) => (
                <Link
                  key={v.slug}
                  href={`/vehicles/${v.slug}`}
                  className="group flex items-center justify-center bg-[var(--qah-card)] border border-white/5 rounded-xl py-4 px-3 hover:border-[var(--qah-accent)]/30 hover:bg-[var(--qah-card)]/80 transition-all duration-200"
                >
                  <span className="font-medium text-sm text-[var(--qah-white)] group-hover:text-[var(--qah-accent)] transition-colors duration-200 text-center">
                    {v.name}
                  </span>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/vehicles"
              className="inline-flex items-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200 font-medium"
            >
              View All Vehicles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
