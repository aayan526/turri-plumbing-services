/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { EmergencyBanner } from './components/EmergencyBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingForm } from './components/BookingForm';
import { ServiceAreas } from './components/ServiceAreas';
import { ContactMap } from './components/ContactMap';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { QuoteModal } from './components/QuoteModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedServiceForQuote(serviceName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedServiceForQuote(undefined);
  };

  // Lenis Smooth Scroll & Snappy ScrollTrigger Reveal Observers with Mandatory JS Safety Net
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initialize Lenis smooth scroll with requestAnimationFrame loop
    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    if (!prefersReducedMotion) {
      try {
        lenis = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        lenis.on('scroll', ScrollTrigger.update);

        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (e) {
        console.warn('Lenis initialization note:', e);
      }
    }

    // 2. Snappy ScrollTrigger reveals (threshold ~0.08 / top 92%)
    const revealElements = gsap.utils.toArray<HTMLElement>('.reveal-init');
    if (!prefersReducedMotion && revealElements.length > 0) {
      revealElements.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 92%',
          onEnter: () => el.classList.add('reveal-visible'),
          once: true,
        });
      });
    } else {
      // If reduced motion or SSR, reveal everything immediately
      revealElements.forEach((el) => el.classList.add('reveal-visible'));
    }

    // 3. CRITICAL SAFETY NET:
    // setTimeout (~3s) plus getBoundingClientRect viewport check that force-reveals
    // any in-viewport element still hidden, so no section can ever stay invisible.
    const safetyNetTimer = setTimeout(() => {
      const stillHidden = document.querySelectorAll('.reveal-init:not(.reveal-visible)');
      stillHidden.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight + 150 && rect.bottom > -150;
        if (inViewport) {
          el.classList.add('reveal-visible');
        }
      });
    }, 3000);

    // Secondary safety check on scroll to ensure no elements stay stuck
    const handleScrollSafetyCheck = () => {
      const stillHidden = document.querySelectorAll('.reveal-init:not(.reveal-visible)');
      if (stillHidden.length === 0) return;
      stillHidden.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
          el.classList.add('reveal-visible');
        }
      });
    };
    window.addEventListener('scroll', handleScrollSafetyCheck, { passive: true });

    return () => {
      clearTimeout(safetyNetTimer);
      window.removeEventListener('scroll', handleScrollSafetyCheck);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-amber-600 selection:text-white">
      {/* Top Emergency Status Banner */}
      <EmergencyBanner />

      {/* Sticky Navbar (changes style on scroll) */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-x-hidden pb-12 sm:pb-0">
        {/* Hero Section */}
        <div className="reveal-init">
          <Hero onOpenQuoteModal={handleOpenQuoteModal} />
        </div>

        {/* Established 2006 / 4.8 Rating / Gas Safe Trust Strip */}
        <div className="reveal-init">
          <TrustStrip />
        </div>

        {/* Services Grid with 'Free Quotes' framing */}
        <div className="reveal-init">
          <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />
        </div>

        {/* Why Choose Us */}
        <div className="reveal-init">
          <WhyChooseUs />
        </div>

        {/* How It Works (4 Steps) */}
        <div className="reveal-init">
          <HowItWorks onOpenQuoteModal={() => handleOpenQuoteModal()} />
        </div>

        {/* Reviews & Social Proof */}
        <div className="reveal-init">
          <ReviewsSection />
        </div>

        {/* Interactive Booking & Callback Form */}
        <div className="reveal-init">
          <BookingForm initialService={selectedServiceForQuote} />
        </div>

        {/* Stepps, Glasgow & Surrounding Coverage */}
        <div className="reveal-init">
          <ServiceAreas />
        </div>

        {/* Operating Hours & Contact with Embedded Google Map */}
        <div className="reveal-init">
          <ContactMap />
        </div>
      </main>

      {/* Footer with visible design-concept disclaimer */}
      <Footer />

      {/* Repositioned floating action controls (Call 07831 191919 + Back to top) in bottom-right */}
      <BackToTop />

      {/* Free Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        serviceName={selectedServiceForQuote}
      />
    </div>
  );
}
