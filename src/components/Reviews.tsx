import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLINIC_INFO, AUTHENTIC_REVIEWS } from '../data/clinicData';

export function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? AUTHENTIC_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === AUTHENTIC_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevReview();
      if (e.key === 'ArrowRight') nextReview();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextReview();
      } else {
        prevReview();
      }
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 lg:py-32 bg-[#DDF5F2] text-[#0B1F2A] border-t border-[#C1ECE6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Overall Google Rating */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16 pb-8 sm:pb-10 border-b border-[#C1ECE6]">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-0.5 bg-[#0E9F9A]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
                AUTHENTIC PATIENT REVIEWS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F28C7A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0B1F2A] leading-tight">
              Trusted by patients in <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0B1F2A]">Baharagora and beyond.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center lg:justify-end gap-5 sm:gap-6">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#0B1F2A]">
                  {CLINIC_INFO.rating}
                </span>
                <span className="text-sm font-sans text-slate-600">/ 5.0</span>
              </div>
              <div className="flex items-center text-[#0E9F9A] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0E9F9A] stroke-[#0E9F9A]" />
                ))}
              </div>
              <span className="text-xs text-slate-700 font-medium tracking-wide">
                Based on {CLINIC_INFO.totalReviews} Google Reviews
              </span>
            </div>

            <div className="sm:border-l sm:border-[#C1ECE6] sm:pl-6">
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0B1F2A] hover:text-[#0E9F9A] transition-colors group"
              >
                <span>Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#0E9F9A]" />
              </a>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Verified clinic listing
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================
            DESKTOP VIEW (>= 1024px): 3 Visible Cards Side-by-Side
            ============================================================ */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {AUTHENTIC_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl border border-[#C1ECE6] shadow-xs flex flex-col justify-between hover:border-[#0E9F9A] transition-all duration-300"
            >
              <div>
                <Quote className="w-8 h-8 text-[#0E9F9A]/30 mb-5" />

                <div className="flex items-center text-[#0E9F9A] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#0E9F9A] stroke-[#0E9F9A]" />
                  ))}
                </div>

                <blockquote className="font-serif text-lg text-[#0B1F2A] font-light leading-relaxed mb-6">
                  “{review.reviewText}”
                </blockquote>
              </div>

              <div className="pt-5 border-t border-[#E2E8E8] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#0B1F2A] uppercase tracking-wider">
                    {review.author}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {review.location}
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#0E9F9A] font-semibold bg-[#E7F7F6] px-2 py-0.5 rounded-md">
                  Google Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================
            MOBILE & TABLET VIEW (< 1024px):
            Touch swipeable carousel displaying one testimonial at a time
            ============================================================ */}
        <div className="lg:hidden" aria-roledescription="carousel" aria-label="Patient reviews carousel">
          <div
            className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C1ECE6] shadow-sm flex flex-col justify-between min-h-[300px] transition-all"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-[#0E9F9A]/40" />
                <div className="flex items-center text-[#0E9F9A]">
                  {[...Array(AUTHENTIC_REVIEWS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0E9F9A] stroke-[#0E9F9A]" />
                  ))}
                </div>
              </div>

              <blockquote className="font-serif text-lg sm:text-xl text-[#0B1F2A] font-light leading-relaxed mb-6">
                “{AUTHENTIC_REVIEWS[activeIndex].reviewText}”
              </blockquote>
            </div>

            <div className="pt-4 border-t border-[#E2E8E8] flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#0B1F2A] uppercase tracking-wider">
                  {AUTHENTIC_REVIEWS[activeIndex].author}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {AUTHENTIC_REVIEWS[activeIndex].location}
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#0E9F9A] font-semibold bg-[#E7F7F6] px-2.5 py-1 rounded-md">
                Verified Review
              </span>
            </div>
          </div>

          {/* Touch-Friendly Controls & Visible Pagination */}
          <div className="flex items-center justify-between mt-6 px-1">
            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {AUTHENTIC_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'w-7 bg-[#0E9F9A]' : 'w-2.5 bg-[#C1ECE6] hover:bg-[#0E9F9A]/50'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons (Min 44x44px touch targets) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevReview}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full bg-white border border-[#C1ECE6] text-[#0B1F2A] hover:text-[#0E9F9A] hover:border-[#0E9F9A] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextReview}
                aria-label="Next review"
                className="w-11 h-11 rounded-full bg-white border border-[#C1ECE6] text-[#0B1F2A] hover:text-[#0E9F9A] hover:border-[#0E9F9A] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 text-center mt-3">
            Swipe left or right to view more verified patient reviews
          </p>
        </div>

      </div>
    </section>
  );
}
