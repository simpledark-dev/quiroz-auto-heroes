import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ServicesContent, { type FeaturedService } from './components/ServicesContent';

const heroCopy = {
  eyebrow: 'Our Services',
  title: 'Complete Auto Repair & Car Repair Services in Villa Park, IL',
  description:
    'From routine maintenance to complex repairs, our ASE-certified mechanics provide transparent diagnostics, fast turnaround, and warranty-backed workmanship for Villa Park and DuPage County drivers.',
};

const featuredServices: FeaturedService[] = [
  {
    title: 'Engine Repair & Diagnostics',
    tagline: 'Engine trouble?',
    description:
      'Your engine is the heart of your vehicle, and we treat it with the care it deserves. Our technicians use state-of-the-art diagnostic equipment to accurately identify issues, from minor tune-ups to major overhauls.',
    details: [
      'Complete engine diagnostics and troubleshooting',
      'Check engine light diagnosis',
      'Engine rebuilds and replacements',
      'Timing belt and chain service',
      'Fuel system repair and cleaning',
      'Cooling system service',
    ],
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
  },
  {
    title: 'Brake Service & Repair',
    tagline: 'Brakes squeaking?',
    description:
      'Your safety depends on properly functioning brakes. Villa Park drivers trust us to provide comprehensive brake services that ensure your vehicle stops reliably every time.',
    details: [
      'Brake pad and shoe replacement',
      'Rotor resurfacing or replacement',
      'Brake fluid flush and replacement',
      'Brake line inspection and repair',
      'ABS system diagnostics and repair',
      'Emergency brake adjustment',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    title: 'Battery & Electrical Systems',
    tagline: "Car won't start?",
    description:
      'Modern vehicles rely heavily on complex electrical systems. Our technicians diagnose and repair everything from battery issues to intricate wiring problems.',
    details: [
      'Battery testing and replacement',
      'Alternator and starter repair',
      'Electrical system diagnostics',
      'Wiring repair and replacement',
      'Lighting system service',
      'Power window and lock repair',
    ],
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80',
  },
  {
    title: 'Air Conditioning & Heating',
    tagline: 'A/C not cooling?',
    description:
      'Stay comfortable year-round with our complete climate control services. Whether your A/C is not cooling or your heater is failing, we diagnose the issue and get you driving comfortably again.',
    details: [
      'A/C system inspection and recharge',
      'Compressor repair and replacement',
      'Heater core service',
      'Blower motor repair',
      'Climate control diagnostics',
      'Refrigerant leak detection and repair',
    ],
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&q=80',
  },
  {
    title: 'Oil Change & Maintenance',
    tagline: 'Due for service?',
    description:
      'Regular oil changes are essential for engine longevity. We offer quick, thorough oil change services using quality oils, filters, and comprehensive inspections.',
    details: [
      'Conventional and synthetic oil changes',
      'Oil filter replacement',
      'Fluid level checks and top-offs',
      'Multi-point vehicle inspection',
      'Tire rotation and pressure check',
      'Air filter replacement',
    ],
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
  },
  {
    title: 'Fleet Services',
    tagline: 'Managing a fleet?',
    description:
      'Keep your business moving with our comprehensive fleet maintenance programs. We prioritize efficient service without compromising quality.',
    details: [
      'Scheduled preventive maintenance',
      'Priority scheduling for fleet vehicles',
      'Detailed service records and reporting',
      'Volume pricing for fleet accounts',
      'Emergency repair services',
      'DOT inspection and compliance',
    ],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
  },
];

const additionalServices = [
  'Transmission Repair',
  'Suspension & Steering',
  'Exhaust Systems',
  'Tire Services',
  'Wheel Alignment',
  'State Inspections',
  'Tune-Ups',
  'Belt & Hose Replacement',
  'Radiator Service',
  'Differential Service',
];

export const metadata: Metadata = {
  title: 'Auto Repair Services in Villa Park, IL | Quiroz Auto Heroes',
  description:
    'Browse the complete list of automotive repair and maintenance services offered by Quiroz Auto Heroes in Villa Park, Illinois.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    url: absoluteUrl('/services'),
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <ServicesContent hero={heroCopy} services={featuredServices} additionalServices={additionalServices} />
      <Contact />
      <Footer />
    </main>
  );
}
