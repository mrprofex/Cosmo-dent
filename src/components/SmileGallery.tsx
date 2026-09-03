import { useState, ChangeEvent, useEffect } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem } from '../types';
import beforeAfterImg from '../assets/images/patient_smile_care_1788409135276.jpg';

export function SmileGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const handleSliderMove = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 lg:py-32 bg-white text-[#0B1F2A] border-t border-[#E2E8E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-0.5 bg-[#0E9F9A]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
              SMILE GALLERY &amp; CLINICAL SUITE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#0B1F2A] leading-tight">
            See the difference <br />
            <span className="italic font-normal text-[#0E9F9A]">confidence can make.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 max-w-xl leading-relaxed">
            A glimpse inside our clinical suite, consultation moments, and dedication to precision oral care in Baharagora.
          </p>
        </div>

        {/* Gallery Grid:
            - Mobile: single column (1 column)
            - Tablet: 2 columns
            - Desktop: 3 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#F4F7F7] border border-[#E2E8E8] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/90 via-[#0B1F2A]/40 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#0E9F9A] font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-light">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-md line-clamp-2">
                  {item.caption}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="min-h-[44px] mt-2 inline-flex items-center gap-1.5 text-xs text-[#DDF5F2] hover:text-white uppercase tracking-wider font-semibold cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#0E9F9A]" />
                  <span>View Full Photo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before & After Smile Transformation Slider */}
        <div className="border border-[#C1ECE6] bg-[#F4F7F7] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#0E9F9A]" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#0E9F9A] font-semibold">
                  CLINICAL AESTHETICS &amp; CLARITY
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B1F2A] font-light leading-snug mb-4">
                Interactive Smile <br />
                <span className="italic font-normal text-[#0E9F9A]">Restoration Preview</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Drag the divider with your finger or mouse to inspect the contrast that professional cleaning, stain-removal, and restorative tooth contouring brings.
              </p>

              <div className="space-y-2.5 text-xs text-slate-600 border-t border-[#E2E8E8] pt-4">
                <p className="flex items-center justify-between">
                  <span className="font-medium text-[#0B1F2A]">Clinical Procedure:</span>
                  <span>Restorative &amp; Whitening Care</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="font-medium text-[#0B1F2A]">Consultation:</span>
                  <span>Personalized shade matching</span>
                </p>
              </div>
            </div>

            {/* Interactive Before-After Slider Container */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl select-none border border-[#E2E8E8] bg-zinc-900 shadow-md">
                
                {/* "After" Image (Base layer) */}
                <img
                  src={beforeAfterImg}
                  alt="Restored clean healthy smile after clinical treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3.5 right-3.5 bg-[#0B1F2A]/90 backdrop-blur-xs text-[#0E9F9A] text-[10px] uppercase tracking-widest px-3 py-1 font-semibold rounded-md border border-[#1C3B4E] z-10">
                  After Treatment
                </div>

                {/* "Before" Image (Clipped precisely via clipPath to prevent distortion) */}
                <img
                  src={beforeAfterImg}
                  alt="Smile before clinical restoration"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-90 sepia-[0.35] brightness-90 pointer-events-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#0B1F2A]/90 backdrop-blur-xs text-white text-[10px] uppercase tracking-widest px-3 py-1 font-semibold rounded-md border border-white/20 z-10 pointer-events-none">
                  Initial Condition
                </div>

                {/* Divider Line & Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-[#0E9F9A] shadow-lg pointer-events-none z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0E9F9A] border-2 border-white flex items-center justify-center text-white text-xs shadow-xl font-bold">
                    ⇄
                  </div>
                </div>

                {/* Touch/Mouse Range Input Slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderMove}
                  className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full touch-pan-y"
                  aria-label="Before and after image comparison slider"
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-500 uppercase tracking-wider mt-2.5 px-1">
                <span>◀ Drag to inspect initial</span>
                <span>Restored brightness ▶</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Full Modal Viewer */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F2A]/85 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
        >
          <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#C1ECE6]">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close photo preview"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0B1F2A]/80 text-white flex items-center justify-center hover:bg-[#0B1F2A] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[4/3] w-full bg-slate-900">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 text-[#0B1F2A]">
              <span className="text-[10px] uppercase tracking-widest text-[#0E9F9A] font-semibold block mb-1">
                {selectedItem.category}
              </span>
              <h3 id="gallery-modal-title" className="font-serif text-2xl text-[#0B1F2A] font-medium mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
