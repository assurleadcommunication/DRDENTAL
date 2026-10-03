import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, X } from 'lucide-react';
import { ClinicConfig, SERVICES_LIST } from '../data/siteData';

interface AppointmentFormProps {
  clinicConfig: ClinicConfig;
  preselectedServiceId?: string;
  onSuccess?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  clinicConfig,
  preselectedServiceId,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: preselectedServiceId || 'consultation-generale',
    preferredTime: 'Matin (09h00 - 12h30)',
    note: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = 'Veuillez renseigner votre nom complet.';
    const phoneClean = formData.phone.replace(/\s+/g, '');
    if (!phoneClean || phoneClean.length < 8) {
      err.phone = 'Numéro de téléphone ou WhatsApp requis.';
    }
    if (!formData.consent) {
      err.consent = 'Veuillez accepter d’être recontacté(e) pour valider votre créneau.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    }, 400);
  };

  if (isSuccess) {
    return (
      <div className="p-6 rounded-2xl bg-neutral-50 border border-emerald-200 text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
        <h4 className="text-lg font-bold text-neutral-900">Demande enregistrée avec succès</h4>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
          Merci {formData.name}. L'équipe du cabinet à Mohammedia vous recontactera rapidement par
          téléphone ou WhatsApp au <span className="font-mono-tabular font-semibold text-black">{formData.phone}</span>{' '}
          afin de fixer votre créneau définitif.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: '',
              phone: '',
              serviceId: 'consultation-generale',
              preferredTime: 'Matin (09h00 - 12h30)',
              note: '',
              consent: false,
            });
          }}
          className="mt-2 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold cursor-pointer"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      <div>
        <label className="block text-xs font-semibold text-neutral-800 mb-1">
          Nom et prénom *
        </label>
        <input
          type="text"
          placeholder="Ex : Sarah Tazi"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
            errors.name ? 'border-red-500 bg-red-50/20' : 'border-neutral-200 focus:border-black'
          }`}
        />
        {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-neutral-800 mb-1">
            Numéro de téléphone / WhatsApp *
          </label>
          <input
            type="tel"
            placeholder="06 XX XX XX XX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm font-mono-tabular focus:outline-none transition-colors ${
              errors.phone ? 'border-red-500 bg-red-50/20' : 'border-neutral-200 focus:border-black'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-neutral-800 mb-1">
            Créneau souhaité
          </label>
          <select
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:border-black focus:outline-none bg-white"
          >
            <option value="Matin (09h00 - 12h30)">Matin (09h00 - 12h30)</option>
            <option value="Après-midi (14h30 - 18h30)">Après-midi (14h30 - 18h30)</option>
            <option value="Samedi matin">Samedi matin</option>
            <option value="Au plus vite (Urgence)">Au plus vite (Urgence)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-neutral-800 mb-1">
          Soin concerné
        </label>
        <select
          value={formData.serviceId}
          onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:border-black focus:outline-none bg-white"
        >
          <option value="consultation-generale">Première Consultation & Bilan</option>
          {SERVICES_LIST.map((s) => (
            <option key={s.id} value={s.id}>
              {s.index}. {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-neutral-800 mb-1">
          Précisions ou questions (optionnel)
        </label>
        <textarea
          rows={2}
          placeholder="Décrivez brièvement votre besoin..."
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          className="w-full px-4 py-2 rounded-xl border border-neutral-200 text-sm focus:border-black focus:outline-none"
        />
      </div>

      <div>
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-neutral-600">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 rounded text-black focus:ring-black"
          />
          <span>
            J'accepte que mes coordonnées soient utilisées par le secrétariat du cabinet pour fixer
            mon rendez-vous médical à Mohammedia.
          </span>
        </label>
        {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 rounded-full bg-[#111111] hover:bg-neutral-800 text-white font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de consultation'}</span>
      </button>
    </form>
  );
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinicConfig: ClinicConfig;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  clinicConfig,
  preselectedServiceId,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-neutral-100 mb-5">
          <div>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
              {clinicConfig.cabinetTitle} · {clinicConfig.city}
            </span>
            <h2 id="booking-modal-title" className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
              Prendre rendez-vous
            </h2>
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

        <AppointmentForm
          clinicConfig={clinicConfig}
          preselectedServiceId={preselectedServiceId}
        />
      </div>
    </div>
  );
};
