'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Engine Repair',
    description:
      'Complete engine diagnostics, repair, and maintenance for optimal performance. Our ASE-certified technicians use state-of-the-art equipment to identify and fix any engine issues.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
  },
  {
    title: 'Brake Service',
    description:
      'Expert brake inspection, pad replacement, and rotor resurfacing services. We ensure your safety with thorough brake system checks and quality repairs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'Battery & Electrical',
    description:
      'Professional battery testing, replacement, and charging system diagnostics. Keep your vehicle starting reliably with our electrical system expertise.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80',
  },
  {
    title: 'Air Conditioning',
    description:
      'A/C system repair, recharge, and performance optimization for all seasons. Stay comfortable year-round with our climate control services.',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&q=80',
  },
  {
    title: 'Fleet Services',
    description:
      'Comprehensive fleet maintenance solutions to keep your business moving. We offer scheduled maintenance programs and priority service for commercial vehicles.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
  },
];

export default function Services() {
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
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[var(--qah-light)] opacity-0"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[var(--qah-white)]">
            Our Services
          </h2>
          <p className="text-lg text-[var(--qah-dark)]/80 max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we offer comprehensive
            automotive services tailored to your needs.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-6 md:gap-8 bg-[var(--qah-card)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Image */}
              <div className="relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto md:min-h-[280px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--qah-white)] mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--qah-dark)]/80 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[var(--qah-accent)] text-white px-6 py-3 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200 font-medium"
                  >
                    Get a Quote
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
          ))}
        </div>
      </div>
    </section>
  );
}
