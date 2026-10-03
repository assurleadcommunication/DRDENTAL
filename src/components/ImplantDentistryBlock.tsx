import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_IMAGES, ClinicConfig } from '../data/siteData';

interface ImplantDentistryBlockProps {
  clinicConfig: ClinicConfig;
  onOpenBooking: () => void;
  onSelectService: (serviceId: string) => void;
}

export const ImplantDentistryBlock: React.FC<ImplantDentistryBlockProps> = ({
  clinicConfig,
  onOpenBooking,
  onSelectService,
}) => {
  const [crownImgError, setCrownImgError] = useState(false);
  const [fixtureImgError, setFixtureImgError] = useState(false);
  const [portraitImgError, setPortraitImgError] = useState(false);

  return (
    <section className="relative z-10 max-w-[1440px] mx-auto">
      {/* Main Bento Container with Rounded Corners exactly like screenshot */}
      <div className="relative rounded-[28px] sm:rounded-[38px] lg:rounded-[44px] bg-white border border-black/5 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: TITLE + SUBTITLE + 2 3D IMPLANT CARDS */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-10">
              
              {/* Giant Stacked Title from Screenshot */}
              <div className="space-y-3">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[0.95] select-none">
                  <span className="block">Implant</span>
                  <span className="block">Dentistry</span>
                </h2>

                <p className="text-sm sm:text-base font-semibold text-neutral-800 tracking-tight">
                  Restore Missing Teeth
                </p>

                <p className="text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed">
                  Remplacement fixe et pérenne des dents absentes avec confort masticatoire absolu et
                  esthétique naturelle au cabinet du {clinicConfig.practitionerName} à Mohammedia.
                </p>
              </div>

              {/* Two 3D Showcase Cards Side by Side from Screenshot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                
                {/* Card 1: 3D Exploded Crown Diagram */}
                <div
                  onClick={() => onSelectService('implantologie')}
                  className="group relative rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/80 hover:border-black p-3.5 sm:p-4 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3"
                >
                  <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center">
                    {!crownImgError ? (
                      <img
                        src={CLINIC_IMAGES.implantCrown}
                        alt="3D Exploded Dental Crown and Implant Abutment"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setCrownImgError(true)}
                      />
                    ) : (
                      <div className="text-xs text-neutral-400 p-4 text-center">
                        Vue éclatée 3D de la couronne céramique
                      </div>
                    )}

                    {/* Subtle Badge */}
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-bold text-neutral-800 shadow-2xs">
                      Couronne & Pilier
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-900 group-hover:text-black">
                      Biocompatibilité titane
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                  </div>
                </div>

                {/* Card 2: 3D Fixture in Gum Line */}
                <div
                  onClick={() => onSelectService('implantologie')}
                  className="group relative rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/80 hover:border-black p-3.5 sm:p-4 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3"
                >
                  <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100 flex items-center justify-center">
                    {!fixtureImgError ? (
                      <img
                        src={CLINIC_IMAGES.implantFixture}
                        alt="3D Titanium Implant Fixture integrated in Gum"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setFixtureImgError(true)}
                      />
                    ) : (
                      <div className="text-xs text-neutral-400 p-4 text-center">
                        Intégration osseuse de la racine artificielle
                      </div>
                    )}

                    {/* Subtle Badge */}
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-bold text-neutral-800 shadow-2xs">
                      Ostéointégration
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-neutral-900 group-hover:text-black">
                      Stabilité permanente
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-colors" />
                  </div>
                </div>

              </div>

              {/* Bottom CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-neutral-300" />
                  <span>Bilan implantaire personnalisé</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectService('implantologie')}
                  className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-black underline underline-offset-4 transition-colors cursor-pointer"
                >
                  Comprendre les étapes du soin
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: LARGE RADIANT SMILING WOMAN PORTRAIT FROM SCREENSHOT */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[1.15/1] rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden bg-white shadow-sm border border-neutral-200/80">
                {!portraitImgError ? (
                  <img
                    src={CLINIC_IMAGES.implantPortrait}
                    alt="Sourire radieux retrouvé grâce à l'implantologie dentaire"
                    className="w-full h-full object-cover object-center"
                    onError={() => setPortraitImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-sm text-neutral-500">
                    Portrait du sourire restauré
                  </div>
                )}

                {/* Subtle caption tag */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-neutral-900">
                      Résultat esthétique & naturel garanti sans douleur
                    </span>
                  </div>

                  <span className="text-[11px] font-mono-tabular text-neutral-500 hidden sm:inline">
                    Cabinet Dr Benlaghlid
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
    </section>
  );
};
