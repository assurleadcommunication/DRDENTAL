import React, { useState } from 'react';
import { X, RotateCcw, Check, Sparkles } from 'lucide-react';
import { ClinicConfig, DEFAULT_CLINIC_CONFIG } from '../data/siteData';

interface PlaceholdersEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinicConfig: ClinicConfig;
  onUpdateConfig: (updated: ClinicConfig) => void;
}

export const PlaceholdersEditorModal: React.FC<PlaceholdersEditorModalProps> = ({
  isOpen,
  onClose,
  clinicConfig,
  onUpdateConfig,
}) => {
  const [tempConfig, setTempConfig] = useState<ClinicConfig>({ ...clinicConfig });
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onUpdateConfig(tempConfig);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 800);
  };

  const handleReset = () => {
    setTempConfig({ ...DEFAULT_CLINIC_CONFIG });
    onUpdateConfig({ ...DEFAULT_CLINIC_CONFIG });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="placeholders-title"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 max-h-[90vh] overflow-y-auto space-y-6">
        
        <div className="flex items-start justify-between border-b border-neutral-100 pb-4">
          <div>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">
              Configuration Déontologique & Placeholders
            </span>
            <h2 id="placeholders-title" className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
              Personnalisation des coordonnées officielles
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

        <p className="text-xs text-neutral-600 leading-relaxed">
          Conformément aux instructions médicales, aucune fausse coordonnée n’a été inventée. Toutes
          les données non confirmées sont encadrées par des crochets <code>[...]</code>. Vous pouvez
          saisir vos véritables coordonnées ici pour prévisualiser le rendu en direct sur le site.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-neutral-800 mb-1">
              Adresse officielle à Mohammedia
            </label>
            <input
              type="text"
              value={tempConfig.address}
              onChange={(e) => setTempConfig({ ...tempConfig, address: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-neutral-200 font-mono-tabular text-xs focus:border-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-neutral-800 mb-1">
              Téléphone du cabinet
            </label>
            <input
              type="text"
              value={tempConfig.phone}
              onChange={(e) => setTempConfig({ ...tempConfig, phone: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-neutral-200 font-mono-tabular text-xs focus:border-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-neutral-800 mb-1">
              Numéro WhatsApp officiel
            </label>
            <input
              type="text"
              value={tempConfig.whatsapp}
              onChange={(e) => setTempConfig({ ...tempConfig, whatsapp: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-neutral-200 font-mono-tabular text-xs focus:border-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-neutral-800 mb-1">
              Horaires d'ouverture
            </label>
            <input
              type="text"
              value={tempConfig.hours}
              onChange={(e) => setTempConfig({ ...tempConfig, hours: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-neutral-200 font-mono-tabular text-xs focus:border-black focus:outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block font-semibold text-neutral-800 mb-1">
              Lien Google Maps / Itinéraire
            </label>
            <input
              type="text"
              value={tempConfig.googleMapsUrl}
              onChange={(e) => setTempConfig({ ...tempConfig, googleMapsUrl: e.target.value })}
              className="w-full px-3 py-2 rounded-xl border border-neutral-200 font-mono-tabular text-xs focus:border-black focus:outline-none"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Réinitialiser les placeholders</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111111] hover:bg-neutral-800 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            {isSaved ? <Check className="w-4 h-4 text-emerald-400" /> : <Sparkles className="w-4 h-4" />}
            <span>{isSaved ? 'Modifications enregistrées !' : 'Appliquer sur le site'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
