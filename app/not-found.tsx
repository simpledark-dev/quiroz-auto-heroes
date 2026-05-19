import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--qah-light)] text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl text-center space-y-6">
        <span className="qa-chip">
          404 · Page Not Found
        </span>
        <h1 className="qa-heading qa-heading-center text-[40px] md:text-[56px] font-bold leading-tight">
          Looks like that service bay is empty.
        </h1>
        <p className="text-[var(--qah-dark)] text-lg leading-relaxed">
          We couldn’t find the URL you requested. Use the links below to get back on the right route
          or head home to explore Quiroz Auto Repair.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/" className="qa-btn qa-btn-primary">
            Go to Homepage
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/contact" className="qa-btn qa-btn-outline-light">
            Contact the Shop
          </Link>
        </div>
        <div className="pt-8 text-sm text-white/60">
          Need immediate help? Call{' '}
          <a href="tel:7086524669" className="text-[var(--qah-accent)] hover:underline">
            (708) 652-4669
          </a>
          .
        </div>
      </div>
    </div>
  );
}
