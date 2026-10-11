import React from 'react';
import { Phone, Clock, ShieldAlert } from 'lucide-react';
import { COMPANY_FACTS } from '../data/companyData';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Gas Safe Registered</span>
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Family-run in Stepps since {COMPANY_FACTS.established}</span>
          <span aria-hidden="true" className="hidden md:inline text-slate-600">·</span>
          <span className="hidden md:inline text-slate-400">Standard Hours: {COMPANY_FACTS.hours.weekdays}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-amber-300">Emergency Callout Line:</span>
          </div>
          <a
            href={COMPANY_FACTS.phoneTel}
            className="inline-flex items-center gap-1 font-bold text-white hover:text-amber-400 transition-colors bg-amber-600/30 hover:bg-amber-600/50 px-2.5 py-0.5 rounded border border-amber-500/40"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>{COMPANY_FACTS.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
