'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import flyerImage from '../../assets/flyer.jpeg';
import { useLocale } from '../../providers/LocaleProvider';

const SLIDE_INITIAL: Record<string, React.CSSProperties> = {
  left: { opacity: 0, transform: 'translateX(-60px)', transition: 'opacity 1s ease-out, transform 1s ease-out' },
  right: { opacity: 0, transform: 'translateX(60px)', transition: 'opacity 1s ease-out, transform 1s ease-out' },
};

export default function PromotionsContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const promoRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 },
    );

    const slideObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const children = entry.target.querySelectorAll<HTMLElement>('[data-slide]');
          if (entry.isIntersecting) {
            children.forEach((child, i) => {
              setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateX(0)';
              }, i * 200);
            });
          } else {
            children.forEach((child) => {
              const dir = child.getAttribute('data-slide');
              child.style.opacity = '0';
              child.style.transform = dir === 'right' ? 'translateX(60px)' : 'translateX(-60px)';
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) fadeObserver.observe(heroRef.current);
    if (promoRef.current) slideObserver.observe(promoRef.current);

    return () => {
      fadeObserver.disconnect();
      slideObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--qah-light)] bg-stars opacity-0"
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-block animate-border-glow">
              <span className="animate-border-glow-inner text-white text-sm font-semibold">
                {t('promotion.eyebrow')}
              </span>
            </span>
            <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
              {t('promotionsPage.heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-[var(--qah-dark)]/80 leading-relaxed">
              {t('promotionsPage.heroBody')}
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative bg-[var(--qah-light)] py-2">
        <div className="max-w-[600px] mx-auto relative">
          <div className="absolute inset-x-0 -top-2 h-6 bg-gradient-to-r from-transparent via-[var(--qah-accent)]/20 to-transparent blur-xl" />
          <div className="relative h-[2px] bg-gradient-to-r from-transparent via-[var(--qah-accent)] to-transparent" />
        </div>
      </div>

      {/* Promotion Flyer */}
      <section
        ref={promoRef}
        className="py-16 md:py-24 bg-[var(--qah-light)] bg-stars overflow-hidden"
      >
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          {/* Header */}
          <div
            data-slide="left"
            className="text-center mb-12 space-y-4"
            style={SLIDE_INITIAL.left}
          >
            <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-white)]">
              {t('promotion.title')}
            </h2>
            <p className="text-lg text-[var(--qah-dark)]/80 max-w-2xl mx-auto">
              {t('promotion.body')}
            </p>
          </div>

          {/* Flyer */}
          <div
            data-slide="right"
            className="relative mx-auto"
            style={SLIDE_INITIAL.right}
          >
            <div className="animate-bounce-float">
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--qah-accent)] via-amber-400 to-[var(--qah-accent)] rounded-2xl blur-md opacity-40" />
              <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-amber-400 via-[var(--qah-accent)] to-amber-400">
                <div className="rounded-[13px] overflow-hidden">
                  <Image
                    src={flyerImage}
                    alt="Quiroz Auto Heroes Promotion - $29 Oil Change, $299 Brakes, Free Check Engine Light Scan"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            data-slide="left"
            className="text-center mt-8 space-y-3"
            style={SLIDE_INITIAL.left}
          >
            <div className="flex items-center justify-center gap-2 text-[var(--qah-dark)]/90">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">
                {t('promotion.limitedTime')}
              </span>
            </div>
            <a
              href="tel:6302760478"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-200 font-medium text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </>
  );
}
