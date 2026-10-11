import React, { useState } from 'react';
import { Phone, ShieldCheck, Star, Calendar, ArrowRight, CheckCircle2, Wrench, Flame } from 'lucide-react';
import { COMPANY_FACTS } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-[#0b192c] text-white pt-8 pb-12 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800 w-full">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Clean unboxed editorial trust kicker */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-semibold text-amber-400">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Gas Safe Registered</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Family-Run Since {COMPANY_FACTS.established}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Stepps & Glasgow</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance break-words">
              Heating & Plumbing Specialists You Can Rely On Across Glasgow
            </h1>

            {/* Value Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From high-efficiency boiler installations and emergency burst pipe repairs to bespoke luxury bathrooms. Serving homeowners, landlords, and commercial venues from our Stepps base with 18+ years of trusted craft.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200 pt-1">
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

            {/* Action Buttons: Stacks cleanly on mobile, side-by-side on sm+ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full">
              {/* Primary Phone CTA */}
              <a
                href={COMPANY_FACTS.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-amber-600 hover:bg-amber-500 active:scale-[0.99] rounded-lg shadow-lg shadow-amber-900/30 transition-all text-center group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                <span>Call {COMPANY_FACTS.phone}</span>
                <ArrowRight className="w-4 h-4 opacity-75 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              {/* Secondary Free Quote CTA */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-100 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-all text-center cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Request Free Quote</span>
              </button>
            </div>

            {/* Proof Metric Adjacency */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 flex-wrap">
                <div className="flex text-amber-400 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">{COMPANY_FACTS.rating.score}</span>
                <span>({COMPANY_FACTS.rating.totalReviews} verified reviews)</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-slate-600">·</span>
              <div className="text-slate-300">
                <span>Based at </span>
                <span className="font-semibold text-white">{COMPANY_FACTS.address}</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-slate-800/90 border border-slate-700 shadow-2xl w-full max-w-full">
              
              {/* Image Container with Fallback */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-900">
                {!imageError ? (
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                    alt="Turri Plumbing Gas Safe heating engineer servicing boiler installation in Glasgow"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center max-w-full"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-slate-300 p-6 text-center">
                    <Wrench className="w-10 h-10 text-amber-500 mb-2" />
                    <span className="text-sm font-bold text-white">Turri Plumbing Services Ltd</span>
                    <span className="text-xs text-slate-400 mt-1">Gas Safe Heating Engineers & Plumbers</span>
                  </div>
                )}

                {/* Floating Gas Safe Badge on image */}
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/80 rounded-lg px-2.5 py-1 flex items-center gap-2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <span className="text-xs font-bold tracking-wide">Gas Safe Registered</span>
                </div>
              </div>

              {/* Dedicated Emergency note banner below image (no text overlap!) */}
              <div className="p-3.5 sm:p-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
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
                  className="px-3.5 py-2 text-xs font-extrabold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors text-center shrink-0"
                >
                  Call Now
                </a>
              </div>

              {/* Brand Specialists strip directly below image */}
              <div className="p-3 sm:p-4 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                <span className="font-semibold text-slate-400">Accredited Specialists:</span>
                <div className="flex items-center gap-2 font-bold text-white flex-wrap">
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
