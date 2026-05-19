'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '../../../providers/LocaleProvider';
import { ServiceData, services } from '../../../data/services';

interface ServiceDetailContentProps {
  service: ServiceData;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const { dict } = useLocale();

  // Get the translated content for this specific service
  const servicesData = dict.servicesData;
  const serviceContent = servicesData?.items?.[service.slug as keyof typeof servicesData.items];

  // Get shared UI strings
  const ui = dict.serviceDetailPage;

  // Fallback if translation is missing
  if (!serviceContent) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 flex items-center justify-center">
        <p>Service information not available.</p>
      </div>
    );
  }

  const { content } = serviceContent;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--qah-light)] bg-stars overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--qah-accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--qah-accent)]/3 rounded-full blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--qah-dark)]/60">
              <Link href="/" className="hover:text-[var(--qah-accent)] transition-colors">
                {ui.breadcrumb.home}
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[var(--qah-accent)] transition-colors">
                {ui.breadcrumb.services}
              </Link>
              <span>/</span>
              <span className="text-[var(--qah-accent)]">{service.shortTitle}</span>
            </nav>

            <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
              {serviceContent.tagline}
            </span>
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
              {serviceContent.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--qah-dark)]/80 leading-relaxed">
              {serviceContent.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200"
              >
                {ui.cta.schedule}
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
                {ui.cta.call}
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
                    {serviceContent.title} {ui.titleSuffix}
                  </h2>
                  {content.intro.map((paragraph: string, i: number) => (
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
                        alt={`${serviceContent.title} service in Villa Park, IL`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--qah-primary)]/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Offerings */}
              <div className="space-y-6">
                <h3 className="text-[24px] md:text-[28px] font-bold text-[var(--qah-text-heading)]">
                  {content.servicesTitle}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {content.servicesList.map((item: any, i: number) => (
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
                    {content.maintenance.title}
                  </h3>
                  {content.maintenance.paragraphs.map((paragraph: string, i: number) => (
                    <p key={i} className="text-white/85 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-4">
                <h3 className="text-[24px] md:text-[28px] font-bold text-[var(--qah-text-heading)]">
                  {ui.whyChooseTitle}
                </h3>
                {content.whyChoose.map((paragraph: string, i: number) => (
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
                  {ui.callCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View Other Services */}
      <section className="py-16 md:py-20 bg-[var(--qah-light)] bg-stars">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--qah-white)]">
              {ui.otherServicesTitle}
            </h2>
            <p className="mt-3 text-[var(--qah-dark)]/70 max-w-2xl mx-auto">
              {ui.otherServicesDescription}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => {
                const translatedService = servicesData.items[s.slug as keyof typeof servicesData.items];
                return (
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
                        {translatedService?.title || s.shortTitle}
                      </h3>
                      <p className="text-sm text-[var(--qah-dark)]/60 mt-0.5">{translatedService?.tagline || s.tagline}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200 font-medium"
            >
              {ui.viewAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
