'use client';

import { useEffect, useRef } from 'react';
import SpecialsCarousel from './SpecialsCarousel';
import { useLocale } from '../providers/LocaleProvider';

export default function Promotion() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

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
      ref={sectionRef}
      className="py-16 md:py-24 bg-[var(--qah-light)] bg-stars opacity-0"
    >
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block animate-border-glow">
            <span className="animate-border-glow-inner text-white text-sm font-semibold">
              {t('promotion.eyebrow')}
            </span>
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-white)]">
            {t('promotion.title')}
          </h2>
          <p className="text-lg text-[var(--qah-dark)]/80 max-w-2xl mx-auto">
            {t('promotion.body')}
          </p>
        </div>

        {/* Specials Carousel */}
        <SpecialsCarousel />

        {/* CTA Section */}
        <div className="text-center mt-8 space-y-3">
          {/* Limited Time Text */}
          <div className="flex items-center justify-center gap-2 text-[var(--qah-dark)]/90">
            <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">
              {t('promotion.limitedTime')}
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="tel:7086524669"
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-200 font-medium text-lg"
          >
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {t('promotion.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
