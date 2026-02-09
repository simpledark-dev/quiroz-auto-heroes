'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Engine Repair & Diagnostics',
    tagline: 'Engine trouble?',
    description:
      'Your engine is the heart of your vehicle, and we treat it with the care it deserves. At our Villa Park shop, our ASE-certified technicians use state-of-the-art diagnostic equipment to accurately identify issues, from minor tune-ups to major overhauls.',
    details: [
      'Complete engine diagnostics and troubleshooting',
      'Check engine light diagnosis',
      'Engine rebuilds and replacements',
      'Timing belt and chain service',
      'Fuel system repair and cleaning',
      'Cooling system service',
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
  },
  {
    title: 'Brake Service & Repair',
    tagline: 'Brakes squeaking?',
    description:
      'Your safety depends on properly functioning brakes. Villa Park drivers trust us to provide comprehensive brake services that ensure your vehicle stops reliably every time. From routine pad replacements to complete brake system overhauls, we have you covered.',
    details: [
      'Brake pad and shoe replacement',
      'Rotor and drum resurfacing or replacement',
      'Brake fluid flush and replacement',
      'Brake line inspection and repair',
      'ABS system diagnostics and repair',
      'Emergency brake adjustment',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'Battery & Electrical Systems',
    tagline: 'Car won\'t start?',
    description:
      'Modern vehicles rely heavily on complex electrical systems. Our technicians are trained to diagnose and repair all electrical issues, from simple battery replacements to intricate wiring problems.',
    details: [
      'Battery testing and replacement',
      'Alternator and starter repair',
      'Electrical system diagnostics',
      'Wiring repair and replacement',
      'Lighting system service',
      'Power window and lock repair',
    ],
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80',
  },
  {
    title: 'Air Conditioning & Heating',
    tagline: 'A/C not cooling?',
    description:
      'Stay comfortable year-round with our complete climate control services. Whether your A/C isn\'t cooling or your heater isn\'t warming, we\'ll diagnose the issue and get you back to comfortable driving.',
    details: [
      'A/C system inspection and recharge',
      'Compressor repair and replacement',
      'Heater core service',
      'Blower motor repair',
      'Climate control diagnostics',
      'Refrigerant leak detection and repair',
    ],
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&q=80',
  },
  {
    title: 'Oil Change & Maintenance',
    tagline: 'Due for service?',
    description:
      'Regular oil changes are essential for engine longevity. We offer quick, thorough oil change services using quality oils and filters. Our maintenance packages keep your vehicle running at peak performance.',
    details: [
      'Conventional and synthetic oil changes',
      'Oil filter replacement',
      'Fluid level checks and top-offs',
      'Multi-point vehicle inspection',
      'Tire rotation and pressure check',
      'Air filter replacement',
    ],
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
  },
  {
    title: 'Fleet Services',
    tagline: 'Managing a fleet?',
    description:
      'Keep your business moving with our comprehensive fleet maintenance programs. Illinois businesses throughout Villa Park and the surrounding area trust us because we understand that downtime costs money, so we prioritize efficient service without compromising quality.',
    details: [
      'Scheduled preventive maintenance',
      'Priority scheduling for fleet vehicles',
      'Detailed service records and reporting',
      'Volume pricing for fleet accounts',
      'Emergency repair services',
      'DOT inspection and compliance',
    ],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--qah-light)] opacity-0"
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
              Our Services
            </span>
            <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
              Complete Auto Care in Villa Park, IL
            </h1>
            <p className="text-lg md:text-xl text-[var(--qah-dark)]/80 leading-relaxed">
              From routine maintenance to complex repairs, our ASE-certified technicians
              provide comprehensive automotive services to drivers throughout Villa Park
              and DuPage County. Quality work, transparent pricing, and exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200"
              >
                Schedule Service
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
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 md:py-24 bg-[var(--qah-section-light)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* More Services Callout */}
          <div className="mt-16 md:mt-24 text-center">
            <div className="bg-gradient-to-br from-[var(--qah-primary)] to-[var(--qah-primary)]/90 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--qah-accent)]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--qah-accent)]/10 rounded-full blur-3xl" />

              <div className="relative z-10 space-y-6">
                <h3 className="text-[28px] md:text-[36px] font-bold text-white">
                  And Many More Services...
                </h3>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  We offer a full range of automotive services beyond what&apos;s listed above.
                  Whatever your vehicle needs, our Villa Park team is here to help drivers
                  throughout Illinois get back on the road.
                </p>

                {/* Additional Services List */}
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                  {[
                    'Transmission Repair',
                    'Suspension & Steering',
                    'Exhaust Systems',
                    'Tire Services',
                    'Wheel Alignment',
                    'State Inspections',
                    'Tune-Ups',
                    'Belt & Hose Replacement',
                    'Radiator Service',
                    'And More!',
                  ].map((service, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[var(--qah-accent)] text-white px-8 py-4 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200 font-medium text-lg"
                  >
                    Contact Us for Any Service
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center opacity-0 ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className="relative p-3">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--qah-accent)]/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--qah-primary)]/30 rounded-full blur-2xl" />

          {/* Border frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--qah-accent)]/30 via-transparent to-[var(--qah-primary)]/30 rounded-2xl" />

          {/* Image container */}
          <div className="relative aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--qah-primary)]/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
        <div className="space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
            {service.tagline}
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--qah-text-heading)] leading-tight">
            {service.title}
          </h2>
          <p className="text-base md:text-lg text-[var(--qah-text-body)] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Details List */}
        <ul className="space-y-3">
          {service.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-[var(--qah-accent)] flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[var(--qah-text-body)]">{detail}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
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
  );
}
