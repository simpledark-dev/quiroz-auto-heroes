'use client';

import { useState, useEffect, useRef } from 'react';
import { useLocale } from '../providers/LocaleProvider';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Villa Park Resident',
    quote:
      'Exceptional service in Villa Park IL! The team diagnosed my brake issue quickly and had me back on the road the same day. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Fleet Manager, Lombard',
    quote:
      'Honest, reliable, and professional. They explained everything clearly and the pricing was fair. My go-to shop now.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Business Owner, Villa Park',
    quote:
      'Best auto repair experience I have had in Villa Park IL. They took great care of my car and the customer service was outstanding.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Elmhurst Resident',
    quote:
      'Fast turnaround, quality work, and great communication. Quiroz Auto Heroes has earned my trust and loyalty.',
    rating: 5,
  },
  {
    name: 'Lisa Martinez',
    role: 'Addison Resident',
    quote:
      'I appreciate their transparency and expertise. They never try to upsell unnecessary services. True professionals.',
    rating: 5,
  },
  {
    name: 'Robert Kim',
    role: 'Villa Park Resident',
    quote:
      'Finally found a trustworthy mechanic in Villa Park IL! Alexia is honest, knowledgeable, and takes the time to explain everything. Will never go anywhere else.',
    rating: 5,
  },
  {
    name: 'Jennifer Walsh',
    role: 'Oak Park Resident',
    quote:
      'Brought my car here after a bad experience at another shop. Quiroz Auto Heroes fixed the problem right the first time. Professional, affordable, and friendly service.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-br from-[var(--qah-primary)] to-[#0c2244] bg-stars opacity-0 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--qah-accent)]/10 rounded-full blur-3xl" />

      {/* Diagonal Lines */}
      <div className="absolute top-1/4 left-10 w-40 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-12 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-48 h-px bg-gradient-to-r from-transparent via-[var(--qah-accent)]/30 to-transparent rotate-12 hidden lg:block" />

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-1/4 w-12 h-12 border border-white/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-1/4 w-16 h-16 border border-[var(--qah-accent)]/20 rounded-full hidden lg:block" />

      {/* Small Dots */}
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[var(--qah-accent)]/30 rounded-full hidden lg:block" />

      {/* Corner Brackets */}
      <div className="absolute top-16 left-16 w-10 h-10 border-l border-t border-white/15 hidden md:block" />
      <div className="absolute bottom-16 right-16 w-10 h-10 border-r border-b border-[var(--qah-accent)]/20 hidden md:block" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
            {t('testimonials.eyebrow')}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-white">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t('testimonials.body')}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-2 md:px-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-xl">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg
                        className="w-10 h-10 text-[var(--qah-accent)]/20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 leading-relaxed mb-6 flex-grow text-[15px]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--qah-accent)] to-[var(--qah-primary)] flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--qah-primary)]">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                      <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 hover:scale-110 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6 text-[var(--qah-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 hover:scale-110 transition-all duration-200"
              >
                <svg
                  className="w-6 h-6 text-[var(--qah-primary)]"
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
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? 'bg-[var(--qah-accent)] w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
