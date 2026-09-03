import { CheckCircle2, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import rootCanalImg from '../assets/images/endodontic_care_1788409100131.jpg';

interface FeaturedTreatmentProps {
  onDiscussTreatment?: (treatmentName: string) => void;
  onOpenBooking?: () => void;
}

export function FeaturedTreatment({ onDiscussTreatment, onOpenBooking }: FeaturedTreatmentProps) {
  const rootCanalPoints = [
    "Digital diagnostic imaging for accurate canal mapping",
    "Gentle rotary instrumentation for swift and precise cleaning",
    "Effective local anesthesia protocols for pain-free treatment",
    "Biocompatible hermetic seal to prevent reinfection",
    "Custom ceramic crown fitting for complete chew restoration"
  ];

  const handleBooking = () => {
    if (onDiscussTreatment) {
      onDiscussTreatment("Root Canal Therapy (RCT)");
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <section
      id="root-canal-therapy"
      className="py-16 sm:py-24 lg:py-32 bg-[#0B1F2A] text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-[#0E9F9A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop & Tablet: 50/50 split; Mobile: strict stack (Image -> Label -> Heading -> Description -> Points -> CTA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* IMAGE CONTAINER: First on mobile (order-1), 50/50 on desktop */}
          <div className="order-1 lg:order-1 lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] overflow-hidden rounded-2xl bg-[#102937] border border-[#1C3B4E] shadow-2xl relative">
                <img
                  src={rootCanalImg}
                  alt="Modern rotary endodontics and root canal therapy suite at Cosmo Dentcare"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Highlight Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0B1F2A]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg text-xs">
                <p className="text-[10px] uppercase tracking-widest text-[#0E9F9A] font-semibold">
                  Preservation First
                </p>
                <p className="text-white font-medium text-xs mt-0.5">
                  Designed to relieve pain and preserve your natural tooth.
                </p>
              </div>

            </div>
          </div>

          {/* CONTENT CONTAINER: Order-2 on mobile */}
          <div className="order-2 lg:order-2 lg:col-span-6 flex flex-col justify-center">
            
            {/* Treatment Label */}
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-5 h-0.5 bg-[#0E9F9A]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
                FEATURED CLINICAL SPECIALTY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-4 sm:mb-6">
              Modern Root Canal Therapy. <br />
              <span className="italic font-normal text-[#DDF5F2]">
                Gentle. Precise. Restorative.
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Toothache from deep infection does not have to result in tooth loss. At Cosmo Dentcare in Baharagora, our modern endodontic protocols utilize rotary instruments and digital diagnostics to cleanly treat root infections with minimal discomfort.
            </p>

            {/* Treatment Points */}
            <div className="space-y-3 mb-8">
              {rootCanalPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#102937] border border-[#1C3B4E] flex items-center justify-center text-[#0E9F9A] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E9F9A]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                id="root-canal-book-cta"
                onClick={handleBooking}
                className="min-h-[48px] inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#0E9F9A] hover:bg-[#0B8783] active:bg-[#09736F] rounded-xl shadow-md transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#DDF5F2]"
              >
                <Calendar className="w-3.5 h-3.5 mr-2 text-[#DDF5F2]" />
                Book Root Canal Consultation
              </button>

              <a
                href="tel:+919570729659"
                aria-label="Call clinic directly about tooth pain"
                className="min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#0E9F9A]" />
                Call: {CLINIC_INFO.phone}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
