import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/siteData';

interface PrestationsShowcaseDarkProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const PrestationsShowcaseDark: React.FC<PrestationsShowcaseDarkProps> = ({
  onOpenBooking,
  onSelectService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const filteredServices =
    selectedCategory === 'Toutes'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredServices.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < filteredServices.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="prestations" className="relative z-10 max-w-[1440px] mx-auto scroll-mt-6 select-none">
      {/* GRAND CONTENEUR SOMBRE 100% STYLE CAPTURE D'ÉCRAN */}
      <div className="relative rounded-[28px] sm:rounded-[38px] lg:rounded-[48px] bg-[#0A0A0A] border border-white/10 text-white p-6 sm:p-12 lg:p-16 overflow-hidden shadow-2xl space-y-10 sm:space-y-12">
        
        {/* Halo lumineux d'arrière-plan doux (Ambre / Rose / Lavande comme dans la capture) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[900px] h-[380px] bg-radial from-amber-300/12 via-rose-400/8 to-transparent blur-3xl pointer-events-none" />

        {/* ========================================================================= */}
        {/* HEADER CENTRÉ AVEC TITRE GÉANT EN DÉGRADÉ EXACTEMENT COMME LA PHOTO      */}
        {/* ========================================================================= */}
        <div className="relative z-10 text-center space-y-4 sm:space-y-5 max-w-4xl mx-auto">
          
          {/* Badge Pilule Supérieur */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white/90 backdrop-blur-md shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>PROTOCOLES MÉDICAUX & ESTHÉTIQUES · MOHAMMEDIA</span>
          </div>

          {/* Titre Géant à 2 Lignes (Ligne 1 Blanc, Ligne 2 Dégradé Pêche/Rose/Lavande) */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[0.94] select-none">
            <span className="block text-white">PRESTATIONS MÉDICALES</span>
            <span className="block bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#DDD6FE] bg-clip-text text-transparent">
              & SOINS ESTHÉTIQUES
            </span>
          </h2>

          {/* Sous-titre aéré et centré */}
          <p className="text-xs sm:text-sm lg:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Une synthèse d'exigence chirurgicale, d'écoute attentive et de haute technologie
            médicale au cabinet du Dr Lalla Achouak Benlaghlid à Mohammedia.
          </p>

          {/* Bouton Pilule Blanc Centré : "Prendre rendez-vous →" (comme "Go Unlimited →") */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-bold text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Onglets Filtres Pilules (Toutes / Dentisterie / Esthétique Dentaire / Médecine Esthétique) */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {['Toutes', 'Dentisterie', 'Esthétique Dentaire', 'Médecine Esthétique'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveIndex(0);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* PANORAMA DE GRANDES CARTES NOIRES ARRONDIES (EXACTEMENT COMME LA PHOTO)   */}
        {/* ========================================================================= */}
        <div className="relative z-10 pt-4">
          
          {/* Navigation Controls (Flèches Gauche / Droite + Indicateur de Position) */}
          <div className="flex items-center justify-between gap-4 pb-6 text-xs text-neutral-400 px-2 sm:px-4">
            <div className="flex items-center gap-2 font-mono-tabular">
              <span className="text-white font-bold">
                0{activeIndex + 1}
              </span>
              <span>/</span>
              <span>0{filteredServices.length}</span>
              <span className="ml-2 text-neutral-500 hidden sm:inline">
                {filteredServices[activeIndex]?.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Prestation précédente"
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Prestation suivante"
                className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Rangée des 3 Grandes Cartes Sombres avec Débordement (Exactement comme dans la capture) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {/* On affiche 3 cartes consécutives pour reproduire la composition exacte de la photo */}
            {[
              (activeIndex - 1 + filteredServices.length) % filteredServices.length,
              activeIndex,
              (activeIndex + 1) % filteredServices.length,
            ].map((srvIdx, colIdx) => {
              const service = filteredServices[srvIdx];
              if (!service) return null;
              const isCenter = colIdx === 1;

              return (
                <div
                  key={`${service.id}-${colIdx}`}
                  onClick={() => onSelectService(service.id)}
                  className={`relative rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] bg-gradient-to-b from-[#1C1C1C] via-[#141414] to-[#0D0D0D] border transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 cursor-pointer group shadow-2xl ${
                    isCenter
                      ? 'border-white/30 ring-1 ring-white/15 scale-[1.02] z-10'
                      : 'border-white/10 opacity-75 hover:opacity-100 hover:border-white/20 hidden lg:flex'
                  }`}
                  style={{ minHeight: '440px' }}
                >
                  {/* Subtle top edge specular highlight line */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  {/* Header de la carte */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono-tabular font-bold text-amber-300 text-sm">
                        {service.index}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-semibold text-neutral-300">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Liste des Avantages Cliniques */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <ul className="space-y-2 text-xs text-neutral-300">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Actions */}
                    <div className="pt-3 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                          Protocole personnalisé
                        </span>
                        <span className="text-xs font-semibold text-white">
                          Sur devis médical
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service.id);
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs transition-all border border-white/15 cursor-pointer"
                      >
                        <span>Détails du soin</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Grille alternative d'accès rapide aux 8 prestations en bas */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-2">
            {filteredServices.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono-tabular transition-all cursor-pointer ${
                  activeIndex === idx
                    ? 'bg-amber-300 text-black font-bold'
                    : 'bg-white/5 hover:bg-white/15 text-neutral-400'
                }`}
              >
                {s.index}. {s.shortTitle}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
