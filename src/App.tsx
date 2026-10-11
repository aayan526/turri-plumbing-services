/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { Phone } from 'lucide-react';
import { COMPANY_FACTS } from './data/companyData';

declare global {
  interface Window {
    Lenis?: any;
    gsap?: any;
    ScrollTrigger?: any;
  }
}

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

  // Lenis Smooth Scroll & Snappy Reveal Observers with Mandatory JS Safety Net
  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initialize Lenis if available and allowed
    let lenisInstance: any = null;
    if (!prefersReducedMotion && typeof window.Lenis !== 'undefined') {
      try {
        lenisInstance = new window.Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time: number) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        console.warn('Lenis initialization note:', e);
      }
    }

    // 2. Snappy Scroll Reveal Setup with threshold ~0.05
    const revealElements = document.querySelectorAll('.reveal-init');
    let observer: IntersectionObserver | null = null;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.05,
        }
      );

      revealElements.forEach((el) => observer?.observe(el));
    } else {
      // If reduced motion or no observer, reveal everything immediately
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
      observer?.disconnect();
      if (lenisInstance) {
        try {
          lenisInstance.destroy();
        } catch (e) {
          // ignore
        }
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
      <main className="flex-1 w-full overflow-x-hidden">
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

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Mobile Floating Direct Emergency Phone Pill (respects 15% mobile sticky cap) */}
      <div className="fixed bottom-4 left-4 z-40 sm:hidden">
        <a
          href={COMPANY_FACTS.phoneTel}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-extrabold text-white bg-amber-600 hover:bg-amber-500 rounded-full shadow-lg border border-amber-400/40 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 animate-pulse" />
          <span>Call 07831 191919</span>
        </a>
      </div>

      {/* Free Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        serviceName={selectedServiceForQuote}
      />
    </div>
  );
}
