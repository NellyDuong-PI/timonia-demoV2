// ─── TIMONIA — DONNÉES PROJETS ────────────────────────────────────────────────

const PROJETS = {
  achat: {
    id:    'achat',
    icon:  '🏠',
    label: 'Achat immobilier',
    color: 'accent',
    hero:  'Appartement T3 — Lyon 6e',
    sub:   'Budget 420 000 € · Primo-accédant · Mutation Veolia sept. 2025',
    timeline: [
      { date: 'Mai 2025',  label: 'Définition du projet & budget',       done: true,  icon: '🎯' },
      { date: 'Juin 2025', label: 'Recherche de biens & visites',         done: true,  icon: '🔍' },
      { date: 'Juin 2025', label: 'Offre d\'achat acceptée',              done: false, icon: '✍️', active: true },
      { date: 'Juil 2025', label: 'Compromis de vente signé',             done: false, icon: '📄' },
      { date: 'Août 2025', label: 'Obtention du financement',             done: false, icon: '💳' },
      { date: 'Sep 2025',  label: 'Acte de vente définitif',              done: false, icon: '🔑' },
      { date: 'Sep 2025',  label: 'Remise des clés & emménagement',       done: false, icon: '📦' },
    ],
    taches: [
      { cat: 'Préparation',   label: 'Définir critères & budget précis',               statut: 'fait',    cout: null, pce: true,  note: 'Fait avec l\'expert' },
      { cat: 'Préparation',   label: 'Simulation de prêt immobilier',                  statut: 'fait',    cout: 0,    pce: false, note: 'Inclus abonnement' },
      { cat: 'Recherche',     label: 'Sélection de biens ciblés',                      statut: 'fait',    cout: null, pce: true },
      { cat: 'Recherche',     label: 'Organisation & accompagnement des visites',       statut: 'delegue', cout: 290,  pce: true },
      { cat: 'Négociation',   label: 'Analyse du juste prix & négociation',             statut: null,      cout: 350,  pce: false },
      { cat: 'Financement',   label: 'Dossier courtier & comparaison banques',          statut: 'delegue', cout: 0,    pce: false, note: 'Gratuit — rémunéré par la banque' },
      { cat: 'Financement',   label: 'Demande PTZ (Prêt à Taux Zéro)',                 statut: null,      cout: 180,  pce: false },
      { cat: 'Financement',   label: 'Dossier MOBILI-PASS Action Logement',             statut: 'delegue', cout: 180,  pce: true },
      { cat: 'Juridique',     label: 'Relecture compromis de vente',                   statut: null,      cout: 220,  pce: false },
      { cat: 'Juridique',     label: 'Coordination notaire jusqu\'à l\'acte',           statut: null,      cout: 290,  pce: false },
      { cat: 'Administratif', label: 'Déclaration de changement d\'adresse',            statut: null,      cout: 60,   pce: false },
      { cat: 'Administratif', label: 'Transfert assurances & contrats',                 statut: null,      cout: 90,   pce: false },
    ],
    docs: [
      { icon: '💰', nom: 'Simulation MOBILI-PASS',           date: '05 juin 2025', statut: 'ok' },
      { icon: '📊', nom: 'Simulation PTZ 2025',              date: '07 juin 2025', statut: 'ok' },
      { icon: '🏠', nom: 'Sélection de biens — Lyon 3e/6e',  date: '07 juin 2025', statut: 'wait' },
      { icon: '📄', nom: 'Compromis de vente — à signer',    date: '—',            statut: 'wait' },
      { icon: '📋', nom: 'Fiche projet — Mutation Mercier',  date: '02 juin 2025', statut: 'ok' },
      { icon: '✅', nom: 'Guide mobilité Veolia × Timonia',  date: '01 juin 2025', statut: 'ok' },
    ],
  },

  renovation: {
    id:    'renovation',
    icon:  '🔧',
    label: 'Rénovation énergétique',
    color: 'gold',
    hero:  'Résidence principale — Audit passoire thermique',
    sub:   'DPE F → objectif B · Toulouse · Budget travaux estimé : 38 500 €',
    timeline: [
      { date: 'Jan 2025',  label: 'Audit énergétique réalisé (DPE F)',   done: true,  icon: '🔍' },
      { date: 'Fév 2025',  label: 'Dépôt dossier MaPrimeRénov\'',        done: true,  icon: '📋' },
      { date: 'Mar 2025',  label: 'Validation des aides — 14 200 €',     done: true,  icon: '✅' },
      { date: 'Avr 2025',  label: 'Isolation combles réalisée',          done: true,  icon: '🏚️' },
      { date: 'Juin 2025', label: 'Installation pompe à chaleur',        done: false, icon: '♻️', active: true },
      { date: 'Sep 2025',  label: 'Fenêtres double vitrage',             done: false, icon: '🪟' },
      { date: 'Nov 2025',  label: 'DPE final & bilan énergétique',       done: false, icon: '📊' },
    ],
    taches: [
      { cat: 'Diagnostic',  label: 'Audit énergétique complet (DPE)',               statut: 'fait',    cout: 0,   pce: false, note: 'Inclus abonnement' },
      { cat: 'Diagnostic',  label: 'Rapport passoire thermique détaillé',           statut: 'fait',    cout: null },
      { cat: 'Financement', label: 'Dossier MaPrimeRénov\' — montage complet',      statut: 'fait',    cout: 280, pce: false },
      { cat: 'Financement', label: 'Demande CEE (Certificats Économies Énergie)',   statut: 'fait',    cout: 180, pce: false },
      { cat: 'Financement', label: 'Éco-PTZ — prêt travaux à taux zéro',           statut: 'delegue', cout: 180, pce: false },
      { cat: 'Financement', label: 'Action Logement — aide travaux',                statut: null,      cout: 150, pce: false },
      { cat: 'Travaux',     label: 'Obtention & comparaison de 3 devis',           statut: 'delegue', cout: 190, pce: false },
      { cat: 'Travaux',     label: 'Sélection et contractualisation artisan RGE',  statut: null,      cout: 220, pce: false },
      { cat: 'Travaux',     label: 'Suivi chantier isolation combles',             statut: 'fait',    cout: 290, pce: false },
      { cat: 'Travaux',     label: 'Suivi chantier installation PAC',              statut: 'delegue', cout: 290, pce: false },
      { cat: 'Travaux',     label: 'Suivi chantier fenêtres double vitrage',       statut: null,      cout: 290, pce: false },
      { cat: 'Réception',   label: 'Réception des travaux & procès-verbal',         statut: null,      cout: 190, pce: false },
      { cat: 'Réception',   label: 'DPE final & valorisation du bien',              statut: null,      cout: 0,   pce: false, note: 'Inclus abonnement' },
    ],
    docs: [
      { icon: '🔍', nom: 'Audit Passoire Thermique',          date: '15 jan 2025',  statut: 'ok' },
      { icon: '📋', nom: 'Dossier MaPrimeRénov\' complet',    date: '28 fév 2025',  statut: 'ok' },
      { icon: '💰', nom: 'Attestation CEE validée',           date: '10 mars 2025', statut: 'ok' },
      { icon: '🏚️', nom: 'PV réception isolation combles',    date: '30 avr 2025',  statut: 'ok' },
      { icon: '♻️', nom: 'Devis installation PAC',            date: '05 juin 2025', statut: 'wait' },
      { icon: '📊', nom: 'DPE final — à réaliser',            date: '—',            statut: 'wait' },
    ],
  },

  location: {
    id:    'location',
    icon:  '🏘️',
    label: 'Mise en location',
    color: 'teal',
    hero:  'Appartement T2 — Paris 11e',
    sub:   'Première mise en location · Loyer cible : 1 250 €/mois · Loi ALUR',
    timeline: [
      { date: 'Avr 2025',  label: 'Décision de mise en location',            done: true,  icon: '💡' },
      { date: 'Mai 2025',  label: 'Diagnostics obligatoires réalisés',       done: true,  icon: '📋' },
      { date: 'Mai 2025',  label: 'Estimation du loyer de marché',           done: true,  icon: '💰' },
      { date: 'Juin 2025', label: 'Mise en ligne & sélection locataire',     done: false, icon: '📢', active: true },
      { date: 'Juil 2025', label: 'Signature bail & état des lieux entrée',  done: false, icon: '✍️' },
      { date: 'Juil 2025', label: 'Premier loyer perçu',                     done: false, icon: '🎉' },
    ],
    taches: [
      { cat: 'Préparation',  label: 'Estimation du loyer de marché',                   statut: 'fait',    cout: 0,   pce: false, note: 'Inclus abonnement' },
      { cat: 'Diagnostics',  label: 'DPE — Diagnostic de Performance Énergétique',    statut: 'fait',    cout: 120, pce: false },
      { cat: 'Diagnostics',  label: 'Diagnostic amiante & plomb',                      statut: 'fait',    cout: 180, pce: false },
      { cat: 'Diagnostics',  label: 'Diagnostic électricité & gaz',                    statut: 'fait',    cout: 150, pce: false },
      { cat: 'Marketing',    label: 'Photos professionnelles du logement',             statut: 'delegue', cout: 180, pce: false },
      { cat: 'Marketing',    label: 'Rédaction & diffusion annonce multi-portails',    statut: null,      cout: 120, pce: false },
      { cat: 'Sélection',    label: 'Tri des dossiers candidats & vérification',       statut: null,      cout: 190, pce: false },
      { cat: 'Juridique',    label: 'Rédaction bail conforme loi ALUR & Élan',         statut: null,      cout: 220, pce: false },
      { cat: 'Juridique',    label: 'Rédaction clause résolutoire & garant',           statut: null,      cout: 120, pce: false },
      { cat: 'Financement',  label: 'Demande LOCA-PASS Action Logement',               statut: null,      cout: 150, pce: false },
      { cat: 'Entrée',       label: 'État des lieux d\'entrée contradictoire',          statut: null,      cout: 160, pce: false },
      { cat: 'Entrée',       label: 'Inventaire & remise des clés',                    statut: null,      cout: 80,  pce: false },
      { cat: 'Gestion',      label: 'Mise en place quittances mensuelles',             statut: null,      cout: 90,  pce: false },
      { cat: 'Gestion',      label: 'Déclaration revenus fonciers (2044)',             statut: null,      cout: 180, pce: false },
    ],
    docs: [
      { icon: '📋', nom: 'DPE locatif — Paris 11e',            date: '10 mai 2025',  statut: 'ok' },
      { icon: '🔍', nom: 'Rapport amiante & plomb',            date: '12 mai 2025',  statut: 'ok' },
      { icon: '⚡', nom: 'Diag. électricité & gaz',            date: '12 mai 2025',  statut: 'ok' },
      { icon: '📸', nom: 'Photos professionnelles',            date: '05 juin 2025', statut: 'wait' },
      { icon: '✍️', nom: 'Bail type ALUR — à finaliser',       date: '—',            statut: 'wait' },
      { icon: '📋', nom: 'Checklist conformité locative',      date: '01 juin 2025', statut: 'ok' },
    ],
  },

  vente: {
    id:    'vente',
    icon:  '💰',
    label: 'Mise en vente',
    color: 'purple',
    hero:  'Appartement T4 — Bordeaux Chartrons',
    sub:   'Estimation : 385 000 € · Propriétaire depuis 8 ans · Plus-value à calculer',
    timeline: [
      { date: 'Mar 2025',  label: 'Décision de vendre & estimation',         done: true,  icon: '💡' },
      { date: 'Avr 2025',  label: 'Diagnostics obligatoires réalisés',       done: true,  icon: '📋' },
      { date: 'Mai 2025',  label: 'Mandat signé & annonces publiées',        done: true,  icon: '📢' },
      { date: 'Juin 2025', label: 'Visites & offres d\'achat',               done: false, icon: '🔍', active: true },
      { date: 'Juil 2025', label: 'Compromis de vente signé',                done: false, icon: '✍️' },
      { date: 'Sep 2025',  label: 'Acte définitif & remise des fonds',       done: false, icon: '🏦' },
    ],
    taches: [
      { cat: 'Estimation',  label: 'Estimation précise du prix de marché',           statut: 'fait',    cout: 0,   pce: false, note: 'Inclus abonnement' },
      { cat: 'Estimation',  label: 'Simulation plus-value immobilière',              statut: 'fait',    cout: 120, pce: false },
      { cat: 'Diagnostics', label: 'DPE vendeur (obligatoire avant annonce)',         statut: 'fait',    cout: 150, pce: false },
      { cat: 'Diagnostics', label: 'Audit amiante, plomb & termites',                statut: 'fait',    cout: 280, pce: false },
      { cat: 'Diagnostics', label: 'Diagnostic électricité, gaz & ERP',              statut: 'fait',    cout: 220, pce: false },
      { cat: 'Marketing',   label: 'Photos & visite virtuelle professionnelles',     statut: 'delegue', cout: 380, pce: false },
      { cat: 'Marketing',   label: 'Home staging & conseils valorisation',           statut: null,      cout: 290, pce: false },
      { cat: 'Marketing',   label: 'Diffusion annonce multi-portails premium',       statut: 'delegue', cout: 190, pce: false },
      { cat: 'Négociation', label: 'Analyse & négociation des offres reçues',        statut: null,      cout: 350, pce: false },
      { cat: 'Juridique',   label: 'Rédaction & relecture compromis de vente',        statut: null,      cout: 280, pce: false },
      { cat: 'Juridique',   label: 'Coordination notaire jusqu\'à l\'acte',           statut: null,      cout: 290, pce: false },
      { cat: 'Financier',   label: 'Remboursement anticipé crédit immobilier',        statut: null,      cout: 150, pce: false },
      { cat: 'Financier',   label: 'Optimisation fiscale plus-value',                statut: null,      cout: 280, pce: false },
    ],
    docs: [
      { icon: '💡', nom: 'Estimation du bien — Bordeaux',         date: '15 mars 2025', statut: 'ok' },
      { icon: '📊', nom: 'Simulation plus-value fiscale',         date: '20 mars 2025', statut: 'ok' },
      { icon: '📋', nom: 'DPE vendeur validé',                   date: '05 avr 2025',  statut: 'ok' },
      { icon: '🔍', nom: 'Rapport diagnostics complets',          date: '10 avr 2025',  statut: 'ok' },
      { icon: '📸', nom: 'Photos & visite virtuelle 360°',        date: '20 mai 2025',  statut: 'ok' },
      { icon: '✍️', nom: 'Compromis de vente — à signer',         date: '—',            statut: 'wait' },
    ],
  },
};

// State: taches statuts (mutable)
const STATE = {
  taches: {},
};

// Deep-copy taches from PROJETS into STATE
Object.keys(PROJETS).forEach(function (id) {
  STATE.taches[id] = PROJETS[id].taches.map(function (t, i) {
    return Object.assign({}, t, { id: i });
  });
});

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getColor(colorName) {
  const map = {
    accent: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#1e63f0',
    teal:   getComputedStyle(document.documentElement).getPropertyValue('--teal').trim()   || '#0ba592',
    gold:   getComputedStyle(document.documentElement).getPropertyValue('--gold').trim()   || '#c47a00',
    purple: getComputedStyle(document.documentElement).getPropertyValue('--purple').trim() || '#7c3aed',
    green:  getComputedStyle(document.documentElement).getPropertyValue('--green').trim()  || '#16a34a',
  };
  return map[colorName] || map.accent;
}

function getColorL(colorName) {
  const map = {
    accent: 'var(--accent-l)', teal: 'var(--teal-l)',
    gold: 'var(--gold-l)', purple: 'var(--purple-l)', green: 'var(--green-l)',
  };
  return map[colorName] || map.accent;
}

function getStats(projId) {
  const taches = STATE.taches[projId];
  const done    = taches.filter(t => t.statut === 'fait').length;
  const delegue = taches.filter(t => t.statut === 'delegue').length;
  const seul    = taches.filter(t => t.statut === 'seul').length;
  const total   = taches.length;
  const pct     = Math.round((done / total) * 100);
  const coutDelegue = taches.filter(t => t.statut === 'delegue' && !t.pce && t.cout > 0).reduce((a, t) => a + t.cout, 0);
  const coutCouvert = taches.filter(t => t.statut === 'delegue' && t.pce).reduce((a, t) => a + (t.cout || 0), 0);
  return { done, delegue, seul, total, pct, coutDelegue, coutCouvert };
}
