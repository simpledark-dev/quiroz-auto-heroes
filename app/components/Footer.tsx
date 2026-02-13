import Image from 'next/image';
import logo from '../assets/quiroz-auto-heroes-logo-1.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] bg-stars text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4 text-center md:text-left md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Image
                src={logo}
                alt="Quiroz Auto Heroes"
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold">Quiroz Auto Heroes</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Part of the Quiroz family&apos;s auto repair legacy across the Chicago area.
              Our experienced mechanics are committed to excellence and customer satisfaction,
              providing quality auto repair services to the Villa Park community and neighboring areas throughout DuPage County.
            </p>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Opening Hours</h3>
            <div className="space-y-2 text-white/80">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium text-white">
                  7:30am - 5:30pm
                </span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium text-white">7:30am - 2:30pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium text-white">Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Contact</h3>
            <div className="space-y-3 text-white/80">
              <a
                href="tel:6302760478"
                className="flex items-center gap-3 hover:text-[var(--qah-accent)] transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
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
                (630) 276-0478
              </a>
              <a
                href="mailto:quirozautoheroes@gmail.com"
                className="flex items-center gap-3 hover:text-[var(--qah-accent)] transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                quirozautoheroes@gmail.com
              </a>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  201 W North Ave, Unit 201
                  <br />
                  Villa Park, IL 60181
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 text-center md:text-left">
            <p>
              &copy; {currentYear} Quiroz Auto Heroes. All rights reserved.
            </p>
            <p>
              201 W North Ave, Unit 201, Villa Park, IL 60181 · (630) 276-0478
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
