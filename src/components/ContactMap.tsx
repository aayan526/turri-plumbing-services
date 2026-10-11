import React from 'react';
import { COMPANY_FACTS } from '../data/companyData';
import { MapPin, Phone, Clock, AlertTriangle, ExternalLink, ShieldCheck } from 'lucide-react';

export const ContactMap: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
            <span>Operating Hours & Base Location</span>
            <span aria-hidden="true">·</span>
            <span>Stepps, Glasgow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance break-words">
            Find Us in Stepps or Call Our Team Directly
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Conveniently located in Stepps with fast road links across Glasgow, Lanarkshire, and central Scotland.
          </p>
        </div>

        {/* Contact Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* Left Column: Business Details & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6 w-full">
            
            <div className="space-y-4 sm:space-y-5">
              
              {/* Address Box */}
              <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5 w-full">
                <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Business Address
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 mt-1 break-words">
                    {COMPANY_FACTS.name}
                  </div>
                  <div className="text-xs text-slate-700 leading-relaxed mt-0.5 break-words">
                    {COMPANY_FACTS.address}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Registered in Scotland · Operating from Stepps
                  </div>
                </div>
              </div>

              {/* Phone Box */}
              <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5 w-full">
                <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Direct Phone Line
                  </div>
                  <a
                    href={COMPANY_FACTS.phoneTel}
                    className="text-lg font-black text-slate-900 hover:text-amber-600 transition-colors block mt-1"
                  >
                    {COMPANY_FACTS.phone}
                  </a>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    Click to call immediately from any device
                  </div>
                </div>
              </div>

              {/* Operating Hours Box */}
              <div className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 w-full">
                <div className="flex items-center gap-2 mb-2.5">
                  <Clock className="w-4 h-4 text-slate-700 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Standard Working Hours
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-200/60 gap-2">
                    <span className="font-semibold text-slate-700">Monday – Friday</span>
                    <span className="font-bold text-slate-900">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 gap-2">
                    <span className="font-semibold text-slate-500">Saturday – Sunday</span>
                    <span className="font-semibold text-slate-500">Closed (Emergency Only)</span>
                  </div>
                </div>
              </div>

              {/* Emergency Callout Note */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-950 flex items-start gap-3 w-full">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-xs font-extrabold text-amber-900">
                    Emergency Callout Line Notice:
                  </div>
                  <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                    {COMPANY_FACTS.hours.emergencyNote}
                  </p>
                  <p className="text-[11px] text-amber-700 mt-1">
                    Available outside standard operating hours for burst pipes, active flooding, and urgent boiler heating failures.
                  </p>
                </div>
              </div>

            </div>

            {/* Gas Safe Seal */}
            <div className="p-3 bg-slate-900 text-white rounded-xl text-xs flex flex-wrap items-center justify-between gap-2 w-full">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Gas Safe Registered Engineers</span>
              </div>
              <span className="text-slate-400 text-[11px]">Stepps, Glasgow</span>
            </div>

          </div>

          {/* Right Column: Embedded Responsive Google Map */}
          <div className="lg:col-span-7 flex flex-col w-full">
            <div className="bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex-1 flex flex-col w-full">
              
              <div className="p-3 sm:px-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs w-full">
                <div className="flex items-center gap-2 min-w-0">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-bold truncate text-[11px] sm:text-xs">48 Lednock Road, Stepps, Glasgow G33 6LU</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_FACTS.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 text-[11px] shrink-0"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Iframe Container */}
              <div className="relative w-full flex-1 min-h-[260px] sm:min-h-[380px]">
                <iframe
                  title="Turri Plumbing Services Ltd Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_FACTS.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full border-0 max-w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 sm:p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 w-full">
                <span>Free customer estimates across Stepps & Glasgow.</span>
                <a
                  href={COMPANY_FACTS.phoneTel}
                  className="font-bold text-amber-600 hover:underline shrink-0"
                >
                  Call {COMPANY_FACTS.phone}
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
