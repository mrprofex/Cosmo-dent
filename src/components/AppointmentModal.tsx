import { useState, FormEvent } from 'react';
import { X, CheckCircle2, Phone, Send } from 'lucide-react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
  preselectedTreatment?: string;
}

export function AppointmentModal({ isOpen, onClose, defaultTreatment, preselectedTreatment }: AppointmentModalProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (9 AM – 12 PM)',
    treatment: preselectedTreatment || defaultTreatment || 'General Consultation & Examination',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    const ref = `CD-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-[#0B1F2A]/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white max-w-lg w-full rounded-2xl border border-[#C1ECE6] p-5 sm:p-8 shadow-2xl relative text-[#0B1F2A] max-h-[92vh] overflow-y-auto">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-[#0B1F2A] hover:bg-[#F4F7F7] rounded-xl transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 sm:py-8">
            <div className="w-14 h-14 rounded-full bg-[#DDF5F2] border border-[#0E9F9A] text-[#0E9F9A] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#0E9F9A] font-semibold block mb-1.5">
              Consultation Requested
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F2A] font-medium mb-2">
              Thank you, {formData.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed mb-6">
              Our clinical coordinator will call you at <strong className="text-[#0B1F2A]">{formData.phone}</strong> to confirm your appointment for <strong className="text-[#0B1F2A]">{formData.treatment}</strong>.
            </p>

            <div className="inline-block bg-[#F4F7F7] border border-[#E2E8E8] px-5 py-2.5 rounded-lg text-xs text-slate-600 mb-6">
              Booking Ref: <span className="font-mono text-[#0E9F9A] font-bold">{bookingRef}</span>
            </div>

            <div>
              <button
                type="button"
                onClick={handleClose}
                className="min-h-[46px] px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#0E9F9A] text-white hover:bg-[#0B8783] rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5 pr-8">
              <span className="text-[11px] uppercase tracking-widest text-[#0E9F9A] font-semibold block mb-1">
                Cosmo Dentcare · Baharagora
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F2A] font-medium">
                Book an Appointment
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the details below or call our clinic directly at{' '}
                <a
                  href="tel:+919570729659"
                  aria-label="Call Cosmo Dentcare at 095707 29659"
                  className="font-semibold text-[#0E9F9A] hover:underline focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#0E9F9A] rounded-xs whitespace-nowrap"
                >
                  {CLINIC_INFO.phone}
                </a>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                  Full Name <span className="text-[#F28C7A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-3.5 py-2.5 text-base sm:text-sm text-[#0B1F2A] outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                  Phone Number <span className="text-[#F28C7A]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 095707 29659"
                  className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-3.5 py-2.5 text-base sm:text-sm text-[#0B1F2A] outline-hidden transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-3.5 py-2.5 text-base sm:text-sm text-[#0B1F2A] outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-3.5 py-2.5 text-base sm:text-sm text-[#0B1F2A] outline-hidden transition-all"
                  >
                    <option value="Morning (9 AM – 12 PM)">Morning (9 AM – 12 PM)</option>
                    <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
                    <option value="Evening (4 PM – 9 PM)">Evening (4 PM – 9 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                  Treatment / Concern
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-3.5 py-2.5 text-base sm:text-sm text-[#0B1F2A] outline-hidden transition-all"
                >
                  <option value="General Consultation & Examination">General Consultation &amp; Examination</option>
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                  <option value="Toothache / Emergency Concern">Toothache / Emergency Concern</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Any questions or symptoms..."
                  className="w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-3.5 py-2.5 text-base sm:text-sm text-[#0B1F2A] outline-hidden transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="min-h-[48px] w-full py-3 text-xs uppercase tracking-[0.14em] font-semibold bg-[#0E9F9A] text-white hover:bg-[#0B8783] active:bg-[#09736F] transition-colors rounded-xl flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#DDF5F2]" />
                  <span>Submit Appointment Request</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
