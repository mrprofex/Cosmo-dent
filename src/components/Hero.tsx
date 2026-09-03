import React from 'react';
import { ArrowRight, Star, Clock, MapPin, Calendar, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import heroImg from '../assets/images/cosmo_clinic_hero_1788409071651.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-20 flex items-center bg-[#0B1F2A] text-white overflow-hidden"
    >
      {/* Subtle restrained aqua graphical ambient detail behind the visual */}
      <div className="absolute top-1/4 -right-20 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-[#DDF5F2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#0E9F9A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================
            DESKTOP & TABLET LAYOUT (md:grid-cols-12)
            Two-column editorial presentation
            ============================================================ */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="md:col-span-7 lg:col-span-7 xl:col-span-7 pr-0 lg:pr-4">
            
            {/* Brand Eyebrow with Warm Coral micro-indicator */}
            <div className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full bg-[#102937] border border-[#1C3B4E]">
              <span className="w-2 h-2 rounded-full bg-[#F28C7A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#DDF5F2] font-semibold">
                COSMO DENTCARE &amp; MULTISPECIALITY CENTRE
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.08] tracking-tight mb-6">
              A healthier smile.
              <span className="block font-normal italic text-slate-100 mt-1">
                A more <span className="text-[#0E9F9A] not-italic font-medium">confident</span> you.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-xl font-normal mb-8 lg:mb-10">
              Thoughtful dental care, modern treatment solutions and a patient-first approach — all under one roof in Baharagora.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10">
              <button
                type="button"
                id="hero-desktop-book-btn"
                onClick={onOpenBooking}
                className="min-h-[48px] inline-flex items-center justify-center px-6 sm:px-7 py-3.5 sm:py-4 text-xs uppercase tracking-[0.16em] font-semibold text-white bg-[#0E9F9A] hover:bg-[#0B8783] active:bg-[#09736F] hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 rounded-lg shadow-md group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#DDF5F2]"
              >
                <Calendar className="w-3.5 h-3.5 mr-2.5 text-[#DDF5F2]" />
                Book an Appointment
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1 text-[#DDF5F2]" />
              </button>

              <a
                href="tel:+919570729659"
                id="hero-desktop-call-btn"
                aria-label="Call Cosmo Dentcare at 095707 29659"
                className="min-h-[48px] inline-flex items-center justify-center px-5 sm:px-6 py-3.5 sm:py-4 text-xs uppercase tracking-[0.16em] font-semibold text-white bg-transparent hover:bg-white/10 border border-white/30 hover:border-white hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200 rounded-lg text-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A]"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#0E9F9A]" />
                Call {CLINIC_INFO.phone}
              </a>
            </div>

            {/* Trust Metric Line */}
            <div className="flex items-center gap-3 pt-5 border-t border-[#1C3B4E] max-w-lg">
              <div className="flex items-center text-[#0E9F9A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0E9F9A] stroke-[#0E9F9A]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
                <strong className="text-white font-semibold">{CLINIC_INFO.rating} ★</strong> Google Rating
                <span className="mx-2 text-slate-500">·</span>
                <span className="text-[#DDF5F2]">{CLINIC_INFO.totalReviews}+ Patient Reviews</span>
              </p>
            </div>

          </div>

          {/* Right Column: Hero Visual with Balanced Editorial Badges */}
          <div className="md:col-span-5 lg:col-span-5 xl:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Restrained subtle aqua background glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0E9F9A]/20 via-[#DDF5F2]/10 to-transparent rounded-2xl -z-10 blur-xs" />

              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] md:aspect-[5/4] lg:aspect-[4/3] overflow-hidden rounded-xl bg-[#102937] shadow-2xl border border-[#1C3B4E]">
                <img
                  src={heroImg}
                  alt="Cosmo Dentcare modern clinical suite interior in Baharagora"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Open Today */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white p-3.5 sm:p-4 shadow-xl rounded-lg border border-[#DDF5F2] max-w-xs flex items-center gap-3 text-[#0B1F2A]">
                <div className="w-9 h-9 rounded-lg bg-[#DDF5F2] text-[#0E9F9A] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0E9F9A] animate-pulse" />
                    <span className="text-[11px] font-semibold text-[#0B1F2A] uppercase tracking-wider">
                      Open Today
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    Until {CLINIC_INFO.closingTime}
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Location */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-[#102937] text-white p-3 sm:p-3.5 shadow-xl rounded-lg border border-[#1C3B4E] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#0B1F2A] text-[#0E9F9A] border border-[#1C3B4E] flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-[#0E9F9A] font-semibold">
                    Location
                  </p>
                  <p className="text-[11px] font-serif text-white whitespace-nowrap">
                    Baharagora, Jharkhand
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ============================================================
            MOBILE LAYOUT (md:hidden)
            Specific strict order:
            1. Eyebrow
            2. Headline
            3. Description
            4. Primary CTA (Book Appointment)
            5. Secondary CTA (Call 095707 29659)
            6. Trust Information
            7. Hero Image (large rounded editorial image below primary content)
            ============================================================ */}
        <div className="flex flex-col md:hidden text-left">
          
          {/* 1. Eyebrow */}
          <div className="inline-flex items-center gap-2 self-start mb-4 px-3 py-1 rounded-full bg-[#102937] border border-[#1C3B4E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F28C7A]" />
            <span className="text-[9.5px] uppercase tracking-[0.16em] text-[#DDF5F2] font-semibold">
              COSMO DENTCARE · BAHARAGORA
            </span>
          </div>

          {/* 2. Headline with controlled fluid sizing */}
          <h1 className="font-serif text-[34px] xs:text-[40px] sm:text-[48px] font-light text-white leading-[1.12] tracking-tight mb-4">
            A healthier smile.
            <span className="block font-normal italic text-slate-100 mt-1">
              A more <span className="text-[#0E9F9A] not-italic font-medium">confident</span> you.
            </span>
          </h1>

          {/* 3. Description */}
          <p className="text-slate-300 text-sm xs:text-[15px] sm:text-base leading-relaxed font-normal mb-6">
            Thoughtful dental care, modern treatment solutions, and gentle clinical protocols — all under one roof on Dr. Sahu's Dental Road.
          </p>

          {/* 4 & 5. CTAs: Primary (Book) & Secondary (Call) */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Primary CTA */}
            <button
              type="button"
              id="hero-mobile-book-btn"
              onClick={onOpenBooking}
              className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#0E9F9A] hover:bg-[#0B8783] active:bg-[#09736F] rounded-xl shadow-md transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#DDF5F2]"
            >
              <Calendar className="w-4 h-4 mr-2 text-[#DDF5F2]" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#DDF5F2]" />
            </button>

            {/* Secondary CTA */}
            <a
              href="tel:+919570729659"
              id="hero-mobile-call-btn"
              aria-label="Call Cosmo Dentcare at 095707 29659"
              className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold text-white bg-[#102937] hover:bg-[#16374a] border border-[#1C3B4E] rounded-xl transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0E9F9A]"
            >
              <Phone className="w-4 h-4 mr-2 text-[#0E9F9A]" />
              <span>Call 095707 29659</span>
            </a>
          </div>

          {/* 6. Trust Information */}
          <div className="flex items-center gap-3 pt-4 pb-6 border-t border-[#1C3B4E]/80 mb-6">
            <div className="flex items-center text-[#0E9F9A] shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#0E9F9A] stroke-[#0E9F9A]" />
              ))}
            </div>
            <p className="text-xs text-slate-300 font-medium">
              <strong className="text-white font-semibold">{CLINIC_INFO.rating} ★</strong> Google Rating
              <span className="mx-1.5 text-slate-500">·</span>
              <span className="text-[#DDF5F2]">{CLINIC_INFO.totalReviews}+ Patient Reviews</span>
            </p>
          </div>

          {/* 7. Hero Image (Large rounded editorial image below primary content) */}
          <div className="relative w-full">
            <div className="relative aspect-[16/10] xs:aspect-[16/9] overflow-hidden rounded-2xl bg-[#102937] shadow-xl border border-[#1C3B4E]">
              <img
                src={heroImg}
                alt="Cosmo Dentcare modern clinical suite interior in Baharagora"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Integrated compact mobile status pill */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[#0B1F2A]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0E9F9A] animate-pulse" />
                  <span className="text-[11px] font-semibold text-white uppercase tracking-wider">
                    Open Today · 9 AM – 9 PM
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#0E9F9A] font-medium">
                  <MapPin className="w-3 h-3" />
                  <span>Baharagora</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
