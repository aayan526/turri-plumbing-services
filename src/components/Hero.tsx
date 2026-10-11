import React, { useState } from 'react';
import { Phone, ShieldCheck, Star, Calendar, ArrowRight, CheckCircle2, Wrench, Flame } from 'lucide-react';
import { COMPANY_FACTS } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-[#0b192c] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Subtle industrial architectural background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Ambient gradient glow in amber/navy */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed editorial trust kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Gas Safe Registered</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Family-Run Since {COMPANY_FACTS.established}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Stepps & Greater Glasgow</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Heating & Plumbing Specialists You Can Rely On Across Glasgow
            </h1>

            {/* Concrete Value Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From high-efficiency boiler installations and emergency burst pipe repairs to bespoke luxury bathrooms. Serving homeowners, landlords, and commercial venues from our Stepps base with 18+ years of trusted craft.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-200 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vaillant, Worcester Bosch & Alpha Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free, Clear Quotes with Zero Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Emergency Callout Line: 07831 191919</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Domestic, Landlord CP12 & Commercial</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* Primary Phone CTA */}
              <a
                href={COMPANY_FACTS.phoneTel}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-bold text-white bg-amber-600 hover:bg-amber-500 active:scale-[0.99] rounded-lg shadow-lg shadow-amber-900/30 transition-all text-center group"
              >
                <Phone className="w-5 h-5 text-white animate-bounce-slow" />
                <span>Call {COMPANY_FACTS.phone}</span>
                <ArrowRight className="w-4 h-4 opacity-75 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Free Quote CTA */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-slate-100 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-all text-center cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Request Free Quote</span>
              </button>
            </div>

            {/* Proof Metric Adjacency */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">{COMPANY_FACTS.rating.score}</span>
                <span>({COMPANY_FACTS.rating.totalReviews} verified reviews)</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="text-slate-300">
                <span>Based at </span>
                <span className="font-semibold text-white">{COMPANY_FACTS.address}</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800/90 border border-slate-700 shadow-2xl">
              
              {/* Image Container with Fallback */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-900">
                {!imageError ? (
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                    alt="Turri Plumbing Gas Safe heating engineer servicing boiler installation in Glasgow"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300 p-8 text-center">
                    <Wrench className="w-12 h-12 text-amber-500 mb-3" />
                    <span className="text-base font-bold text-white">Turri Plumbing Services Ltd</span>
                    <span className="text-xs text-slate-400 mt-1">Gas Safe Heating Engineers & Plumbers</span>
                  </div>
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Floating Gas Safe Badge on image */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/80 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="text-xs font-bold tracking-wide">Gas Safe Registered</span>
                </div>

                {/* Emergency note banner pinned to image bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl p-3.5 shadow-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <Flame className="w-4 h-4 fill-amber-400" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Boiler Breakdown or Burst Pipe?</div>
                        <div className="text-[11px] text-slate-300">Emergency callout line available</div>
                      </div>
                    </div>
                    <a
                      href={COMPANY_FACTS.phoneTel}
                      className="px-3 py-1.5 text-xs font-extrabold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors shrink-0"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

              </div>

              {/* Brand Specialists strip directly below image */}
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-slate-400">Accredited Specialists:</span>
                <div className="flex items-center gap-3 font-bold text-white">
                  <span>Vaillant</span>
                  <span className="text-slate-600">·</span>
                  <span>Worcester Bosch</span>
                  <span className="text-slate-600">·</span>
                  <span>Alpha</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
