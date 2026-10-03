import React from 'react';
import { CLINIC_IMAGES } from '../data/siteData';

export const FuturisticDentalBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. TEXTURE EN FILIGRANE TRÈS DOUX & ÉLÉGANT (SANS CONTRASTE AGRESSIF) */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply bg-repeat bg-[length:1000px_auto]"
        style={{
          backgroundImage: `url(${CLINIC_IMAGES.diverseTeethCad})`,
          backgroundPosition: 'center 80px',
        }}
      />

      {/* 2. DÉGRADÉS D'AMBIANCE MINÉRALE CHAUDE & DIFFUSE */}
      <div className="absolute top-[5%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-radial from-amber-200/15 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-radial from-stone-200/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-[75%] -left-[5%] w-[45vw] h-[45vw] rounded-full bg-radial from-amber-100/20 via-transparent to-transparent blur-3xl" />

      {/* 3. MOTIFS DENTAIRES VARIÉS EN LIGNES FILAIRES DÉLICATES (MOLAIRE, INCISIVE, CANINE, IMPLANT, ARCADE) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 2600"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Micro-grille chirurgicale ultra-discrète */}
          <pattern
            id="subtle-cad-grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="#111111"
              strokeWidth="0.5"
              strokeOpacity="0.03"
            />
            <circle cx="100" cy="0" r="0.8" fill="#111111" fillOpacity="0.05" />
            <circle cx="0" cy="100" r="0.8" fill="#111111" fillOpacity="0.05" />
          </pattern>

          {/* Cible laser douce */}
          <pattern
            id="subtle-target"
            width="320"
            height="320"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="160"
              cy="160"
              r="8"
              fill="none"
              stroke="#111111"
              strokeWidth="0.5"
              strokeDasharray="2 3"
              strokeOpacity="0.06"
            />
            <path
              d="M 152 160 L 168 160 M 160 152 L 160 168"
              stroke="#111111"
              strokeWidth="0.5"
              strokeOpacity="0.08"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#subtle-cad-grid)" />
        <rect width="100%" height="100%" fill="url(#subtle-target)" />

        {/* ========================================================================================= */}
        {/* DENT 1 : MOLAIRE 3D ANATOMIQUE (FILAIRE SUBTIL, HAUT GAUCHE)                              */}
        {/* ========================================================================================= */}
        <g transform="translate(60, 240)" stroke="#111111" fill="none" opacity="0.10">
          {/* Couronne de la Molaire en trait fin */}
          <path
            d="M 50,20 C 70,5 110,5 130,20 C 150,35 155,70 145,95 C 135,115 115,125 90,125 C 65,125 45,115 35,95 C 25,70 30,35 50,20 Z"
            strokeWidth="0.9"
          />
          {/* Sillons & Cuspides */}
          <path d="M 50,45 Q 90,65 130,45" strokeWidth="0.6" strokeDasharray="3 2" />
          <path d="M 90,30 L 90,110" strokeWidth="0.6" strokeDasharray="2 3" />
          <ellipse cx="65" cy="50" rx="14" ry="10" strokeWidth="0.5" />
          <ellipse cx="115" cy="50" rx="14" ry="10" strokeWidth="0.5" />
          <ellipse cx="65" cy="90" rx="14" ry="10" strokeWidth="0.5" />
          <ellipse cx="115" cy="90" rx="14" ry="10" strokeWidth="0.5" />

          {/* Deux Racines Anatomiques */}
          <path
            d="M 45,120 C 35,160 30,200 40,240 C 45,250 55,250 55,235 C 60,195 65,155 75,125"
            strokeWidth="0.8"
          />
          <path
            d="M 105,125 C 115,155 120,195 125,235 C 125,250 135,250 140,240 C 150,200 145,160 135,120"
            strokeWidth="0.8"
          />
          <circle cx="90" cy="70" r="18" strokeWidth="0.5" strokeDasharray="3 2" />
        </g>

        {/* ========================================================================================= */}
        {/* DENT 2 : INCISIVE CENTRALE & FACETTE CÉRAMIQUE (HAUT DROITE)                              */}
        {/* ========================================================================================= */}
        <g transform="translate(1180, 420)" stroke="#111111" fill="none" opacity="0.10">
          {/* Contour Incisive */}
          <path
            d="M 30,25 C 60,15 110,15 140,25 C 155,60 155,130 140,190 C 120,200 50,200 30,190 C 15,130 15,60 30,25 Z"
            strokeWidth="0.9"
          />
          {/* Lobes verticaux */}
          <path d="M 65,30 C 65,80 65,140 60,190" strokeWidth="0.5" strokeDasharray="3 3" />
          <path d="M 105,30 C 105,80 105,140 110,190" strokeWidth="0.5" strokeDasharray="3 3" />

          {/* Racine Unique vers le haut */}
          <path
            d="M 45,25 C 55,-20 70,-60 85,-90 C 100,-60 115,-20 125,25"
            strokeWidth="0.8"
          />
          <line x1="85" y1="20" x2="85" y2="-85" strokeWidth="0.5" strokeDasharray="3 3" />

          {/* Facette Céramique éclatée */}
          <path
            d="M 20,40 C 50,30 120,30 150,40 C 165,80 165,140 150,195 C 130,208 40,208 20,195 C 5,140 5,80 20,40 Z"
            strokeWidth="0.7"
            strokeDasharray="4 2"
          />
          <circle cx="85" cy="110" r="12" strokeWidth="0.5" strokeDasharray="3 3" />
        </g>

        {/* ========================================================================================= */}
        {/* DENT 3 : CANINE ANATOMIQUE EFFILÉE (MILIEU GAUCHE)                                        */}
        {/* ========================================================================================= */}
        <g transform="translate(80, 1050)" stroke="#111111" fill="none" opacity="0.10">
          {/* Couronne pointue */}
          <path
            d="M 50,30 C 65,18 95,18 110,30 C 130,70 125,140 80,185 C 35,140 30,70 50,30 Z"
            strokeWidth="0.9"
          />
          <path d="M 80,22 L 80,185" strokeWidth="0.7" />
          <path d="M 45,70 Q 80,95 115,70" strokeWidth="0.5" strokeDasharray="3 3" />
          <path d="M 48,125 Q 80,145 112,125" strokeWidth="0.5" strokeDasharray="3 3" />

          {/* Racine Unique de la canine */}
          <path
            d="M 55,30 C 60,-30 70,-80 80,-130 C 90,-80 100,-30 105,30"
            strokeWidth="0.8"
          />
          <circle cx="80" cy="185" r="6" strokeWidth="0.6" strokeDasharray="2 2" />
        </g>

        {/* ========================================================================================= */}
        {/* DENT 4 : IMPLANT TITANE & COL PROTHÉTIQUE (MILIEU DROITE)                                */}
        {/* ========================================================================================= */}
        <g transform="translate(1160, 1450)" stroke="#111111" fill="none" opacity="0.10">
          {/* Couronne céramique */}
          <path
            d="M 35,20 C 50,10 90,10 105,20 C 120,40 120,70 105,85 C 90,95 50,95 35,85 C 20,70 20,40 35,20 Z"
            strokeWidth="0.8"
          />
          {/* Pilier conique */}
          <polygon points="50,95 90,95 82,125 58,125" strokeWidth="0.7" />
          {/* Vis en titane */}
          <path d="M 56,125 L 84,125 L 80,240 C 78,255 62,255 60,240 Z" strokeWidth="0.9" />
          {/* Spire d'ostéointégration */}
          <line x1="56" y1="145" x2="84" y2="151" strokeWidth="0.6" />
          <line x1="56" y1="160" x2="84" y2="166" strokeWidth="0.6" />
          <line x1="56" y1="175" x2="84" y2="181" strokeWidth="0.6" />
          <line x1="56" y1="190" x2="84" y2="196" strokeWidth="0.6" />
          <line x1="57" y1="205" x2="83" y2="211" strokeWidth="0.6" />
          <line x1="58" y1="220" x2="82" y2="226" strokeWidth="0.6" />
          <circle cx="70" cy="125" r="14" strokeWidth="0.5" strokeDasharray="3 2" />
        </g>

        {/* ========================================================================================= */}
        {/* DENT 5 : ARCADE DENTAIRE NUMÉRISÉE (BAS / ZONE CENTRALE)                                  */}
        {/* ========================================================================================= */}
        <g transform="translate(220, 2050)" stroke="#111111" fill="none" opacity="0.08">
          {/* Arc d'arcade en trait pointillé fin */}
          <path
            d="M 50,280 C 50,80 380,-10 480,-10 C 580,-10 910,80 910,280"
            strokeWidth="1"
            strokeDasharray="5 5"
          />

          {/* Dents alignées schématiques en contour fin */}
          <rect x="70" y="220" width="30" height="36" rx="6" strokeWidth="0.7" transform="rotate(25, 85, 238)" />
          <rect x="105" y="155" width="28" height="32" rx="6" strokeWidth="0.7" transform="rotate(35, 119, 171)" />
          <rect x="155" y="100" width="24" height="26" rx="5" strokeWidth="0.7" transform="rotate(45, 167, 113)" />
          <polygon points="285,30 300,55 270,55" strokeWidth="0.7" />
          <rect x="325" y="15" width="26" height="20" rx="3" strokeWidth="0.7" transform="rotate(10, 338, 25)" />
          <rect x="385" y="2" width="32" height="22" rx="3" strokeWidth="0.8" />

          {/* Axe médian */}
          <line x1="480" y1="-25" x2="480" y2="35" strokeWidth="0.6" strokeDasharray="3 3" />
          <circle cx="480" cy="5" r="3" strokeWidth="0.6" />

          <rect x="543" y="2" width="32" height="22" rx="3" strokeWidth="0.8" />
          <rect x="609" y="15" width="26" height="20" rx="3" strokeWidth="0.7" transform="rotate(-10, 622, 25)" />
          <polygon points="690,30 705,55 675,55" strokeWidth="0.7" />
          <rect x="781" y="100" width="24" height="26" rx="5" strokeWidth="0.7" transform="rotate(-45, 793, 113)" />
          <rect x="827" y="155" width="28" height="32" rx="6" strokeWidth="0.7" transform="rotate(-35, 841, 171)" />
          <rect x="860" y="220" width="30" height="36" rx="6" strokeWidth="0.7" transform="rotate(-25, 875, 238)" />
        </g>
      </svg>
    </div>
  );
};
