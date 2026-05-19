import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--qah-light)] text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl text-center space-y-6">
        <span className="inline-flex items-center justify-center px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
          404 · Page Not Found
        </span>
        <h1 className="text-[40px] md:text-[56px] font-bold leading-tight">
          Looks like that service bay is empty.
        </h1>
        <p className="text-[var(--qah-dark)] text-lg leading-relaxed">
          We couldn’t find the URL you requested. Use the links below to get back on the right route
          or head home to explore Quiroz Auto Heroes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200"
          >
            Go to Homepage
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200"
          >
            Contact the Shop
          </Link>
        </div>
        <div className="pt-8 text-sm text-white/60">
          Need immediate help? Call{' '}
          <a href="tel:6302760478" className="text-[var(--qah-accent)] hover:underline">
            (630) 276-0478
          </a>
          .
        </div>
      </div>
    </div>
  );
}
