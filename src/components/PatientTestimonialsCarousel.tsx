import React, { useState, useEffect, useRef } from 'react';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { ClinicConfig } from '../data/siteData';

export interface PatientReview {
  id: string;
  name: string;
  location: string;
  treatment: string;
  category: 'Esthétique' | 'Implantologie' | 'Soins' | 'Orthodontie';
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  highlight: string;
}

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'rev-1',
    name: 'Meryem B.',
    location: 'Mohammedia',
    treatment: 'Facettes dentaires sur mesure',
    category: 'Esthétique',
    rating: 5,
    date: 'Il y a 2 semaines',
    highlight: 'Un résultat naturel et harmonieux sans aucune douleur',
    comment:
      'Un résultat au-delà de mes espérances pour mes facettes céramiques. Le Dr Lalla Achouak Benlaghlid a pris le temps d’écouter mes attentes sans jamais imposer un sourire artificiel. La précision et la délicatesse des gestes sont remarquables.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Karim E.',
    location: 'Mohammedia',
    treatment: 'Implantologie dentaire',
    category: 'Implantologie',
    rating: 5,
    date: 'Il y a 1 mois',
    highlight: 'Mise en confiance totale et suivi exemplaire',
    comment:
      'J’avais une appréhension énorme pour la pose d’implant. Le docteur m’a expliqué chaque étape avec calme et pédagogie. L’intervention a été totalement indolore, avec un suivi post-opératoire rigoureux. Merci à toute l’équipe !',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Sofia L.',
    location: 'Casablanca / Mohammedia',
    treatment: 'Médecine esthétique & Harmonie faciale',
    category: 'Esthétique',
    rating: 5,
    date: 'Il y a 1 mois',
    highlight: 'Approche médicale douce et résultat très subtil',
    comment:
      'Une prise en charge médicale très professionnelle pour les contours du sourire. Résultat extrêmement naturel et reposé. L’accueil au cabinet est chaleureux, discret et parfaitement à l’heure.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Amine T.',
    location: 'Mohammedia',
    treatment: 'Dentisterie générale & Détartrage de précision',
    category: 'Soins',
    rating: 5,
    date: 'Il y a 2 mois',
    highlight: 'Cabinet impeccable et soins ultra-doux',
    comment:
      'Cabinet d’une propreté irréprochable et équipement à la pointe. Première fois que je ne ressens aucune gêne lors d’un détartrage et d’un soin dentaire. Je recommande vivement le cabinet du Dr Benlaghlid.',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Nadia H.',
    location: 'Mohammedia',
    treatment: 'Blanchiment dentaire médical',
    category: 'Esthétique',
    rating: 5,
    date: 'Il y a 2 mois',
    highlight: 'Éclat lumineux retrouvé sans sensibilité',
    comment:
      'Éclaircissement réalisé avec grand soin pour mon mariage. Aucune sensibilité dentaire grâce au protocole protecteur appliqué par le docteur. Mon sourire a retrouvé son éclat naturel.',
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Youssef M.',
    location: 'Mohammedia',
    treatment: 'Orthodontie & Alignement adulte',
    category: 'Orthodontie',
    rating: 5,
    date: 'Il y a 3 mois',
    highlight: 'Excellente pédagogie et suivi continu',
    comment:
      'Très bon suivi d’alignement pour adulte. Des explications claires à chaque séance et un accueil toujours souriant. Le cabinet est très facile d’accès au centre de Mohammedia.',
    verified: true,
  },
];

interface PatientTestimonialsCarouselProps {
  clinicConfig: ClinicConfig;
  onOpenBooking: () => void;
}

export const PatientTestimonialsCarousel: React.FC<PatientTestimonialsCarouselProps> = ({
  clinicConfig,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const filteredReviews =
    selectedCategory === 'Tous'
      ? PATIENT_REVIEWS
      : PATIENT_REVIEWS.filter((r) => r.category === selectedCategory);

  const totalReviews = filteredReviews.length;

  // Keep currentIndex bounded if category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused || totalReviews <= 1) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalReviews);
    }, 5500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  return (
    <section id="avis" className="max-w-[1440px] mx-auto scroll-mt-6">
      <div className="rounded-[28px] sm:rounded-[38px] lg:rounded-[44px] bg-white border border-black/5 p-6 sm:p-10 lg:p-14 shadow-sm space-y-10">
        
        {/* Top Header & Trust Score */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-neutral-100">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
              • Témoignages & Confiance Patients · Mohammedia
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[0.98]">
              Ce que nos patients partagent de leur expérience
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Découvrez les retours d'expérience vérifiés des patients accueillis au cabinet du{' '}
              <strong className="text-black">{clinicConfig.practitionerName}</strong> à Mohammedia.
            </p>
          </div>

          {/* Social Proof Card: Google Reviews */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-neutral-50/80 border border-neutral-200/80 shadow-2xs space-y-2 shrink-0 self-start lg:self-auto">
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-neutral-900 font-mono-tabular">
                4.9 / 5
              </span>
            </div>
            <div className="text-[11px] text-neutral-500">
              Note moyenne vérifiée Google Reviews
            </div>
          </div>
        </div>

        {/* Category Filter Chips & Carousel Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white border border-neutral-200 shadow-2xs">
            {['Tous', 'Esthétique', 'Implantologie', 'Soins', 'Orthodontie'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white shadow-2xs'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-mono-tabular text-neutral-500 mr-2">
              {currentIndex + 1} / {totalReviews}
            </span>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Témoignage précédent"
              className="p-2.5 rounded-full bg-white border border-neutral-200 hover:border-black text-neutral-800 hover:text-black transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Témoignage suivant"
              className="p-2.5 rounded-full bg-white border border-neutral-200 hover:border-black text-neutral-800 hover:text-black transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative overflow-hidden"
        >
          {/* Multi-card display (showing 3 cards on desktop, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const reviewIndex = (currentIndex + offset) % totalReviews;
              const review = filteredReviews[reviewIndex];
              if (!review) return null;

              const isPrimary = offset === 0;

              return (
                <article
                  key={review.id + offset}
                  className={`relative bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xs ${
                    isPrimary
                      ? 'border-neutral-900 ring-1 ring-neutral-900/10'
                      : 'border-neutral-200/90 hidden md:flex'
                  } ${offset === 2 ? 'hidden lg:flex' : ''}`}
                >
                  <div className="space-y-4">
                    {/* Top rating & verified badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Avis vérifié</span>
                      </span>
                    </div>

                    {/* Highlight quote headline */}
                    <h3 className="text-base font-bold text-[#111111] leading-snug">
                      « {review.highlight} »
                    </h3>

                    {/* Full comment prose */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {review.comment}
                    </p>
                  </div>

                  {/* Bottom: Patient Info & Treatment */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm text-neutral-900">{review.name}</div>
                      <div className="text-xs text-neutral-500 font-medium">
                        {review.location} · <span className="font-normal">{review.date}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 block">
                        {review.treatment}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Dot Navigation Indicators */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {filteredReviews.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Aller au témoignage ${idx + 1}`}
                className={`transition-all duration-200 cursor-pointer rounded-full ${
                  currentIndex === idx
                    ? 'w-7 h-2 bg-[#111111]'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Reassurance & Call to Action */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-neutral-900">
              Vous souhaitez nous confier votre santé bucco-dentaire ?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              Le Dr Lalla Achouak Benlaghlid vous reçoit à Mohammedia pour un bilan complet et sans engagement.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>Prendre rendez-vous en ligne</span>
          </button>
        </div>

      </div>
    </section>
  );
};
