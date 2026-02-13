'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import g1Image from '../assets/g1.jpg';
import g2Image from '../assets/g2.png';
import g3Image from '../assets/g3.jpg';
import g4Image from '../assets/g4.jpg';
import g5Image from '../assets/g5.jpg';
import g6Image from '../assets/g6.jpg';
import { useLocale } from '../providers/LocaleProvider';

const galleryImages = [g1Image, g2Image, g3Image, g4Image, g5Image, g6Image];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t, dict } = useLocale();
  const { items: galleryItems } = dict.gallery;

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
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
            {t('gallery.eyebrow')}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-white)]">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-[var(--qah-dark)]/80 max-w-2xl mx-auto">
            {t('gallery.body')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Image
                src={galleryImages[index]}
                alt={item.alt}
                fill
                className={`object-cover transition-transform duration-300 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[var(--qah-primary)]/90 via-[var(--qah-primary)]/40 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">
                    {item.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
