import React, { useState } from 'react';
import {
  ArrowUpRight,
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Star,
  Check,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Activity,
  Award,
} from 'lucide-react';
import {
  ClinicConfig,
  SERVICES_LIST,
  PILLARS,
  CLINIC_IMAGES,
  ServiceDetail,
} from '../data/siteData';
import { PatientTestimonialsCarousel } from './PatientTestimonialsCarousel';
import { ImplantDentistryBlock } from './ImplantDentistryBlock';
import { FuturisticDentalBackdrop } from './FuturisticDentalBackdrop';
import { PrestationsShowcaseDark } from './PrestationsShowcaseDark';

interface MainSectionsProps {
  clinicConfig: ClinicConfig;
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (serviceId: string) => void;
  onTriggerContact: (channel: 'phone' | 'whatsapp' | 'maps') => void;
  onOpenPlaceholdersModal: () => void;
}

export const MainSections: React.FC<MainSectionsProps> = ({
  clinicConfig,
  onOpenBooking,
  onSelectService,
  onTriggerContact,
  onOpenPlaceholdersModal,
}) => {
  const [showPhotoPlaceholder, setShowPhotoPlaceholder] = useState(false);

  return (
    <div className="relative w-full bg-[#F5EFEB]/40 space-y-12 sm:space-y-16 pb-12 sm:pb-16 px-2.5 sm:px-5 lg:px-6 select-none overflow-hidden">
      
      {/* MOTIF DENTAIRE FUTURISTE EN ARRIÈRE-PLAN (COUVRANT LE FOND DU SITE) */}
      <FuturisticDentalBackdrop />

      {/* 1. LES 4 PILIERS D'EXCELLENCE — BENTO CARDS DESIGN */}
      <section className="relative z-10 max-w-[1440px] mx-auto">
        <div className="rounded-[28px] sm:rounded-[38px] lg:rounded-[44px] bg-white border border-black/5 p-6 sm:p-10 lg:p-12 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-neutral-100">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
                • Charte Clinique & Éthique · Mohammedia
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
                Quatre piliers au cœur de chaque soin
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm">
              Une pratique médicale alliant rigueur chirurgicale, discrétion et bienveillance au
              quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8">
            
            {/* Pilier 1 (Mise en avant sombre style Denta) */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#111111] text-white p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular font-bold text-lg text-amber-300">01</span>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
                  {PILLARS[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {PILLARS[0].desc}
                </p>
              </div>
            </div>

            {/* Pilier 2 */}
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-50/80 border border-neutral-200/80 hover:border-black p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular font-bold text-lg text-neutral-400">02</span>
                <div className="w-8 h-8 rounded-full bg-neutral-200/60 flex items-center justify-center text-neutral-800">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#111111]">
                  {PILLARS[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {PILLARS[1].desc}
                </p>
              </div>
            </div>

            {/* Pilier 3 */}
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-50/80 border border-neutral-200/80 hover:border-black p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular font-bold text-lg text-neutral-400">03</span>
                <div className="w-8 h-8 rounded-full bg-neutral-200/60 flex items-center justify-center text-neutral-800">
                  <HeartHandshake className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#111111]">
                  {PILLARS[2].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {PILLARS[2].desc}
                </p>
              </div>
            </div>

            {/* Pilier 4 */}
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-50/80 border border-neutral-200/80 hover:border-black p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-colors shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-mono-tabular font-bold text-lg text-neutral-400">04</span>
                <div className="w-8 h-8 rounded-full bg-neutral-200/60 flex items-center justify-center text-neutral-800">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#111111]">
                  {PILLARS[3].title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {PILLARS[3].desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. PRÉSENTATION DU CABINET — LUXURY BENTO SECTION */}
      <section id="le-cabinet" className="max-w-[1440px] mx-auto scroll-mt-6">
        <div className="rounded-[28px] sm:rounded-[38px] lg:rounded-[44px] bg-white border border-black/5 p-6 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Architectural Photo with Glassmorphic Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs">
                {!showPhotoPlaceholder ? (
                  <img
                    src={CLINIC_IMAGES.clinicInterior}
                    alt="Espace d'accueil lumineux du cabinet dentaire à Mohammedia"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-neutral-100 text-neutral-600 space-y-3">
                    <div className="text-xs font-mono-tabular font-bold uppercase text-black">
                      {clinicConfig.cabinetPhotoStatus}
                    </div>
                    <div className="text-xs font-mono-tabular text-neutral-500">
                      {clinicConfig.practitionerPhotoStatus}
                    </div>
                    <p className="text-xs max-w-xs text-neutral-500">
                      Emplacement réservé pour les photographies réelles du cabinet et du praticien à Mohammedia.
                    </p>
                  </div>
                )}

                {/* Status caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-900">
                    Cadre de consultation serein · Mohammedia
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPhotoPlaceholder(!showPhotoPlaceholder)}
                    className="text-[11px] font-medium text-neutral-600 hover:text-black underline cursor-pointer"
                  >
                    {showPhotoPlaceholder ? 'Voir photo d’ambiance' : 'Voir statut photo'}
                  </button>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-neutral-50/80 border border-neutral-200/60 flex items-center justify-between text-xs text-neutral-600">
                <span className="font-mono-tabular font-medium text-neutral-900">
                  {clinicConfig.practitionerName}
                </span>
                <span className="text-neutral-500">Chirurgien-Dentiste & Médecine Esthétique</span>
              </div>
            </div>

            {/* Right Column: Editorial Approach Prose */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                  • Philosophie & Écoute Médicale
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[0.98]">
                  Une approche bienveillante, axée sur la précision et le naturel
                </h2>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Consulter un praticien dentaire et esthétique exige confiance et sérénité. Au cabinet
                du <strong className="text-black">{clinicConfig.practitionerName}</strong> à
                Mohammedia, nous privilégions le dialogue transparent avant tout acte médical.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Chaque sourire est unique. Nous associons des technologies modernes d'imagerie et de
                soins conservateurs avec une médecine esthétique subtile, pensée pour préserver l'harmonie
                vivante de vos expressions sans altérer votre identité.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-neutral-100 text-xs">
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <span className="font-bold text-neutral-900 block text-xs">Pédagogie & Choix</span>
                  <p className="text-neutral-600 text-[11px]">
                    Explications détaillées de chaque option de traitement sans pression commerciale.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100 space-y-1">
                  <span className="font-bold text-neutral-900 block text-xs">Sécurité & Asepsie</span>
                  <p className="text-neutral-600 text-[11px]">
                    Protocoles stricts et traçabilité médicale certifiée pour chaque geste.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="px-7 py-3 rounded-full bg-[#111111] hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm hover:scale-105"
                >
                  Prendre rendez-vous
                </button>

                <button
                  type="button"
                  onClick={() => onTriggerContact('whatsapp')}
                  className="px-6 py-3 rounded-full bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs sm:text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Échanger sur WhatsApp</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. BLOC IMPLANT DENTISTRY (100% STYLE CAPTURE D'ÉCRAN) */}
      <ImplantDentistryBlock
        clinicConfig={clinicConfig}
        onOpenBooking={() => onOpenBooking('implantologie')}
        onSelectService={(serviceId) => onSelectService(serviceId)}
      />

      {/* 4. PRESTATIONS MÉDICALES & SOINS ESTHÉTIQUES — 100% STYLE CAPTURE D'ÉCRAN */}
      <PrestationsShowcaseDark
        onOpenBooking={onOpenBooking}
        onSelectService={onSelectService}
      />

      {/* 5. PARCOURS PATIENT EN 3 ÉTAPES CLAIRES */}
      <section className="max-w-[1440px] mx-auto">
        <div className="rounded-[28px] sm:rounded-[38px] lg:rounded-[44px] bg-white border border-black/5 p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
          
          <div className="space-y-1">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
              • Organisation & Prise en Charge
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111]">
              Votre parcours au cabinet en trois temps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 space-y-3">
              <span className="text-xs font-bold text-neutral-400 font-mono-tabular">ÉTAPE 01</span>
              <h3 className="text-base font-bold text-black">Consultation d'Écoute & Bilan</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Examen clinique approfondi, photographies et imagerie si nécessaire pour poser un
                diagnostic précis sans précipitation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 space-y-3">
              <span className="text-xs font-bold text-neutral-400 font-mono-tabular">ÉTAPE 02</span>
              <h3 className="text-base font-bold text-black">Plan de Traitement & Devis</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Présentation détaillée des alternatives thérapeutiques, du calendrier et du devis
                transparent avant tout début de soin.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111111] text-white p-6 rounded-2xl space-y-3">
              <span className="text-xs font-bold text-amber-300 font-mono-tabular">ÉTAPE 03</span>
              <h3 className="text-base font-bold text-white">Réalisation Douce & Suivi</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Soins exécutés dans le respect absolu de votre confort, avec contrôle post-traitement et
                disponibilité de l'équipe.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CARROUSEL INTERACTIF DE TÉMOIGNAGES PATIENTS */}
      <PatientTestimonialsCarousel
        clinicConfig={clinicConfig}
        onOpenBooking={() => onOpenBooking()}
      />

      {/* 7. ACCÈS, HORAIRES & COORDONNÉES À MOHAMMEDIA — BENTO MODULE */}
      <section id="acces" className="max-w-[1440px] mx-auto scroll-mt-6">
        <div className="rounded-[28px] sm:rounded-[38px] lg:rounded-[44px] bg-white border border-black/5 p-6 sm:p-10 lg:p-14 shadow-sm space-y-8">
          
          <div className="space-y-1">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
              • Venir au Cabinet · Mohammedia
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Informations d'accès & contact
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Card: Dark Minimalist Map Card */}
            <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-[#111111] text-white p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Cabinet Dentaire & Esthétique
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {clinicConfig.cabinetTitle}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {clinicConfig.address} — {clinicConfig.city}, {clinicConfig.country}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onTriggerContact('maps')}
                  className="px-6 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black text-xs font-semibold transition-all cursor-pointer"
                >
                  Ouvrir sur Google Maps
                </button>

                <button
                  type="button"
                  onClick={onOpenPlaceholdersModal}
                  className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Configurer coordonnées officielles
                </button>
              </div>
            </div>

            {/* Right Cards: Direct Contact & Hours */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              
              <div className="p-6 rounded-2xl sm:rounded-3xl bg-neutral-50/80 border border-neutral-200/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900">
                  <Clock className="w-4 h-4 text-neutral-500" />
                  <span>Horaires d'ouverture</span>
                </div>
                <p className="text-xs font-mono-tabular text-neutral-700">
                  {clinicConfig.hours}
                </p>
                <p className="text-[11px] text-neutral-500">
                  Consultations sur rendez-vous pour préserver votre temps d'attente.
                </p>
              </div>

              <div className="p-6 rounded-2xl sm:rounded-3xl bg-neutral-50/80 border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-bold text-neutral-900 block">Échange direct</span>
                  <span className="text-[11px] text-neutral-500 font-mono-tabular">
                    {clinicConfig.phone}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onTriggerContact('phone')}
                    className="p-3 rounded-full bg-neutral-900 text-white hover:bg-black transition-colors cursor-pointer"
                    title="Appeler"
                  >
                    <Phone className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onTriggerContact('whatsapp')}
                    className="p-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. CTA FINAL — BENTO OBSIDIAN LUXURY */}
      <section className="max-w-[1440px] mx-auto">
        <div className="rounded-[28px] sm:rounded-[38px] lg:rounded-[48px] bg-[#111111] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden text-center space-y-6 shadow-2xl border border-white/10">
          
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest block">
            • Cabinet Dr Lalla Achouak Benlaghlid · Mohammedia
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[0.98]">
            Votre nouveau sourire commence par une première écoute.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Prenez rendez-vous pour un bilan dentaire complet ou une consultation esthétique
            personnalisée avec le {clinicConfig.practitionerName}.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-neutral-100 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            >
              Prendre rendez-vous
            </button>

            <button
              type="button"
              onClick={() => onTriggerContact('whatsapp')}
              className="px-7 py-3.5 rounded-full border border-neutral-700 hover:border-white text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Échanger sur WhatsApp</span>
            </button>
          </div>

        </div>
      </section>

      {/* 9. FOOTER HAUT DE GAMME */}
      <footer className="max-w-[1440px] mx-auto">
        <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-black/5 p-8 sm:p-12 text-xs text-neutral-600 space-y-10 shadow-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="font-extrabold text-base text-black uppercase tracking-tight block">
                {clinicConfig.cabinetTitle}
              </span>
              <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
                Dentisterie d'excellence, implantologie de précision, facettes dentaires et médecine
                esthétique à {clinicConfig.city}, {clinicConfig.country}.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-2">
              <span className="font-bold text-black uppercase tracking-wider block text-[11px]">
                Prestations Dentaires
              </span>
              <div className="space-y-1.5 text-neutral-600">
                {SERVICES_LIST.slice(0, 5).map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onSelectService(s.id)}
                    className="block hover:text-black cursor-pointer text-left"
                  >
                    {s.shortTitle}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-2">
              <span className="font-bold text-black uppercase tracking-wider block text-[11px]">
                Médecine Esthétique
              </span>
              <div className="space-y-1.5 text-neutral-600">
                {SERVICES_LIST.slice(5).map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => onSelectService(s.id)}
                    className="block hover:text-black cursor-pointer text-left"
                  >
                    {s.shortTitle}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-2">
              <span className="font-bold text-black uppercase tracking-wider block text-[11px]">
                Coordonnées officielles
              </span>
              <div className="space-y-1 text-neutral-600">
                <p>Adresse : <span className="font-mono-tabular text-neutral-500">{clinicConfig.address}</span></p>
                <p>Téléphone : <span className="font-mono-tabular text-neutral-500">{clinicConfig.phone}</span></p>
                <p>WhatsApp : <span className="font-mono-tabular text-neutral-500">{clinicConfig.whatsapp}</span></p>
                <p>Horaires : <span className="font-mono-tabular text-neutral-500">{clinicConfig.hours}</span></p>
              </div>
            </div>

          </div>

          <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-[11px]">
            <div>
              © {new Date().getFullYear()} {clinicConfig.cabinetTitle} · Tous droits réservés
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onOpenPlaceholdersModal}
                className="text-neutral-900 font-semibold hover:underline cursor-pointer"
              >
                Gérer les Placeholders
              </button>
              <span>·</span>
              <span>Mohammedia, Maroc</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};
