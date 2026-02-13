'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from '../providers/LocaleProvider';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, dict } = useLocale();
  const { hoursList } = dict.contact;

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

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: t('contact.cards.visit'),
      value: '201 W North Ave, Unit 201',
      value2: 'Villa Park, IL 60181',
      link: 'https://maps.google.com/?q=201+W+North+Ave,+Villa+Park,+IL+60181',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: t('contact.cards.call'),
      value: '(630) 276-0478',
      link: 'tel:6302760478',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: t('contact.cards.email'),
      value: 'quirozautoheroes@gmail.com',
      link: 'mailto:quirozautoheroes@gmail.com',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[var(--qah-section-light)] opacity-0 scroll-mt-28 md:scroll-mt-32"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
            {t('contact.eyebrow')}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-text-heading)]">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-[var(--qah-text-body)] max-w-2xl mx-auto">
            {t('contact.body')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Contact Cards */}
          <div className="space-y-5">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--qah-accent)]/20"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[var(--qah-accent)] to-[var(--qah-primary)] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[var(--qah-accent)]/20 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-[var(--qah-accent)] uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-[var(--qah-text-heading)] mb-1 break-words">
                      {info.value}
                    </div>
                    {info.value2 && (
                      <div className="text-[var(--qah-text-body)] break-words">
                        {info.value2}
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 group-hover:bg-[var(--qah-accent)] flex items-center justify-center transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
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
                  </div>
                </div>
              </a>
            ))}

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-[var(--qah-primary)] to-[var(--qah-accent)] rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold text-lg">{t('contact.hours')}</span>
              </div>
              <div className="space-y-2">
                {hoursList.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-white/80">{item.day}</span>
                    <span className="font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--qah-accent)]/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--qah-primary)]/10 rounded-full blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.9999999999995!2d-87.9799999!3d41.8899999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4e9999999999%3A0x9999999999999999!2s201%20W%20North%20Ave%2C%20Villa%20Park%2C%20IL%2060181!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quiroz Auto Heroes Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 sm:p-4 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-[var(--qah-text-heading)]">{t('contact.ready')}</div>
                <div className="text-sm text-[var(--qah-text-body)]">{t('contact.book')}</div>
              </div>
            </div>
            <a
              href="tel:6302760478"
              className="inline-flex items-center gap-2 bg-[var(--qah-accent)] text-white px-6 py-3 rounded-full hover:bg-[var(--qah-accent-hover)] hover:shadow-lg hover:shadow-[var(--qah-accent)]/25 transition-all duration-300 font-medium whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('contact.callCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
