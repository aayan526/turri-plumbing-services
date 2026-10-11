import React from 'react';
import { ShieldCheck, HeartHandshake, Star, Flame, Wrench, Building2, Clock, CheckCircle2 } from 'lucide-react';
import { COMPANY_FACTS } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Gas Safe Registered Engineers",
      description: "Fully accredited under UK law. Every boiler installation, repair, and safety check complies strictly with official British safety standards.",
      tag: "Certified Safety",
    },
    {
      icon: HeartHandshake,
      title: "Family-Run Since 2006",
      description: "Based in Stepps, Glasgow for over 18 years. We treat every customer with honest advice, personal accountability, and warm Scottish hospitality.",
      tag: "Local Heritage",
    },
    {
      icon: Star,
      title: "4.8 Rating from 45 Reviews",
      description: "Consistent 5-star feedback from local homeowners, letting agents, and business owners who rely on our prompt arrival and tidy workmanship.",
      tag: "Proven Quality",
    },
    {
      icon: Flame,
      title: "Vaillant, Worcester & Alpha Specialists",
      description: "In-depth factory training and diagnostic expertise for the UK's top condensing boiler systems, providing extended manufacturer warranties.",
      tag: "Brand Specialists",
    },
    {
      icon: Clock,
      title: "Emergency Callout Line",
      description: "When burst pipes or winter boiler breakdowns happen, our direct engineer line (07831 191919) is on hand to prevent flood damage and restore heating.",
      tag: "Rapid Assistance",
    },
    {
      icon: Building2,
      title: "Domestic & Commercial Expertise",
      description: "Equally adept at luxury residential bathroom designs and heavy-duty gas interlocks for busy Glasgow restaurants, pubs, and rental flats.",
      tag: "Full Capability",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
            <span>The Turri Difference</span>
            <span aria-hidden="true">·</span>
            <span>Family-Run Since 2006</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            Why Glasgow Homeowners & Businesses Choose Us
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We built our reputation on dependable craftsmanship, transparent free quotes, and genuine Gas Safe engineering excellence right here in Stepps and Greater Glasgow.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Guaranteed workmanship</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Highlight Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Gas Safe Registered · 48 Lednock Road, Stepps
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white">
              Need a Gas Safe engineer today or planning a renovation?
            </div>
            <div className="text-xs sm:text-sm text-slate-300">
              Speak directly with an experienced heating specialist — call 07831 191919.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={COMPANY_FACTS.phoneTel}
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-md transition-colors text-center"
            >
              Call 07831 191919
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors text-center"
            >
              View Hours & Location
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
