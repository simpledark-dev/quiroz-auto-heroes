'use client';

import { useEffect } from 'react';

const TITLE = 'Website Suspended';
const MESSAGE =
  'This website has been suspended due to an overdue payment. Service will be restored once the outstanding balance has been paid';

export default function SuspensionModal() {
  useEffect(() => {
    const { body, documentElement: html } = document;
    const prevBody = body.style.overflow;
    const prevHtml = html.style.overflow;

    // Lock scrolling so the page behind the overlay cannot be browsed.
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';

    // Swallow Escape and Tab so the modal cannot be dismissed or escaped.
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Tab') {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener('keydown', onKeyDown, true);

    return () => {
      body.style.overflow = prevBody;
      html.style.overflow = prevHtml;
      window.removeEventListener('keydown', onKeyDown, true);
    };
  }, []);

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="suspension-title"
      aria-describedby="suspension-message"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-5 bg-[#04080f]/95 backdrop-blur-xl overscroll-contain"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="w-full max-w-lg rounded-2xl border border-white/15 bg-[var(--qah-card)] shadow-2xl shadow-black/60 px-7 py-9 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#7f1120] border border-white/20">
          <svg
            className="h-8 w-8 text-white"
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
        </div>

        <h1
          id="suspension-title"
          className="text-2xl md:text-3xl font-bold text-[var(--qah-white)]"
        >
          {TITLE}
        </h1>

        <p
          id="suspension-message"
          className="mt-4 text-base leading-relaxed text-[var(--qah-dark)]"
        >
          {MESSAGE}
        </p>
      </div>
    </div>
  );
}
