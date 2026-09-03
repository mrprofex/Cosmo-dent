import { useState } from 'react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

interface TreatmentsProps {
  onSelectTreatment?: (treatmentName: string) => void;
  onOpenBooking?: () => void;
}

export function Treatments({ onSelectTreatment, onOpenBooking }: TreatmentsProps) {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const handleBookingTrigger = (treatmentName: string) => {
    if (onSelectTreatment) {
      onSelectTreatment(treatmentName);
    } else if (onOpenBooking) {
      onOpenBooking();
    }
  };

  return (
    <section
      id="treatments"
      className="py-16 sm:py-24 lg:py-32 bg-white text-[#0B1F2A] border-t border-[#E2E8E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-3.5">
            <span className="w-5 h-0.5 bg-[#0E9F9A]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
              COMPREHENSIVE SERVICES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0B1F2A] leading-tight">
            Tailored dental care for <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#0E9F9A]">every stage of life.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 max-w-xl leading-relaxed">
            From routine preventive checkups to complex root canal therapies and smile restorations, all procedures adhere to modern hygiene standards.
          </p>
        </div>

        {/* Responsive Treatment Grid:
            - Mobile: Stacked blocks (1 column)
            - Tablet: 2 columns
            - Desktop: 3 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-[#F8FBFA] hover:bg-white rounded-2xl border border-[#E2E8E8] hover:border-[#0E9F9A] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md group"
            >
              <div>
                {/* Treatment Image with consistent aspect ratio */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1F2A]/85 backdrop-blur-xs text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md font-semibold">
                    {treatment.number}
                  </div>
                </div>

                {/* Treatment Details */}
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#0E9F9A] font-semibold block mb-1">
                    {treatment.tagline}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#0B1F2A] font-medium mb-2 group-hover:text-[#0E9F9A] transition-colors">
                    {treatment.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {treatment.description}
                  </p>

                  {/* Highlights points from details */}
                  <ul className="space-y-1.5 mb-2">
                    {treatment.details.slice(0, 2).map((pt, idx) => (
                      <li key={idx} className="flex items-center text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E9F9A] mr-2 shrink-0" />
                        <span className="line-clamp-1">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#E2E8E8]/70 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(treatment)}
                  className="min-h-[44px] text-xs font-semibold text-[#0B1F2A] group-hover:text-[#0E9F9A] inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => handleBookingTrigger(treatment.name)}
                  aria-label={`Book appointment for ${treatment.name}`}
                  className="min-h-[44px] min-w-[44px] rounded-lg bg-[#E7F7F6] text-[#0E9F9A] hover:bg-[#0E9F9A] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Treatment Details Modal */}
        {selectedTreatment && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F2A]/70 backdrop-blur-xs animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-treatment-title"
          >
            <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#C1ECE6] relative">
              <button
                type="button"
                onClick={() => setSelectedTreatment(null)}
                aria-label="Close treatment details"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F4F7F7] text-slate-500 hover:text-[#0B1F2A] flex items-center justify-center transition-colors cursor-pointer text-lg"
              >
                ✕
              </button>

              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl mb-5">
                <img
                  src={selectedTreatment.image}
                  alt={selectedTreatment.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <span className="text-[10px] uppercase tracking-widest text-[#0E9F9A] font-semibold block mb-1">
                {selectedTreatment.tagline}
              </span>

              <h3 id="modal-treatment-title" className="font-serif text-2xl sm:text-3xl text-[#0B1F2A] font-medium mb-3">
                {selectedTreatment.name}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedTreatment.description}
              </p>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs uppercase tracking-wider text-[#0B1F2A] font-semibold">
                  Procedure Highlights:
                </h4>
                {selectedTreatment.details.map((pt, i) => (
                  <div key={i} className="flex items-start text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0E9F9A] mr-2.5 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#E2E8E8]">
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedTreatment.name;
                    setSelectedTreatment(null);
                    handleBookingTrigger(name);
                  }}
                  className="min-h-[48px] flex-1 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#0E9F9A] hover:bg-[#0B8783] rounded-xl text-center cursor-pointer transition-colors shadow-xs"
                >
                  Book Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(null)}
                  className="min-h-[48px] px-5 py-3 text-xs uppercase tracking-[0.14em] font-semibold text-slate-600 bg-[#F4F7F7] hover:bg-slate-200 rounded-xl cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
