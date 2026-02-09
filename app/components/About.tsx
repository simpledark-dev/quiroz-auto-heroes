'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import aboutImage1 from '../assets/p1.jpg';
import aboutImage2 from '../assets/p2.jpg';
import aboutImage3 from '../assets/p3.jpg';

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[var(--qah-section-light)] opacity-0"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-xl shadow-md overflow-hidden">
              <Image
                src={aboutImage1}
                alt="Auto repair service"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-xl shadow-md overflow-hidden">
              <Image
                src={aboutImage2}
                alt="Professional mechanics at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative col-span-2 aspect-[2/1] rounded-xl shadow-md overflow-hidden">
              <Image
                src={aboutImage3}
                alt="Quiroz Auto Heroes facility"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
                About Us
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-text-heading)] leading-tight">
                Villa Park&apos;s Neighborhood Auto Shop
              </h2>
              <p className="text-base md:text-lg text-[var(--qah-text-body)] leading-relaxed">
                For over a decade, Quiroz Auto Heroes has been the go-to auto repair shop
                for Villa Park residents and drivers throughout Illinois. We combine expert
                craftsmanship with honest, transparent service right here on North Avenue.
                Our ASE-certified technicians use the latest diagnostic equipment to keep
                your vehicle running safely and efficiently.
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              {[
                'Factory-trained, ASE-certified technicians',
                'State-of-the-art diagnostic equipment',
                'Comprehensive warranty on all repairs',
                'Transparent pricing with no hidden fees',
                'Proudly serving Villa Park and DuPage County',
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--qah-accent)] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[var(--qah-text-body)] text-base md:text-lg">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200"
              >
                More About Us
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
        </div>
      </div>
    </section>
  );
}
