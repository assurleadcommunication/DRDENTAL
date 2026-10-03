import React, { useState } from 'react';
import {
  DEFAULT_CLINIC_CONFIG,
  ClinicConfig,
  SERVICES_LIST,
  ServiceDetail,
} from './data/siteData';
import { HeroDentaCinematic } from './components/HeroDentaCinematic';
import { MainSections } from './components/MainSections';
import { MenuDrawer } from './components/MenuDrawer';
import { EmergencyModal } from './components/EmergencyModal';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PlaceholdersEditorModal } from './components/PlaceholdersEditorModal';
import { Info, X } from 'lucide-react';

export default function App() {
  const [clinicConfig, setClinicConfig] = useState<ClinicConfig>(DEFAULT_CLINIC_CONFIG);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [bookingModalState, setBookingModalState] = useState<{
    isOpen: boolean;
    preselectedServiceId?: string;
  }>({ isOpen: false });
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [isPlaceholdersOpen, setIsPlaceholdersOpen] = useState(false);
  
  const [toastMessage, setToastMessage] = useState<{
    title: string;
    desc: string;
  } | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingModalState({
      isOpen: true,
      preselectedServiceId: serviceId,
    });
  };

  const handleSelectService = (serviceId: string) => {
    const s = SERVICES_LIST.find((item) => item.id === serviceId);
    if (s) {
      setSelectedService(s);
    }
  };

  const handleExploreSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTriggerContact = (channel: 'phone' | 'whatsapp' | 'maps') => {
    if (channel === 'phone') {
      if (clinicConfig.phone.includes('[')) {
        setToastMessage({
          title: 'Numéro de téléphone en attente de confirmation',
          desc: `Placeholder actif : ${clinicConfig.phone}. Vous pouvez utiliser le formulaire de consultation ou configurer vos coordonnées officielles via le gestionnaire de placeholders.`,
        });
      } else {
        window.location.href = `tel:${clinicConfig.phone.replace(/\s+/g, '')}`;
      }
      return;
    }

    if (channel === 'whatsapp') {
      if (clinicConfig.whatsapp.includes('[')) {
        setToastMessage({
          title: 'Lien WhatsApp en attente du numéro officiel',
          desc: `Placeholder actif : ${clinicConfig.whatsapp}. Renseignez votre numéro WhatsApp officiel dans le panneau de configuration pour lancer la discussion directe.`,
        });
      } else {
        const clean = clinicConfig.whatsapp.replace(/[^0-9]/g, '');
        window.location.href = `https://wa.me/${clean}`;
      }
      return;
    }

    if (channel === 'maps') {
      if (clinicConfig.googleMapsUrl.includes('[')) {
        setToastMessage({
          title: 'Itinéraire Google Maps vers Mohammedia',
          desc: `Placeholder actif : ${clinicConfig.googleMapsUrl} (${clinicConfig.address}). Renseignez l'URL exacte de votre fiche Google Business Profile pour activer le guidage GPS.`,
        });
      } else {
        window.location.href = clinicConfig.googleMapsUrl;
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      
      {/* Toast Notification for Placeholder Contact Actions */}
      {toastMessage && (
        <div
          role="status"
          className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-lg p-4 rounded-2xl bg-[#111111] text-white shadow-2xl border border-neutral-700 flex items-start justify-between gap-3 animate-slideDown"
        >
          <div className="flex items-start gap-2.5">
            <Info className="w-5 h-5 text-neutral-300 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white">{toastMessage.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{toastMessage.desc}</p>
              <div className="pt-1.5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setToastMessage(null);
                    handleOpenBooking();
                  }}
                  className="px-3 py-1 rounded-full bg-white text-black text-[11px] font-semibold cursor-pointer"
                >
                  Formulaire de rendez-vous
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setToastMessage(null);
                    setIsPlaceholdersOpen(true);
                  }}
                  className="text-[11px] text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Gérer les coordonnées
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="p-1 text-neutral-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow bg-[#F5EFEB]/40">
        {/* 100% Identical to dr.png: Full-bleed macro smile background with floating Denta header */}
        <HeroDentaCinematic
          clinicConfig={clinicConfig}
          onOpenBooking={() => handleOpenBooking()}
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenEmergency={() => setIsEmergencyOpen(true)}
          onSelectService={handleSelectService}
          onExploreSection={handleExploreSection}
        />

        {/* 2. Rest of the High-End Sections (Pillars, Presentation, Services, Testimonials Carousel, Location, Footer) */}
        <MainSections
          clinicConfig={clinicConfig}
          onOpenBooking={handleOpenBooking}
          onSelectService={handleSelectService}
          onTriggerContact={handleTriggerContact}
          onOpenPlaceholdersModal={() => setIsPlaceholdersOpen(true)}
        />
      </main>

      {/* Menu Overlay Drawer (Triggered by the Oval "Menu" Button) */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        clinicConfig={clinicConfig}
        onSelectService={handleSelectService}
        onSelectSection={handleExploreSection}
        onOpenBooking={() => handleOpenBooking()}
        onTriggerContact={handleTriggerContact}
      />

      {/* Emergency Modal (Triggered by "Urgence dentaire / Dental Emergency") */}
      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        clinicConfig={clinicConfig}
        onTriggerContact={handleTriggerContact}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalState.isOpen}
        onClose={() => setBookingModalState({ isOpen: false })}
        clinicConfig={clinicConfig}
        preselectedServiceId={bookingModalState.preselectedServiceId}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        clinicConfig={clinicConfig}
        onBookService={handleOpenBooking}
      />

      {/* Placeholders Customization Modal */}
      <PlaceholdersEditorModal
        isOpen={isPlaceholdersOpen}
        onClose={() => setIsPlaceholdersOpen(false)}
        clinicConfig={clinicConfig}
        onUpdateConfig={setClinicConfig}
      />
    </div>
  );
}
