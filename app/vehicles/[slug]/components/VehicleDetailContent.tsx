'use client';

import Link from 'next/link';
import { useLocale } from '../../../providers/LocaleProvider';
import { VehicleData, vehicles } from '../../../data/vehicles';
import { services } from '../../../data/services';

interface VehicleDetailContentProps {
    vehicle: VehicleData;
}

export default function VehicleDetailContent({ vehicle }: VehicleDetailContentProps) {
    const { dict } = useLocale();

    // Get translated vehicle description and UI strings
    const vehicleData = dict.vehicleData;
    const servicesData = dict.servicesData;
    const ui = dict.vehicleDetailPage;

    const translatedVehicle = vehicleData?.items?.[vehicle.slug as keyof typeof vehicleData.items] as { description?: string[] } | undefined;
    const description = translatedVehicle?.description || vehicle.description;

    return (
        <main className="min-h-screen overflow-x-hidden">
            {/* JSON-LD is handled in page.tsx via metadata/script, but we can also add it here if needed. 
          However, usually better in Server Component. Leaving it there. 
      */}

            {/* Hero Banner */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[var(--qah-light)] bg-stars overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--qah-accent)]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--qah-accent)]/3 rounded-full blur-3xl" />

                <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        {/* Breadcrumb */}
                        <nav className="flex items-center justify-center gap-2 text-sm text-[var(--qah-dark)]/60">
                            <Link href="/" className="hover:text-[var(--qah-accent)] transition-colors">
                                {ui.breadcrumb.home}
                            </Link>
                            <span>/</span>
                            <Link href="/vehicles" className="hover:text-[var(--qah-accent)] transition-colors">
                                {ui.breadcrumb.vehicles}
                            </Link>
                            <span>/</span>
                            <span className="text-[var(--qah-accent)]">{vehicle.name}</span>
                        </nav>

                        <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
                            {ui.badge}
                        </span>
                        <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
                            {vehicle.name} {ui.titleSuffix}
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--qah-dark)]/80 leading-relaxed">
                            {ui.description.replace(/{name}/g, vehicle.name)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200"
                            >
                                {ui.cta.schedule}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href="tel:6302760478"
                                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                {ui.cta.call}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24 bg-[var(--qah-section-light)]">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12">
                            {/* About This Vehicle */}
                            <div className="space-y-4">
                                <h2 className="text-[28px] md:text-[32px] font-bold text-[var(--qah-text-heading)] leading-tight">
                                    {ui.aboutTitle.replace(/{name}/g, vehicle.name)}
                                </h2>
                                {description.map((paragraph: string, i: number) => (
                                    <p key={i} className="text-[var(--qah-text-body)] leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Our Services for This Vehicle */}
                            <div className="bg-gradient-to-br from-[var(--qah-primary)] to-[var(--qah-primary)]/90 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--qah-accent)]/15 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--qah-accent)]/10 rounded-full blur-3xl" />
                                <div className="relative z-10 space-y-6">
                                    <h3 className="text-[24px] md:text-[28px] font-bold">
                                        {ui.servicesTitle.replace(/{name}/g, vehicle.name)}
                                    </h3>
                                    <p className="text-white/85 leading-relaxed">
                                        {ui.servicesDescription.replace(/{name}/g, vehicle.name)}
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/services/${service.slug}`}
                                                className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors duration-200"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-[var(--qah-accent)] flex-shrink-0"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-sm font-medium text-white/90">
                                                    {servicesData.items[service.slug as keyof typeof servicesData.items]?.title.split(' ').slice(0, 3).join(' ') || service.shortTitle}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="space-y-4">
                                <h3 className="text-[24px] md:text-[28px] font-bold text-[var(--qah-text-heading)]">
                                    {ui.whyChooseTitle.replace(/{name}/g, vehicle.name)}
                                </h3>
                                <p className="text-[var(--qah-text-body)] leading-relaxed">
                                    {ui.whyChooseText1.replace(/{name}/g, vehicle.name)}
                                </p>
                                <p className="text-[var(--qah-text-body)] leading-relaxed">
                                    {ui.whyChooseText2.replace(/{name}/g, vehicle.name)}
                                </p>
                                <a
                                    href="tel:6302760478"
                                    className="inline-flex items-center gap-2 bg-[var(--qah-accent)] text-white px-6 py-3 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors duration-200 font-medium mt-4"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    {ui.cta.call}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* View Other Vehicles */}
            <section className="py-16 md:py-20 bg-[var(--qah-light)] bg-stars">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--qah-white)]">
                            {ui.otherVehiclesTitle}
                        </h2>
                        <p className="mt-3 text-[var(--qah-dark)]/70 max-w-2xl mx-auto">
                            {ui.otherVehiclesDescription}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {vehicles
                            .filter((v) => v.slug !== vehicle.slug)
                            .slice(0, 12)
                            .map((v) => (
                                <Link
                                    key={v.slug}
                                    href={`/vehicles/${v.slug}`}
                                    className="group flex items-center justify-center bg-[var(--qah-card)] border border-white/5 rounded-xl py-4 px-3 hover:border-[var(--qah-accent)]/30 hover:bg-[var(--qah-card)]/80 transition-all duration-200"
                                >
                                    <span className="font-medium text-sm text-[var(--qah-white)] group-hover:text-[var(--qah-accent)] transition-colors duration-200 text-center">
                                        {v.name}
                                    </span>
                                </Link>
                            ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/vehicles"
                            className="inline-flex items-center gap-2 border-2 border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-all duration-200 font-medium"
                        >
                            {ui.viewAll}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
