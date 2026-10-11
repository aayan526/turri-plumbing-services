import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';
import { COMPANY_FACTS } from '../data/companyData';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling past the Hero and TrustStrip stats cards (~480px)
      // to ensure floating buttons never cover any card text on desktop or mobile
      if (window.scrollY > 480) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <aside 
      aria-label="Quick actions"
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center gap-1.5 sm:gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200 pointer-events-auto"
    >
      {/* Floating Emergency Call Button */}
      <a
        href={COMPANY_FACTS.phoneTel}
        className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 text-xs font-extrabold text-white bg-amber-600 hover:bg-amber-500 rounded-full shadow-xl border border-amber-400/40 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Call Turri Plumbing emergency line"
        title="Call 07831 191919"
      >
        <Phone className="w-3.5 h-3.5 animate-pulse text-white shrink-0" />
        <span className="whitespace-nowrap font-bold tracking-tight">Call {COMPANY_FACTS.phone}</span>
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="p-2 sm:p-2.5 bg-slate-900/95 backdrop-blur-md text-amber-400 hover:text-white hover:bg-amber-600 rounded-full shadow-xl border border-slate-700/80 transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-400 min-w-[36px] min-h-[36px]"
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </aside>
  );
};
