import React, { useState } from 'react';
import { SERVICE_AREAS, COMPANY_FACTS } from '../data/companyData';
import { MapPin, CheckCircle, Search, Phone, Navigation } from 'lucide-react';

export const ServiceAreas: React.FC = () => {
  const [query, setQuery] = useState('');
  const [checkResult, setCheckResult] = useState<{
    covered: boolean;
    areaName: string;
  } | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const clean = query.trim().toLowerCase();
    
    // Check if query matches Glasgow postcodes or covered area names
    const match = SERVICE_AREAS.find(
      (a) =>
        a.name.toLowerCase().includes(clean) ||
        a.postcode.toLowerCase().includes(clean) ||
        clean.startsWith('g') ||
        clean.includes('glasgow') ||
        clean.includes('stepps') ||
        clean.includes('lanarkshire')
    );

    if (match || clean.startsWith('g')) {
      setCheckResult({
        covered: true,
        areaName: match ? `${match.name} (${match.postcode})` : query.toUpperCase(),
      });
    } else {
      setCheckResult({
        covered: false,
        areaName: query,
      });
    }
  };

  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Info & Coverage Checker */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Local Glasgow Coverage</span>
              <span aria-hidden="true">·</span>
              <span>Based in Stepps G33</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Proudly Serving Stepps, Glasgow & Surrounding Areas
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Centrally based at 48 Lednock Road, Stepps, our heating and plumbing vans are positioned for fast callouts across North Lanarkshire, East Dunbartonshire, and all Glasgow districts.
            </p>

            {/* Postcode Area Checker Tool */}
            <div className="p-5 rounded-xl bg-slate-800/90 border border-slate-700 shadow-sm space-y-3">
              <span className="text-xs font-bold text-slate-200">
                Check If We Cover Your Glasgow Postcode
              </span>

              <form onSubmit={handleCheck} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      if (checkResult) setCheckResult(null);
                    }}
                    placeholder="Enter Glasgow postcode or area (e.g. G33, Stepps, G12)..."
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Check Area
                </button>
              </form>

              {checkResult && (
                <div
                  className={`p-3 rounded-lg text-xs flex items-start gap-2.5 animate-in fade-in duration-200 ${
                    checkResult.covered
                      ? 'bg-emerald-950/60 border border-emerald-700 text-emerald-200'
                      : 'bg-amber-950/60 border border-amber-700 text-amber-200'
                  }`}
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">
                      {checkResult.covered
                        ? `Yes! We provide full coverage in ${checkResult.areaName}.`
                        : `We regularly travel across Glasgow & Lanarkshire.`}
                    </span>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Contact us on <a href={COMPANY_FACTS.phoneTel} className="underline font-bold text-amber-400">{COMPANY_FACTS.phone}</a> for rapid dispatch and free quotes.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Direct call note */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Base Hub: 48 Lednock Road, Stepps, Glasgow G33 6LU</span>
            </div>
          </div>

          {/* Right Column: Service Area Chips Grid */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                Primary Glasgow Communities We Serve Daily
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                {SERVICE_AREAS.map((area) => (
                  <div
                    key={area.name}
                    className={`p-2.5 rounded-lg border transition-colors flex flex-col justify-between ${
                      area.highlighted
                        ? 'bg-slate-700/80 border-amber-500/50 text-white font-semibold'
                        : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <span className="font-bold">{area.name}</span>
                    <span className="text-[10px] text-amber-400/90 font-mono mt-0.5">{area.postcode}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <span>Don't see your area listed?</span>
                <a
                  href={COMPANY_FACTS.phoneTel}
                  className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 07831 191919 for immediate confirmation</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
