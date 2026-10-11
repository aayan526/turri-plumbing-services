import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem, COMPANY_FACTS } from '../data/companyData';
import { Check, ArrowRight, Phone, Wrench, ShieldCheck, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'All Services (20)' },
    { id: 'boilers', label: 'Boilers & Heating' },
    { id: 'bathrooms', label: 'Bathrooms & Showers' },
    { id: 'plumbing', label: 'General Plumbing & Leaks' },
    { id: 'landlord_commercial', label: 'Landlord & Commercial' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
            <span>Specialist Services</span>
            <span aria-hidden="true">·</span>
            <span>All Work Fully Guaranteed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-balance">
            Expert Plumbing & Heating with Free Upfront Quotes
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Every job is handled by our experienced Gas Safe certified tradesmen with zero hidden charges. We specialize in Vaillant, Worcester Bosch & Alpha systems, complete bathroom renovations, and commercial installations.
          </p>
        </div>

        {/* Free Quotes Framing Banner */}
        <div className="mb-8 p-4 sm:p-5 bg-blue-950 text-white rounded-xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-blue-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                Every Service Includes a Free, No-Obligation Written Quote
              </div>
              <div className="text-xs text-slate-300">
                Transparent labour and parts pricing with no surprise extras. Family-run integrity since {COMPANY_FACTS.established}.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={COMPANY_FACTS.phoneTel}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-amber-300 bg-blue-900 hover:bg-blue-800 rounded-lg border border-blue-700/80 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 07831 191919</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('General Enquiry')}
              className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Instant Quote Request</span>
            </button>
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Functional Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. boiler, shower)..."
              className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const hasImgError = failedImages[service.id];
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    {!hasImgError ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(service.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400 p-4 text-center">
                        <Wrench className="w-8 h-8 text-amber-500/70 mb-2" />
                        <span className="text-xs font-semibold text-slate-600">{service.title}</span>
                      </div>
                    )}

                    {/* Category Label Overlay */}
                    <div className="absolute bottom-2.5 left-2.5 bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-0.5 rounded shadow">
                      {service.categoryLabel}
                    </div>

                    {/* Optional Badge */}
                    {service.badge && (
                      <div className="absolute top-2.5 right-2.5 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow uppercase tracking-wide">
                        {service.badge}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Highlights list */}
                    <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Footer with Free Quote trigger */}
                <div className="p-5 pt-0 mt-auto">
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold text-slate-500">
                      Free estimate
                    </span>
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-amber-600 hover:text-white rounded-lg transition-colors cursor-pointer group-hover:bg-amber-600 group-hover:text-white"
                    >
                      <span>Get Free Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
            <p className="text-sm font-semibold text-slate-700">No services matched "{searchQuery}"</p>
            <p className="text-xs text-slate-500 mt-1">Please call us on 07831 191919 for custom plumbing and heating queries.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
