'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import heroImage from '../assets/quiroz/shop-front.jpeg';
import { useLocale } from '../providers/LocaleProvider';

export default function Hero() {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate overflow-hidden opacity-0 min-h-[88vh] flex items-end"
    >
      {/* Background photo */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroImage}
          alt={t('hero.imageAlt')}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Color + gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--qah-light)]/85 via-[var(--qah-primary)]/55 to-[var(--qah-light)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--qah-light)]/90 via-transparent to-[var(--qah-primary)]/40" />

      {/* Decorative accent blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 bg-[var(--qah-accent)]/25 rounded-full blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-[500px] h-[500px] bg-[var(--qah-accent-hover)]/15 rounded-full blur-[140px] -z-10" />

      {/* Diagonal stripe accent (top-right) */}
      <div className="pointer-events-none absolute top-0 right-0 w-1/3 h-32 bg-gradient-to-l from-[var(--qah-accent)]/80 to-transparent skew-y-[-6deg] origin-top-right -z-10 hidden md:block" />

      {/* Content */}
      <div className="relative w-full pt-36 pb-12 md:pt-44 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-7">
            {/* Eyebrow chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--qah-accent)]/15 border border-[var(--qah-accent)]/40 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--qah-accent-hover)] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--qah-accent)]" />
              </span>
              <span className="text-[var(--qah-dark)] text-xs font-semibold uppercase tracking-[0.18em]">
                6027 W 26th St · Cicero, IL
              </span>
            </div>

            {/* Title with accent underline */}
            <div className="space-y-5">
              <h1 className="text-[40px] md:text-[58px] lg:text-[68px] font-black text-white leading-[1.05] tracking-tight">
                {t('hero.title')}
              </h1>
              <div className="h-1.5 w-24 bg-[var(--qah-accent)] rounded-full" />
              <p className="text-lg md:text-xl text-[var(--qah-dark)]/85 leading-relaxed max-w-2xl">
                {t('hero.body')}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:7086524669"
                className="group inline-flex items-center justify-center gap-3 bg-[var(--qah-accent)] text-white pl-6 pr-3 h-14 rounded-md hover:bg-[var(--qah-accent-hover)] transition-all duration-200 shadow-lg shadow-[var(--qah-accent)]/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">{t('hero.ctaCall')}</span>
                <span className="ml-2 inline-flex items-center justify-center h-10 px-3 rounded-sm bg-black/25 text-sm font-bold tracking-wider">
                  (708) 652-4669
                </span>
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 h-14 rounded-md hover:bg-white/10 transition-colors duration-200"
              >
                {t('hero.ctaServices')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-12 md:mt-20 border-y border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: '20+', sub: t('hero.yearsExperience') },
              { label: 'ASE', sub: t('hero.badges.ase') },
              { label: '★ 5.0', sub: t('hero.badges.rating') },
              { label: '24h', sub: t('hero.badges.fast') },
            ].map((stat) => (
              <div key={stat.sub} className="py-5 md:py-6 px-3 md:px-6 flex items-center gap-3 md:gap-4">
                <div className="text-2xl md:text-3xl font-black text-[var(--qah-accent-hover)] tabular-nums">
                  {stat.label}
                </div>
                <div className="text-[11px] md:text-xs uppercase tracking-[0.12em] text-[var(--qah-dark)]/85 leading-tight">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
