'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import flyerImage from '../assets/flyer.jpeg';

export default function Promotion() {
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
      className="py-16 md:py-24 bg-[var(--qah-light)] bg-stars opacity-0"
    >
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-amber-500 text-white text-sm font-semibold rounded-full">
            Current Promotions
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-white)]">
            Special Offers
          </h2>
          <p className="text-lg text-[var(--qah-dark)]/80 max-w-2xl mx-auto">
            Take advantage of our current deals on oil changes, brake service, and diagnostics.
          </p>
        </div>

        {/* Flyer */}
        <div className="relative mx-auto">
          {/* Outer glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[var(--qah-accent)] via-amber-400 to-[var(--qah-accent)] rounded-2xl blur-md opacity-40" />

          {/* Gradient border */}
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

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-full hover:bg-amber-600 transition-colors duration-200 font-medium text-lg"
          >
            Claim Your Offer
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
