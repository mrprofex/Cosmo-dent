export interface Treatment {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  reviewText: string;
  location?: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic Environment' | 'Modern Equipment' | 'Patient Care' | 'Consultation';
  image: string;
  caption: string;
  span?: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
}
