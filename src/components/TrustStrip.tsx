import React from 'react';
import { ShieldCheck, Star, Users, Award, CheckCircle } from 'lucide-react';
import { COMPANY_FACTS } from '../data/companyData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-slate-900 border-b border-slate-800 py-6 sm:py-8 text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Row: Single column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between w-full">
            <div className="flex items-center justify-between text-amber-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Established</span>
              <Users className="w-4 h-4 text-amber-400 shrink-0" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono tabular-nums">
              2006
            </div>
            <div className="text-xs text-slate-300 mt-1 leading-relaxed">
              Family-run business in Stepps, Glasgow for over 18 years
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between w-full">
            <div className="flex items-center justify-between text-amber-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Google Rating</span>
              <div className="flex text-amber-400 shrink-0">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono tabular-nums">
              {COMPANY_FACTS.rating.score} / 5.0
            </div>
            <div className="text-xs text-slate-300 mt-1 leading-relaxed">
              Based on {COMPANY_FACTS.rating.totalReviews} verified Glasgow homeowner & landlord reviews
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between w-full">
            <div className="flex items-center justify-between text-amber-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Accredited</span>
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Gas Safe
            </div>
            <div className="text-xs text-slate-300 mt-1 leading-relaxed">
              Legally certified for boiler installation, servicing & CP12s
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between w-full">
            <div className="flex items-center justify-between text-amber-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-400">Boiler Brands</span>
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
            </div>
            <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Vaillant · Worcester
            </div>
            <div className="text-xs text-slate-300 mt-1 leading-relaxed">
              Also Alpha heating systems specialists with manufacturer warranties
            </div>
          </div>

        </div>

        {/* Brand bar banner: clean vertical stack on mobile */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-start sm:items-center gap-2">
            <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
            <span className="font-medium text-slate-300">
              Free upfront quotes with no obligation · Domestic, Landlord & Commercial
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-400">Direct engineer line:</span>
            <a
              href={COMPANY_FACTS.phoneTel}
              className="font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              {COMPANY_FACTS.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
