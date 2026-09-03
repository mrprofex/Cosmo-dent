import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Phone, Calendar, X, Clock, MapPin, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
}

interface NavItem {
  num: string;
  label: string;
  href: string;
  id: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { num: '01', label: 'Home', href: '#home', id: 'home' },
  { num: '02', label: 'About', href: '#about', id: 'about' },
  { num: '03', label: 'Treatments', href: '#treatments', id: 'treatments' },
  { num: '04', label: 'Smile Gallery', href: '#gallery', id: 'gallery' },
  { num: '05', label: 'Technology', href: '#technology', id: 'technology' },
  { num: '06', label: 'Reviews', href: '#reviews', id: 'reviews' },
  { num: '07', label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isCompact, setIsCompact] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  // 1. Optimized Scroll Listener with requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const prevScrollY = lastScrollYRef.current;
          const delta = currentScrollY - prevScrollY;

          // Hero vs Compact threshold (scrollY <= 20px vs > 20px)
          if (currentScrollY > 20) {
            setIsCompact(true);
          } else {
            setIsCompact(false);
            setIsVisible(true);
          }

          // Hide / Show behavior:
          // Scroll down quickly past 180px threshold -> smoothly hide
          // Any scroll upward (delta < -4) -> immediately reveal
          if (currentScrollY > 180 && delta > 15) {
            setIsVisible(false);
          } else if (delta < -4 || currentScrollY <= 20) {
            setIsVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    if (window.scrollY > 20) {
      setIsCompact(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 2. Active Section Detection with IntersectionObserver
  useEffect(() => {
    const observedSectionIds = ['home', 'about', 'treatments', 'gallery', 'technology', 'reviews', 'location', 'contact'];
    const elements: HTMLElement[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Map location to contact
            if (id === 'location') {
              setActiveSection('contact');
            } else {
              setActiveSection(id);
            }
          }
        });
      },
      {
        rootMargin: '-25% 0px -50% 0px',
        threshold: 0,
      }
    );

    observedSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // 3. Mobile Menu Scroll Lock & Keyboard Escape Handling
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const handleAppointmentClick = (e: React.MouseEvent) => {
    const targetSection = document.getElementById('appointment');
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking();
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Outer Centered Floating Navbar Container */}
      <header
        id="main-navbar-wrapper"
        className={`fixed inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-350 ease-out motion-reduce:transition-none ${
          isCompact ? 'top-3' : 'top-3 sm:top-4 md:top-5'
        } ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0'
        }`}
      >
        <div
          id="main-navbar"
          className={`pointer-events-auto w-[calc(100%-20px)] min-[375px]:w-[calc(100%-24px)] md:w-[calc(100%-32px)] min-[1200px]:w-[calc(100%-48px)] max-w-[1280px] rounded-[18px] transition-all duration-350 ease-out motion-reduce:transition-none flex items-center justify-between border ${
            isCompact
              ? 'h-[58px] sm:h-[62px] min-[1200px]:h-[64px] bg-white/[0.95] backdrop-blur-[24px] border-[#0B1F2A]/[0.10] shadow-[0_10px_30px_-5px_rgba(11,31,42,0.09)] px-3 sm:px-5 lg:px-6 min-[1200px]:px-7'
              : 'h-[62px] sm:h-[68px] min-[1200px]:h-[72px] bg-white/[0.88] backdrop-blur-[18px] border-[#0B1F2A]/[0.08] shadow-[0_4px_24px_-4px_rgba(11,31,42,0.06)] px-3 sm:px-5 lg:px-6 min-[1200px]:px-7'
          }`}
        >
          {/* LEFT: Architectural Brand Wordmark (Responsive scaling with clamp & shrink support) */}
          <a
            href="#home"
            id="nav-logo"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2 sm:gap-2.5 md:gap-3 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A] focus-visible:ring-offset-2 transition-transform duration-200 min-w-0 flex-1 min-[1200px]:flex-initial"
            aria-label="Cosmo Dentcare & Multispeciality Centre Home"
          >
            {/* Subtle Abstract Micro-Emblem */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0B1F2A] flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#0E9F9A] shadow-xs shrink-0">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="6" stroke="currentColor" strokeOpacity="0.4" />
                <path d="M7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13" />
              </svg>
            </div>

            <div className="flex flex-col min-w-0">
              <span
                className="font-serif tracking-[0.12em] sm:tracking-[0.14em] text-[#0B1F2A] font-medium leading-tight group-hover:text-[#0E9F9A] transition-colors whitespace-nowrap truncate"
                style={{ fontSize: 'clamp(11.5px, 1.3vw, 16.5px)' }}
              >
                COSMO DENTCARE
              </span>
              <span
                className="tracking-[0.18em] sm:tracking-[0.22em] text-slate-500 font-sans font-semibold uppercase leading-tight whitespace-nowrap truncate mt-0.5"
                style={{ fontSize: 'clamp(7px, 0.75vw, 8.5px)' }}
              >
                MULTISPECIALITY CENTRE
              </span>
            </div>
          </a>

          {/* CENTER: Desktop Navigation (>= 1200px ONLY; Hidden on Tablet & Mobile) */}
          <nav
            className="hidden min-[1200px]:flex items-center space-x-3.5 xl:space-x-5 2xl:space-x-6 mx-auto px-4"
            aria-label="Main Navigation"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 text-[13.5px] xl:text-[14px] font-medium tracking-wide whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A] focus-visible:ring-offset-2 rounded-sm group ${
                    isActive
                      ? 'text-[#0B1F2A] font-semibold'
                      : 'text-slate-600 hover:text-[#0E9F9A] hover:-translate-y-[1px]'
                  }`}
                >
                  {item.label}

                  {/* Restrained Active/Hover Indicator */}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 transition-all duration-200 ease-out pointer-events-none rounded-full ${
                      isActive
                        ? 'w-3.5 h-0.5 bg-[#0E9F9A] opacity-100'
                        : 'w-1 h-0.5 bg-[#0E9F9A] opacity-0 group-hover:opacity-60 group-hover:w-2.5'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Desktop Book Appointment (>= 1200px) OR Three-Line Hamburger (< 1200px) */}
          <div className="flex items-center shrink-0">
            {/* Desktop Book Appointment CTA (>= 1200px ONLY; Hidden on Tablet & Mobile) */}
            <a
              href="#appointment"
              id="nav-book-btn"
              onClick={handleAppointmentClick}
              className="hidden min-[1200px]:inline-flex items-center justify-center px-4 xl:px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#0E9F9A] hover:bg-[#0B8783] active:bg-[#09736F] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 rounded-xl shadow-xs hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B1F2A] focus-visible:ring-offset-2 cursor-pointer shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#DDF5F2] shrink-0" />
              <span>Book Appointment</span>
            </a>

            {/* Three-Line Menu Button (< 1200px Tablet & Mobile: 44px x 44px touch target, right aligned, shrink-0) */}
            <button
              ref={menuButtonRef}
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex min-[1200px]:hidden items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] text-[#0B1F2A] hover:text-[#0E9F9A] hover:bg-[#0B1F2A]/5 active:bg-[#0B1F2A]/10 transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A] focus-visible:ring-offset-2 rounded-xl cursor-pointer shrink-0 ml-auto"
              style={{ flex: '0 0 44px' }}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <svg
                  className="w-[21px] h-[21px] text-[#0B1F2A]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3.5" y1="6" x2="20.5" y2="6" />
                  <line x1="3.5" y1="12" x2="20.5" y2="12" />
                  <line x1="3.5" y1="18" x2="20.5" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN EDITORIAL MOBILE & TABLET NAVIGATION OVERLAY (< 1200px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeMobileMenu();
            }
          }}
          className="fixed inset-0 z-50 bg-[#0B1F2A] text-white flex flex-col justify-between p-6 sm:p-8 md:p-10 min-[1200px]:hidden animate-in fade-in duration-300 ease-out overflow-y-auto"
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-[#1C3B4E]">
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.14em] text-white font-light leading-none">
                COSMO DENTCARE
              </span>
              <span className="text-[9px] tracking-[0.22em] text-[#0E9F9A] font-sans font-semibold uppercase mt-1 leading-none">
                MULTISPECIALITY CENTRE
              </span>
            </div>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-11 h-11 text-slate-300 hover:text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A] rounded-xl cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Staggered Editorial Navigation Items */}
          <nav
            className="my-auto py-6 flex flex-col space-y-2 sm:space-y-3"
            aria-label="Mobile Directory"
          >
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`min-h-[48px] flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A] ${
                    isActive
                      ? 'text-white bg-white/5 pl-4 border-l-2 border-[#0E9F9A]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-sans tracking-[0.2em] text-[#0E9F9A] font-medium">
                      {item.num}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-light">
                      {item.label}
                    </span>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 text-[#0E9F9A] transition-all duration-200 ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Bottom Info & Contact Actions */}
          <div className="border-t border-[#1C3B4E] pt-5 space-y-4">
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#0E9F9A] shrink-0" />
                <span>Open today until {CLINIC_INFO.closingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0E9F9A] shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-1">
              <a
                href="#appointment"
                onClick={handleAppointmentClick}
                className="w-full min-h-[44px] py-3 text-xs uppercase tracking-[0.16em] font-semibold bg-[#0E9F9A] hover:bg-[#0B8783] active:bg-[#09736F] text-white transition-colors rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
              >
                <Calendar className="w-4 h-4 text-[#DDF5F2]" />
                <span>Book an Appointment</span>
              </a>

              <a
                href="tel:+919570729659"
                onClick={closeMobileMenu}
                aria-label="Call Cosmo Dentcare at 095707 29659"
                className="w-full min-h-[44px] py-3 text-xs uppercase tracking-[0.16em] font-semibold border border-white/20 hover:border-white text-white hover:text-[#0E9F9A] hover:bg-white/5 transition-colors rounded-xl flex items-center justify-center gap-2 text-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A]"
              >
                <Phone className="w-3.5 h-3.5 text-[#0E9F9A]" />
                <span>Call Clinic — 095707 29659</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
