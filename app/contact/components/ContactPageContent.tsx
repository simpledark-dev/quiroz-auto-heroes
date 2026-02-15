'use client';

import Link from 'next/link';
import { useLocale } from '../../providers/LocaleProvider';

export default function ContactPageContent() {
  const { dict } = useLocale();
  const ui = dict.contactPage;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--qah-light)] bg-stars overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--qah-accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--qah-accent)]/3 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <nav className="flex items-center justify-center gap-2 text-sm text-[var(--qah-dark)]/60">
            <Link href="/" className="hover:text-[var(--qah-accent)] transition-colors">
              {ui.breadcrumb.home}
            </Link>
            <span>/</span>
            <span className="text-[var(--qah-accent)]">{ui.breadcrumb.contact}</span>
          </nav>

          <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
            {ui.badge}
          </span>
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
            {ui.title}
          </h1>
          <p className="text-lg md:text-xl text-[var(--qah-dark)]/80 leading-relaxed">
            {ui.description}
          </p>
        </div>
      </div>
    </section>
  );
}
