import { CLINIC_INFO } from '../data/clinicData';
import { HeartHandshake, ShieldCheck, MessageSquare, Sparkles, Calendar } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 bg-[#DDF5F2] text-[#0B1F2A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Label */}
        <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
          <span className="w-5 h-0.5 bg-[#0E9F9A]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
            ABOUT COSMO DENTCARE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F28C7A] ml-1" />
        </div>

        {/* 2. Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0B1F2A] max-w-3xl leading-[1.15] mb-10 sm:mb-16 lg:mb-20">
          Dentistry with a more <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#0E9F9A]">thoughtful approach.</span>
        </h2>

        {/* Two-Column Editorial Layout (Tablet: reduced gap; Mobile: clean stacked flow) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-16 items-start">
          
          {/* 3. Image: Doctor & Clinical Director (Prominent, editorial card) */}
          <div className="md:col-span-5 lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md md:max-w-none">
              <div className="p-3 sm:p-4 bg-white rounded-2xl shadow-lg border border-[#C1ECE6]">
                <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-xl bg-[#F4F7F7]">
                  <img
                    src="/src/assets/images/doctor_consultation_1788409086328.jpg"
                    alt="Dr. Suman Sahu consultation at Cosmo Dentcare Baharagora"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                {/* Caption badge */}
                <div className="mt-3.5 flex items-center justify-between text-xs text-slate-600 px-1.5 pb-0.5">
                  <div>
                    <span className="font-serif text-base sm:text-lg text-[#0B1F2A] font-medium block">
                      {CLINIC_INFO.doctorName}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Baharagora, Jharkhand
                    </span>
                  </div>
                  <span className="text-[10.5px] uppercase tracking-wider text-[#0E9F9A] font-semibold bg-[#E7F7F6] px-2.5 py-1 rounded-md">
                    Clinical Director
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Description & 5. Supporting Information & 6. CTA */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center">
            
            {/* 4. Description */}
            <div className="space-y-4 sm:space-y-5 text-[#1A3342] text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-[#0B1F2A] font-semibold">{CLINIC_INFO.name}</strong> ({CLINIC_INFO.nativeName}) serves individuals and families in Baharagora and surrounding regional districts, delivering comprehensive dental care within a clean, calm, and clinically modern setting.
              </p>
              
              <p className="text-slate-700">
                We believe visiting the dentist should be an experience defined by clarity, comfort, and clinical diligence. Every treatment plan begins with an unhurried examination and open dialogue, ensuring you understand your oral health status and treatment options without pressure.
              </p>
            </div>

            {/* 5. Supporting Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-8">
              <div className="p-4 bg-white rounded-xl border border-[#C1ECE6] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <HeartHandshake className="w-4 h-4 text-[#0E9F9A]" />
                  <h4 className="font-serif text-base sm:text-lg text-[#0B1F2A] font-medium">
                    Patient Comfort
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Gentle chairside care and attentive protocols to make every visit calm and reassuring.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#C1ECE6] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#0E9F9A]" />
                  <h4 className="font-serif text-base sm:text-lg text-[#0B1F2A] font-medium">
                    Modern Dental Care
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Advanced clinical procedures and hygienic standards designed for lasting oral wellness.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#C1ECE6] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <MessageSquare className="w-4 h-4 text-[#0E9F9A]" />
                  <h4 className="font-serif text-base sm:text-lg text-[#0B1F2A] font-medium">
                    Transparent Guidance
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Clear explanations of treatment steps, timelines, and genuine pricing without surprises.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#C1ECE6] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0E9F9A]" />
                  <h4 className="font-serif text-base sm:text-lg text-[#0B1F2A] font-medium">
                    Personalized Care
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Custom treatment designed for your specific oral health concerns, lifestyle, and comfort.
                </p>
              </div>
            </div>

            {/* 6. Section CTA */}
            <div className="pt-2">
              <a
                href="#appointment"
                className="min-h-[48px] inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#0E9F9A] hover:bg-[#0B8783] active:bg-[#09736F] rounded-xl shadow-xs transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B1F2A]"
              >
                <Calendar className="w-3.5 h-3.5 mr-2 text-[#DDF5F2]" />
                Schedule a Consultation with Dr. Sahu
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
