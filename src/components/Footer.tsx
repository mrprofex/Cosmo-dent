import { Phone, MapPin, Clock, Calendar, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About the Clinic', href: '#about' },
    { label: 'Clinical Treatments', href: '#treatments' },
    { label: 'Smile Gallery', href: '#gallery' },
    { label: 'Standards & Hygiene', href: '#technology' },
    { label: 'Patient Reviews', href: '#reviews' },
    { label: 'Location & Map', href: '#location' },
  ];

  return (
    <footer className="bg-[#0B1F2A] text-white pt-16 sm:pt-24 pb-32 min-[1200px]:pb-16 border-t border-[#1C3B4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Branding & Action CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 sm:pb-16 border-b border-[#1C3B4E] items-start">
          
          <div className="lg:col-span-6">
            {/* Minimal Brand Mark */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl border border-[#1C3B4E] flex items-center justify-center bg-[#102937] text-[#0E9F9A]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 4.5C9.5 4.5 10 7 12 7C14 7 14.5 4.5 17 4.5C19.5 4.5 20.5 7 20 12C19.5 17 17.5 20 15 20C13.5 20 13 18 12 18C11 18 10.5 20 9 20C6.5 20 4.5 17 4 12C3.5 7 4.5 4.5 7 4.5Z" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-wide font-light">
                COSMO DENTCARE
              </h2>
            </div>

            <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold mb-2">
              Multispeciality Centre · Baharagora, Jharkhand
            </p>
            <p className="text-xs text-slate-400 font-sans">
              {CLINIC_INFO.nativeName}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-3.5 leading-relaxed">
              Thoughtful dental care, modern treatment solutions and a patient-first approach for individuals and families across Baharagora and neighboring regional communities.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center lg:justify-end gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="min-h-[48px] inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#0E9F9A] hover:bg-[#0B8783] active:bg-[#09736F] transition-all rounded-xl shadow-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-2 text-[#DDF5F2]" />
              <span>Book Appointment</span>
            </button>

            <a
              href="tel:+919570729659"
              aria-label="Call Cosmo Dentcare at 095707 29659"
              className="min-h-[48px] inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold text-white border border-white/20 hover:border-white hover:bg-white/5 transition-colors rounded-xl text-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A]"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-[#0E9F9A]" />
              <span>Call {CLINIC_INFO.phone}</span>
            </a>
          </div>

        </div>

        {/* Middle Tier: Links & Clinic Information (Responsive: single column on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 py-10 sm:py-12 border-b border-[#1C3B4E]">
          
          {/* Quick Navigation Links */}
          <div className="lg:col-span-5">
            <h4 className="text-xs uppercase tracking-widest text-[#0E9F9A] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="min-h-[36px] flex items-center hover:text-white hover:underline transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest text-[#0E9F9A] font-semibold mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0E9F9A] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0E9F9A] shrink-0" />
                <a
                  href="tel:+919570729659"
                  aria-label="Call Cosmo Dentcare at 095707 29659"
                  className="min-h-[36px] flex items-center hover:text-[#0E9F9A] transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-[#0E9F9A] rounded-xs"
                >
                  {CLINIC_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0E9F9A] shrink-0" />
                <span>Open Everyday: 9 AM – 9 PM</span>
              </p>
            </div>
          </div>

          {/* Regional Reach */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#0E9F9A] font-semibold mb-4">
              Regional Coverage
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Serving Baharagora, Chakulia, Baripada, Gopiballabpur, Jhargram, and neighboring districts.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#0E9F9A] font-medium">
              <span>{CLINIC_INFO.rating} ★ Rating</span>
              <span className="text-slate-500">·</span>
              <span className="text-[#DDF5F2]">{CLINIC_INFO.totalReviews}+ Patient Reviews</span>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Cosmo Dentcare &amp; Multispeciality Centre. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white uppercase tracking-wider transition-colors cursor-pointer px-2 py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0E9F9A]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
