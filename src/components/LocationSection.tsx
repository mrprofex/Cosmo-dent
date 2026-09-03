import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export function LocationSection() {
  return (
    <section
      id="location"
      className="py-16 sm:py-24 lg:py-32 bg-[#F4F7F7] text-[#0B1F2A] border-t border-[#E2E8E8] relative"
    >
      <div id="contact" className="absolute -top-28 left-0 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-3.5">
            <span className="w-5 h-0.5 bg-[#0E9F9A]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
              VISIT OUR CLINIC
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0B1F2A] leading-tight">
            Find us in <br />
            <span className="italic font-normal text-[#0E9F9A]">Baharagora.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Conveniently situated on Dr. Sahu's Dental Road with dedicated patient parking and smooth regional road access.
          </p>
        </div>

        {/* Two-Column Grid: Details & Map Card (Stacked naturally on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Address, Phone, Hours, Directions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 bg-white rounded-2xl border border-[#E2E8E8] p-6 sm:p-8 lg:p-10 shadow-xs">
            <div>
              <span className="text-[11px] font-semibold text-[#0E9F9A] tracking-wider uppercase block mb-1.5">
                Primary Facility
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F2A] font-normal mb-1">
                {CLINIC_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-slate-500 mb-6">
                {CLINIC_INFO.nativeName}
              </p>

              <div className="space-y-5 sm:space-y-6 text-sm text-slate-600">
                {/* 1. Physical Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DDF5F2] border border-[#C1ECE6] flex items-center justify-center text-[#0E9F9A] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[11px] uppercase tracking-wider text-[#0B1F2A] font-semibold mb-0.5">
                      Clinic Address
                    </strong>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Dr. Sahu's Dental Road<br />
                      Baharagora, Jharkhand 832101
                    </p>
                  </div>
                </div>

                {/* 2. Direct Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DDF5F2] border border-[#C1ECE6] flex items-center justify-center text-[#0E9F9A] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[11px] uppercase tracking-wider text-[#0B1F2A] font-semibold mb-0.5">
                      Direct Telephone
                    </strong>
                    <a
                      href="tel:+919570729659"
                      aria-label="Call Cosmo Dentcare at 095707 29659"
                      className="min-h-[44px] inline-flex items-center text-base sm:text-lg font-serif text-[#0B1F2A] hover:text-[#0E9F9A] transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A] rounded-xs"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* 3. Hours of Care */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DDF5F2] border border-[#C1ECE6] flex items-center justify-center text-[#0E9F9A] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[11px] uppercase tracking-wider text-[#0B1F2A] font-semibold mb-0.5">
                      Hours of Care
                    </strong>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0E9F9A]" />
                      <span className="text-xs font-semibold text-[#0B1F2A]">
                        Open Today · Closes {CLINIC_INFO.closingTime}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {CLINIC_INFO.operatingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Directions Action Button */}
            <div className="pt-6 border-t border-[#E2E8E8]">
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                id="get-directions-btn"
                className="min-h-[48px] w-full py-4 px-6 text-xs uppercase tracking-[0.16em] font-semibold bg-[#0E9F9A] text-white hover:bg-[#0B8783] active:bg-[#09736F] transition-colors rounded-xl flex items-center justify-center gap-2 shadow-xs text-center cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B1F2A]"
              >
                <Navigation className="w-4 h-4 text-[#DDF5F2]" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#DDF5F2]" />
              </a>
            </div>

          </div>

          {/* 5. Right Column: Architectural Map (Strictly responsive, no overflow) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-2xl border border-[#E2E8E8] overflow-hidden min-h-[340px] sm:min-h-[420px] shadow-xs relative">
            <div className="w-full h-full min-h-[300px] sm:min-h-[360px] relative">
              <iframe
                title="Cosmo Dentcare Baharagora Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14749.567087640324!2d86.7114138!3d22.2825068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1dfa5db0e5d0b9%3A0x7d8389270dfcb978!2sBaharagora%2C%20Jharkhand%20832101!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[300px] sm:min-h-[360px] border-0 filter contrast-[1.05]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Floating map pin badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-3 shadow-md rounded-xl border border-[#E2E8E8] max-w-[240px] sm:max-w-xs pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0E9F9A] animate-pulse" />
                  <span className="font-serif text-xs sm:text-sm text-[#0B1F2A] font-medium truncate">
                    Dr. Sahu's Dental Road
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                  Baharagora, Jharkhand 832101
                </p>
              </div>
            </div>

            {/* Bottom quick landmark notes */}
            <div className="bg-[#F4F7F7] border-t border-[#E2E8E8] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-600 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F28C7A] shrink-0" />
                <span>Accessible from Chakulia, Baripada, Gopiballabpur &amp; Jhargram</span>
              </div>
              <span className="font-semibold text-[#0B1F2A] shrink-0">
                Open 7 Days a Week
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
