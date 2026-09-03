import { useState, useEffect, FormEvent } from 'react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { Calendar, Phone, Clock, MapPin, Send, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AppointmentSectionProps {
  initialTreatment?: string;
}

export function AppointmentSection({ initialTreatment }: AppointmentSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (9 AM – 12 PM)',
    treatment: initialTreatment || 'General Consultation & Examination',
    message: ''
  });

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomRef = 'CD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      preferredDate: '',
      preferredTime: 'Morning (9 AM – 12 PM)',
      treatment: 'General Consultation & Examination',
      message: ''
    });
  };

  return (
    <section
      id="appointment"
      className="py-16 sm:py-24 lg:py-32 bg-[#0B1F2A] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive Grid: Two-column on Desktop & Tablet, Single-column on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Introduction & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-5 h-0.5 bg-[#0E9F9A]" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
                  SCHEDULE AN APPOINTMENT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F28C7A]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-4">
                Personalized care <br />
                <span className="italic font-normal text-[#DDF5F2]">starts with a conversation.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Reserve your consultation slot at Cosmo Dentcare in Baharagora. We maintain punctual scheduling so your clinical experience remains unhurried and comfortable.
              </p>

              {/* Direct call box */}
              <div className="bg-[#102937] border border-[#1C3B4E] rounded-2xl p-5 sm:p-6 mb-8">
                <span className="text-[10.5px] uppercase tracking-wider text-[#0E9F9A] font-semibold block mb-1">
                  Prefer Direct Phone Booking?
                </span>
                <p className="text-xs text-slate-300 mb-3">
                  Speak directly with our clinic coordinator for immediate appointment confirmation:
                </p>
                <a
                  href="tel:+919570729659"
                  aria-label="Call Cosmo Dentcare at 095707 29659"
                  className="min-h-[44px] inline-flex items-center gap-2.5 font-serif text-xl sm:text-2xl text-white hover:text-[#0E9F9A] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A] rounded-lg"
                >
                  <Phone className="w-5 h-5 text-[#0E9F9A]" />
                  <span>{CLINIC_INFO.phone}</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#0E9F9A] shrink-0" />
                  <span>Transparent treatment explanation prior to any procedure</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <HeartHandshake className="w-4 h-4 text-[#0E9F9A] shrink-0" />
                  <span>Gentle, compassionate clinical environment</span>
                </div>
              </div>
            </div>

            {/* Clinic hours & location reminder */}
            <div className="space-y-2.5 text-xs text-slate-400 border-t border-[#1C3B4E] pt-6">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0E9F9A] shrink-0" />
                <span>Open daily: 9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#0E9F9A] shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Booking Form on Pure White Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#C1ECE6] p-6 sm:p-8 lg:p-10 shadow-2xl text-[#0B1F2A]">
              {submitted ? (
                <div className="text-center py-8 sm:py-12 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#DDF5F2] border border-[#0E9F9A] text-[#0E9F9A] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-[#0E9F9A] font-semibold block mb-2">
                    Request Received
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#0B1F2A] font-light mb-3">
                    Thank you, {formData.name}.
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                    We have noted your consultation request for <strong className="text-[#0B1F2A]">{formData.treatment}</strong>. Our clinical staff will call you at <strong className="text-[#0B1F2A]">{formData.phone}</strong> to confirm your slot.
                  </p>

                  <div className="inline-block bg-[#F4F7F7] border border-[#E2E8E8] px-6 py-3 rounded-lg text-xs text-slate-600 mb-8">
                    Appointment Reference: <span className="font-mono text-[#0E9F9A] font-bold">{bookingRef}</span>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="min-h-[46px] px-6 py-3 text-xs uppercase tracking-wider font-semibold border border-[#E2E8E8] text-[#0B1F2A] hover:bg-[#F4F7F7] rounded-lg transition-colors cursor-pointer"
                    >
                      Book Another Visit
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F2A] font-medium mb-1">
                      Schedule a Consultation
                    </h3>
                    <p className="text-xs text-slate-500">
                      Enter your contact details and preferred time below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="patient-name" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Full Name <span className="text-[#F28C7A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="patient-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajiv Verma"
                        className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-4 py-3 text-base sm:text-sm text-[#0B1F2A] placeholder-slate-400 outline-hidden transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="patient-phone" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Phone Number <span className="text-[#F28C7A]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="patient-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 095707 29659"
                        className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-4 py-3 text-base sm:text-sm text-[#0B1F2A] placeholder-slate-400 outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="patient-date" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="patient-date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-4 py-3 text-base sm:text-sm text-[#0B1F2A] outline-hidden transition-all"
                      />
                    </div>

                    {/* Preferred Time Window */}
                    <div>
                      <label htmlFor="patient-time" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Preferred Time
                      </label>
                      <select
                        id="patient-time"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-4 py-3 text-base sm:text-sm text-[#0B1F2A] outline-hidden transition-all"
                      >
                        <option value="Morning (9 AM – 12 PM)">Morning (9 AM – 12 PM)</option>
                        <option value="Afternoon (12 PM – 4 PM)">Afternoon (12 PM – 4 PM)</option>
                        <option value="Evening (4 PM – 9 PM)">Evening (4 PM – 9 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Treatment or Concern */}
                  <div>
                    <label htmlFor="patient-treatment" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Treatment / Concern
                    </label>
                    <select
                      id="patient-treatment"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="min-h-[46px] w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-4 py-3 text-base sm:text-sm text-[#0B1F2A] outline-hidden transition-all"
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

                  {/* Message */}
                  <div>
                    <label htmlFor="patient-message" className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Message / Notes (Optional)
                    </label>
                    <textarea
                      id="patient-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share any specific symptoms, previous treatments, or questions..."
                      className="w-full bg-[#F4F7F7] border border-[#E2E8E8] rounded-xl focus:border-[#0E9F9A] focus:ring-2 focus:ring-[#0E9F9A]/30 px-4 py-3 text-base sm:text-sm text-[#0B1F2A] placeholder-slate-400 outline-hidden transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-appointment-btn"
                    className="min-h-[48px] w-full py-4 text-xs uppercase tracking-[0.16em] font-semibold bg-[#0E9F9A] text-white hover:bg-[#0B8783] active:bg-[#09736F] transition-all duration-200 rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B1F2A]"
                  >
                    <Send className="w-4 h-4 text-[#DDF5F2]" />
                    <span>Confirm Consultation Request</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Your details are used strictly to coordinate your dental consultation in Baharagora.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
