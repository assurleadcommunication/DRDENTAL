import React from 'react';
import { X, Check, ArrowRight, Calendar } from 'lucide-react';
import { ServiceDetail, ClinicConfig } from '../data/siteData';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  clinicConfig: ClinicConfig;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  clinicConfig,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-100 max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-neutral-100 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono-tabular font-bold text-neutral-400">
              {service.index}. {service.category} · {clinicConfig.city}
            </span>
            <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
              {service.title}
            </h2>
            <p className="text-sm font-medium text-neutral-600">
              {service.headline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="p-2 rounded-full text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
          {service.description}
        </p>

        {/* Benefits list */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            Bénéfices & Objectifs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                <span className="p-1 rounded-full bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Step Protocol */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            Déroulement en 3 Étapes au Cabinet
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {service.steps.map((st) => (
              <div key={st.step} className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-1">
                <span className="text-xs font-mono-tabular font-bold text-neutral-400">
                  Étape {st.step}
                </span>
                <h4 className="text-sm font-bold text-neutral-900">{st.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ item */}
        {service.faqs.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Questions Fréquentes
            </h3>
            <div className="space-y-2">
              {service.faqs.map((f, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-neutral-100 text-xs sm:text-sm space-y-1">
                  <div className="font-semibold text-neutral-900">{f.q}</div>
                  <div className="text-neutral-600 leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="text-xs text-neutral-500">
            Cabinet du {clinicConfig.practitionerName} · Mohammedia
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
            className="px-6 py-3 rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Prendre rendez-vous pour ce soin</span>
          </button>
        </div>
      </div>
    </div>
  );
};
