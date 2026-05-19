import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PromotionsContent from './components/PromotionsContent';

export const metadata: Metadata = {
  title: 'Promotions & Special Offers | Quiroz Auto Repair',
  description:
    'Save on auto repair with our latest deals. Oil changes, brake service, diagnostics and more at Quiroz Auto Repair in Cicero, IL.',
  alternates: { canonical: '/promotions' },
  openGraph: { url: absoluteUrl('/promotions') },
};

export default function PromotionsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <PromotionsContent />
      <Contact />
      <Footer />
    </main>
  );
}
