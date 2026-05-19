import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import VehiclesContent from './components/VehiclesContent';

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
      <VehiclesContent />
      <Contact />
      <Footer />
    </main>
  );
}
