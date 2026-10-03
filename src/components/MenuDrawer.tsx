import React from 'react';
import { X, ArrowUpRight, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { ClinicConfig, SERVICES_LIST } from '../data/siteData';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  clinicConfig: ClinicConfig;
  onSelectService: (serviceId: string) => void;
  onSelectSection: (sectionId: string) => void;
  onOpenBooking: () => void;
  onTriggerContact: (channel: 'phone' | 'whatsapp') => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  clinicConfig,
  onSelectService,
  onSelectSection,
  onOpenBooking,
  onTriggerContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu principal de navigation"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end transition-opacity duration-300 animate-fadeIn"
    >
      <div className="relative w-full max-w-2xl bg-white h-full overflow-y-auto flex flex-col justify-between p-6 sm:p-12 shadow-2xl">
        
        {/* Top Header of the Menu Drawer */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
              Menu de Navigation
            </span>
            <span className="text-sm font-bold text-[#111111] uppercase tracking-tight">
              {clinicConfig.cabinetTitle}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="p-2.5 rounded-full border border-neutral-200 hover:border-black text-neutral-700 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Middle: Service & Section Links */}
        <div className="py-8 space-y-8">
          <div>
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">
              Le Cabinet
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectSection('le-cabinet');
                }}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-50 transition-colors text-base font-semibold text-neutral-900 flex items-center justify-between group cursor-pointer"
              >
                <span>Présentation du cabinet</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectSection('localisation');
                }}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-50 transition-colors text-base font-semibold text-neutral-900 flex items-center justify-between group cursor-pointer"
              >
                <span>Accès & Mohammedia</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectSection('parcours');
                }}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-50 transition-colors text-base font-semibold text-neutral-900 flex items-center justify-between group cursor-pointer"
              >
                <span>Parcours patient</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectSection('avis');
                }}
                className="text-left py-2 px-3 rounded-lg hover:bg-neutral-50 transition-colors text-base font-semibold text-neutral-900 flex items-center justify-between group cursor-pointer"
              >
                <span>Avis & Confiance</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">
              Prestations & Soins d'Excellence
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {SERVICES_LIST.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectService(service.id);
                  }}
                  className="text-left py-2 px-3 rounded-lg hover:bg-neutral-50 transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-medium text-neutral-800 group-hover:text-black">
                    <span className="font-mono-tabular text-neutral-400 mr-2 text-xs">
                      {service.index}.
                    </span>
                    {service.shortTitle}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Coordonnées & Actions */}
        <div className="border-t border-neutral-100 pt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-600">
            <div className="space-y-1">
              <span className="font-semibold text-black block">Cabinet à Mohammedia</span>
              <span className="font-mono-tabular text-neutral-500 block">{clinicConfig.address}</span>
              <span className="text-neutral-400">Mohammedia, Maroc</span>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-black block">Contact direct</span>
              <span className="font-mono-tabular text-neutral-500 block">Tél : {clinicConfig.phone}</span>
              <span className="font-mono-tabular text-neutral-500 block">WhatsApp : {clinicConfig.whatsapp}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3 px-6 rounded-full bg-[#111111] text-white hover:bg-neutral-800 text-sm font-semibold transition-colors text-center cursor-pointer"
            >
              Prendre rendez-vous
            </button>

            <button
              type="button"
              onClick={() => onTriggerContact('whatsapp')}
              className="py-3 px-6 rounded-full border border-neutral-300 hover:border-black text-sm font-semibold text-neutral-900 transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
