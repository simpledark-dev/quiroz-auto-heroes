'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import flyerImage from '../assets/flyer.jpeg';
import { useLocale } from '../providers/LocaleProvider';

export default function PromotionModal() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const { t } = useLocale();

  if (!isOpen || pathname === '/promotions') return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative max-w-3xl w-full animate-fade-in-up flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading above modal */}
        <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-amber-100 to-[var(--qah-dark)] bg-clip-text text-transparent">
          {t('promotion.modalTitle').toUpperCase()} !!
        </h2>

        {/* Modal container */}
        <div className="relative w-full">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--qah-accent)] via-amber-400 to-[var(--qah-accent)] rounded-2xl blur-sm opacity-60" />

          {/* Border frame */}
          <div className="relative rounded-2xl p-[3px] bg-gradient-to-br from-amber-400 via-[var(--qah-accent)] to-amber-400">
            <div className="relative rounded-[13px] overflow-hidden bg-[var(--qah-primary)]">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close promotion"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Flyer image */}
              <Image
                src={flyerImage}
                alt="Quiroz Auto Heroes Promotion - $29 Oil Change, $299 Brakes, Free Check Engine Light Scan"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
