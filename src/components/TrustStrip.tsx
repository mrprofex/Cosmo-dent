import { CLINIC_INFO } from '../data/clinicData';

export function TrustStrip() {
  const stats = [
    {
      value: `${CLINIC_INFO.rating}/5`,
      label: "Google Rating",
      sublabel: "Verified patient satisfaction",
      highlight: false,
    },
    {
      value: `${CLINIC_INFO.totalReviews}+`,
      label: "Patient Reviews",
      sublabel: "Across Baharagora & region",
      highlight: true,
    },
    {
      value: "9 PM",
      label: "Closing Time",
      sublabel: "Open 7 days for consultations",
      highlight: false,
    },
    {
      value: "Baharagora",
      label: "Jharkhand 832101",
      sublabel: "Dr. Sahu's Dental Road",
      highlight: false,
    }
  ];

  return (
    <section
      id="trust-strip"
      className="border-b border-[#E2E8E8] bg-white py-10 sm:py-14 lg:py-16 text-[#0B1F2A]"
      aria-label="Clinic Highlights"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid: 2x2 on mobile & tablet, 4x1 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`p-3.5 sm:p-5 rounded-xl transition-colors ${
                index % 2 === 0
                  ? 'bg-[#F8FBFA] lg:bg-transparent'
                  : 'bg-white border border-[#E2E8E8]/70 lg:border-none lg:bg-transparent'
              } ${
                index !== 0 ? 'lg:border-l lg:border-[#E2E8E8] lg:pl-6 xl:pl-8' : ''
              }`}
            >
              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1F2A] tracking-tight whitespace-nowrap">
                  {item.value}
                </span>
                {item.highlight && (
                  <span className="w-2 h-2 rounded-full bg-[#0E9F9A] inline-block mb-1 shrink-0" />
                )}
              </div>
              <span className="text-[11px] sm:text-xs lg:text-sm font-semibold uppercase tracking-wider text-[#0B1F2A] mt-1.5 sm:mt-2 block">
                {item.label}
              </span>
              <span className="text-[10.5px] sm:text-xs text-slate-500 mt-0.5 block leading-normal">
                {item.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
