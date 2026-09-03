import { Sparkles, Eye, ShieldCheck, HeartHandshake } from 'lucide-react';

export function Technology() {
  const pillars = [
    {
      icon: Eye,
      title: "Precision Examination",
      description: "Thorough diagnostic assessment of tooth structure, gums, and oral tissue to detect early concerns before they cause pain."
    },
    {
      icon: ShieldCheck,
      title: "Sterilization & Hygiene",
      description: "Rigorous autoclaving, hospital-grade instrument disinfection, and single-use protective barriers for every patient."
    },
    {
      icon: Sparkles,
      title: "Rotary Protocols",
      description: "Contemporary instruments engineered for gentle, swift, and highly accurate cavity treatment and root sealing."
    },
    {
      icon: HeartHandshake,
      title: "Transparent Consultation",
      description: "Plain-language explanations of oral health conditions with honest treatment options and transparent fee guidance."
    }
  ];

  return (
    <section
      id="technology"
      className="py-16 sm:py-24 lg:py-32 bg-white text-[#0B1F2A] border-t border-[#E2E8E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-3.5">
              <span className="w-5 h-0.5 bg-[#0E9F9A]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
                CLINICAL STANDARDS &amp; HYGIENE
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0B1F2A] leading-tight">
              Modern dentistry. <br />
              <span className="italic font-normal text-[#0E9F9A]">
                Thoughtfully delivered.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              “From diagnosis to treatment planning, our clinical standards prioritize precision, comfort, and transparent communication.”
            </p>
          </div>
        </div>

        {/* Four Clinical Standards Grid:
            - Desktop: 4 columns
            - Tablet: 2 columns
            - Mobile: Stacked cards with clean borders (no broken dividers)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FBFA] p-6 sm:p-7 rounded-2xl border border-[#E2E8E8] flex flex-col justify-between hover:border-[#0E9F9A] transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#DDF5F2] border border-[#C1ECE6] text-[#0E9F9A] flex items-center justify-center mb-5 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#0B1F2A] font-medium mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8E8] text-[10.5px] uppercase tracking-widest text-slate-400 font-semibold">
                  Standard 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Lounge Snapshot */}
        <div className="mt-12 sm:mt-16 lg:mt-24 p-6 sm:p-10 bg-[#F4F7F7] rounded-2xl border border-[#E2E8E8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="lg:col-span-7 aspect-[16/9] overflow-hidden rounded-xl bg-slate-200 border border-[#E2E8E8]">
            <img
              src="/src/assets/images/dental_lounge_interior_1788409114858.jpg"
              alt="Cosmo Dentcare modern clinic lounge and patient reception in Baharagora"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-widest text-[#0E9F9A] font-semibold block mb-2">
              Baharagora Clinical Center
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0B1F2A] font-light mb-3">
              A calm space for your oral health.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Our clinic on Dr. Sahu's Dental Road is maintained to clinical standards with comfortable reception seating, modern sterilization areas, and private consultation rooms for patient peace of mind.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-700">
              <div>
                <span className="block text-xl font-serif text-[#0B1F2A] font-medium">9 AM – 9 PM</span>
                <span className="text-slate-500">Everyday Clinic Hours</span>
              </div>
              <div className="w-px h-8 bg-slate-300 hidden xs:block" />
              <div>
                <span className="block text-xl font-serif text-[#0B1F2A] font-medium">Baharagora</span>
                <span className="text-slate-500">Jharkhand 832101</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
