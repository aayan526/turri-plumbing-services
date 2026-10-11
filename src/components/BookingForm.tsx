import React, { useState } from 'react';
import { SERVICES_DATA, COMPANY_FACTS } from '../data/companyData';
import { Phone, CheckCircle2, AlertCircle, ArrowRight, Clock, ShieldCheck, RefreshCw } from 'lucide-react';

interface BookingFormProps {
  initialService?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || SERVICES_DATA[0].title,
    preferredDate: '',
    urgency: 'standard', // 'standard' | 'urgent'
    postcode: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    submittedAt: string;
    name: string;
    phone: string;
    service: string;
    urgency: string;
    preferredDate: string;
  } | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name.';
    }

    // UK Phone validation
    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    const ukPhoneRegex = /^(?:(?:\+44\s?|0)7\d{9}$|(?:\+44\s?|0)1\d{8,9}$|(?:\+44\s?|0)[1-9]\d{8,9}$)/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (!ukPhoneRegex.test(cleanPhone) && cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid UK phone number (e.g. 07831 191919 or 0141...).';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select the service required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous network submission
    setTimeout(() => {
      const generatedRef = `TP-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedData({
        referenceId: generatedRef,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        urgency: formData.urgency,
        preferredDate: formData.preferredDate || 'Earliest Available',
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: SERVICES_DATA[0].title,
      preferredDate: '',
      urgency: 'standard',
      postcode: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="booking" className="py-12 sm:py-20 lg:py-24 bg-white text-slate-900 border-b border-slate-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Context & Trust Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
              <span>Direct Booking & Callbacks</span>
              <span aria-hidden="true">·</span>
              <span>Fast Response</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight text-balance break-words">
              Request Your Free Quote or Callback
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Tell us what plumbing or heating work you need carried out. An experienced engineer will review your details and contact you with clear upfront pricing.
            </p>

            {/* Emergency Callout Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 w-full">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Need Emergency Assistance Right Now?</span>
              </div>
              <p className="text-xs text-amber-800 mt-1.5 leading-relaxed">
                If you have an active burst pipe, major leak, or no heating during freezing temperatures, don't wait for a callback.
              </p>
              <a
                href={COMPANY_FACTS.phoneTel}
                className="mt-3 inline-flex items-center justify-center gap-2 text-xs font-extrabold text-white bg-amber-600 hover:bg-amber-500 px-4 py-2.5 rounded-lg transition-colors shadow-sm w-full sm:w-auto text-center"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>Call Emergency Line: {COMPANY_FACTS.phone}</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-2.5 pt-1 text-xs text-slate-600">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Free, no-obligation written quotes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gas Safe registered engineers with full liability cover</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero sales pressure — honest family-run advice since 2006</span>
              </div>
            </div>

          </div>

          {/* Right Form Card / Confirmation */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-8 shadow-sm w-full">
              
              {!submittedData ? (
                <form onSubmit={handleSubmit} className="space-y-4 w-full">
                  <div className="border-b border-slate-200 pb-3 mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Callback & Booking Request
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      We normally respond within 1–2 business hours (Mon–Fri 9am–6pm).
                    </p>
                  </div>

                  {/* Urgency selector: 1 col on mobile, 2 on sm+ */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Enquiry Urgency
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: 'standard' })}
                        className={`w-full py-2.5 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          formData.urgency === 'standard'
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        Standard Quote / Planned Work
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: 'urgent' })}
                        className={`w-full py-2.5 px-3 text-xs font-bold rounded-lg border text-center transition-all cursor-pointer ${
                          formData.urgency === 'urgent'
                            ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        Urgent / Same-Day Repair
                      </button>
                    </div>
                  </div>

                  {/* Name and Phone: Stack full width on mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Gordon Campbell"
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07831 123456"
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Postcode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-slate-400 font-normal">(Optional for quote)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. gordon@example.co.uk"
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 ${
                          errors.email ? 'border-red-400' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Glasgow Postcode / Area
                      </label>
                      <input
                        type="text"
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        placeholder="e.g. G33 6LU or Stepps"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.categoryLabel})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Date for Engineer Visit / Quote
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900"
                    />
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Job Details / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the issue, boiler make/model (e.g. Vaillant ecoTEC), or bathroom plans..."
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 resize-none"
                    />
                  </div>

                  {/* Submit Button: Full width on mobile */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-center"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                        <span>Transmitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Free Quote & Callback Request</span>
                        <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    No spam ever. Your information is strictly used to provide your quote.
                  </p>
                </form>
              ) : (
                /* Confirmation Screen */
                <div className="py-6 text-center space-y-4 animate-in fade-in duration-300 w-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Request Confirmed
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 break-words">
                      Thank You, {submittedData.name}!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                      Your enquiry has been logged with Turri Plumbing Services Ltd. A qualified heating engineer will call you back shortly.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-white rounded-xl border border-slate-200 p-4 text-left max-w-md mx-auto text-xs space-y-2 w-full">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5 gap-2">
                      <span className="text-slate-500">Booking Reference:</span>
                      <span className="font-mono font-bold text-slate-900">{submittedData.referenceId}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5 gap-2">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-semibold text-slate-900 text-right">{submittedData.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5 gap-2">
                      <span className="text-slate-500">Phone:</span>
                      <span className="font-semibold text-slate-900">{submittedData.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5 gap-2">
                      <span className="text-slate-500">Preferred Date:</span>
                      <span className="font-semibold text-slate-900">{submittedData.preferredDate}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-slate-500">Priority:</span>
                      <span className="font-semibold capitalize text-amber-700">{submittedData.urgency}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
                    <a
                      href={COMPANY_FACTS.phoneTel}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors text-center"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now: 07831 191919</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
