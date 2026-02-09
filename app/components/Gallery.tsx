'use client';

import { useEffect, useRef, useState } from 'react';

const galleryItems = [
  { label: 'Brake Service', color: 'from-[var(--qah-primary)] to-[var(--qah-accent)]' },
  { label: 'Engine Diagnostics', color: 'from-[var(--qah-accent)] to-[var(--qah-primary)]' },
  { label: 'Oil Change', color: 'from-[var(--qah-primary)]/90 to-[var(--qah-accent)]/90' },
  { label: 'Tire Rotation', color: 'from-[var(--qah-accent)]/90 to-[var(--qah-primary)]/90' },
  { label: 'A/C Repair', color: 'from-[var(--qah-primary)]/80 to-[var(--qah-accent)]/80' },
  { label: 'Fleet Maintenance', color: 'from-[var(--qah-accent)]/80 to-[var(--qah-primary)]/80' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      className="py-16 md:py-24 bg-[var(--qah-light)] opacity-0"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
            Gallery
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-white)]">
            Our Work Gallery
          </h2>
          <p className="text-lg text-[var(--qah-dark)]/80 max-w-2xl mx-auto">
            Take a look at the quality craftsmanship and attention to detail we
            bring to every repair at our Villa Park auto shop.
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
              {/* Image Placeholder */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-300 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center text-white/10 text-xs">
                  Gallery Image {index + 1}
                </div>
              </div>

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
