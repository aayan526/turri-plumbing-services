import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Flame, ShieldCheck } from 'lucide-react';
import { COMPANY_FACTS } from '../data/companyData';

interface NavbarProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Service Areas', href: '#service-areas' },
    { name: 'Contact & Map', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b192c]/95 backdrop-blur-md shadow-lg border-b border-slate-700/60 py-3'
          : 'bg-[#0b192c] border-b border-slate-800 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white font-extrabold tracking-tight whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg tracking-tight font-black leading-tight text-white">
                TURRI PLUMBING
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-amber-400">
                Services Ltd · Glasgow
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Phone */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={COMPANY_FACTS.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-100 bg-slate-800/80 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors whitespace-nowrap shrink-0"
              title="Call Turri Plumbing Services Ltd"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_FACTS.phone}</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
            >
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Phone + Hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_FACTS.phoneTel}
              className="p-2 text-amber-400 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700"
              aria-label="Call directly"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1f35] border-b border-slate-700 px-4 pt-3 pb-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={COMPANY_FACTS.phoneTel}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold text-white bg-slate-800 rounded-lg border border-slate-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {COMPANY_FACTS.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 px-4 text-sm font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-lg text-center"
            >
              Request Free Quote
            </button>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Gas Safe Registered · 48 Lednock Rd, Stepps</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
