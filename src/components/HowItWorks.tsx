import React from 'react';
import { HOW_IT_WORKS_STEPS, COMPANY_FACTS } from '../data/companyData';
import { PhoneCall, Calculator, CalendarCheck, CheckCheck, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenQuoteModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuoteModal }) => {
  const stepIcons = [PhoneCall, Calculator, CalendarCheck, CheckCheck];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            <span>Seamless Process</span>
            <span aria-hidden="true">·</span>
            <span>Zero Stress</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
            How It Works in 4 Simple Steps
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            From your initial call to final inspection, we make heating and plumbing work straightforward, transparent, and completely worry-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={step.step}
                className="relative bg-slate-800/80 border border-slate-700 rounded-xl p-6 flex flex-col justify-between hover:border-slate-600 transition-colors"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-amber-500 tabular-nums">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-slate-700/60 text-amber-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] font-medium text-amber-300">
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive CTA Strip */}
        <div className="mt-12 p-6 bg-slate-800/60 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-white">
              Ready to schedule your visit or get your free quote?
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              Call us directly or send your requirements online in 60 seconds.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={COMPANY_FACTS.phoneTel}
              className="px-4 py-2.5 text-xs font-bold text-slate-200 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
            >
              Call 07831 191919
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors cursor-pointer"
            >
              <span>Request Callback</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
