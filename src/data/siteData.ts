import heroSmileImg from '../assets/images/hero_editorial_smile_1791042850622.jpg';
import clinicInteriorImg from '../assets/images/clinic_minimalist_lounge_1791042861029.jpg';
import heroSmileMacroImg from '../assets/images/hero_smile_macro_cinematic_1791044299740.jpg';
import implantPortraitImg from '../assets/images/implant_portrait_smile_1791044477123.jpg';
import implantCrownImg from '../assets/images/implant_3d_exploded_crown_1791044492501.jpg';
import implantFixtureImg from '../assets/images/implant_3d_fixture_gum_1791044508235.jpg';
import heroCinematicPatientCareImg from '../assets/images/hero_cinematic_patient_care_1791044689299.jpg';
import futuristicDentalPatternImg from '../assets/images/futuristic_dental_pattern_1791045625557.jpg';
import smileTeethWhiteningImg from '../assets/images/smile_teeth_whitening_var_1791045922013.jpg';
import smileOrthoAlignmentImg from '../assets/images/smile_ortho_alignment_var_1791045934651.jpg';

export interface ClinicConfig {
  practitionerName: string;
  cabinetTitle: string;
  subtitle: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  googleMapsUrl: string;
  bookingUrl: string;
  cabinetPhotoStatus: string;
  practitionerPhotoStatus: string;
  googleRatingPlaceholder: string;
}

export const DEFAULT_CLINIC_CONFIG: ClinicConfig = {
  practitionerName: 'Dr Lalla Achouak Benlaghlid',
  cabinetTitle: 'DR LALLA ACHOUAK BENLAGHLID',
  subtitle: 'dentisterie & médecine esthétique',
  city: 'Mohammedia',
  country: 'Maroc',
  address: '[ADRESSE OFFICIELLE À CONFIRMER]',
  phone: '[TÉLÉPHONE À CONFIRMER]',
  whatsapp: '[NUMÉRO WHATSAPP À CONFIRMER]',
  hours: '[HORAIRES À CONFIRMER]',
  googleMapsUrl: '[LIEN GOOGLE MAPS À AJOUTER]',
  bookingUrl: '[LIEN DE PRISE DE RENDEZ-VOUS À AJOUTER]',
  cabinetPhotoStatus: '[PHOTO DU CABINET À AJOUTER]',
  practitionerPhotoStatus: '[PHOTO DE LA PRATICIENNE À AJOUTER]',
  googleRatingPlaceholder: '[NOTE GOOGLE À CONFIRMER] / 5 — [NOMBRE D’AVIS À CONFIRMER] avis Google',
};

export const CLINIC_IMAGES = {
  heroSmile: heroSmileImg,
  clinicInterior: clinicInteriorImg,
  macroSmile: heroSmileMacroImg,
  implantPortrait: implantPortraitImg,
  implantCrown: implantCrownImg,
  implantFixture: implantFixtureImg,
  patientCare: heroCinematicPatientCareImg,
  dentalPattern: futuristicDentalPatternImg,
  smileWhitening: smileTeethWhiteningImg,
  smileOrtho: smileOrthoAlignmentImg,
};

export interface ServiceDetail {
  id: string;
  index: string;
  category: 'Dentisterie' | 'Esthétique Dentaire' | 'Médecine Esthétique';
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  benefits: string[];
  steps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'dentisterie-generale',
    index: '01',
    category: 'Dentisterie',
    title: 'Dentisterie générale & soins conservateurs',
    shortTitle: 'Dentisterie générale',
    headline: 'Préservation durable de la santé bucco-dentaire',
    description:
      'Bilans complets, détartrage de précision, traitement des caries et soins préventifs menés dans une démarche douce et respectueuse des tissus naturels.',
    benefits: [
      'Préservation maximale de la dentition naturelle',
      'Prise en charge douce et sans douleur pour les patients anxieux',
      'Diagnostic approfondi et explications claires',
      'Asepsie et stérilisation hospitalière de pointe',
    ],
    steps: [
      { step: '01', title: 'Consultation & Bilan', desc: 'Examen clinique attentif et écoute de vos attentes.' },
      { step: '02', title: 'Plan de Traitement', desc: 'Présentation transparente des soins adaptés.' },
      { step: '03', title: 'Soins & Suivi', desc: 'Réalisation méticuleuse et conseils d’entretien.' },
    ],
    faqs: [
      {
        q: 'À quelle fréquence consulter pour un contrôle ?',
        a: 'Un contrôle et un nettoyage tous les 6 à 12 mois permettent d’éviter les complications.',
      },
      {
        q: 'Comment gérez-vous l’anxiété dentaire ?',
        a: 'Chaque geste est expliqué préalablement, avec un rythme adapté à votre confort.',
      },
    ],
  },
  {
    id: 'implantologie',
    index: '02',
    category: 'Dentisterie',
    title: 'Implantologie dentaire',
    shortTitle: 'Implantologie',
    headline: 'Restauration fixe, durable et naturelle des dents manquantes',
    description:
      'Pose d’implants biocompatibles pour remplacer une ou plusieurs dents sans endommager les dents voisines, garantissant confort masticatoire et esthétique.',
    benefits: [
      'Protection des dents adjacentes saines',
      'Stabilité et sensation identiques à une dent naturelle',
      'Maintien du capital osseux de la mâchoire',
      'Planification 3D sur mesure',
    ],
    steps: [
      { step: '01', title: 'Bilan osseux 3D', desc: 'Analyse radiologique et étude de faisabilité.' },
      { step: '02', title: 'Pose de l’implant', desc: 'Intervention sous anesthésie locale douce.' },
      { step: '03', title: 'Couronne sur mesure', desc: 'Fixation de la prothèse céramique finale.' },
    ],
    faqs: [
      {
        q: 'La pose d’un implant est-elle douloureuse ?',
        a: 'L’anesthésie locale moderne assure une intervention totalement indolore.',
      },
      {
        q: 'Quelle est la durée de vie d’un implant ?',
        a: 'Avec une bonne hygiène et un suivi régulier, un implant peut durer plusieurs décennies.',
      },
    ],
  },
  {
    id: 'facettes-dentaires',
    index: '03',
    category: 'Esthétique Dentaire',
    title: 'Facettes dentaires sur mesure',
    shortTitle: 'Facettes dentaires',
    headline: 'Harmonisation sur mesure de la forme, de la teinte et du sourire',
    description:
      'Fines pellicules de céramique d’une translucidité naturelle, appliquées pour corriger dyschromies, espacements ou légères irrégularités.',
    benefits: [
      'Résultat sur mesure et éclat naturel sans effet artificiel',
      'Préservation maximale de l’émail dentaire',
      'Céramiques haute résistance résistantes aux colorations',
      'Simulation préalable du résultat',
    ],
    steps: [
      { step: '01', title: 'Étude esthétique', desc: 'Analyse morphologique et photos du sourire.' },
      { step: '02', title: 'Préparation & Empreinte', desc: 'Conception personnalisée en laboratoire.' },
      { step: '03', title: 'Collage minutieux', desc: 'Fixation définitive pour un résultat impeccable.' },
    ],
    faqs: [
      {
        q: 'Le rendu est-il naturel ?',
        a: 'Oui, la translucidité de la céramique reproduit fidèlement la réflexion lumineuse de l’émail naturel.',
      },
    ],
  },
  {
    id: 'blanchiment-dentaire',
    index: '04',
    category: 'Esthétique Dentaire',
    title: 'Blanchiment dentaire médical',
    shortTitle: 'Blanchiment dentaire',
    headline: 'Éclaircissement sécurisé pour retrouver l’éclat naturel du sourire',
    description:
      'Protocole d’éclaircissement encadré médicalement au cabinet, respectueux de l’émail et des gencives, éliminant les colorations profondes.',
    benefits: [
      'Supervision médicale stricte et sécurité de l’émail',
      'Formules limitant toute sensibilité transitoire',
      'Éclaircissement visible et harmonieux',
      'Conseils pour faire durer la luminosité',
    ],
    steps: [
      { step: '01', title: 'Contrôle préalable', desc: 'Vérification de l’absence de contre-indications.' },
      { step: '02', title: 'Séance au cabinet', desc: 'Application du gel éclaircissant actif.' },
      { step: '03', title: 'Entretien & Suivi', desc: 'Kit de maintien et recommandations.' },
    ],
    faqs: [
      {
        q: 'Le blanchiment abîme-t-il les dents ?',
        a: 'Non, les produits médicaux utilisés sous contrôle d’un praticien préservent l’intégrité de l’émail.',
      },
    ],
  },
  {
    id: 'orthodontie',
    index: '05',
    category: 'Esthétique Dentaire',
    title: 'Orthodontie & alignement dentaire',
    shortTitle: 'Orthodontie',
    headline: 'Harmonisation de l’occlusion et alignement esthétique',
    description:
      'Traitements d’alignement adaptés aux adultes et adolescents pour redresser les dents, améliorer la fonction masticatoire et faciliter le brossage.',
    benefits: [
      'Solutions discrètes adaptées à la vie quotidienne',
      'Amélioration de la mastication et de la santé gingivale',
      'Suivi régulier et personnalisé',
      'Phase de contention pour stabiliser le résultat',
    ],
    steps: [
      { step: '01', title: 'Bilan d’alignement', desc: 'Étude des arcades et simulation.' },
      { step: '02', title: 'Mise en place', desc: 'Port du dispositif et réglages périodiques.' },
      { step: '03', title: 'Stabilisation', desc: 'Pose de la contention de maintien.' },
    ],
    faqs: [
      {
        q: 'Peut-on réaligner ses dents à tout âge ?',
        a: 'Absolument, tant que les gencives et l’os de soutien sont en bonne santé.',
      },
    ],
  },
  {
    id: 'protheses-dentaires',
    index: '06',
    category: 'Dentisterie',
    title: 'Prothèses dentaires & couronnes céramiques',
    shortTitle: 'Prothèses dentaires',
    headline: 'Consolidation et reconstruction durable des dents fragilisées',
    description:
      'Inlays, onlays, couronnes céramiques biocompatibles et bridges assurant la réhabilitation esthétique et mécanique du sourire.',
    benefits: [
      'Restauration anatomique exacte',
      'Matériaux céramiques biocompatibles sans métal apparent',
      'Confort masticatoire restauré',
      'Longévité éprouvée',
    ],
    steps: [
      { step: '01', title: 'Préparation conservatrice', desc: 'Préservation des tissus résiduels.' },
      { step: '02', title: 'Empreinte numérique', desc: 'Prise de mesure haute précision.' },
      { step: '03', title: 'Pose définitive', desc: 'Ajustement minutieux et scellement.' },
    ],
    faqs: [
      {
        q: 'Quelle différence entre un plombage et une couronne ?',
        a: 'La couronne protège l’ensemble de la dent quand la structure résiduelle est trop fragile pour un simple soin.',
      },
    ],
  },
  {
    id: 'medecine-esthetique',
    index: '07',
    category: 'Médecine Esthétique',
    title: 'Médecine esthétique & harmonie faciale',
    shortTitle: 'Médecine esthétique',
    headline: 'Équilibre subtil, naturel et bienveillant des traits du visage',
    description:
      'Approche médicale mesurée pour harmoniser le tiers inférieur du visage en synergie avec le sourire, dans le respect de vos expressions naturelles.',
    benefits: [
      'Philosophie de subtilité : rajeunir et harmoniser sans figer',
      'Compréhension globale des lignes du visage et des lèvres',
      'Cadre médical confidentiel et sécurisé',
      'Traçabilité rigoureuse des produits certifiés',
    ],
    steps: [
      { step: '01', title: 'Consultation esthétique', desc: 'Analyse des expressions et écoute attentive.' },
      { step: '02', title: 'Protocole personnalisé', desc: 'Proposition transparente et mesurée.' },
      { step: '03', title: 'Séance & Suivi', desc: 'Geste médical doux et contrôle post-séance.' },
    ],
    faqs: [
      {
        q: 'Le résultat reste-t-il naturel ?',
        a: 'Notre priorité absolue est la retenue : préserver votre charme naturel sans surcorrection.',
      },
    ],
  },
  {
    id: 'botox-acide-hyaluronique',
    index: '08',
    category: 'Médecine Esthétique',
    title: 'Toxine botulique & acide hyaluronique',
    shortTitle: 'Botox & Acide hyaluronique',
    headline: 'Détente musculaire ciblée et hydratation profonde des contours',
    description:
      'Traitements médicaux résorbables pour apaiser les crispations musculaires (bruxisme, rides d’expression) et redessiner délicatement les volumes.',
    benefits: [
      'Action ciblée sur les tensions faciales et le bruxisme',
      'Hydratation et définition délicate des lèvres et sillons',
      'Produits 100% résorbables et éprouvés',
      'Gestes précis avec micro-canules confortables',
    ],
    steps: [
      { step: '01', title: 'Bilan médical', desc: 'Examen clinique et vérification des indications.' },
      { step: '02', title: 'Application douce', desc: 'Séance rapide et confortable.' },
      { step: '03', title: 'Contrôle à 15 jours', desc: 'Vérification de l’équilibre obtenu.' },
    ],
    faqs: [
      {
        q: 'Quelle est la durée des effets ?',
        a: 'Les effets sont temporaires et résorbables, durant généralement entre 6 et 12 mois.',
      },
    ],
  },
];

export const PILLARS = [
  {
    num: '01',
    title: 'Accompagnement personnalisé',
    desc: 'Un temps d’échange dédié à chaque consultation pour comprendre votre ressenti et vos priorités.',
  },
  {
    num: '02',
    title: 'Technologies de précision',
    desc: 'Des protocoles modernes alliant dentisterie de pointe et médecine esthétique maîtrisée.',
  },
  {
    num: '03',
    title: 'Cabinet situé à Mohammedia',
    desc: 'Un environnement serein, lumineux et confidentiel au cœur de Mohammedia.',
  },
  {
    num: '04',
    title: 'Prise de contact fluide',
    desc: 'Échange immédiat par téléphone, WhatsApp ou via notre formulaire de consultation.',
  },
];
