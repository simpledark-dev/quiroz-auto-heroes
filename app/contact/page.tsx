import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ContactPageContent from './components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us - Auto Repair & Car Repair Mechanic | Villa Park, IL',
  description:
    'Contact Quiroz Auto Heroes for auto repair and car repair services in Villa Park, IL. Call (630) 276-0478, email us, or visit our mechanic shop at 201 W North Ave. Serving Villa Park, Lombard, Elmhurst, and DuPage County.',
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
