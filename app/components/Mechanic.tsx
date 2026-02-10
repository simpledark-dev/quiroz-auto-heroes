'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import mechanicImage from '../assets/selfie.jpg';

const stats = [
  { label: '10+ Years', sublabel: 'Experience' },
  { label: 'Same-Day', sublabel: 'Service Available' },
  { label: 'Warranty', sublabel: 'Included' },
];

export default function Mechanic() {
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
      ref={sectionRef}
      className="py-16 md:py-24 bg-[var(--qah-section-light)] opacity-0"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
                Your Mechanic
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-text-heading)] leading-tight">
                Meet Alexia Quiroz
              </h2>
              <p className="text-base md:text-lg text-[var(--qah-text-body)] leading-relaxed">
                Hi, I&apos;m Alexia — the owner and sole mechanic at Quiroz Auto Heroes.
                With over a decade of hands-on experience, I personally handle every
                repair that comes through our Villa Park shop. I stay current with
                the latest automotive technology through ongoing training and education to
                ensure your vehicle receives the highest quality care. When you bring
                your car here, you work directly with me — no middlemen, just honest,
                expert service.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--qah-accent)]">
                    {stat.label}
                  </div>
                  <div className="text-sm text-[var(--qah-text-body)]/70 mt-1">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200"
              >
                Get in Touch
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

          {/* Right - Portrait */}
          <div className="relative p-3">
            {/* Decorative accent shapes */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--qah-accent)]/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--qah-primary)]/30 rounded-full blur-2xl" />

            {/* Accent border frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--qah-accent)]/30 via-transparent to-[var(--qah-primary)]/30 rounded-2xl" />

            {/* Main image container */}
            <div className="relative aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
              <Image
                src={mechanicImage}
                alt="Alexia Quiroz - Owner and Mechanic at Quiroz Auto Heroes"
                fill
                className="object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--qah-primary)]/20 via-transparent to-transparent" />
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
