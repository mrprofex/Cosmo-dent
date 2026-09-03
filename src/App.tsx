import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { About } from './components/About';
import { Treatments } from './components/Treatments';
import { FeaturedTreatment } from './components/FeaturedTreatment';
import { SmileGallery } from './components/SmileGallery';
import { Reviews } from './components/Reviews';
import { Technology } from './components/Technology';
import { PatientJourney } from './components/PatientJourney';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatment?: string) => {
    setSelectedTreatment(treatment);
    setModalOpen(true);
  };

  const handleScrollToBooking = (treatment?: string) => {
    if (treatment) {
      setSelectedTreatment(treatment);
    }
    const elem = document.getElementById('appointment');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1F2A] selection:bg-[#DDF5F2] selection:text-[#0B1F2A]">
      {/* Editorial Navigation (Deep Navy with Fresh Teal accents) */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Experience following user's alternating visual rhythm:
          Navy Hero → White Trust → Aqua About → White Treatments → 
          Navy Featured Treatment → White Smile Gallery → Aqua Patient Reviews → 
          White Standards → Navy Appointment CTA → Soft Grey/White Location → Navy Footer
      */}
      <main className="grow">
        {/* 1. Deep Navy Hero */}
        <Hero onOpenBooking={() => handleScrollToBooking()} />

        {/* 2. Pure White Trust Strip */}
        <TrustStrip />

        {/* 3. Soft Aqua About Section with Dr. Suman Sahu */}
        <About />

        {/* 4. Pure White Treatments Section */}
        <Treatments onSelectTreatment={(treatmentName) => handleScrollToBooking(treatmentName)} />

        {/* 5. Deep Navy Featured Treatment: Root Canal Therapy */}
        <FeaturedTreatment onDiscussTreatment={(treatmentName) => handleScrollToBooking(treatmentName)} />

        {/* 6. Pure White Smile Gallery & Interactive Before-After Slider */}
        <SmileGallery />

        {/* 7. Soft Aqua Patient Reviews */}
        <Reviews />

        {/* 8. Pure White Standards & Hygiene */}
        <Technology />

        {/* 9. Soft Grey Patient Experience Journey */}
        <PatientJourney />

        {/* 10. Deep Navy Appointment CTA */}
        <AppointmentSection initialTreatment={selectedTreatment} />

        {/* 11. Soft Grey / Pure White Location & Directions */}
        <LocationSection />
      </main>

      {/* Deep Navy Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Sticky Mobile Action Bottom Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Quick Appointment Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedTreatment={selectedTreatment}
      />
    </div>
  );
}
