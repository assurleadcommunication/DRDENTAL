import React, { useState } from 'react';
import { CLINIC_IMAGES, ClinicConfig } from '../data/siteData';

interface HeroSimilarProps {
  clinicConfig: ClinicConfig;
  onOpenBooking: () => void;
  onExploreSection: (sectionId: string) => void;
}

export const HeroSimilar: React.FC<HeroSimilarProps> = ({
  clinicConfig,
  onOpenBooking,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative w-full bg-white pt-4 pb-10 sm:pb-16 overflow-hidden min-h-[calc(100dvh-5rem)] flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (5 cols) - EXACTLY MATCHING SCREENSHOT */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 sm:pt-10 space-y-16 sm:space-y-28">
            
            {/* Top Text from Screenshot */}
            <div className="max-w-xs space-y-1">
              <p className="text-xs sm:text-sm text-neutral-800 leading-snug font-normal">
                We wish to provide professional dental services that match the current technologies
              </p>
              <p className="text-[11px] text-neutral-400 font-normal">
                Cabinet Dr Lalla Achouak Benlaghlid · Mohammedia
              </p>
            </div>

            {/* Bottom Giant Stacked Headline from Screenshot */}
            <div className="space-y-1 pb-4">
              <p className="text-xs sm:text-sm font-medium text-neutral-600 tracking-tight">
                Trusted Dentist in Mohammedia
              </p>
              
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-[#111111] leading-[0.9] select-none">
                <span className="block">Dental</span>
                <span className="block text-[#111111]">Care</span>
              </h1>
            </div>
          </div>

          {/* Right Column (7 cols) - THE PORTRAIT WITH HORIZONTAL CUTOUT SLITS */}
          <div className="lg:col-span-7 relative h-full flex flex-col justify-end">
            <div className="relative w-full max-w-[640px] mx-auto lg:ml-auto aspect-[1.12/1] rounded-3xl overflow-hidden bg-neutral-100 shadow-xs">
              
              {/* Editorial Image */}
              {!imageError ? (
                <img
                  src={CLINIC_IMAGES.heroSmile}
                  alt="Radiant healthy smile portrait with red turtleneck and round glasses"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-sm">
                  Portrait haute précision
                </div>
              )}

              {/* The 3 Exact Horizontal Slit Bands from the screenshot cutting across the portrait */}
              <div className="absolute top-10 sm:top-14 left-0 right-0 flex flex-col space-y-3 sm:space-y-4.5 z-20">
                
                {/* Slit 1: Advanced Dentistry */}
                <div className="w-full bg-white/95 backdrop-blur-xs py-2.5 sm:py-3.5 px-6 sm:px-10 text-center shadow-xs border-y border-white">
                  <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#111111]">
                    Advanced Dentistry
                  </span>
                </div>

                {/* Slit 2: High Quality Equipment */}
                <div className="w-full bg-white/95 backdrop-blur-xs py-2.5 sm:py-3.5 px-6 sm:px-10 text-center shadow-xs border-y border-white">
                  <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#111111]">
                    High Quality Equipment
                  </span>
                </div>

                {/* Slit 3: Friendly Staff */}
                <div className="w-full bg-white/95 backdrop-blur-xs py-2.5 sm:py-3.5 px-6 sm:px-10 text-center shadow-xs border-y border-white">
                  <span className="text-lg sm:text-2xl font-bold tracking-tight text-[#111111]">
                    Friendly Staff
                  </span>
                </div>
              </div>

              {/* Bottom Right: "Free Consultation" as seen in screenshot */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="absolute bottom-6 right-8 text-xs sm:text-sm font-semibold text-white/95 hover:text-white drop-shadow-md hover:underline transition-all cursor-pointer z-20"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
