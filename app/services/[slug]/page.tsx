import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { absoluteUrl } from '@/lib/seo';
import { services, getServiceBySlug, getAllServiceSlugs } from '../../data/services';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

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
      description: 'The service you are looking for could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = absoluteUrl(`/services/${slug}`);
  return {
    title: `${service.title} - Quiroz Auto Heroes | Villa Park, IL`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      url: canonicalUrl,
      title: `${service.title} | Quiroz Auto Heroes`,
      description: service.description,
      images: [
        {
          url: service.image,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Quiroz Auto Heroes`,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }
  const canonicalUrl = absoluteUrl(`/services/${slug}`);
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      '@type': 'AutoRepair',
      name: 'Quiroz Auto Heroes',
      url: absoluteUrl('/'),
    },
    areaServed: {
      '@type': 'City',
      name: 'Villa Park',
      address: 'Villa Park, IL',
    },
    url: canonicalUrl,
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
      { '@type': 'ListItem', position: 3, name: service.shortTitle, item: canonicalUrl },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--qah-light)] overflow-hidden">
        {/* Background decorations */}
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
              <Link href="/services" className="hover:text-[var(--qah-accent)] transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-[var(--qah-accent)]">{service.shortTitle}</span>
            </nav>

            <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
              {service.tagline}
            </span>
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--qah-dark)]/80 leading-relaxed">
              {service.description}
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
              {/* Intro with Image */}
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <h2 className="text-[28px] md:text-[32px] font-bold text-[var(--qah-text-heading)] leading-tight">
                    {service.title} in Villa Park, IL
                  </h2>
                  {service.content.intro.map((paragraph, i) => (
                    <p key={i} className="text-[var(--qah-text-body)] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="relative">
                  <div className="relative p-2">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--qah-accent)]/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--qah-primary)]/20 rounded-full blur-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--qah-accent)]/20 via-transparent to-[var(--qah-primary)]/20 rounded-2xl" />
                    <div className="relative aspect-[4/3] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--qah-primary)]/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Offerings */}
              <div className="space-y-6">
                <h3 className="text-[24px] md:text-[28px] font-bold text-[var(--qah-text-heading)]">
                  {service.content.servicesTitle}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.content.servicesList.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[var(--qah-accent)]/20 transition-all duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--qah-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-[var(--qah-accent)]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--qah-text-heading)] mb-1">
                            {item.name}
                          </h4>
                          <p className="text-sm text-[var(--qah-text-body)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maintenance Section */}
              <div className="bg-gradient-to-br from-[var(--qah-primary)] to-[var(--qah-primary)]/90 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--qah-accent)]/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--qah-accent)]/10 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-[24px] md:text-[28px] font-bold">
                    {service.content.maintenance.title}
                  </h3>
                  {service.content.maintenance.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-white/85 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-4">
                <h3 className="text-[24px] md:text-[28px] font-bold text-[var(--qah-text-heading)]">
                  Why Choose Quiroz Auto Heroes?
                </h3>
                {service.content.whyChoose.map((paragraph, i) => (
                  <p key={i} className="text-[var(--qah-text-body)] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
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

      {/* View Other Services */}
      <section className="py-16 md:py-20 bg-[var(--qah-light)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--qah-white)]">
              View Other Services
            </h2>
            <p className="mt-3 text-[var(--qah-dark)]/70 max-w-2xl mx-auto">
              Explore our full range of automotive services for Villa Park and DuPage County drivers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-4 bg-[var(--qah-card)] border border-white/5 rounded-xl p-5 hover:border-[var(--qah-accent)]/30 hover:bg-[var(--qah-card)]/80 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--qah-accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--qah-accent)]/20 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-[var(--qah-accent)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--qah-white)] group-hover:text-[var(--qah-accent)] transition-colors duration-200">
                      {s.shortTitle}
                    </h3>
                    <p className="text-sm text-[var(--qah-dark)]/60 mt-0.5">{s.tagline}</p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200 font-medium"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
