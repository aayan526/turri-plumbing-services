import React from 'react';
import { COMPANY_FACTS } from '../data/companyData';
import { Phone, MapPin, Clock, ShieldCheck, Flame, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07111e] text-slate-300 border-t border-slate-800 w-full overflow-hidden">
      
      {/* Client Pitch Demo Disclaimer Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/30 px-3 sm:px-4 py-3 text-amber-200 w-full">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-2.5 sm:gap-3 text-xs leading-relaxed">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="min-w-0">
            <span className="font-extrabold uppercase tracking-wide text-amber-300">
              Demo Concept Site Notice:
            </span>{' '}
            <span>
              This website is a design and concept demonstration created specifically for a client pitch presentation. It is not the official live website of Turri Plumbing Services Ltd. All business facts, contact details (07831 191919), and services represent actual credentials used for demonstration purposes.
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 w-full">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shrink-0">
                <Flame className="w-4 h-4 fill-white" />
              </div>
              <span className="text-base sm:text-lg font-black tracking-tight text-white">
                TURRI PLUMBING SERVICES LTD
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Family-run plumbing and heating engineers established in 2006. Gas Safe registered specialists serving Stepps, Glasgow, and surrounding communities with upfront free quotes and honest advice.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Gas Safe Registered</span>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Vaillant · Worcester · Alpha</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Rated 4.8 / 5</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors py-1 block">
                  All Heating & Plumbing Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors py-1 block">
                  Why Choose Turri Plumbing
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors py-1 block">
                  How Our 4-Step Process Works
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors py-1 block">
                  Customer Reviews (4.8 / 5.0)
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-amber-400 transition-colors py-1 block">
                  Glasgow & Stepps Service Areas
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-amber-400 transition-colors py-1 block">
                  Request Free Callback
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hours & Emergency Line
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="break-words">{COMPANY_FACTS.address}</span>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <a
                  href={COMPANY_FACTS.phoneTel}
                  className="font-bold text-white hover:text-amber-400 transition-colors"
                >
                  {COMPANY_FACTS.phone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div>{COMPANY_FACTS.hours.weekdays}</div>
                  <div className="text-slate-500">{COMPANY_FACTS.hours.weekend}</div>
                </div>
              </div>

              {/* Emergency line note */}
              <div className="pt-2 text-[11px] text-amber-300 font-semibold bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 leading-snug">
                {COMPANY_FACTS.hours.emergencyNote}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Concept Disclaimer Note */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © 2006–{new Date().getFullYear()} Turri Plumbing Services Ltd. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-500">
            Concept Website Pitch Demo · Registered in Scotland
          </div>
        </div>

      </div>
    </footer>
  );
};
