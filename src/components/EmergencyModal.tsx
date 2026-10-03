import React from 'react';
import { X, Phone, MessageCircle, AlertTriangle, Clock, MapPin } from 'lucide-react';
import { ClinicConfig } from '../data/siteData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinicConfig: ClinicConfig;
  onTriggerContact: (channel: 'phone' | 'whatsapp') => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  clinicConfig,
  onTriggerContact,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="emergency-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5 text-red-600">
            <span className="p-2 rounded-xl bg-red-50">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
                Service d'urgence
              </span>
              <h2 id="emergency-title" className="text-xl font-bold text-[#111111] leading-tight">
                Urgence Dentaire à Mohammedia
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="p-1.5 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reassurance text */}
        <p className="text-sm text-neutral-600 leading-relaxed">
          En cas de douleur vive, de traumatisme dentaire (dent expulsée, cassée), d’abcès ou de
          saignement persistant, notre équipe s’efforce de vous recevoir en priorité au cabinet du{' '}
          <strong className="text-black">{clinicConfig.practitionerName}</strong>.
        </p>

        {/* Immediate Priority Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={() => onTriggerContact('phone')}
            className="py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Appeler le cabinet</span>
          </button>

          <button
            type="button"
            onClick={() => onTriggerContact('whatsapp')}
            className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Message WhatsApp</span>
          </button>
        </div>

        {/* Quick Advice & Coordinates */}
        <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2 text-xs text-neutral-600">
          <div className="flex items-center gap-2 text-neutral-900 font-semibold">
            <Clock className="w-3.5 h-3.5 text-neutral-500" />
            <span>Horaires de réception : {clinicConfig.hours}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-900 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>Mohammedia : {clinicConfig.address}</span>
          </div>
          <p className="text-neutral-500 pt-1 leading-normal">
            <strong>Premier réflexe :</strong> En cas de dent expulsée, conservez-la sans la frotter
            dans du sérum physiologique ou du lait, et rejoignez le cabinet sans attendre.
          </p>
        </div>
      </div>
    </div>
  );
};
