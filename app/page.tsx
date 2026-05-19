import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Mechanic from './components/Mechanic';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Promotion from './components/Promotion';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Auto Repair Shop in Cicero, IL | Quiroz Auto Repair',
  description:
    'Quiroz Auto Repair delivers expert auto repair, car repair, brake service, maintenance, and fleet services for drivers throughout Cicero and Cook County.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: absoluteUrl('/'),
  },
};

export default function QuirozAutoRepair() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Promotion />
      <About />
      <Services />
      <Mechanic />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
