import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Star,
} from 'lucide-react';
import { CLINIC_IMAGES, ClinicConfig } from '../data/siteData';

interface HeroDentaCinematicProps {
  clinicConfig: ClinicConfig;
  onOpenBooking: () => void;
  onOpenMenu: () => void;
  onOpenEmergency: () => void;
  onSelectService: (serviceId: string) => void;
  onExploreSection: (sectionId: string) => void;
}

interface HeroSlide {
  id: string;
  image: string;
  badgeCategory: string;
  badgeTitle: string;
  badgeSubtitle: string;
  targetTargetLabel?: string;
  headlineLine1: string;
  headlineLine2: string;
  headlineLine3: string;
  frenchSubtext: string;
  serviceId: string;
}

export const HeroDentaCinematic: React.FC<HeroDentaCinematicProps> = ({
  clinicConfig,
  onOpenBooking,
  onOpenMenu,
  onOpenEmergency,
  onSelectService,
  onExploreSection,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDES: HeroSlide[] = [
    {
      id: 'slide-1',
      image: CLINIC_IMAGES.macroSmile,
      badgeCategory: 'Esthétique Dentaire',
      badgeTitle: 'Veneer\nInstallation\nSystem',
      badgeSubtitle: 'Facettes céramique · Cliquez',
      targetTargetLabel: 'Ciblage céramique de précision',
      headlineLine1: 'Total Oral',
      headlineLine2: 'Wellness & Aesthetic',
      headlineLine3: 'Dentistry Services',
      frenchSubtext:
        'Cabinet Dr Lalla Achouak Benlaghlid à Mohammedia · Soins d’excellence, facettes céramiques et réhabilitation fonctionnelle.',
      serviceId: 'facettes-dentaires',
    },
    {
      id: 'slide-2',
      image: CLINIC_IMAGES.smileWhitening,
      badgeCategory: 'Éclaircissement Médical',
      badgeTitle: 'Medical\nEnamel Brightening\nProtocol',
      badgeSubtitle: 'Émail éclatant & Translucide',
      targetTargetLabel: 'Blanchiment haute définition',
      headlineLine1: 'Luminous Enamel &',
      headlineLine2: 'Medical Teeth',
      headlineLine3: 'Whitening Care',
      frenchSubtext:
        'Éclaircissement dentaire supervisé au fauteuil · Éclat naturel immaculé et protection de l’émail à Mohammedia.',
      serviceId: 'blanchiment-dentaire',
    },
    {
      id: 'slide-3',
      image: CLINIC_IMAGES.smileOrtho,
      badgeCategory: 'Orthodontie & Alignement',
      badgeTitle: 'Orthodontic\nArch Alignment\nPrecision',
      badgeSubtitle: 'Arcade parfaite & Invisible',
      targetTargetLabel: 'Alignement millimétré',
      headlineLine1: 'Harmonious Arch &',
      headlineLine2: 'Precision Smile',
      headlineLine3: 'Restoration Services',
      frenchSubtext:
        'Gouttières invisibles et réhabilitation dentaire complète · Symétrie du sourire et confort par le Dr Benlaghlid.',
      serviceId: 'orthodontie-invisible',
    },
  ];

  // Auto-slide transition every 5.5 seconds
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, SLIDES.length]);

  const current = SLIDES[activeSlide];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full h-[calc(100dvh-2rem)] min-h-[580px] max-h-[960px] bg-[#F5EFEB]/60 p-2 sm:p-4 lg:p-5 select-none flex flex-col"
    >
      {/* Outer rounded luxury container fitting 100% of viewport height */}
      <div className="relative w-full max-w-[1440px] mx-auto h-full rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden shadow-2xl flex flex-col justify-between p-4 sm:p-7 lg:p-10 border border-black/5">
        
        {/* 3 PHOTO DÉFILANTES EN ARRIÈRE-PLAN AVEC TRANSITION DOUCE */}
        <div className="absolute inset-0 z-0">
          {SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {!imageErrors[idx] ? (
                <img
                  src={slide.image}
                  alt={slide.headlineLine1}
                  className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${
                    activeSlide === idx ? 'scale-105' : 'scale-100'
                  }`}
                  onError={() =>
                    setImageErrors((prev) => ({ ...prev, [idx]: true }))
                  }
                />
              ) : (
                <div className="w-full h-full bg-neutral-900" />
              )}
            </div>
          ))}

          {/* Measured gradient scrim to ensure 100% text contrast across all 3 background photos */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/60 z-10 pointer-events-none" />
        </div>

        {/* 1. TOP BAR (HEADER) - FLOATING OVER THE 3 SLIDING PHOTOS */}
        <header className="relative z-30 w-full flex items-center justify-between gap-4 shrink-0">
          
          {/* Top Left: Logo from screenshot (4 squares + Denta) */}
          <a
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            title="Denta · Cabinet Dr Lalla Achouak Benlaghlid"
          >
            <div className="w-6 h-6 grid grid-cols-2 gap-1 p-0.5 rounded-md bg-white/10 backdrop-blur-xs border border-white/20 group-hover:bg-white/20 transition-colors">
              <span className="bg-white rounded-xs" />
              <span className="bg-white rounded-xs" />
              <span className="bg-white rounded-xs" />
              <span className="bg-white rounded-xs" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-white/90 leading-tight">
                Denta
              </span>
              <span className="text-[10px] text-white/60 -mt-0.5 hidden sm:inline tracking-tight font-medium">
                Cabinet Dr Benlaghlid · Mohammedia
              </span>
            </div>
          </a>

          {/* Center Navigation Links from screenshot */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-white/90"
          >
            <button
              type="button"
              onClick={() => onSelectService('implantologie')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
            >
              <span className="text-white/50 text-[10px]">•</span>
              <span>Implants</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectService('dentisterie-generale')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
            >
              <span className="text-white/50 text-[10px]">•</span>
              <span>Preventive Care</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectService('facettes-dentaires')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
            >
              <span className="text-white/50 text-[10px]">•</span>
              <span>Veneers & Esthétique</span>
            </button>

            <button
              type="button"
              onClick={() => onExploreSection('prestations')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
            >
              <span className="text-white/50 text-[10px]">•</span>
              <span>Price</span>
            </button>
          </nav>

          {/* Top Right: White Pill "Contact Us" Button + Emergency Quick Trigger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenEmergency}
              className="hidden lg:inline-flex text-xs font-semibold text-white/80 hover:text-red-400 transition-colors cursor-pointer items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>Urgence dentaire</span>
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 sm:px-7 py-1.5 sm:py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            >
              Contact Us
            </button>

            {/* Menu Drawer Toggle on Mobile / Tablet */}
            <button
              type="button"
              onClick={onOpenMenu}
              className="md:hidden px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold hover:bg-white/25 transition-colors cursor-pointer"
            >
              Menu
            </button>
          </div>
        </header>

        {/* 2. FLOATING CALLOUT BADGE (ADAPTED PER SLIDE) OVER THE BACKGROUND PHOTO */}
        <div className="relative z-30 my-auto py-2 sm:py-4 self-start ml-2 sm:ml-6 lg:ml-10 max-w-sm">
          
          {/* Glassmorphic Callout Card */}
          <div
            onClick={() => onSelectService(current.serviceId)}
            className="group relative inline-flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-black/45 hover:bg-black/65 backdrop-blur-md border border-white/25 shadow-2xl transition-all duration-300 cursor-pointer hover:border-white/50 animate-fadeIn"
          >
            {/* 3 Graphic Pins (Veneers / Precision Implant / Care) */}
            <div className="flex items-end gap-1 p-1 rounded-lg bg-white/10 border border-white/20 shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-2 h-3.5 rounded-t-sm rounded-b-xs bg-white shadow-xs" />
                <div className="w-0.5 h-2 bg-neutral-300" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-4 rounded-t-sm rounded-b-xs bg-white shadow-xs" />
                <div className="w-0.5 h-2 bg-neutral-300" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 h-3.5 rounded-t-sm rounded-b-xs bg-white shadow-xs" />
                <div className="w-0.5 h-2 bg-neutral-300" />
              </div>
            </div>

            <div className="space-y-0.5 text-left">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-white block leading-tight group-hover:text-amber-200 transition-colors whitespace-pre-line">
                {current.badgeTitle}
              </span>
              <span className="text-[10px] text-white/70 block">
                {current.badgeSubtitle}
              </span>
            </div>
          </div>

          {/* Pointer Target Ring on Tooth exactly as shown in screenshot */}
          <div className="relative mt-2 ml-14 flex items-center gap-2">
            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" className="opacity-80">
              <path d="M4 2 L20 18" stroke="white" strokeWidth="1.5" strokeDasharray="2 2" />
            </svg>

            {/* Glowing Bullseye Target Circle */}
            <div className="w-7 h-7 rounded-full bg-white/30 backdrop-blur-md border-2 border-white flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: GIANT HEADLINE + SLIDER CONTROLS + REVIEWS + BOOK BUTTON */}
        <div className="relative z-30 w-full pt-2 sm:pt-4 space-y-3 sm:space-y-4 shrink-0">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
            
            {/* Left: Giant Headline with Smooth Text Transition */}
            <div className="space-y-2 max-w-2xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[0.95] select-none transition-all duration-500">
                {current.headlineLine1}
                <br />
                {current.headlineLine2}
                <br />
                {current.headlineLine3}
              </h1>

              {/* Subtitle in French for local reassurance */}
              <p className="text-[11px] sm:text-xs text-white/75 font-normal max-w-xl transition-all duration-300 leading-relaxed">
                {current.frenchSubtext}
              </p>
            </div>

            {/* Right Bottom Elements: Social Proof Avatars + "Book a Consultation" Button */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
              
              {/* Patient Avatars Cluster & Review Count from screenshot */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-lg">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Patient 1"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Patient 2"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Patient 3"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                <div className="text-left leading-tight">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-white font-mono-tabular">2,500</span>
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-white/80 font-medium">Reviews</span>
                </div>
              </div>

              {/* Black Pill Button: "Book a Consultation" exactly as in screenshot */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-black hover:bg-neutral-900 text-white text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer shadow-2xl border border-white/20 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
