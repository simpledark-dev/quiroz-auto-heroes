'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import heroImage from '../assets/p6.jpg';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="home"
      ref={sectionRef}
      className="pt-32 pb-24 md:pt-40 md:pb-24 lg:pb-24 bg-[var(--qah-light)] opacity-0"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
                Villa Park&apos;s Trusted Auto Repair & Car Repair Experts
              </h1>
              <p className="text-lg md:text-xl text-[var(--qah-dark)]/80 leading-relaxed">
                Your trusted mechanic in Villa Park, IL. We provide premium auto repair services
                and car repair for all makes and models, backed by experienced technicians and a commitment to excellence.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200"
              >
                Our Services
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
              <a
                href="tel:6302760478"
                className="inline-flex items-center justify-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200"
              >
                Call Us
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

            {/* Trust Row */}
            <div className="flex flex-wrap gap-6 pt-4 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--qah-accent)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-[var(--qah-dark)]">
                  Expert service
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--qah-accent)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-[var(--qah-dark)]">
                  5-star rated
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[var(--qah-accent)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium text-[var(--qah-dark)]">
                  Fast turnaround
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative p-3">
            {/* Decorative accent shapes */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--qah-accent)]/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--qah-primary)]/30 rounded-full blur-2xl" />

            {/* Accent border frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--qah-accent)]/30 via-transparent to-[var(--qah-primary)]/30 rounded-2xl" />

            {/* Main image container */}
            <div className="relative aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10">
              <Image
                src={heroImage}
                alt="Quiroz Auto Heroes - Expert Auto Repair"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--qah-primary)]/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-[var(--qah-accent)] text-white px-5 py-3 rounded-xl shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">10+</div>
              <div className="text-xs md:text-sm opacity-90">Years Experience</div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-2 right-2 w-6 h-6 bg-[var(--qah-accent)] rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
