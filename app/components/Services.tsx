'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLocale } from '../providers/LocaleProvider';

const serviceImages = [
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80',
  'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&q=80',
  'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t, dict } = useLocale();
  const { items: services } = dict.servicesSection;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[var(--qah-light)] bg-stars opacity-0"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
            {t('servicesSection.eyebrow')}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-white)]">
            {t('servicesSection.title')}
          </h2>
          <p className="text-lg text-[var(--qah-dark)]/80 max-w-2xl mx-auto">
            {t('servicesSection.body')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <Image
                src={serviceImages[index]}
                alt={service.title}
                fill
                className={`object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[var(--qah-primary)] via-[var(--qah-primary)]/60 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-95' : 'opacity-80'
                }`}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[var(--qah-accent)] font-medium mt-4 hover:gap-3 transition-all duration-300"
                >
                  {t('servicesSection.cardCta')}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-[var(--qah-accent)] text-white px-8 py-4 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200 font-medium text-lg"
          >
            {t('servicesSection.cta')}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
