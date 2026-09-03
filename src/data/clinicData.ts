import { Treatment, Review, GalleryItem } from '../types';

import imgCosmoClinicHero from '../assets/images/cosmo_clinic_hero_1788409071651.jpg';
import imgDoctorConsultation from '../assets/images/doctor_consultation_1788409086328.jpg';
import imgEndodonticCare from '../assets/images/endodontic_care_1788409100131.jpg';
import imgDentalLounge from '../assets/images/dental_lounge_interior_1788409114858.jpg';
import imgPatientSmile from '../assets/images/patient_smile_care_1788409135276.jpg';

export const CLINIC_INFO = {
  name: "Cosmo Dentcare & Multispeciality Centre",
  nativeName: "डॉ॰ साहस कॉस्मो डेंटकेयर & मल्टीस्पेशलिटी सेंटर",
  doctorName: "Dr. Suman Sahu",
  address: "Dr. Sahu's Dental Road, Baharagora, Jharkhand 832101",
  phone: "095707 29659",
  phoneInternational: "+919570729659",
  rating: 4.7,
  totalReviews: 71,
  closingTime: "9:00 PM",
  operatingHours: "Monday – Sunday: 9:00 AM – 9:00 PM",
  mapsUrl: "https://maps.google.com/?q=Cosmo+Dentcare+Baharagora+Jharkhand+832101",
  serviceTowns: [
    "Baharagora",
    "Chakulia",
    "Baripada",
    "Gopiballabpur",
    "Jhargram"
  ]
};

export const TREATMENTS: Treatment[] = [
  {
    id: "root-canal",
    number: "01",
    name: "Root Canal Treatment",
    tagline: "Comfort-focused care for damaged or infected teeth",
    description: "Modern endodontic procedures designed to relieve discomfort, preserve your natural tooth structure, and restore optimal chewing function.",
    details: [
      "Precision diagnosis and digital assessment",
      "Comfort-focused numbing and modern clinical protocols",
      "Durable aesthetic crown restoration"
    ],
    image: imgEndodonticCare
  },
  {
    id: "dental-implants",
    number: "02",
    name: "Dental Implants",
    tagline: "Modern tooth replacement solutions designed for function and confidence",
    description: "Permanent, bio-compatible dental implants that look, feel, and perform like natural teeth, providing stable support and lifelong durability.",
    details: [
      "Single and multiple tooth restoration",
      "Bone-preserving implant integration",
      "Natural aesthetic bite alignment"
    ],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cosmetic-dentistry",
    number: "03",
    name: "Cosmetic Dentistry",
    tagline: "Smile-enhancing treatments tailored to individual needs",
    description: "Customized aesthetic procedures designed to harmoniously enhance the natural shape, proportion, and radiance of your smile.",
    details: [
      "Porcelain veneers & ceramic bonding",
      "Smile contouring & aesthetic shaping",
      "Individualized aesthetic consultation"
    ],
    image: imgPatientSmile
  },
  {
    id: "teeth-whitening",
    number: "04",
    name: "Teeth Whitening",
    tagline: "Professional options for a brighter, refreshed smile",
    description: "Safe, clinical-grade whitening protocols designed to gently lift deep stains from coffee, tea, and age while protecting sensitive enamel.",
    details: [
      "In-clinic professional shade improvement",
      "Enamel-safe, gentle formulation",
      "Long-lasting brightness maintenance"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "clear-aligners",
    number: "05",
    name: "Clear Aligners",
    tagline: "A discreet approach to improving dental alignment",
    description: "Transparent, removable aligners engineered to systematically guide teeth into harmonious alignment without conventional metal brackets.",
    details: [
      "Virtually invisible everyday wear",
      "Removable for effortless dining and cleaning",
      "Personalized digital alignment roadmap"
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "preventive-dentistry",
    number: "06",
    name: "Preventive & General Dentistry",
    tagline: "Regular examinations, cleaning and essential dental care",
    description: "Comprehensive oral examinations, ultrasonic prophylaxis, and proactive diagnostics to keep teeth and gums healthy for years to come.",
    details: [
      "Thorough dental examinations",
      "Ultrasonic plaque and calculus removal",
      "Periodontal health monitoring and care"
    ],
    image: imgCosmoClinicHero
  },
  {
    id: "pediatric-dentistry",
    number: "07",
    name: "Pediatric Dentistry",
    tagline: "Gentle dental care designed with younger patients in mind",
    description: "A calming, friendly atmosphere tailored to children and teens, fostering positive dental habits and healthy early teeth development.",
    details: [
      "Child-friendly gentle clinical examination",
      "Cavity prevention and dental sealants",
      "Early orthodontic habit guidance"
    ],
    image: imgDentalLounge
  }
];

export const AUTHENTIC_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Patient Review",
    rating: 5,
    date: "Google Verified Review",
    reviewText: "Best dentist DR SUMAN SAHU sir. Does painless root canal treatment in very genuine price. Best dentist in baharagora town.",
    location: "Baharagora Town",
    verified: true
  },
  {
    id: "rev-2",
    author: "Patient Review",
    rating: 5,
    date: "Google Verified Review",
    reviewText: "Best dentist in India. Dr Suman sahu is a awesome person with magnificent personality. High tech and well maintained dental hospital.",
    location: "Jharkhand",
    verified: true
  },
  {
    id: "rev-3",
    author: "Patient Review",
    rating: 5,
    date: "Google Verified Review",
    reviewText: "No 1 dental clinic in baharagora, chakulia, baripada, gopiballabpur and Jhargram. Best dentist near me. Awesome person and great helpful staff.",
    location: "Regional Patient",
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Clinical Treatment Suite",
    category: "Clinic Environment",
    image: imgCosmoClinicHero,
    caption: "Meticulously maintained, modern ergonomic operatory designed for patient ease and sterilization standards.",
    span: "col-span-1 md:col-span-2"
  },
  {
    id: "gal-2",
    title: "Dr. Suman Sahu in Consultation",
    category: "Consultation",
    image: imgDoctorConsultation,
    caption: "Personalized discussion and clear clinical guidance in a relaxed, comfortable environment.",
    span: "col-span-1"
  },
  {
    id: "gal-3",
    title: "Endodontic & Surgical Precision",
    category: "Modern Equipment",
    image: imgEndodonticCare,
    caption: "Modern clinical instruments supporting comfortable root canal therapy and restorative procedures.",
    span: "col-span-1"
  },
  {
    id: "gal-4",
    title: "Reception & Consultation Lounge",
    category: "Clinic Environment",
    image: imgDentalLounge,
    caption: "A serene, calming welcome space featuring natural light and warm neutral textures.",
    span: "col-span-1"
  },
  {
    id: "gal-5",
    title: "Patient Care & Healthy Confidence",
    category: "Patient Care",
    image: imgPatientSmile,
    caption: "Dedicated to restoring natural aesthetics, function, and genuine smile confidence.",
    span: "col-span-1 md:col-span-2"
  }
];
