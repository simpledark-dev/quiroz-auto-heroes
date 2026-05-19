'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s1 from '../assets/quiroz/special-winter.jpeg';
import s2 from '../assets/quiroz/flyer-oilchange.jpeg';
import s3 from '../assets/quiroz/flyer-visit.jpeg';
import s4 from '../assets/quiroz/brochure-services.jpeg';
import s5 from '../assets/quiroz/storefront.jpeg';

const SLIDES = [
  { src: s1, alt: 'Free brake inspection, free muffler inspection, 15% off custom muffler system at Quiroz Auto Repair' },
  { src: s2, alt: 'Tune-up 10% off and oil change special at Quiroz Auto Repair' },
  { src: s3, alt: 'Free oil change with brake work and $50 off repairs at Quiroz Auto Repair' },
  { src: s4, alt: 'Complete repair services: brakes, suspension, fuel injection, diagnostics, transmission, electrical' },
  { src: s5, alt: 'Quiroz Auto Repair shop on 26th Street in Cicero with mid-week oil change special' },
];

const AUTOPLAY_MS = 5500;

export default function SpecialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = SLIDES.length;
  const go = (i: number) => setIndex(((i % total) + total) % total);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused]);

  return (
    <div
      className="relative mx-auto w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Outer glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[var(--qah-accent)] via-amber-300 to-[var(--qah-accent)] rounded-2xl blur-md opacity-40 pointer-events-none" />

      {/* Frame */}
      <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-amber-300 via-[var(--qah-accent)] to-amber-300">
        <div className="relative rounded-[13px] overflow-hidden bg-[var(--qah-primary)]">
          {/* Slides — fade-cross-transition, all stacked */}
          <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={i === index ? undefined : true}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 900px"
                  className="object-contain bg-[var(--qah-primary)]"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous special"
            className="absolute top-1/2 -translate-y-1/2 left-2 md:left-3 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next special"
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-3 w-10 h-10 md:w-11 md:h-11 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter chip */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
            {index + 1} / {total}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to special ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-200 ${
              index === i
                ? 'bg-[var(--qah-accent)] w-8'
                : 'bg-white/30 w-2 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
