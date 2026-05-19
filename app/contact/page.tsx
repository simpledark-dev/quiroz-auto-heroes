import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContactPageContent from './components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us - Auto Repair & Car Repair Mechanic | Cicero, IL',
  description:
    'Contact Quiroz Auto Repair for auto repair and car repair services in Cicero, IL. Call (708) 652-4669, email us, or visit our mechanic shop at 6027 W 26th St. Serving Cicero, Berwyn, Oak Park, and Cook County.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    url: absoluteUrl('/contact'),
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <ContactPageContent />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
