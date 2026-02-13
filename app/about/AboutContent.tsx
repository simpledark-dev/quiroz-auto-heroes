'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import heroImage from '../assets/p4.jpg';
import workshopImage from '../assets/p2.jpg';
import detailImage from '../assets/p5.jpg';
import { useLocale } from '../providers/LocaleProvider';

export default function AboutContent() {
    const { dict } = useLocale();

    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[var(--qah-light)] overflow-hidden">
                <div className="absolute inset-y-0 right-0 w-1/2 bg-[var(--qah-primary)]/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[var(--qah-accent)]/20 rounded-full blur-[120px]" />

                <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-center lg:text-left">
                            <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-[var(--qah-accent)] text-white rounded-full text-sm font-semibold">
                                {dict.aboutPage.hero.badge}
                            </span>
                            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[var(--qah-white)] leading-tight">
                                {dict.aboutPage.hero.title}
                            </h1>
                            <p className="text-lg text-[var(--qah-dark)]/80 leading-relaxed">
                                {dict.aboutPage.hero.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    href="/services"
                                    className="inline-flex items-center justify-center gap-2 bg-[var(--qah-accent)] text-white px-8 h-12 rounded-full hover:bg-[var(--qah-accent-hover)] transition-colors"
                                >
                                    {dict.aboutPage.hero.ctaServices}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a
                                    href="#story"
                                    className="inline-flex items-center justify-center gap-2 border border-[var(--qah-accent)] text-[var(--qah-accent)] px-8 h-12 rounded-full hover:bg-[var(--qah-accent)] hover:text-white transition-colors"
                                >
                                    {dict.aboutPage.hero.ctaStory}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="relative p-3">
                            <div className="absolute top-6 right-6 bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white shadow-lg">
                                {dict.aboutPage.hero.expertService}
                            </div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                                <Image src={heroImage} alt={dict.aboutPage.hero.imageAlt} fill className="object-cover" priority />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section id="story" className="py-16 md:py-24 bg-[var(--qah-section-light)]">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
                                {dict.aboutPage.story.badge}
                            </span>
                            <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-text-heading)] leading-tight">
                                {dict.aboutPage.story.title}
                            </h2>
                            <p className="text-[var(--qah-text-body)] text-lg leading-relaxed">
                                {dict.aboutPage.story.description}
                            </p>
                            <ul className="space-y-3">
                                {dict.aboutPage.story.points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[var(--qah-accent)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold text-[var(--qah-text-heading)]">{point.title}</p>
                                            <p className="text-[var(--qah-text-body)]">{point.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                                <Image src={workshopImage} alt="Quiroz Auto Heroes bay" fill className="object-cover" />
                            </div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg translate-y-6">
                                <Image src={detailImage} alt="Vehicle diagnostics" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 md:py-24 bg-[var(--qah-light)]">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)] text-white text-sm font-semibold rounded-full">
                            {dict.aboutPage.stats.badge}
                        </span>
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-white)]">{dict.aboutPage.stats.title}</h2>
                        <p className="text-[var(--qah-dark)]/80 text-lg max-w-2xl mx-auto">
                            {dict.aboutPage.stats.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {dict.aboutPage.stats.items.map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-[var(--qah-card)]/80 border border-white/5 rounded-2xl p-8 text-center shadow-lg"
                            >
                                <div className="text-3xl font-bold text-white">{stat.label}</div>
                                <p className="text-[var(--qah-dark)] mt-3">{stat.sublabel}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
                            {dict.aboutPage.values.badge}
                        </span>
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-text-heading)]">{dict.aboutPage.values.title}</h2>
                        <p className="text-[var(--qah-text-body)] text-lg max-w-2xl mx-auto">
                            {dict.aboutPage.values.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {dict.aboutPage.values.items.map((value) => (
                            <div key={value.title} className="rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold text-[var(--qah-text-heading)] mb-2">{value.title}</h3>
                                <p className="text-[var(--qah-text-body)] leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 md:py-24 bg-[var(--qah-section-light)]">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-[var(--qah-accent)]/10 text-[var(--qah-accent)] text-sm font-semibold rounded-full">
                            {dict.aboutPage.timeline.badge}
                        </span>
                        <h2 className="text-[32px] md:text-[42px] font-bold text-[var(--qah-text-heading)]">{dict.aboutPage.timeline.title}</h2>
                        <p className="text-[var(--qah-text-body)] text-lg max-w-3xl mx-auto">
                            {dict.aboutPage.timeline.description}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {dict.aboutPage.timeline.items.map((milestone) => (
                            <div
                                key={milestone.year}
                                className="flex flex-col md:flex-row gap-4 md:gap-8 items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                            >
                                <div className="text-[var(--qah-accent)] text-sm font-semibold uppercase tracking-wide">
                                    {milestone.year}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--qah-text-heading)]">{milestone.title}</h3>
                                    <p className="text-[var(--qah-text-body)] mt-2 leading-relaxed">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Contact CTA */}
            <Contact />
            <Footer />
        </main>
    );
}
