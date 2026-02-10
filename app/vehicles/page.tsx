import type { Metadata } from 'next';
import Link from 'next/link';
import { absoluteUrl } from '@/lib/seo';
import { vehicles } from '../data/vehicles';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Vehicles We Service - Quiroz Auto Heroes | Villa Park, IL',
  description:
    'Quiroz Auto Heroes in Villa Park, IL services all makes and models. From Acura to Volvo, our experienced technicians provide expert maintenance and repair for your vehicle.',
  alternates: {
    canonical: '/vehicles',
  },
  openGraph: {
    url: absoluteUrl('/vehicles'),
  },
};

export default function VehiclesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--qah-light)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--qah-accent)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--qah-accent)]/3 rounded-full blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <nav className="flex items-center justify-center gap-2 text-sm text-[var(--qah-dark)]/60">
              <Link href="/" className="hover:text-[var(--qah-accent)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--qah-accent)]">Vehicles</span>
            </nav>

            <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
              All Makes & Models
            </span>
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
              Vehicles We Service
            </h1>
            <p className="text-lg md:text-xl text-[var(--qah-dark)]/80 leading-relaxed">
              From domestic to import, economy to luxury — our experienced technicians service all vehicle makes and models in Villa Park and DuPage County.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16 md:py-24 bg-[var(--qah-section-light)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {vehicles.map((vehicle) => (
              <Link
                key={vehicle.slug}
                href={`/vehicles/${vehicle.slug}`}
                className="group flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[var(--qah-accent)]/20 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--qah-accent)]/10 flex items-center justify-center mb-3 group-hover:bg-[var(--qah-accent)]/20 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 text-[var(--qah-accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <span className="font-semibold text-sm text-[var(--qah-text-heading)] group-hover:text-[var(--qah-accent)] transition-colors duration-200 text-center">
                  {vehicle.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--qah-light)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[var(--qah-primary)] to-[var(--qah-primary)]/90 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--qah-accent)]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--qah-accent)]/10 rounded-full blur-3xl" />
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <h2 className="text-[28px] md:text-[36px] font-bold">
                Don&apos;t See Your Vehicle?
              </h2>
              <p className="text-white/85 leading-relaxed">
                We service virtually all makes and models. If you don&apos;t see your vehicle listed, give us a call — our experienced technicians can help with any vehicle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="tel:6302760478"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call (630) 276-0478
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 h-12 rounded-full hover:bg-white hover:text-[var(--qah-primary)] transition-all duration-200 font-medium"
                >
                  Contact Us
                </a>
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
