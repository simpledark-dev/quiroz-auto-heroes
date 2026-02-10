'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/quiroz-auto-heroes-logo-1.png';
import { services } from '../data/services';
import { vehicles } from '../data/vehicles';

type NavLink = {
  href: string;
  label: string;
  dropdownType?: 'services' | 'vehicles';
};

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', dropdownType: 'services' },
  { href: '/vehicles', label: 'Vehicles', dropdownType: 'vehicles' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileVehiclesOpen, setIsMobileVehiclesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const vehiclesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const vehiclesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileVehiclesOpen(false);
  };

  const makeDropdownHandlers = (
    ref: React.RefObject<HTMLDivElement | null>,
    timeoutRef: React.RefObject<NodeJS.Timeout | null>
  ) => ({
    onMouseEnter: () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      ref.current?.setAttribute('data-open', 'true');
    },
    onMouseLeave: () => {
      timeoutRef.current = setTimeout(() => {
        ref.current?.removeAttribute('data-open');
      }, 150);
    },
  });

  const servicesHandlers = makeDropdownHandlers(servicesDropdownRef, servicesTimeoutRef);
  const vehiclesHandlers = makeDropdownHandlers(vehiclesDropdownRef, vehiclesTimeoutRef);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--qah-card)]/98 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'bg-gradient-to-b from-[var(--qah-light)]/80 to-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <Image
                src={logo}
                alt="Quiroz Auto Heroes"
                height={48}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-[var(--qah-white)] group-hover:text-[var(--qah-accent)] transition-colors duration-200">
                Quiroz Auto Heroes
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.dropdownType === 'services') {
                return (
                  <div
                    key={link.href}
                    ref={servicesDropdownRef}
                    className="relative group/dropdown"
                    {...servicesHandlers}
                  >
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-[var(--qah-dark)] hover:text-[var(--qah-white)] transition-colors duration-200 group flex items-center gap-1"
                    >
                      {link.label}
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover/dropdown:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--qah-accent)] transition-all duration-300 group-hover:w-1/2 rounded-full" />
                    </Link>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 data-[open=true]:opacity-100 data-[open=true]:visible">
                      <div className="bg-[var(--qah-card)] border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 min-w-[240px] backdrop-blur-xl">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--qah-dark)] hover:text-[var(--qah-white)] hover:bg-white/5 transition-colors duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--qah-accent)] flex-shrink-0" />
                            {service.shortTitle}
                          </Link>
                        ))}
                        <div className="border-t border-white/10 mt-2 pt-2">
                          <Link
                            href="/services"
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-[var(--qah-accent)] hover:text-[var(--qah-accent-hover)] hover:bg-white/5 transition-colors duration-150 font-medium"
                          >
                            View All Services
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.dropdownType === 'vehicles') {
                return (
                  <div
                    key={link.href}
                    ref={vehiclesDropdownRef}
                    className="relative group/dropdown"
                    {...vehiclesHandlers}
                  >
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-[var(--qah-dark)] hover:text-[var(--qah-white)] transition-colors duration-200 group flex items-center gap-1"
                    >
                      {link.label}
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover/dropdown:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--qah-accent)] transition-all duration-300 group-hover:w-1/2 rounded-full" />
                    </Link>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 data-[open=true]:opacity-100 data-[open=true]:visible">
                      <div className="bg-[var(--qah-card)] border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 min-w-[240px] max-h-[400px] overflow-y-auto backdrop-blur-xl [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {vehicles.map((vehicle) => (
                          <Link
                            key={vehicle.slug}
                            href={`/vehicles/${vehicle.slug}`}
                            className="flex items-center gap-3 px-4 py-2 text-sm text-[var(--qah-dark)] hover:text-[var(--qah-white)] hover:bg-white/5 transition-colors duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--qah-accent)] flex-shrink-0" />
                            {vehicle.name}
                          </Link>
                        ))}
                        <div className="border-t border-white/10 mt-2 pt-2 sticky bottom-0 bg-[var(--qah-card)]">
                          <Link
                            href="/vehicles"
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-[var(--qah-accent)] hover:text-[var(--qah-accent-hover)] hover:bg-white/5 transition-colors duration-150 font-medium"
                          >
                            View All Vehicles
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[var(--qah-dark)] hover:text-[var(--qah-white)] transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--qah-accent)] transition-all duration-300 group-hover:w-1/2 rounded-full" />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <a
            href="tel:6302760478"
            className="hidden md:inline-flex items-center gap-2 bg-[var(--qah-accent)] text-white px-6 h-11 rounded-full hover:bg-[var(--qah-accent-hover)] hover:shadow-lg hover:shadow-[var(--qah-accent)]/25 transition-all duration-300 group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="font-medium">Call Us Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--qah-card)]/50 text-[var(--qah-white)] hover:bg-[var(--qah-accent)] transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[var(--qah-primary)] border-t border-white/10 px-6 py-4 space-y-2">
          {navLinks.map((link) => {
            if (link.dropdownType === 'services') {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 py-1 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={handleLinkClick}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-150"
                        >
                          <span className="w-1 h-1 rounded-full bg-[var(--qah-accent)]" />
                          {service.shortTitle}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--qah-accent)] hover:text-[var(--qah-accent-hover)] font-medium rounded-lg transition-colors duration-150"
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            if (link.dropdownType === 'vehicles') {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setIsMobileVehiclesOpen(!isMobileVehiclesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileVehiclesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isMobileVehiclesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 py-1 space-y-1 max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                      {vehicles.map((vehicle) => (
                        <Link
                          key={vehicle.slug}
                          href={`/vehicles/${vehicle.slug}`}
                          onClick={handleLinkClick}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-150"
                        >
                          <span className="w-1 h-1 rounded-full bg-[var(--qah-accent)]" />
                          {vehicle.name}
                        </Link>
                      ))}
                      <Link
                        href="/vehicles"
                        onClick={handleLinkClick}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-[var(--qah-accent)] hover:text-[var(--qah-accent-hover)] font-medium rounded-lg transition-colors duration-150"
                      >
                        View All Vehicles
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="tel:6302760478"
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-2 mt-4 bg-[var(--qah-accent)] text-white px-6 py-3 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200 font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call (630) 276-0478
          </a>
        </div>
      </div>
    </nav>
  );
}
