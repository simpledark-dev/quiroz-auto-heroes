import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Mechanic from './components/Mechanic';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Auto Repair Shop in Villa Park, IL | Quiroz Auto Heroes',
  description:
    'Quiroz Auto Heroes delivers expert auto repair, car repair, brake service, maintenance, and fleet services for drivers throughout Villa Park and DuPage County.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: absoluteUrl('/'),
  },
};

export default function QuirozAutoHeroes() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
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
