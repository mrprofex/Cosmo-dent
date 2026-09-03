export function PatientJourney() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      subtitle: "Listen & Diagnose",
      description: "Understand your concerns, assess oral health thoroughly, and discuss any symptoms in a calm, unhurried setting."
    },
    {
      number: "02",
      title: "Treatment Plan",
      subtitle: "Clarity & Consent",
      description: "Discuss suitable treatment options clearly with transparent procedures, realistic timelines, and honest fee estimates."
    },
    {
      number: "03",
      title: "Ongoing Care",
      subtitle: "Comfort & Recovery",
      description: "Perform gentle treatment and provide supportive follow-up guidance to protect your long-term smile health."
    }
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-24 lg:py-32 bg-[#F4F7F7] border-t border-[#E2E8E8] text-[#0B1F2A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-3.5">
            <span className="w-5 h-0.5 bg-[#0E9F9A]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
              PATIENT EXPERIENCE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0B1F2A] leading-tight">
            A respectful, <br />
            <span className="italic font-normal text-[#0E9F9A]">transparent journey.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed max-w-xl">
            No rushed appointments, no obscure jargon. Just deliberate and compassionate clinical care at every step.
          </p>
        </div>

        {/* 3 Step Large Typographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8E8] flex flex-col justify-between shadow-xs hover:border-[#0E9F9A] transition-colors"
            >
              <div>
                <span className="font-serif text-5xl sm:text-6xl font-light text-[#0E9F9A] block mb-4">
                  {step.number}
                </span>

                <span className="text-[10.5px] uppercase tracking-widest text-slate-400 font-semibold block mb-1">
                  {step.subtitle}
                </span>

                <h3 className="font-serif text-2xl text-[#0B1F2A] font-medium mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E2E8E8] text-[11px] uppercase tracking-wider text-[#0E9F9A] font-semibold">
                Phase {step.number} Protocol
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
