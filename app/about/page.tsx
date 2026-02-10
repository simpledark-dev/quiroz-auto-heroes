import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import heroImage from '../assets/p4.jpg';
import workshopImage from '../assets/p2.jpg';
import detailImage from '../assets/p5.jpg';

const stats = [
  {
    label: '10+ Years',
    sublabel: 'Hands-on experience keeping Villa Park drivers on the road.',
  },
  {
    label: '1,200+',
    sublabel: 'Vehicles serviced with OEM-grade tools and diagnostics.',
  },
  {
    label: '4.9 / 5',
    sublabel: 'Average rating from word-of-mouth clients and fleet partners.',
  },
];

const values = [
  {
    title: 'Transparent Guidance',
    description:
      'We show you exactly what we found, why it matters, and the best options before any work begins.',
  },
  {
    title: 'Craftsmanship First',
    description:
      'Each repair is handled by ASE-certified hands with premium parts, torque specs, and test drives.',
  },
  {
    title: 'Community Focus',
    description:
      'We are proud to serve Villa Park, Lombard, Elmhurst, and the surrounding DuPage County drivers.',
  },
  {
    title: 'Fair, Predictable Pricing',
    description:
      'You get the quote we stand behind—no surprise add-ons, no upsells you do not need.',
  },
];

const milestones = [
  {
    year: '2014',
    title: 'Quiroz Auto Heroes opens its bay',
    description:
      'Alexia Quiroz launched a one-bay shop with a promise to fix cars the right way and treat every driver like family.',
  },
  {
    year: '2018',
    title: 'Expanded diagnostics + fleet support',
    description:
      'Invested in factory scan tools and began looking after delivery vans, rideshare vehicles, and local service fleets.',
  },
  {
    year: '2021',
    title: 'Performance + EV readiness',
    description:
      'Added battery maintenance programs, ADAS calibration partners, and performance brake/lubrication services.',
  },
  {
    year: 'Today',
    title: 'Villa Park’s trusted repair studio',
    description:
      'Still independently owned, now with a waitlist built purely on referrals and repeat customers.',
  },
];

export const metadata = {
  title: 'About Quiroz Auto Heroes | Villa Park Auto Repair Experts',
  description:
    'Learn how Quiroz Auto Heroes became Villa Park’s trusted auto repair shop. Meet our mission, values, and story rooted in craftsmanship and transparency.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--qah-light)] overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[var(--qah-primary)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[var(--qah-accent)]/20 rounded-full blur-[120px]" />

        <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-[var(--qah-accent)] text-white rounded-full text-sm font-semibold">
                Rooted in Villa Park · Est. 2014
              </span>
              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
                A single-bay shop with enterprise-level standards.
              </h1>
              <p className="text-lg text-[var(--qah-dark)]/80 leading-relaxed">
                Inspired by the legacy of Quiroz Auto Center, we built Quiroz Auto Heroes to deliver concierge-style car care.
                No shortcuts—just transparent diagnostics, dealership-grade tooling, and the personal accountability of a
                neighborhood mechanic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors"
                >
                  Explore Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#story"
                  className="inline-flex items-center gap-2 border border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-colors"
                >
                  Our Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative p-3">
              <div className="absolute top-6 right-6 bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white shadow-lg">
                ASE Certified · Same-Day Diagnostics
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image src={heroImage} alt="Quiroz Auto Heroes workshop" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-16 md:py-24 bg-[var(--qah-section-light)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
                Our Story
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-text-heading)] leading-tight">
                Built on honesty, elevated by modern tooling.
              </h2>
              <p className="text-[var(--qah-text-body)] text-lg leading-relaxed">
                Alexia Quiroz grew up in her family’s Chicago-area shop, learning that the best marketing is trust. When the
                opportunity came to open Quiroz Auto Heroes in Villa Park, she brought the same standards: factory-level
                repairs, candid communication, and a relentless focus on doing what’s right for the driver sitting across the
                counter.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--qah-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--qah-text-heading)]">Purpose-built for Villa Park</p>
                    <p className="text-[var(--qah-text-body)]">Convenient North Avenue location with early drop-off, digital inspections, and text approvals.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--qah-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--qah-text-heading)]">Specialists without the ego</p>
                    <p className="text-[var(--qah-text-body)]">We explain the why behind every repair, keep old parts for you to inspect, and welcome second opinions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--qah-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[var(--qah-text-heading)]">Investment in tooling</p>
                    <p className="text-[var(--qah-text-body)]">OEM scan tools, thermal imaging for EV diagnostics, Hunter alignment partners, and torque traceability.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image src={workshopImage} alt="Quiroz Auto Heroes bay" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg translate-y-6">
                <Image src={detailImage} alt="Vehicle diagnostics" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-[var(--qah-light)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
              Proven Results
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-white)]">Numbers that back up our promises</h2>
            <p className="text-[var(--qah-dark)]/80 text-lg max-w-2xl mx-auto">
              Owners, fleet managers, and first-time drivers choose Quiroz Auto Heroes because the experience is consistent:
              accurate diagnostics, timely turnaround, and proactive communication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--qah-card)]/80 border border-white/5 rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-white">{stat.label}</div>
                <p className="text-[var(--qah-dark)] mt-3">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
              Core Values
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-text-heading)]">What guides Quiroz Auto Heroes</h2>
            <p className="text-[var(--qah-text-body)] text-lg max-w-2xl mx-auto">
              Inspired by Quiroz Auto Center’s service DNA, we have distilled four principles that show up in every
              conversation, repair order, and post-service follow-up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[var(--qah-text-heading)] mb-2">{value.title}</h3>
                <p className="text-[var(--qah-text-body)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-[var(--qah-section-light)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
              Milestones
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-text-heading)]">From one bay to a trusted brand</h2>
            <p className="text-[var(--qah-text-body)] text-lg max-w-3xl mx-auto">
              Every chapter sharpened our focus: invest in education, modernize tooling, and protect the trust of Villa Park
              families who depend on us for safe transportation.
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex flex-col md:flex-row gap-4 md:gap-8 items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="text-[var(--qah-accent)] text-sm font-semibold uppercase tracking-wide">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--qah-text-heading)]">{milestone.title}</h3>
                  <p className="text-[var(--qah-text-body)] mt-2 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <Contact />
      <Footer />
    </main>
  );
}
