'use client';

import { useEffect, useRef } from 'react';

const MESSAGE =
  'This website has been suspended due to an overdue payment. Service will be restored once the outstanding balance has been paid';

export default function SuspensionBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  // Keep the page offset in sync with the banner height so the navbar and
  // page content are never hidden behind it when the message wraps.
  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const syncHeight = () => {
      document.documentElement.style.setProperty(
        '--qah-banner-h',
        `${el.offsetHeight}px`
      );
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={bannerRef}
      role="alert"
      aria-live="assertive"
      className="fixed top-0 left-0 right-0 z-[200] bg-[#7f1120] border-b border-white/25 shadow-lg shadow-black/50"
    >
      <div className="max-w-[1200px] mx-auto px-5 py-3 flex items-center justify-center gap-3">
        <svg
          className="w-5 h-5 shrink-0 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <p className="text-sm md:text-base font-semibold text-white text-center leading-snug">
          {MESSAGE}
        </p>
      </div>
    </div>
  );
}
