import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export function MobileBottomBar({ onOpenBooking }: MobileBottomBarProps) {
  const handleAppointmentClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById('appointment');
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      onOpenBooking();
    }
  };

  return (
    <nav
      id="mobile-sticky-action-bar"
      aria-label="Clinic Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3.5 pt-2.5 min-[1200px]:hidden shadow-[0_-4px_20px_rgba(11,31,42,0.06)]"
      style={{
        paddingBottom: 'max(10px, env(safe-area-inset-bottom, 10px))',
      }}
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* CALL CLINIC ACTION */}
        <a
          href="tel:+919570729659"
          id="mobile-bottom-call-btn"
          aria-label="Call Cosmo Dentcare at 095707 29659"
          className="min-h-[44px] flex items-center justify-center gap-2.5 py-2 px-3 border border-slate-200/90 text-[#0B1F2A] bg-slate-50/90 hover:bg-slate-100 active:bg-slate-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A] rounded-xl transition-colors text-center"
        >
          <div className="w-6 h-6 rounded-md bg-[#0B1F2A]/5 flex items-center justify-center text-[#0E9F9A] shrink-0">
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-[10.5px] uppercase tracking-wider font-semibold text-[#0B1F2A]">
              Call Clinic
            </span>
            <span className="text-[11.5px] font-sans font-medium text-slate-700 tracking-tight mt-0.5">
              095707 29659
            </span>
          </div>
        </a>

        {/* BOOK APPOINTMENT ACTION */}
        <a
          href="#appointment"
          id="mobile-bottom-book-btn"
          onClick={handleAppointmentClick}
          aria-label="Book an appointment at Cosmo Dentcare"
          className="min-h-[44px] flex items-center justify-center gap-2.5 py-2 px-3 bg-[#0E9F9A] text-white hover:bg-[#0B8783] active:bg-[#09736F] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B1F2A] rounded-xl transition-colors cursor-pointer shadow-xs text-center"
        >
          <Calendar className="w-4 h-4 text-[#DDF5F2] shrink-0" aria-hidden="true" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[10.5px] uppercase tracking-wider font-semibold text-white">
              Book
            </span>
            <span className="text-[11.5px] font-sans font-medium text-[#DDF5F2] tracking-tight mt-0.5">
              Appointment
            </span>
          </div>
        </a>
      </div>
    </nav>
  );
}
