import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ServicesContent from './components/ServicesContent';

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <ServicesContent />
      <Contact />
      <Footer />
    </main>
  );
}
