import React from 'react';
import { ClinicConfig } from '../data/siteData';

interface HeaderSimilarProps {
  clinicConfig: ClinicConfig;
  onOpenMenu: () => void;
  onOpenEmergency: () => void;
  onOpenBooking: () => void;
}

export const HeaderSimilar: React.FC<HeaderSimilarProps> = ({
  clinicConfig,
  onOpenMenu,
  onOpenEmergency,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-neutral-100/80 transition-all">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-4 sm:py-5 flex items-center justify-between">
        
        {/* Left: EXACT LOGO FROM SCREENSHOT */}
        <a href="/" className="group block text-left focus:outline-none">
          <div className="font-extrabold text-base sm:text-lg tracking-tight leading-[0.95] text-[#111111] uppercase group-hover:opacity-80 transition-opacity">
            <div>DENTAL</div>
            <div>HEALTH</div>
          </div>
          <div className="text-[11px] font-normal text-neutral-500 tracking-tight lowercase mt-0.5">
            quality healthcare
          </div>
        </a>

        {/* Center: EXACT OVAL "Menu" PILL FROM SCREENSHOT */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Ouvrir le menu"
            className="px-7 sm:px-9 py-1.5 sm:py-2 rounded-full border border-neutral-300 hover:border-black bg-white text-xs sm:text-sm font-medium text-[#111111] hover:bg-neutral-50 transition-all duration-150 cursor-pointer shadow-2xs"
          >
            Menu
          </button>
        </div>

        {/* Right: EXACT "Dental Emergency" FROM SCREENSHOT */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={onOpenEmergency}
            className="text-xs sm:text-sm font-medium text-[#111111] hover:text-red-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            Dental Emergency
          </button>
        </div>
      </div>
    </header>
  );
};
