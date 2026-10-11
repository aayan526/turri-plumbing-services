import React from 'react';
import { REVIEWS_DATA, COMPANY_FACTS } from '../data/companyData';
import { Star, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Overview Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
              <span>Customer Feedback</span>
              <span aria-hidden="true">·</span>
              <span>Stepps & Glasgow Communities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
              What Our Customers Say Across Glasgow
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl">
              Family-run since {COMPANY_FACTS.established}, our highest priority is honest workmanship and respect for your home or business premises.
            </p>
          </div>

          {/* Aggregate Rating Scoreboard Box */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tabular-nums leading-none">
                {COMPANY_FACTS.rating.score}
                <span className="text-base text-slate-400 font-normal"> / 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-amber-500 my-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Overall score from <span className="font-bold text-slate-900">{COMPANY_FACTS.rating.totalReviews} verified reviews</span>
              </div>
            </div>

            <div className="text-right border-l border-slate-100 pl-4">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <CheckCircle className="w-3 h-3 text-emerald-600" />
                <span>100% Real</span>
              </span>
              <div className="text-[11px] text-slate-400 mt-1.5">Google Reviews</div>
            </div>
          </div>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Time */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {Array.from({ length: Math.min(5, Math.max(1, Math.round(Number(rev.rating) || 5))) }, (_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                {/* Service Tag */}
                <div className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded inline-block mb-3">
                  {rev.service}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <span title="Verified Customer" className="inline-flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{rev.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
