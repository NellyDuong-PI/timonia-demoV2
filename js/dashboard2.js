/* ─── dashboard2.js — Home in Love · Dashboard Boucliers ────────────────── */

const EXPERTS = {
  claire: { nom: 'Claire Dupont',   role: 'Experte Acquisition',      tel: '06 12 34 56 78', avatar: 'CD' },
  marc:   { nom: 'Marc Lefevre',    role: 'Expert Financement',        tel: '06 23 45 67 89', avatar: 'ML' },
  sophie: { nom: 'Sophie Arnaud',   role: 'Experte Location',          tel: '06 34 56 78 90', avatar: 'SA' },
  thomas: { nom: 'Thomas Renard',   role: 'Expert Rénovation',         tel: '06 45 67 89 01', avatar: 'TR' },
  julie:  { nom: 'Julie Martin',    role: 'Experte Mobilité Salariée', tel: '06 56 78 90 12', avatar: 'JM' },
};

/* ══ BOUCLIERS PAR PILIER ══════════════════════════════════════════════════
   statut livrable : 'active' | 'en_cours' | 'locked'
══════════════════════════════════════════════════════════════════════════ */
const BOUCLIERS = {

  vente: [
    { id:'financier', icon:'💰', titre:'Bouclier Financier',
      promesse:'Vous vendrez au bon prix, chiffres à l\'appui',
      livrables:[
        { nom:'Audit de Liquidité', desc:'Analyse DVF · stratégie prix Net Vendeur', statut:'active', date:'2026-02-01', fichier:'#' },
        { nom:'Guide de Négociation', desc:'Script et arguments pour défendre votre prix', statut:'active', date:'2026-02-20', fichier:'#' },
      ]},
    { id:'juridique', icon:'⚖️', titre:'Bouclier Juridique',
      promesse:'Votre dossier est béton, aucune objection possible',
      livrables:[
        { nom:'Dossier Bouclier Juridique', desc:'PV AG, carnet entretien, pré-analyse DPE', statut:'active', date:'2026-02-05', fichier:'#' },
      ]},
    { id:'marketing', icon:'📢', titre:'Bouclier Marketing',
      promesse:'Votre annonce attire les bons acheteurs',
      livrables:[
        { nom:'Kit Marketing Expert', desc:'Annonce IA + conseils mise en scène + photos', statut:'active', date:'2026-02-10', fichier:'#' },
        { nom:'Filtre de Scoring', desc:'Vérification solvabilité acheteurs avant visite', statut:'active', date:'2026-02-15', fichier:'#' },
      ]},
  ],

  achat: [
    { id:'juridique', icon:'⚖️', titre:'Bouclier Juridique',
      promesse:'Vous ne signerez rien sans qu\'on ait tout lu',
      livrables:[
        { nom:'Audit Pré-Offre', desc:'PV copropriété lus · travaux futurs identifiés', statut:'active', date:'2026-02-15', fichier:'#' },
        { nom:'Support à la Négociation', desc:'Lettre d\'intention d\'achat argumentée', statut:'en_cours', date:'2026-03-18', fichier:null },
      ]},
    { id:'technique', icon:'🔧', titre:'Bouclier Technique',
      promesse:'Aucun vice caché ni travaux imposés ne passera',
      livrables:[
        { nom:'Grille d\'Analyse de Visite', desc:'Tableau comparatif objectif des biens visités', statut:'active', date:'2026-02-01', fichier:'#' },
      ]},
    { id:'financier', icon:'💰', titre:'Bouclier Financier',
      promesse:'Votre offre est au bon prix, ni trop haut ni trop bas',
      livrables:[
        { nom:'Plan de Chasse', desc:'Zones à potentiel + alertes professionnelles', statut:'active', date:'2026-01-15', fichier:'#' },
        { nom:'Étude de Rentabilité / Budget', desc:'Frais notaire, travaux, projection revente', statut:'en_cours', date:'2026-03-20', fichier:null },
      ]},
  ],

  location: [
    { id:'juridique', icon:'⚖️', titre:'Bouclier Juridique',
      promesse:'Votre bail est conforme, aucune clause risquée',
      livrables:[
        { nom:'Audit de Conformité Locative', desc:'Diagnostics obligatoires · encadrement loyers', statut:'active', date:'2026-01-20', fichier:'#' },
        { nom:'Pack Contractuel', desc:'Bail Loi Alur personnalisé + guide état des lieux', statut:'en_cours', date:'2026-03-15', fichier:null },
      ]},
    { id:'candidats', icon:'🎯', titre:'Bouclier Candidats',
      promesse:'Seuls les locataires solvables passent le filtre',
      livrables:[
        { nom:'Scoring de Candidature', desc:'Authenticité des pièces + taux d\'effort vérifié', statut:'active', date:'2026-02-10', fichier:'#' },
        { nom:'Diffusion Stratégique', desc:'Annonce optimisée + meilleures plateformes', statut:'active', date:'2026-01-25', fichier:'#' },
      ]},
    { id:'financier', icon:'💰', titre:'Bouclier Financier',
      promesse:'Loyer optimisé, aides et fiscalité maîtrisées',
      livrables:[
        { nom:'Memo Gestion Zen', desc:'GLI, PNO, obligations fiscales — tout est prévu', statut:'locked', date:null, fichier:null },
      ]},
  ],

  renovation: [
    { id:'technique', icon:'🔧', titre:'Bouclier Technique',
      promesse:'Les travaux sont bien définis, aucune mauvaise surprise',
      livrables:[
        { nom:'Schéma Directeur de Mutation', desc:'Scénarios de transformation et faisabilité', statut:'active', date:'2026-02-05', fichier:'#' },
        { nom:'Audit Énergétique Stratégique', desc:'DPE + travaux prioritaires pour +2 classes', statut:'active', date:'2026-02-12', fichier:'#' },
      ]},
    { id:'financier', icon:'💰', titre:'Bouclier Financier',
      promesse:'Devis au juste prix, aides maximisées',
      livrables:[
        { nom:'Comparateur de Devis', desc:'Analyse critique des offres artisans', statut:'locked', date:null, fichier:null },
        { nom:'Dossier Financement & Aides', desc:'MaPrimeRenov CEE PTZ cartographies', statut:'locked', date:null, fichier:null },
      ]},
    { id:'pilotage', icon:'📅', titre:'Bouclier Pilotage',
      promesse:'Le chantier avance sans dérive de planning',
      livrables:[
        { nom:'Planning de Pilotage', desc:'Séquençage des travaux + points de vigilance', statut:'locked', date:null, fichier:null },
      ]},
  ],

  gestion: [
    { id:'juridique', icon:'⚖️', titre:'Bouclier Juridique',
      promesse:'Votre bail est béton, aucune mauvaise surprise',
      livrables:[
        { nom:'Bail Loi Alur vérifié', desc:'Toutes les clauses conformes · aucun risque', statut:'active', date:'2026-04-20', fichier:'#' },
        { nom:'Règlement de copropriété', desc:'Usage locatif confirmé · restrictions identifiées', statut:'active', date:'2026-04-22', fichier:'#' },
      ]},
    { id:'candidats', icon:'🎯', titre:'Bouclier Locataire',
      promesse:'Seul le locataire parfait entre dans votre bien',
      livrables:[
        { nom:'Scoring de Candidature', desc:'Solvabilité vérifiée · taux effort 28% · CDI confirmé', statut:'active', date:'2026-05-01', fichier:'#' },
        { nom:'Garanties activées', desc:'GLI souscrite · caution analysée', statut:'en_cours', date:'2026-05-10', fichier:null },
      ]},
    { id:'rendement', icon:'💰', titre:'Bouclier Rendement',
      promesse:'Votre cash-flow est optimisé et sécurisé',
      livrables:[
        { nom:'Optimisation Fiscale LMNP', desc:'Statut LMNP conseillé · amortissement calculé', statut:'active', date:'2026-04-25', fichier:'#' },
        { nom:'Quittancement automatique', desc:'Loyers suivis · rappels automatiques', statut:'en_cours', date:'2026-05-15', fichier:null },
      ]},
  ],

  mobilite: [
    { id:'secteur', icon:'📍', titre:'Bouclier Secteur',
      promesse:'Vous vous installez dans le bon quartier',
      livrables:[
        { nom:'Expertise Secteur', desc:'Quartiers analysés selon temps de trajet et services', statut:'active', date:'2026-03-01', fichier:'#' },
        { nom:'Sélection de Biens Qualifiés', desc:'Tri quotidien selon vos critères stricts', statut:'en_cours', date:'2026-03-20', fichier:null },
      ]},
    { id:'dossier', icon:'📋', titre:'Bouclier Dossier',
      promesse:'Votre dossier passe en priorité partout',
      livrables:[
        { nom:'Dossier Locataire "Top du Panier"', desc:'Optimisation solvabilité pour passer en tête', statut:'active', date:'2026-03-05', fichier:'#' },
      ]},
    { id:'rapidite', icon:'⚡', titre:'Bouclier Rapidité',
      promesse:'Installé en 30 jours, sans rien oublier',
      livrables:[
        { nom:'Hotline Signature', desc:'Relecture bail + assistance assurance habitation', statut:'locked', date:null, fichier:null },
        { nom:'Kit Installation', desc:'Déménageurs + transfert contrats énergie', statut:'locked', date:null, fichier:null },
      ]},
  ],
};

/* ══ PROJETS PAR UTILISATEUR ═════════════════════════════════════════════ */
const PROJETS_BY_USER = {
  'thomas@demo.fr': [{ id:'thomas-achat', titre:'Pack Chasseur Assisté', pilier:'achat', ville:'Bordeaux', offre:'copilote', expert:'claire', dateDebut:'2026-01-10', dateFin:'2026-06-30', valeurProtegee:{ montant:8500, label:'économisés sur le prix négocié' }, prochaine:{ label:'Étude de Rentabilité', date:'2026-03-20' } }],
  'sophie@demo.fr': [{ id:'sophie-loc',   titre:'Pack Bailleur Sécurisé', pilier:'location', ville:'Lyon', offre:'copilote', expert:'sophie', dateDebut:'2026-01-15', dateFin:'2026-04-30', valeurProtegee:{ montant:1800, label:'économisés vs agence classique' }, prochaine:{ label:'Pack Contractuel', date:'2026-03-15' } }],
  'marie@demo.fr':  [{ id:'marie-loc',    titre:'Pack Bailleur Sécurisé', pilier:'location', ville:'Paris', offre:'copilote', expert:'sophie', dateDebut:'2026-02-20', dateFin:'2026-05-31', valeurProtegee:{ montant:1400, label:'économisés (1 mois agence évité)' }, prochaine:{ label:'Scoring Candidature', date:'2026-03-25' } }],
  'david@demo.fr':  [{ id:'david-vente',  titre:'Pack Vendeur Serein',    pilier:'vente', ville:'Toulouse', offre:'copilote', expert:'thomas', dateDebut:'2025-11-01', dateFin:'2026-03-31', valeurProtegee:{ montant:14000, label:'de commission agence évités' }, prochaine:{ label:'Acte authentique', date:'2026-03-31' } }],
  'pierre@demo.fr': [{ id:'pierre-renov', titre:'Pack Maître d\'Ouvrage', pilier:'renovation', ville:'Grenoble', offre:'diagnostic', expert:'thomas', dateDebut:'2026-02-01', dateFin:'2026-08-31', valeurProtegee:{ montant:12000, label:'des aides potentielles identifiées' }, prochaine:{ label:'Décision Co-Pilote', date:'2026-03-20' } }],
  'invest@demo.fr': [
    {
      id: 'lucas-achat', titre: 'Phase 1 · Acquisition', pilier: 'achat',
      ville: 'Grenoble', offre: 'copilote', expert: 'thomas',
      dateDebut: '2025-10-01', dateFin: '2026-01-15',
      investGroup: 'lucas-grenoble', investPhase: 1, investTotal: 3, investDone: true,
      valeurProtegee: { montant: 22000, label: 'économisés (bien décoté + négociation)' },
      prochaine: { label: 'Phase 2 démarrée', date: '2026-01-20' },
    },
    {
      id: 'lucas-renov', titre: 'Phase 2 · Rénovation', pilier: 'renovation',
      ville: 'Grenoble', offre: 'copilote', expert: 'thomas',
      dateDebut: '2026-01-20', dateFin: '2026-05-30',
      investGroup: 'lucas-grenoble', investPhase: 2, investTotal: 3, investDone: false,
      valeurProtegee: { montant: 19500, label: 'Aides MaPrimeRenov + CEE obtenues' },
      prochaine: { label: 'Réception chantier', date: '2026-05-15' },
    },
    {
      id: 'lucas-gestion', titre: 'Phase 3 · Gestion Locative', pilier: 'gestion',
      ville: 'Grenoble', offre: 'copilote', expert: 'sophie',
      dateDebut: '2026-06-01', dateFin: null,
      investGroup: 'lucas-grenoble', investPhase: 3, investTotal: 3, investDone: false, investLocked: true,
      valeurProtegee: { montant: 1100, label: '€/mois de loyer estimé' },
      prochaine: { label: 'Disponible après rénovation', date: '2026-06-01' },
    },
  ],
  'julie@demo.fr':  [{ id:'julie-mob',    titre:'Pack Relocation',        pilier:'mobilite', ville:'Nantes', offre:'diagnostic', expert:'julie', dateDebut:'2026-03-01', dateFin:'2026-05-15', valeurProtegee:{ montant:600, label:'des aides CAF débloquées' }, prochaine:{ label:'Sélection de Biens', date:'2026-03-22' } }],
};

/* ══ ÉTAT ════════════════════════════════════════════════════════════════ */
let currentUser = null, currentProjet = null, userProjets = [];

document.addEventListener('DOMContentLoaded', () => {
  currentUser = authRequire();
  if (!currentUser) return;
  if (currentUser.role === 'mandataire' || currentUser.role === 'admin') { window.location.href = 'mandataire.html'; return; }
  setupTheme();
  userProjets = PROJETS_BY_USER[currentUser.email] || [];
  renderNav(); renderSidebar();
  if (userProjets.length) selectProjet(userProjets[0]);
});

/* ══ THÈME ═══════════════════════════════════════════════════════════════ */
function setupTheme() {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('hil_theme') || 'light';
  document.body.className = saved;
  btn.textContent = saved === 'dark' ? '☀️' : '🌙';
  btn.addEventListener('click', () => {
    const next = document.body.classList.contains('dark') ? 'light' : 'dark';
    document.body.className = next; localStorage.setItem('hil_theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

/* ══ NAVBAR ══════════════════════════════════════════════════════════════ */
function renderNav() {
  document.getElementById('navName').textContent = currentUser.prenom + ' ' + currentUser.nom;
  document.getElementById('navAvatar').textContent = currentUser.avatar;
  const c = document.getElementById('navCompany');
  if (currentUser.entreprise) { c.textContent = currentUser.entreprise; c.style.display = ''; }
  if (currentUser.partenaire) document.getElementById('navPartnerBadge').style.display = 'inline-flex';
}

/* ══ SIDEBAR ═════════════════════════════════════════════════════════════ */
const PILIER_ICONS = { vente:'💰', achat:'🔑', location:'🏠', renovation:'🔨', mobilite:'🚀', gestion:'🏘️', investissement:'📈' };
const OFFRE_COLORS = { diagnostic:'#3b82f6', copilote:'#0ba592', delegation:'#c47a00' };
const OFFRE_LABELS = { diagnostic:'Diagnostic', copilote:'Co-Pilote', delegation:'Délégation' };

function renderSidebar() {
  document.getElementById('sidebarUserName').textContent = currentUser.prenom + ' ' + currentUser.nom;
  const list = document.getElementById('sidebarProjets');
  list.innerHTML = '';
  userProjets.forEach(p => {
    const color = OFFRE_COLORS[p.offre] || '#6b7a99';
    const div = document.createElement('div');
    div.className = 'sidebar-proj-item'; div.dataset.id = p.id;
    if (p.investLocked) div.classList.add('locked');
    div.innerHTML = `
      <div class="spj-icon">${p.investLocked ? '🔒' : (PILIER_ICONS[p.pilier]||'📋')}</div>
      <div class="spj-info">
        <div class="spj-titre">${p.ville}${p.investPhase ? ' · Phase '+p.investPhase+'/'+p.investTotal : ''}</div>
        <div class="spj-type">${p.titre}</div>
      </div>
      <div class="spj-badge" style="background:${color}20;color:${color}">${p.investLocked ? 'Verrouillé' : (OFFRE_LABELS[p.offre]||p.offre)}</div>`;
    div.addEventListener('click', () => selectProjet(p));
    list.appendChild(div);
  });
}

function selectProjet(p) {
  currentProjet = p;
  document.querySelectorAll('.sidebar-proj-item').forEach(el => el.classList.toggle('active', el.dataset.id === p.id));
  renderMain(p);
}



/* ══ PARCOURS PAR PROJET ═════════════════════════════════════════════════
   statut : 'done' | 'current' | 'next' | 'future'
   acteur : 'cabinet' | 'client' | 'ensemble'
══════════════════════════════════════════════════════════════════════════ */
const PARCOURS_DATA = {

  'thomas-achat': [
    { statut:'done',    date:'2026-01-10', acteur:'cabinet',  icon:'🗺️', titre:'Plan de chasse défini',         desc:'23 alertes professionnelles activées · zones à potentiel validées',    bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2026-01-28', acteur:'client',   icon:'🏠', titre:'Premières visites qualifiées',   desc:'Grille d\'analyse remise · 4 biens comparés objectivement',            bouclier:'🔧 Bouclier Technique' },
    { statut:'done',    date:'2026-02-15', acteur:'cabinet',  icon:'⚖️', titre:'Audit Pré-Offre remis',          desc:'18 000 € de travaux détectés · ravalement 2026 identifié',            bouclier:'⚖️ Bouclier Juridique' },
    { statut:'done',    date:'2026-03-01', acteur:'client',   icon:'🔍', titre:'Bien identifié — Bordeaux Nord', desc:'Bien présélectionné · dossier vendeur reçu',                          bouclier:null },
    { statut:'current', date:'2026-03-20', acteur:'cabinet',  icon:'💶', titre:'Étude de Rentabilité',           desc:'Frais notaire · estimation travaux · projection revente en cours',    bouclier:'💰 Bouclier Financier' },
    { statut:'next',    date:'2026-04-01', acteur:'ensemble', icon:'✍️', titre:'Offre d\'achat',                 desc:'On rédige l\'offre ensemble · vous la signez · on argumente',         bouclier:'⚖️ Bouclier Juridique' },
    { statut:'future',  date:'2026-04-15', acteur:'cabinet',  icon:'📋', titre:'Compromis de vente',             desc:'Le Cabinet est présent · vous ne signez pas seul',                    bouclier:'⚖️ Bouclier Juridique' },
    { statut:'future',  date:'2026-06-30', acteur:'cabinet',  icon:'🔑', titre:'Acte authentique — Les clés !', desc:'Coordination notaire · Le Cabinet présent jusqu\'au bout',             bouclier:null },
  ],

  'sophie-loc': [
    { statut:'done',    date:'2026-01-15', acteur:'cabinet',  icon:'🔬', titre:'Audit de conformité locative',   desc:'Diagnostics vérifiés · encadrement loyers calculé · loyer maxi 681 €',bouclier:'⚖️ Bouclier Juridique' },
    { statut:'done',    date:'2026-01-25', acteur:'cabinet',  icon:'📢', titre:'Annonce publiée',                desc:'Rédigée sur SeLoger, PAP, Leboncoin · 12 contacts reçus',              bouclier:'🎯 Bouclier Candidats' },
    { statut:'done',    date:'2026-02-10', acteur:'cabinet',  icon:'🎯', titre:'Scoring des candidats',          desc:'8 dossiers reçus · 2 candidats retenus à 85+/100',                    bouclier:'🎯 Bouclier Candidats' },
    { statut:'current', date:'2026-03-15', acteur:'ensemble', icon:'📑', titre:'Pack Contractuel',               desc:'Bail Loi Alur personnalisé en cours · état des lieux à planifier',    bouclier:'⚖️ Bouclier Juridique' },
    { statut:'next',    date:'2026-03-25', acteur:'client',   icon:'🤝', titre:'Signature du bail',              desc:'Vous signez · le Cabinet valide chaque clause avant',                 bouclier:'⚖️ Bouclier Juridique' },
    { statut:'future',  date:'2026-04-30', acteur:'cabinet',  icon:'🛡️', titre:'Remise des clés + Memo Zen',    desc:'Checklist assurances PNO/GLI · obligations fiscales',                 bouclier:'💰 Bouclier Financier' },
  ],

  'david-vente': [
    { statut:'done',    date:'2025-11-01', acteur:'cabinet',  icon:'📊', titre:'Audit de Liquidité',             desc:'Prix DVF : 3 280 €/m² · valeur estimée 311 600 € · stratégie définie',bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2025-11-20', acteur:'cabinet',  icon:'⚖️', titre:'Dossier Bouclier Juridique',     desc:'PV AG lus · carnet entretien OK · DPE pré-analysé',                  bouclier:'⚖️ Bouclier Juridique' },
    { statut:'done',    date:'2025-12-05', acteur:'cabinet',  icon:'📸', titre:'Annonce publiée',                desc:'Annonce IA + conseils photos · diffusion multi-plateformes',          bouclier:'📢 Bouclier Marketing' },
    { statut:'done',    date:'2026-01-10', acteur:'client',   icon:'🚪', titre:'12 visites réalisées',           desc:'Acheteurs pré-scorés · aucun "touriste" · 3 offres reçues',           bouclier:'📢 Bouclier Marketing' },
    { statut:'done',    date:'2026-02-03', acteur:'client',   icon:'💬', titre:'Offre acceptée — 315 000 €',    desc:'Négociation assistée · prix défendu · Net Vendeur : 308 500 €',       bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2026-02-28', acteur:'ensemble', icon:'📋', titre:'Compromis signé',               desc:'Le Cabinet était présent · toutes les clauses vérifiées',             bouclier:'⚖️ Bouclier Juridique' },
    { statut:'current', date:'2026-03-31', acteur:'cabinet',  icon:'🔑', titre:'Acte authentique',              desc:'Coordination notaire en cours · rendez-vous fixé le 31 mars',         bouclier:'⚖️ Bouclier Juridique' },
  ],

  'pierre-renov': [
    { statut:'done',    date:'2026-02-01', acteur:'cabinet',  icon:'🔬', titre:'Audit Énergétique',              desc:'DPE G analysé · passage en C possible · investissement : 14 800 €',  bouclier:'🔧 Bouclier Technique' },
    { statut:'done',    date:'2026-02-12', acteur:'cabinet',  icon:'🗺️', titre:'Schéma Directeur remis',         desc:'2 scénarios de mutation · ROI calculé · gain net : +30 000 €',        bouclier:'🔧 Bouclier Technique' },
    { statut:'current', date:'2026-03-20', acteur:'client',   icon:'🤔', titre:'Décision Co-Pilote',             desc:'Vous choisissez votre niveau d\'accompagnement pour la suite',         bouclier:null },
    { statut:'next',    date:'2026-04-15', acteur:'cabinet',  icon:'💶', titre:'Dossier Aides (Co-Pilote)',      desc:'MaPrimeRenov 8 400 € · CEE 2 100 € · Eco-PTZ 50 000 € à 0%',       bouclier:'💰 Bouclier Financier' },
    { statut:'future',  date:'2026-05-01', acteur:'cabinet',  icon:'⚖️', titre:'Comparateur de Devis',          desc:'Analyse critique des offres artisans · prix du marché vérifiés',      bouclier:'💰 Bouclier Financier' },
    { statut:'future',  date:'2026-05-15', acteur:'ensemble', icon:'🔨', titre:'Démarrage des travaux',          desc:'Planning de pilotage · points de vigilance · réception encadrée',    bouclier:'🔧 Bouclier Technique' },
    { statut:'future',  date:'2026-08-31', acteur:'cabinet',  icon:'✅', titre:'Réception du chantier',          desc:'Levée des réserves · DPE C validé · bien repositionné',               bouclier:'🔧 Bouclier Technique' },
  ],

  'marie-loc': [
    { statut:'done',    date:'2026-02-20', acteur:'cabinet',  icon:'🔬', titre:'Audit de Conformité',            desc:'Diagnostics OK · encadrement loyers Paris 11e : 18,5 €/m²',          bouclier:'⚖️ Bouclier Juridique' },
    { statut:'current', date:'2026-03-05', acteur:'cabinet',  icon:'📢', titre:'Diffusion annonce',              desc:'Annonce publiée · 12 contacts en 48h · scoring en cours',             bouclier:'🎯 Bouclier Candidats' },
    { statut:'next',    date:'2026-03-25', acteur:'cabinet',  icon:'🎯', titre:'Sélection du locataire',         desc:'2 candidats retenus · dossiers complets · recommandation Cabinet',    bouclier:'🎯 Bouclier Candidats' },
    { statut:'future',  date:'2026-04-10', acteur:'ensemble', icon:'📑', titre:'Signature du bail',              desc:'Bail personnalisé · état des lieux · remise des clés',                bouclier:'⚖️ Bouclier Juridique' },
    { statut:'future',  date:'2026-05-31', acteur:'cabinet',  icon:'🛡️', titre:'Memo Gestion Zen',              desc:'Assurances PNO/GLI · obligations fiscales · tout est prévu',          bouclier:'💰 Bouclier Financier' },
  ],


  'lucas-achat': [
    { statut:'done',    date:'2025-10-01', acteur:'cabinet',  icon:'🔬', titre:'Audit de Rentabilité Potentielle', desc:'Studio 28m² · DPE G · Prix marché 185k€ · Potentiel après travaux : 265k€',  bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2025-10-15', acteur:'cabinet',  icon:'⚖️', titre:'Audit Pré-Offre',                  desc:'PV AG lus · ravalement prévu 2027 (3 500€ quote-part) · déduit du prix',       bouclier:'⚖️ Bouclier Juridique' },
    { statut:'done',    date:'2025-10-28', acteur:'ensemble', icon:'✍️', titre:'Offre négociée — 178 000 €',       desc:'Prix affiché 198 000€ · négociation -20 000€ · argument DPE G utilisé',         bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2025-11-20', acteur:'cabinet',  icon:'📋', titre:'Compromis signé',                  desc:'Le Cabinet présent · toutes les clauses vérifiées · conditions suspensives OK', bouclier:'⚖️ Bouclier Juridique' },
    { statut:'done',    date:'2026-01-15', acteur:'cabinet',  icon:'🔑', titre:'Acte authentique — Clés obtenues', desc:'Coordination notaire · achat finalisé · Phase 2 débloquée',                    bouclier:null },
  ],

  'lucas-renov': [
    { statut:'done',    date:'2026-01-20', acteur:'cabinet',  icon:'🔬', titre:'Schéma Directeur de Mutation',     desc:'Scénario retenu : isolation + PAC + VMC · passage DPE G→C · coût : 18 500€',  bouclier:'🔧 Bouclier Technique' },
    { statut:'done',    date:'2026-02-01', acteur:'cabinet',  icon:'💶', titre:'Dossier Aides validé',             desc:'MaPrimeRenov 12 000€ · CEE 2 800€ · Eco-PTZ accordé · reste à charge 3 700€', bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2026-02-15', acteur:'cabinet',  icon:'⚖️', titre:'Comparateur de Devis',             desc:'3 devis analysés · artisan retenu à 18 200€ · économie vs devis haut : 4 100€', bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2026-03-01', acteur:'client',   icon:'🔨', titre:'Démarrage chantier',               desc:'Artisans coordonnés · planning validé · vous suivez l avancement',              bouclier:'🔧 Bouclier Technique' },
    { statut:'current', date:'2026-05-15', acteur:'cabinet',  icon:'✅', titre:'Réception du chantier',            desc:'Levée des réserves en cours · DPE C validé · bien prêt à la location',          bouclier:'🔧 Bouclier Technique' },
    { statut:'next',    date:'2026-06-01', acteur:'cabinet',  icon:'🏘️', titre:'Phase 3 — Gestion débloquée',     desc:'Mise en location immédiate · locataire ciblé · rendement net estimé 7,2%',     bouclier:null },
  ],

  'lucas-gestion': [
    { statut:'future',  date:'2026-06-01', acteur:'cabinet',  icon:'📢', titre:'Mise en location',                 desc:'Annonce optimisée · diffusion ciblée · scoring candidats activé',               bouclier:'🎯 Bouclier Locataire' },
    { statut:'future',  date:'2026-06-15', acteur:'cabinet',  icon:'🎯', titre:'Sélection du locataire',           desc:'Scoring solvabilité · GLI souscrite · dossier béton',                           bouclier:'🎯 Bouclier Locataire' },
    { statut:'future',  date:'2026-07-01', acteur:'ensemble', icon:'📑', titre:'Bail signé',                       desc:'Bail LMNP vérifié · état des lieux · premier loyer encaissé',                   bouclier:'⚖️ Bouclier Juridique' },
    { statut:'future',  date:'2026-07-15', acteur:'cabinet',  icon:'💰', titre:'Optimisation Fiscale LMNP',        desc:'Amortissement calculé · liasse fiscale préparée · économie impôt estimée',      bouclier:'💰 Bouclier Rendement' },
    { statut:'future',  date:'2026-09-01', acteur:'cabinet',  icon:'📊', titre:'Premier bilan de rendement',       desc:'Cash-flow réel vs prévisionnel · ajustements si nécessaire',                     bouclier:'💰 Bouclier Rendement' },
  ],

  'julie-mob': [
    { statut:'done',    date:'2026-03-01', acteur:'cabinet',  icon:'📍', titre:'Analyse Secteur',                desc:'3 quartiers Nantes analysés · Hauts-Pavés recommandé · 18 min trajet',bouclier:'📍 Bouclier Secteur' },
    { statut:'current', date:'2026-03-15', acteur:'cabinet',  icon:'📋', titre:'Dossier "Top du Panier"',        desc:'Optimisation dossier CDD · garant structuré · présentation soignée', bouclier:'📋 Bouclier Dossier' },
    { statut:'next',    date:'2026-03-22', acteur:'cabinet',  icon:'🔍', titre:'Sélection de biens',             desc:'Tri quotidien · alertes activées · visites pré-qualifiées',           bouclier:'📍 Bouclier Secteur' },
    { statut:'future',  date:'2026-04-05', acteur:'client',   icon:'🚪', titre:'Vos visites',                    desc:'Vous visitez · le Cabinet analyse chaque bien avant votre visite',    bouclier:'📋 Bouclier Dossier' },
    { statut:'future',  date:'2026-04-15', acteur:'ensemble', icon:'✍️', titre:'Signature bail',                 desc:'Relecture complète · aucune clause risquée ne passe',                 bouclier:'⚡ Bouclier Rapidité' },
    { statut:'future',  date:'2026-05-01', acteur:'cabinet',  icon:'📦', titre:'Kit Installation',              desc:'Déménageurs · transfert énergie · tout est coordonné',                bouclier:'⚡ Bouclier Rapidité' },
  ],
};

/* ══ MESSAGES DEMO DATA ══════════════════════════════════════════════════ */
const MESSAGES_DATA = {
  'thomas-achat': [
    { from:'expert', text:'Bonjour Thomas ! J\'ai bien reçu votre dossier. L\'Audit Pré-Offre pour le bien rue Gambetta est en cours — je lis les PV d\'AG ce soir.', time:'10:32', date:'Hier' },
    { from:'client', text:'Merci Claire ! Le vendeur presse un peu pour une réponse avant vendredi. On peut accélérer ?', time:'11:15', date:'Hier' },
    { from:'expert', text:'Bien noté. J\'ai trouvé un appel de fonds exceptionnel voté en AG 2024 : ravalement prévu en 2026 pour ~18 000 €. On va l\'intégrer dans la négociation.', time:'18:47', date:'Hier' },
    { from:'expert', text:'Rapport complet remis dans vos boucliers. Recommandation : faire une offre à 302 000 € en mentionnant le ravalement. Vous économisez ~15 000 €.', time:'09:04', date:'Aujourd\'hui' },
    { from:'client', text:'Incroyable, je n\'aurais jamais vu ça seul. Je fais l\'offre aujourd\'hui.', time:'09:31', date:'Aujourd\'hui' },
  ],
  'sophie-loc': [
    { from:'expert', text:'Sophie, j\'ai vérifié l\'encadrement des loyers pour votre bien à Lyon 3e. Le loyer de référence majoré est 14,2 €/m². Votre bien de 48m² : plafond à 681 €/mois.', time:'14:20', date:'Il y a 3 jours' },
    { from:'client', text:'D\'accord, et le DPE E est-ce que ça bloque la mise en location ?', time:'15:02', date:'Il y a 3 jours' },
    { from:'expert', text:'Non, le DPE E est encore autorisé à la location jusqu\'en 2034. En revanche je vous conseille de l\'indiquer clairement dans l\'annonce — les candidats honnêtes préfèrent la transparence.', time:'15:45', date:'Il y a 3 jours' },
    { from:'client', text:'Parfait merci ! Et pour le scoring des candidats, comment ça marche ?', time:'09:10', date:'Aujourd\'hui' },
    { from:'expert', text:'Je vous envoie le lien d\'accès au module scoring aujourd\'hui. Chaque candidat uploadera ses pièces, je les vérifie et vous donne un score sur 100 avec ma recommandation.', time:'10:33', date:'Aujourd\'hui' },
  ],
  'david-vente': [
    { from:'expert', text:'David, l\'Audit de Liquidité est terminé. Prix de marché DVF sur Toulouse Sud : 3 280 €/m² médian. Votre bien 95m² → valeur de marché 311 600 €.', time:'16:00', date:'Il y a 5 jours' },
    { from:'client', text:'L\'agence m\'avait dit 340 000 €... c\'est beaucoup plus ?', time:'16:42', date:'Il y a 5 jours' },
    { from:'expert', text:'L\'agence a gonflé pour avoir le mandat — pratique courante. Si on affiche 340k, le bien ne se vend pas. On affiche 318k, on reçoit plus d\'offres et on négocie moins.', time:'17:15', date:'Il y a 5 jours' },
    { from:'client', text:'Compromis signé hier à 315 000 € ! Merci Thomas.', time:'08:20', date:'Aujourd\'hui' },
    { from:'expert', text:'Excellent résultat ! Net vendeur après frais : 308 500 €. Acte authentique le 31 mars, je coordonne avec votre notaire.', time:'09:00', date:'Aujourd\'hui' },
  ],
  'pierre-renov': [
    { from:'expert', text:'Pierre, l\'Audit Énergétique est remis. Votre DPE G → passage en C possible avec isolation combles + pompe à chaleur. Investissement estimé : 14 800 €.', time:'11:00', date:'Il y a 2 jours' },
    { from:'client', text:'Et les aides disponibles ?', time:'11:30', date:'Il y a 2 jours' },
    { from:'expert', text:'MaPrimeRenov : 8 400 €. CEE : 2 100 €. Eco-PTZ possible : 50 000 € à 0%. Votre reste à charge réel : ~4 300 €. ROI en 4 ans.', time:'14:00', date:'Il y a 2 jours' },
    { from:'client', text:'C\'est bluffant. Comment passer en Co-Pilote pour que vous pilotiez les artisans ?', time:'16:00', date:'Hier' },
  ],
  'marie-loc': [
    { from:'expert', text:'Marie, votre annonce est en ligne sur SeLoger, PAP et Leboncoin. 12 contacts en 48h — je filtre les candidats.', time:'10:00', date:'Hier' },
    { from:'client', text:'Super ! Il y a des profils intéressants ?', time:'10:30', date:'Hier' },
    { from:'expert', text:'2 candidats passent le scoring à 85+/100. Je vous envoie leurs dossiers complets avec ma recommandation d\'ici demain matin.', time:'11:00', date:'Hier' },
  ],

  'lucas-achat': [
    { statut:'done',    date:'2025-10-01', acteur:'cabinet',  icon:'🔬', titre:'Audit de Rentabilité Potentielle', desc:'Studio 28m² · DPE G · Prix marché 185k€ · Potentiel après travaux : 265k€',  bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2025-10-15', acteur:'cabinet',  icon:'⚖️', titre:'Audit Pré-Offre',                  desc:'PV AG lus · ravalement prévu 2027 (3 500€ quote-part) · déduit du prix',       bouclier:'⚖️ Bouclier Juridique' },
    { statut:'done',    date:'2025-10-28', acteur:'ensemble', icon:'✍️', titre:'Offre négociée — 178 000 €',       desc:'Prix affiché 198 000€ · négociation -20 000€ · argument DPE G utilisé',         bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2025-11-20', acteur:'cabinet',  icon:'📋', titre:'Compromis signé',                  desc:'Le Cabinet présent · toutes les clauses vérifiées · conditions suspensives OK', bouclier:'⚖️ Bouclier Juridique' },
    { statut:'done',    date:'2026-01-15', acteur:'cabinet',  icon:'🔑', titre:'Acte authentique — Clés obtenues', desc:'Coordination notaire · achat finalisé · Phase 2 débloquée',                    bouclier:null },
  ],

  'lucas-renov': [
    { statut:'done',    date:'2026-01-20', acteur:'cabinet',  icon:'🔬', titre:'Schéma Directeur de Mutation',     desc:'Scénario retenu : isolation + PAC + VMC · passage DPE G→C · coût : 18 500€',  bouclier:'🔧 Bouclier Technique' },
    { statut:'done',    date:'2026-02-01', acteur:'cabinet',  icon:'💶', titre:'Dossier Aides validé',             desc:'MaPrimeRenov 12 000€ · CEE 2 800€ · Eco-PTZ accordé · reste à charge 3 700€', bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2026-02-15', acteur:'cabinet',  icon:'⚖️', titre:'Comparateur de Devis',             desc:'3 devis analysés · artisan retenu à 18 200€ · économie vs devis haut : 4 100€', bouclier:'💰 Bouclier Financier' },
    { statut:'done',    date:'2026-03-01', acteur:'client',   icon:'🔨', titre:'Démarrage chantier',               desc:'Artisans coordonnés · planning validé · vous suivez l avancement',              bouclier:'🔧 Bouclier Technique' },
    { statut:'current', date:'2026-05-15', acteur:'cabinet',  icon:'✅', titre:'Réception du chantier',            desc:'Levée des réserves en cours · DPE C validé · bien prêt à la location',          bouclier:'🔧 Bouclier Technique' },
    { statut:'next',    date:'2026-06-01', acteur:'cabinet',  icon:'🏘️', titre:'Phase 3 — Gestion débloquée',     desc:'Mise en location immédiate · locataire ciblé · rendement net estimé 7,2%',     bouclier:null },
  ],

  'lucas-gestion': [
    { statut:'future',  date:'2026-06-01', acteur:'cabinet',  icon:'📢', titre:'Mise en location',                 desc:'Annonce optimisée · diffusion ciblée · scoring candidats activé',               bouclier:'🎯 Bouclier Locataire' },
    { statut:'future',  date:'2026-06-15', acteur:'cabinet',  icon:'🎯', titre:'Sélection du locataire',           desc:'Scoring solvabilité · GLI souscrite · dossier béton',                           bouclier:'🎯 Bouclier Locataire' },
    { statut:'future',  date:'2026-07-01', acteur:'ensemble', icon:'📑', titre:'Bail signé',                       desc:'Bail LMNP vérifié · état des lieux · premier loyer encaissé',                   bouclier:'⚖️ Bouclier Juridique' },
    { statut:'future',  date:'2026-07-15', acteur:'cabinet',  icon:'💰', titre:'Optimisation Fiscale LMNP',        desc:'Amortissement calculé · liasse fiscale préparée · économie impôt estimée',      bouclier:'💰 Bouclier Rendement' },
    { statut:'future',  date:'2026-09-01', acteur:'cabinet',  icon:'📊', titre:'Premier bilan de rendement',       desc:'Cash-flow réel vs prévisionnel · ajustements si nécessaire',                     bouclier:'💰 Bouclier Rendement' },
  ],

  'julie-mob': [
    { from:'expert', text:'Julie, bienvenue ! J\'ai analysé 3 secteurs à Nantes selon votre lieu de travail déclaré. Le quartier Hauts-Pavés est le meilleur compromis trajet/loyer.', time:'14:00', date:'Aujourd\'hui' },
    { from:'client', text:'Et pour mon dossier, j\'ai un CDD. Est-ce que ça bloque ?', time:'14:30', date:'Aujourd\'hui' },
    { from:'expert', text:'Un CDD seul peut bloquer en marché tendu. Mais avec un garant solide et un dossier bien présenté, on passe. Je vous prépare un dossier "Top du Panier" qui met en valeur votre profil.', time:'15:00', date:'Aujourd\'hui' },
  ],
};

/* ══ AUDIT ANNONCE DEMO DATA ═════════════════════════════════════════════ */
const AUDIT_DEMO = {
  default: {
    adresse: '15 rue Gambetta, Bordeaux 33000',
    prix: 320000, prixDvf: 294000, diffPct: 8.8,
    surface: 68, dpe: 'E',
    alertes: [
      { type:'warn', icon:'💰', titre:'Prix 8,8% au-dessus du marché', detail:'Valeur DVF réelle sur 24 mois : 294 000 €. Marge de négociation estimée : 20 000 à 26 000 €.' },
      { type:'warn', icon:'🔋', titre:'DPE E — Isolation intérieure', detail:'L\'isolation par l\'intérieur représente une perte d\'environ 3 m² habitables si rénovation. À déduire du prix au m².' },
      { type:'warn', icon:'⚖️', titre:'Ravalement copro prévu 2026', detail:'PV d\'AG 2024 : ravalement voté, quote-part estimée 15 000 €. À négocier en déduction du prix.' },
      { type:'ok',   icon:'📍', titre:'Secteur actif — 23 jours médian', detail:'Le marché de ce quartier est dynamique. Délai de vente moyen : 23 jours. Liquidité bonne.' },
      { type:'ok',   icon:'🏠', titre:'Copropriété saine', detail:'Charges courantes 180 €/mois. Pas de procédure judiciaire en cours. Fonds de travaux alimenté.' },
    ],
    score: 61,
    conseil: 'Ce bien présente 2 risques majeurs négociables. Offre recommandée : 294 000 € en mentionnant le ravalement et la perte DPE.',
  }
};

/* ══ PAGE PRINCIPALE AVEC ONGLETS ════════════════════════════════════════ */
let _activeTab = 'boucliers';

function renderMain(p) {
  const expert    = EXPERTS[p.expert] || { nom:'Équipe HIL', role:'Expert dédié', tel:null, avatar:'HIL' };
  const boucliers = BOUCLIERS[p.pilier] || [];
  const color     = OFFRE_COLORS[p.offre];
  const icon      = PILIER_ICONS[p.pilier] || '📋';
  const nbActive  = boucliers.filter(b => !b.livrables.every(l => l.statut === 'locked')).length;
  const nbTotal   = boucliers.length;
  const pct       = Math.round((nbActive / nbTotal) * 100);
  const msgs      = MESSAGES_DATA[p.id] || [];
  _activeTab = p.investGroup ? 'cockpit' : 'parcours';

  const content = document.getElementById('mainContent');
  content.style.opacity = '0';
  content.innerHTML = `

    <!-- HERO -->
    <div class="proj-hero">
      <div class="proj-hero-left">
        <div class="proj-hero-badge" style="background:${color}18;color:${color};border-color:${color}30">${icon} ${OFFRE_LABELS[p.offre]}</div>
        <h1 class="proj-hero-title">${p.titre}</h1>
        <p class="proj-hero-sub">📍 ${p.ville} · Démarré le ${fmt(p.dateDebut)}</p>
        ${p.investGroup ? `<div class="invest-phase-banner">📈 Projet Investisseur · Phase ${p.investPhase}/${p.investTotal} · ${p.investLocked ? '🔒 Débloqué après rénovation' : p.investDone ? '✅ Terminé' : '⏳ En cours'}</div>` : ''}
        <div class="proj-progress-wrap">
          <div class="proj-progress-header">
            <span>${nbActive}/${nbTotal} boucliers activés</span>
            <span class="proj-pct" style="color:${color}">${pct}%</span>
          </div>
          <div class="proj-progress-bar">
            <div class="proj-progress-fill" style="width:${pct}%;background:linear-gradient(90deg,${color},var(--teal))"></div>
          </div>
        </div>
      </div>
      <div class="expert-card">
        <div class="expert-avatar">${expert.avatar}</div>
        <div class="expert-info">
          <div class="expert-label">Votre expert dédié</div>
          <div class="expert-name">${expert.nom}</div>
          <div class="expert-role">${expert.role}</div>
        </div>
        ${expert.tel && currentUser.partenaire
          ? `<a href="tel:${expert.tel}" class="btn-expert-call">📞 Appeler</a>`
          : `<button class="btn-expert-call locked" onclick="showToast('Disponible avec le Co-Pilote partenaire')">📞 Appeler</button>`}
      </div>
    </div>

    <!-- INFO STRIP -->
    <div class="info-strip">
      <div class="info-strip-item">
        <div class="info-strip-label">💶 Valeur protégée</div>
        <div class="info-strip-val">${fmtEur(p.valeurProtegee.montant)}</div>
        <div class="info-strip-sub">${p.valeurProtegee.label}</div>
      </div>
      <div class="info-strip-sep"></div>
      <div class="info-strip-item">
        <div class="info-strip-label">📅 Prochaine étape</div>
        <div class="info-strip-val" style="font-size:1rem">${p.prochaine.label}</div>
        <div class="info-strip-sub">${fmt(p.prochaine.date)}</div>
      </div>
      <div class="info-strip-sep"></div>
      <div class="info-strip-item">
        <div class="info-strip-label">🛡️ Protection active</div>
        <div class="info-strip-val" style="color:var(--teal)">${nbActive}/${nbTotal}</div>
        <div class="info-strip-sub">boucliers activés</div>
      </div>
    </div>

    <!-- ONGLETS -->
    <div class="dash-tabs">
      ${p.investGroup ? '<button class="dash-tab" data-tab="cockpit" onclick="switchTab(\'cockpit\')">📈 Cockpit</button>' : ''}
      <button class="dash-tab ${!p.investGroup ? 'active' : ''}" data-tab="parcours" onclick="switchTab('parcours')">📍 Mon Parcours</button>
      <button class="dash-tab" data-tab="boucliers" onclick="switchTab('boucliers')">🛡️ Boucliers</button>
      <button class="dash-tab" data-tab="audit" onclick="switchTab('audit')">🔍 Audit Annonce</button>
      <button class="dash-tab" data-tab="messages" onclick="switchTab('messages')">
        💬 Messages ${msgs.length ? `<span class="tab-badge">${msgs.length}</span>` : ''}
      </button>
    </div>

    <!-- CONTENU ONGLETS -->
    ${p.investGroup ? `<div id="tabCockpit" class="tab-content">${renderTabCockpit(p)}</div>` : ''}

    <div id="tabParcours" class="tab-content ${!p.investGroup ? 'active' : ''}">
      ${renderTabParcours(p)}
    </div>

    <div id="tabBoucliers" class="tab-content">
      <div class="boucliers-list">
        ${boucliers.map((b, i) => renderBouclier(b, i === 0)).join('')}
      </div>
      ${p.offre === 'diagnostic' ? renderUpgradeCTA(boucliers) : ''}
    </div>

    <div id="tabAudit" class="tab-content">
      ${renderTabAudit(p)}
    </div>

    <div id="tabMessages" class="tab-content">
      ${renderTabMessages(p, expert, msgs)}
    </div>
  `;

  renderHotline(expert);
  requestAnimationFrame(() => { content.style.transition = 'opacity .3s ease'; content.style.opacity = '1'; });
}

function switchTab(tab) {
  _activeTab = tab;
  document.querySelectorAll('.dash-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  const map = { cockpit:'tabCockpit', parcours:'tabParcours', boucliers:'tabBoucliers', audit:'tabAudit', messages:'tabMessages' };
  const el = document.getElementById(map[tab]);
  if (el) { el.classList.add('active'); if (tab === 'messages') scrollMessages(); }
}

function scrollMessages() {
  setTimeout(() => {
    const feed = document.getElementById('msgFeed');
    if (feed) feed.scrollTop = feed.scrollHeight;
  }, 50);
}

/* ══ ONGLET AUDIT ANNONCE ════════════════════════════════════════════════ */
function renderTabAudit(p) {
  return `
    <div class="audit-section">
      <div class="audit-intro">
        <div class="audit-intro-title">🔍 Audit d'annonce — Le Bouclier Timonia</div>
        <div class="audit-intro-desc">Collez un lien d'annonce (SeLoger, LeBonCoin, PAP…). Notre IA analyse le prix, le DPE, la copropriété et vous génère un rapport en 30 secondes.</div>
      </div>

      <div class="audit-input-row">
        <input type="url" id="auditUrl" class="audit-url-input" placeholder="https://www.seloger.com/annonce/123456789.htm" />
        <button class="btn-audit-analyze" onclick="runAudit()">Analyser →</button>
      </div>

      <div id="auditLoader" class="audit-loader" style="display:none">
        <div class="audit-loader-dots"><span></span><span></span><span></span></div>
        <div class="audit-loader-text">Analyse en cours — DVF · DPE · Copropriété · Prix marché…</div>
      </div>

      <div id="auditResult" style="display:none">
        ${renderAuditResult(AUDIT_DEMO.default)}
      </div>

      <div class="methode-agence">
        <div class="methode-title">📊 Comment les agences estiment-elles un prix ?</div>
        <div class="methode-grid">
          <div class="methode-col methode-agence-col">
            <div class="methode-col-label">🏢 Agence classique</div>
            <ul class="methode-list">
              <li>Visite rapide du bien (20 min)</li>
              <li>Comparaison avec 2-3 biens en vitrine</li>
              <li>Prix souvent gonflé pour avoir le mandat</li>
              <li class="methode-warn">⚠️ L'agent est payé à la vente, pas à votre meilleur prix</li>
              <li class="methode-warn">⚠️ PV d'AG rarement lus</li>
              <li class="methode-warn">⚠️ Impact DPE non chiffré</li>
            </ul>
          </div>
          <div class="methode-col methode-hil-col">
            <div class="methode-col-label">🛡️ Home in Love</div>
            <ul class="methode-list">
              <li class="methode-ok">✅ Analyse DVF — 24 mois de ventes réelles</li>
              <li class="methode-ok">✅ DPE — impact chiffré sur la valeur</li>
              <li class="methode-ok">✅ PV AG — travaux futurs déduits du prix</li>
              <li class="methode-ok">✅ Stratégie Net Vendeur — ce que vous touchez</li>
              <li class="methode-ok">✅ Scoring acheteurs — solvabilité vérifiée</li>
              <li class="methode-ok">✅ Transparent sur la méthode — rien à cacher</li>
            </ul>
          </div>
        </div>
        <a href="https://app.dvf.etalab.gouv.fr/" target="_blank" class="dvf-link">
          🔗 Consulter les données DVF officielles (data.gouv.fr) →
        </a>
      </div>
    </div>`;
}

function renderAuditResult(data) {
  const scoreColor = data.score >= 70 ? '#0ba592' : data.score >= 40 ? '#f59e0b' : '#ef4444';
  const overPrice  = data.prix - data.prixDvf;
  return `
    <div class="audit-report">
      <div class="audit-report-header">
        <div class="audit-report-adresse">
          <div class="audit-report-label">RAPPORT D'ANALYSE</div>
          <div class="audit-report-addr">${data.adresse}</div>
        </div>
        <div class="audit-score-wrap">
          <div class="audit-score" style="color:${scoreColor}">${data.score}<span>/100</span></div>
          <div class="audit-score-label">Score Bouclier</div>
        </div>
      </div>

      <div class="audit-price-compare">
        <div class="audit-price-item">
          <div class="audit-price-label">Prix affiché</div>
          <div class="audit-price-val">${fmtEur(data.prix)}</div>
        </div>
        <div class="audit-price-arrow">→</div>
        <div class="audit-price-item">
          <div class="audit-price-label">Valeur DVF réelle</div>
          <div class="audit-price-val" style="color:var(--teal)">${fmtEur(data.prixDvf)}</div>
        </div>
        <div class="audit-price-diff">
          <span class="audit-price-diff-val">+${data.diffPct}%</span>
          <span class="audit-price-diff-label">au-dessus du marché</span>
          <span class="audit-price-diff-eco">Marge : ${fmtEur(overPrice)}</span>
        </div>
      </div>

      <div class="audit-alertes">
        ${data.alertes.map(a => `
          <div class="audit-alerte audit-${a.type}">
            <div class="audit-alerte-icon">${a.icon}</div>
            <div class="audit-alerte-body">
              <div class="audit-alerte-titre">${a.titre}</div>
              <div class="audit-alerte-detail">${a.detail}</div>
            </div>
            <div class="audit-alerte-badge audit-badge-${a.type}">${a.type === 'ok' ? '✓ OK' : '⚠ Alerte'}</div>
          </div>`).join('')}
      </div>

      <div class="audit-conseil">
        <div class="audit-conseil-label">💡 Recommandation de votre expert</div>
        <div class="audit-conseil-text">${data.conseil}</div>
        <button class="btn-audit-expert" onclick="switchTab('messages')">Envoyer à mon expert →</button>
      </div>
    </div>`;
}

function runAudit() {
  const url = document.getElementById('auditUrl').value.trim();
  if (!url) { showToast('Collez un lien d\'annonce d\'abord'); return; }
  const loader = document.getElementById('auditLoader');
  const result = document.getElementById('auditResult');
  loader.style.display = 'flex';
  result.style.display = 'none';
  setTimeout(() => {
    loader.style.display = 'none';
    result.style.display = 'block';
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 2200);
}

/* ══ ONGLET MESSAGES ═════════════════════════════════════════════════════ */
function renderTabMessages(p, expert, msgs) {
  return `
    <div class="msg-section">
      <div class="msg-expert-bar">
        <div class="msg-expert-avatar">${expert.avatar}</div>
        <div class="msg-expert-info">
          <div class="msg-expert-name">${expert.nom}</div>
          <div class="msg-expert-status"><span class="hotline-dot" style="display:inline-block;width:7px;height:7px;border-radius:50%;background:#22c55e;margin-right:4px"></span>En ligne · Répond sous 2h</div>
        </div>
      </div>

      <div class="msg-feed" id="msgFeed">
        ${msgs.map(m => `
          <div class="msg-row msg-${m.from}">
            ${m.from === 'expert' ? `<div class="msg-avatar-sm">${expert.avatar}</div>` : ''}
            <div class="msg-bubble msg-bubble-${m.from}">
              <div class="msg-text">${m.text}</div>
              <div class="msg-time">${m.date} · ${m.time}</div>
            </div>
          </div>`).join('')}
      </div>

      <div class="msg-input-row">
        <input type="text" id="msgInput" class="msg-input" placeholder="Écrivez un message à votre expert…"
          onkeydown="if(event.key==='Enter') sendMsg()" />
        <button class="btn-msg-send" onclick="sendMsg()">Envoyer</button>
      </div>
      <div class="msg-note">Messages transmis par email · Réponse garantie sous 2h en journée</div>
    </div>`;
}

function sendMsg() {
  const input = document.getElementById('msgInput');
  const text  = input.value.trim();
  if (!text) return;
  const feed  = document.getElementById('msgFeed');
  const now   = new Date();
  const time  = now.getHours() + ':' + String(now.getMinutes()).padStart(2,'0');
  const div   = document.createElement('div');
  div.className = 'msg-row msg-client';
  div.innerHTML = `
    <div class="msg-bubble msg-bubble-client">
      <div class="msg-text">${text}</div>
      <div class="msg-time">Aujourd'hui · ${time}</div>
    </div>`;
  feed.appendChild(div);
  input.value = '';
  feed.scrollTop = feed.scrollHeight;
  setTimeout(() => {
    const rep = document.createElement('div');
    rep.className = 'msg-row msg-expert';
    const exp = EXPERTS[currentProjet?.expert] || { avatar:'HIL' };
    rep.innerHTML = `
      <div class="msg-avatar-sm">${exp.avatar}</div>
      <div class="msg-bubble msg-bubble-expert">
        <div class="msg-text">Bien reçu ! Je reviens vers vous très rapidement. 🛡️</div>
        <div class="msg-time">Aujourd'hui · ${time} · En attente</div>
      </div>`;
    feed.appendChild(rep);
    feed.scrollTop = feed.scrollHeight;
  }, 1200);
}
/* ══ BOUCLIER ════════════════════════════════════════════════════════════ */
function renderBouclier(b, openByDefault) {
  const allLocked  = b.livrables.every(l => l.statut === 'locked');
  const anyEnCours = b.livrables.some(l => l.statut === 'en_cours');
  const anyActive  = b.livrables.some(l => l.statut === 'active');

  let cls, badge;
  if      (allLocked)              { cls = 'bouclier-locked';  badge = `<span class="b-status b-locked">🔒 Non activé</span>`; }
  else if (anyActive && anyEnCours){ cls = 'bouclier-partial'; badge = `<span class="b-status b-en-cours">⏳ En cours</span>`; }
  else if (anyEnCours)             { cls = 'bouclier-partial'; badge = `<span class="b-status b-en-cours">⏳ En cours</span>`; }
  else                             { cls = 'bouclier-active';  badge = `<span class="b-status b-active">✅ Activé</span>`; }

  const promesse = allLocked
    ? `<span class="b-promesse-locked">${lockedMsg(b.id)}</span>`
    : `<span class="b-promesse">"${b.promesse}"</span>`;

  // Widget contextuel selon l'id du bouclier
  const widget = allLocked ? renderWidgetLocked(b.id) : renderWidget(b.id);

  return `
    <div class="bouclier-item ${cls} ${openByDefault ? 'open' : ''}">
      <div class="bouclier-header" onclick="toggleBouclier(this)">
        <div class="b-icon">${b.icon}</div>
        <div class="b-info">
          <div class="b-titre">${b.titre}</div>
          <div class="b-promesse-wrap">${promesse}</div>
        </div>
        ${badge}
        <div class="b-chevron">▾</div>
      </div>
      <div class="bouclier-body">
        ${widget}
        <div class="liv-separator">📎 Livrables associés</div>
        ${b.livrables.map(l => renderLivrable(l)).join('')}
      </div>
    </div>`;
}

/* ══ WIDGETS ═════════════════════════════════════════════════════════════ */

function renderWidget(id) {
  switch(id) {
    case 'financier': return widgetLiquidite();
    case 'juridique': return widgetJuridique();
    case 'candidats':
    case 'marketing': return widgetPipeline(id);
    case 'technique': return widgetROI();
    case 'secteur':   return widgetSecteur();
    default:          return '';
  }
}

function renderWidgetLocked(id) {
  const labels = {
    financier: 'Indice de Liquidité',
    juridique: 'Contrôles Juridiques',
    candidats: 'Pipeline Candidats',
    marketing: 'Pipeline Acheteurs',
    technique: 'ROI de Mutation',
    pilotage:  'Planning Chantier',
    secteur:   'Analyse Secteur',
    dossier:   'Scoring Dossier',
    rapidite:  'Kit Installation',
  };
  const label = labels[id] || 'Widget';
  return `
    <div class="widget-locked">
      <div class="widget-locked-overlay">
        <div class="widget-locked-icon">🔒</div>
        <div class="widget-locked-title">${label} — Co-Pilote requis</div>
        <div class="widget-locked-desc">Activez le Co-Pilote pour accéder à cet outil d'analyse.</div>
        <a href="https://calendly.com/homeinlove" target="_blank" class="btn-widget-unlock">Activer →</a>
      </div>
    </div>`;
}

/* ── Widget 1 : Indice de Liquidité ── */
function widgetLiquidite() {
  const score = 72;
  const color = score >= 70 ? '#0ba592' : score >= 40 ? '#f59e0b' : '#ef4444';
  const dash  = Math.round(251.2 * score / 100);
  return `
    <div class="widget-card widget-liquidite">
      <div class="widget-title">📊 Indice de Liquidité & Scoring IA</div>
      <div class="widget-liquidite-inner">
        <div class="liqui-gauge-wrap">
          <svg viewBox="0 0 90 90" class="liqui-svg">
            <circle cx="45" cy="45" r="40" fill="none" stroke="var(--surf3)" stroke-width="8"/>
            <circle cx="45" cy="45" r="40" fill="none" stroke="${color}" stroke-width="8"
              stroke-dasharray="${dash} 251.2" stroke-dashoffset="62.8"
              stroke-linecap="round" style="transition:stroke-dasharray .8s ease"/>
          </svg>
          <div class="liqui-score" style="color:${color}">${score}<span>%</span></div>
        </div>
        <div class="liqui-details">
          <div class="liqui-row"><span class="liqui-label">Prix marché DVF</span><span class="liqui-val ok">✓ Aligné</span></div>
          <div class="liqui-row"><span class="liqui-label">DPE actuel</span><span class="liqui-val warn">⚠ Classe E</span></div>
          <div class="liqui-row"><span class="liqui-label">Zone géographique</span><span class="liqui-val ok">✓ Marché actif</span></div>
          <div class="liqui-row"><span class="liqui-label">Dossier vendeur</span><span class="liqui-val ok">✓ Complet</span></div>
          <div class="liqui-conseil">💡 En passant le DPE de E à C, votre indice grimperait à <strong>+92%</strong></div>
        </div>
      </div>
    </div>`;
}

/* ── Widget 2 : Bouclier Juridique Checklist ── */
function widgetJuridique() {
  const checks = [
    { label: 'Lecture PV d\'AG (3 dernières années)', statut: 'ok',   detail: 'Aucun litige détecté' },
    { label: 'Carnet d\'entretien',                   statut: 'ok',   detail: 'À jour, travaux programmés identifiés' },
    { label: 'Diagnostic Énergétique (DPE)',           statut: 'warn', detail: 'Anomalie électrique mineure — à corriger' },
    { label: 'Règlement de copropriété',               statut: 'ok',   detail: 'Usage logement confirmé pour ce lot' },
    { label: 'Charges et appels de fonds',             statut: 'ok',   detail: 'Pas d\'appel exceptionnel en cours' },
  ];
  return `
    <div class="widget-card widget-juridique">
      <div class="widget-title">⚖️ Contrôles Juridiques — Certifié Home in Love</div>
      <div class="juridique-list">
        ${checks.map(c => `
          <div class="juri-row">
            <div class="juri-icon ${c.statut === 'ok' ? 'juri-ok' : 'juri-warn'}">${c.statut === 'ok' ? '✓' : '⚠'}</div>
            <div class="juri-body">
              <div class="juri-label">${c.label}</div>
              <div class="juri-detail">${c.detail}</div>
            </div>
          </div>`).join('')}
      </div>
      <div class="juri-certified">🏅 Certifié par Home in Love · Carte T</div>
    </div>`;
}

/* ── Widget 3 : Pipeline Candidats / Acheteurs ── */
function widgetPipeline(type) {
  const isAcheteur = type === 'marketing';
  const label = isAcheteur ? 'acheteurs' : 'locataires';
  const candidats = isAcheteur ? [
    { initiales:'MR', nom:'Marc R.', score:94, detail:'Prêt accordé · 60k€ apport', statut:'go' },
    { initiales:'AL', nom:'Alice L.', score:78, detail:'Prêt en cours · dossier solide', statut:'attente' },
    { initiales:'JD', nom:'Jean D.', score:31, detail:'Financement non validé', statut:'ko' },
  ] : [
    { initiales:'SB', nom:'Sophie B.', score:96, detail:'CDI · taux effort 28% · pièces vérifiées', statut:'go' },
    { initiales:'TM', nom:'Thomas M.', score:82, detail:'CDD long · garant solide', statut:'attente' },
    { initiales:'PK', nom:'Pierre K.', score:24, detail:'Revenus insuffisants · dossier incomplet', statut:'ko' },
  ];
  return `
    <div class="widget-card widget-pipeline">
      <div class="widget-title">👥 Pipeline des ${label} scorés</div>
      <div class="pipeline-list">
        ${candidats.map(c => `
          <div class="pipeline-row pipeline-${c.statut}">
            <div class="pip-avatar">${c.initiales}</div>
            <div class="pip-body">
              <div class="pip-nom">${c.nom}</div>
              <div class="pip-detail">${c.detail}</div>
            </div>
            <div class="pip-score-wrap">
              <div class="pip-score" style="color:${c.score>=70?'#0ba592':c.score>=50?'#f59e0b':'#ef4444'}">${c.score}<span>/100</span></div>
            </div>
            <div class="pip-action">
              ${c.statut==='go' ? `<span class="pip-tag pip-go">✓ Autoriser</span>` :
                c.statut==='attente' ? `<span class="pip-tag pip-attente">⏳ En attente</span>` :
                `<span class="pip-tag pip-ko">✗ Bloqué</span>`}
            </div>
          </div>`).join('')}
      </div>
      <div class="pipeline-note">🛡️ Seuls les candidats ≥ 70/100 peuvent visiter</div>
    </div>`;
}

/* ── Widget 4 : ROI de Mutation ── */
function widgetROI() {
  return `
    <div class="widget-card widget-roi">
      <div class="widget-title">📈 Calculateur ROI de Mutation</div>
      <div class="roi-grid">
        <div class="roi-col roi-avant">
          <div class="roi-col-label">AVANT</div>
          <div class="roi-col-icon">🏚️</div>
          <div class="roi-val-main">240 000 €</div>
          <div class="roi-val-sub">Valeur actuelle · DPE G</div>
          <div class="roi-tags"><span class="roi-tag roi-tag-red">DPE G</span><span class="roi-tag roi-tag-red">−15% marché</span></div>
        </div>
        <div class="roi-arrow">→</div>
        <div class="roi-col roi-travaux">
          <div class="roi-col-label">TRAVAUX</div>
          <div class="roi-col-icon">🔨</div>
          <div class="roi-val-main" style="color:var(--gold)">15 000 €</div>
          <div class="roi-val-sub">Investissement conseillé</div>
          <div class="roi-tags"><span class="roi-tag roi-tag-gold">MaPrimeRenov</span><span class="roi-tag roi-tag-gold">CEE</span></div>
        </div>
        <div class="roi-arrow">→</div>
        <div class="roi-col roi-apres">
          <div class="roi-col-label">APRÈS</div>
          <div class="roi-col-icon">🏠</div>
          <div class="roi-val-main" style="color:var(--teal)">285 000 €</div>
          <div class="roi-val-sub">Valeur cible · DPE C</div>
          <div class="roi-tags"><span class="roi-tag roi-tag-green">DPE C</span><span class="roi-tag roi-tag-green">Marché premium</span></div>
        </div>
      </div>
      <div class="roi-gain">
        <div class="roi-gain-label">Gain net potentiel</div>
        <div class="roi-gain-val">+ 30 000 €</div>
        <div class="roi-gain-sub">après déduction des travaux et des aides récupérées</div>
      </div>
    </div>`;
}

/* ── Widget 5 : Analyse Secteur (mobilité) ── */
function widgetSecteur() {
  return `
    <div class="widget-card widget-secteur">
      <div class="widget-title">📍 Analyse Secteur & Temps de Trajet</div>
      <div class="secteur-grid">
        <div class="secteur-item secteur-ok">
          <div class="secteur-zone">Centre-ville</div>
          <div class="secteur-trajet">18 min · Tram</div>
          <div class="secteur-loyer">Loyer moy. 1 100 €</div>
          <span class="secteur-tag stag-ok">✓ Recommandé</span>
        </div>
        <div class="secteur-item secteur-ok">
          <div class="secteur-zone">Quartier Nord</div>
          <div class="secteur-trajet">22 min · Bus</div>
          <div class="secteur-loyer">Loyer moy. 880 €</div>
          <span class="secteur-tag stag-ok">✓ Recommandé</span>
        </div>
        <div class="secteur-item secteur-warn">
          <div class="secteur-zone">Périphérie Est</div>
          <div class="secteur-trajet">41 min · Voiture</div>
          <div class="secteur-loyer">Loyer moy. 720 €</div>
          <span class="secteur-tag stag-warn">⚠ Déconseillé</span>
        </div>
      </div>
      <div class="secteur-note">📊 Basé sur votre lieu de travail déclaré et les données transports temps réel</div>
    </div>`;
}

function lockedMsg(id) {
  return { financier:'Devis non comparés · Aides non cartographiées', juridique:'PV AG non vérifiés · Bail non relu', marketing:'Annonce non optimisée · Acheteurs non filtrés', technique:'DPE non analysé · Travaux non anticipés', candidats:'Solvabilité non vérifiée · Dossiers non scorés', pilotage:'Planning non établi · Réception non encadrée', secteur:'Quartier non analysé · Biens non filtrés', dossier:'Dossier non optimisé · Priorité non garantie', rapidite:'Bail non relu · Installation non guidée' }[id] || 'Non activé';
}

/* ══ LIVRABLE ════════════════════════════════════════════════════════════ */
function renderLivrable(l) {
  if (l.statut === 'active') return `
    <div class="liv-row liv-active">
      <div class="liv-dot dot-active">✓</div>
      <div class="liv-body">
        <div class="liv-nom">${l.nom}</div>
        <div class="liv-desc">${l.desc}</div>
        ${l.date ? `<div class="liv-date">Remis le ${fmt(l.date)}</div>` : ''}
      </div>
      <a href="${l.fichier}" class="btn-dl" download>⬇ Télécharger</a>
    </div>`;

  if (l.statut === 'en_cours') return `
    <div class="liv-row liv-en-cours">
      <div class="liv-dot dot-en-cours">●</div>
      <div class="liv-body">
        <div class="liv-nom">${l.nom}</div>
        <div class="liv-desc">${l.desc}</div>
        ${l.date ? `<div class="liv-date">Attendu le ${fmt(l.date)}</div>` : ''}
      </div>
      <span class="liv-tag tag-ec">En préparation</span>
    </div>`;

  return `
    <div class="liv-row liv-locked">
      <div class="liv-dot dot-locked">○</div>
      <div class="liv-body">
        <div class="liv-nom">${l.nom}</div>
        <div class="liv-desc">${l.desc}</div>
      </div>
      <span class="liv-tag tag-locked">Co-Pilote</span>
    </div>`;
}

/* ══ CTA UPGRADE ═════════════════════════════════════════════════════════ */
function renderUpgradeCTA(boucliers) {
  const locked = boucliers.filter(b => b.livrables.every(l => l.statut === 'locked'));
  if (!locked.length) return '';
  const risks = locked.map(b => lockedMsg(b.id)).join(' · ');
  return `
    <div class="upgrade-cta">
      <div class="upgrade-cta-icon">⚠️</div>
      <div class="upgrade-cta-body">
        <div class="upgrade-cta-title">${locked.length} risque${locked.length > 1 ? 's' : ''} non couvert${locked.length > 1 ? 's' : ''}</div>
        <div class="upgrade-cta-desc">${risks}</div>
      </div>
      <a href="https://calendly.com/homeinlove" target="_blank" class="btn btn-teal">Activer le Co-Pilote →</a>
    </div>`;
}

/* ══ ACCORDÉON ═══════════════════════════════════════════════════════════ */
function toggleBouclier(header) {
  const item = header.closest('.bouclier-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.bouclier-item').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ══ UTILITAIRES ═════════════════════════════════════════════════════════ */
function fmt(str) {
  if (!str) return '—';
  return new Date(str).toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric' });
}
function fmtEur(n) {
  return new Intl.NumberFormat('fr-FR', { style:'currency', currency:'EUR', maximumFractionDigits:0 }).format(n);
}
function showToast(msg) {
  let t = document.getElementById('toast2');
  if (!t) { t = document.createElement('div'); t.id = 'toast2'; t.className = 'toast2'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ══ HOTLINE FLOTTANTE ══════════════════════════════════════════════════ */
function renderHotline(expert) {
  let el = document.getElementById('hotline-float');
  if (!el) { el = document.createElement('div'); el.id = 'hotline-float'; document.body.appendChild(el); }
  el.innerHTML = `
    <div class="hotline-inner" id="hotlineInner">
      <button class="hotline-toggle" onclick="toggleHotline()">
        <div class="hotline-avatar">${expert.avatar}</div>
        <div class="hotline-info">
          <div class="hotline-name">${expert.nom.split(' ')[0]}</div>
          <div class="hotline-status"><span class="hotline-dot"></span>En ligne</div>
        </div>
        <div class="hotline-chevron" id="hotlineChevron">▴</div>
      </button>
      <div class="hotline-panel" id="hotlinePanel">
        <div class="hotline-panel-name">${expert.nom}</div>
        <div class="hotline-panel-role">${expert.role}</div>
        <div class="hotline-panel-btns">
          ${expert.tel
            ? `<a href="https://wa.me/33${expert.tel.replace(/\s/g,'').slice(1)}" target="_blank" class="btn-hotline btn-wa">💬 WhatsApp</a>
               <a href="tel:${expert.tel}" class="btn-hotline btn-tel">📞 Appeler</a>`
            : `<button class="btn-hotline btn-wa" onclick="showToast('Disponible avec le Co-Pilote partenaire')">💬 WhatsApp</button>`}
        </div>
        <div class="hotline-resp">Réponse garantie sous 2h en journée</div>
      </div>
    </div>`;
}

function toggleHotline() {
  const panel   = document.getElementById('hotlinePanel');
  const chevron = document.getElementById('hotlineChevron');
  const open    = panel.classList.toggle('open');
  chevron.textContent = open ? '▾' : '▴';
}

/* ══ ONGLET PARCOURS ═════════════════════════════════════════════════════ */
function renderTabParcours(p) {
  const steps = PARCOURS_DATA[p.id] || [];
  if (!steps.length) return `<div class="parcours-empty">Parcours en cours de construction par votre expert.</div>`;

  const done    = steps.filter(s => s.statut === 'done');
  const current = steps.find(s => s.statut === 'current');
  const future  = steps.filter(s => s.statut === 'next' || s.statut === 'future');

  const acteurLabels = {
    cabinet:  { label:'Cabinet', cls:'acteur-cabinet' },
    client:   { label:'Vous',    cls:'acteur-client' },
    ensemble: { label:'Ensemble', cls:'acteur-ensemble' },
  };

  function renderStep(s, showConnector) {
    const a = acteurLabels[s.acteur] || acteurLabels.cabinet;
    const isUpgrade = s.bouclier && p.offre === 'diagnostic' && s.statut !== 'done';
    return `
      <div class="parc-step parc-${s.statut}">
        <div class="parc-left">
          <div class="parc-dot parc-dot-${s.statut}">${s.statut === 'done' ? '✓' : s.statut === 'current' ? '●' : ''}</div>
          ${showConnector ? '<div class="parc-line"></div>' : ''}
        </div>
        <div class="parc-body">
          <div class="parc-meta">
            <span class="parc-date">${fmt(s.date)}</span>
            <span class="parc-acteur ${a.cls}">${a.label}</span>
            ${isUpgrade ? '<span class="parc-upgrade-tag">Co-Pilote requis</span>' : ''}
          </div>
          <div class="parc-titre">${s.icon} ${s.titre}</div>
          <div class="parc-desc">${s.desc}</div>
          ${s.bouclier && !isUpgrade ? `<div class="parc-bouclier">${s.bouclier}</div>` : ''}
          ${isUpgrade ? `<div class="parc-bouclier parc-bouclier-locked">🔒 ${s.bouclier} — <a href="https://calendly.com/homeinlove" target="_blank" style="color:var(--accent)">Activer le Co-Pilote</a></div>` : ''}
        </div>
      </div>`;
  }

  return `
    <div class="parcours-wrap">

      ${done.length ? `
        <div class="parc-section-label parc-label-done">✅ Ce que le Cabinet a déjà fait pour vous</div>
        <div class="parc-list">
          ${done.map((s, i) => renderStep(s, i < done.length - 1 || !!current)).join('')}
        </div>` : ''}

      ${current ? `
        <div class="parc-now-marker">
          <div class="parc-now-line"></div>
          <div class="parc-now-badge">📍 Vous êtes ici</div>
          <div class="parc-now-line"></div>
        </div>
        <div class="parc-list">
          ${renderStep(current, future.length > 0)}
        </div>` : ''}

      ${future.length ? `
        <div class="parc-section-label parc-label-future">🔮 Ce qui vous attend</div>
        <div class="parc-list">
          ${future.map((s, i) => renderStep(s, i < future.length - 1)).join('')}
        </div>` : ''}

    </div>`;
}

/* ══ ONGLET COCKPIT INVESTISSEUR ════════════════════════════════════════ */
function renderTabCockpit(p) {
  // Données communes au groupe d'investissement
  const cockpit = {
    achatPrix:      178000,
    travaux:        18500,
    aidesRecues:    19500,
    resteACharge:   3700,
    coutTotal:      162200, // achat + reste à charge travaux - aides
    valeurActuelle: 195000, // en cours de réno
    valeurCible:    265000, // après réno DPE C
    loyerEstime:    1100,
    credit:         720,
    chargesCopro:   95,
    taxeFonciere:   68,
    vacance:        55,   // 5% vacance locative
    fiscalEco:      180,  // économie LMNP/mois
  };

  const cashflow = cockpit.loyerEstime - cockpit.credit - cockpit.chargesCopro
                 - cockpit.taxeFonciere - cockpit.vacance + cockpit.fiscalEco;
  const plusvalue = cockpit.valeurCible - cockpit.achatPrix;
  const roi5  = (((cashflow * 12 * 5) + plusvalue) / cockpit.coutTotal * 100).toFixed(1);
  const roi10 = (((cashflow * 12 * 10) + plusvalue * 1.2) / cockpit.coutTotal * 100).toFixed(1);

  const cfColor = cashflow > 0 ? '#0ba592' : '#ef4444';

  return `
    <div class="cockpit-wrap">

      <!-- BANDEAU PHASES -->
      <div class="cockpit-phases">
        <div class="cockpit-phase cockpit-phase-done">
          <div class="cp-num">1</div>
          <div class="cp-label">Acquisition</div>
          <div class="cp-status">✅ Terminé</div>
        </div>
        <div class="cockpit-phase-arrow">→</div>
        <div class="cockpit-phase cockpit-phase-current">
          <div class="cp-num">2</div>
          <div class="cp-label">Rénovation</div>
          <div class="cp-status">⏳ En cours</div>
        </div>
        <div class="cockpit-phase-arrow">→</div>
        <div class="cockpit-phase cockpit-phase-locked">
          <div class="cp-num">3</div>
          <div class="cp-label">Gestion</div>
          <div class="cp-status">🔒 Juin 2026</div>
        </div>
      </div>

      <!-- PRISE DE VALEUR -->
      <div class="cockpit-card">
        <div class="cockpit-card-title">📈 Prise de valeur — Certifiée Timonia</div>
        <div class="valeur-flow">
          <div class="vf-item">
            <div class="vf-label">Prix d'achat</div>
            <div class="vf-val">${fmtEur(cockpit.achatPrix)}</div>
            <div class="vf-sub">Négocié -20 000€</div>
          </div>
          <div class="vf-plus">+</div>
          <div class="vf-item">
            <div class="vf-label">Travaux nets</div>
            <div class="vf-val" style="color:var(--gold)">${fmtEur(cockpit.resteACharge + cockpit.travaux - cockpit.aidesRecues)}</div>
            <div class="vf-sub">Après aides 19 500€</div>
          </div>
          <div class="vf-equals">=</div>
          <div class="vf-item">
            <div class="vf-label">Coût total</div>
            <div class="vf-val">${fmtEur(cockpit.coutTotal)}</div>
            <div class="vf-sub">Votre investissement réel</div>
          </div>
          <div class="vf-arrow">→</div>
          <div class="vf-item vf-cible">
            <div class="vf-label">Valeur cible</div>
            <div class="vf-val" style="color:var(--teal)">${fmtEur(cockpit.valeurCible)}</div>
            <div class="vf-sub">DPE C · Certifiée Timonia</div>
          </div>
        </div>
        <div class="valeur-gain-banner">
          <span>Plus-value latente</span>
          <span class="vg-montant">+${fmtEur(plusvalue)}</span>
          <span class="vg-pct">+${Math.round(plusvalue/cockpit.achatPrix*100)}% sur le prix d'achat</span>
        </div>
      </div>

      <!-- CASH-FLOW -->
      <div class="cockpit-card">
        <div class="cockpit-card-title">💶 Cash-flow mensuel prévisionnel</div>
        <div class="cf-grid">
          <div class="cf-col cf-positif">
            <div class="cf-col-label">Revenus</div>
            <div class="cf-row"><span>Loyer estimé</span><span class="cf-pos">+${fmtEur(cockpit.loyerEstime)}</span></div>
            <div class="cf-row"><span>Économie fiscale LMNP</span><span class="cf-pos">+${fmtEur(cockpit.fiscalEco)}</span></div>
          </div>
          <div class="cf-col cf-negatif">
            <div class="cf-col-label">Charges</div>
            <div class="cf-row"><span>Crédit immobilier</span><span class="cf-neg">-${fmtEur(cockpit.credit)}</span></div>
            <div class="cf-row"><span>Charges copropriété</span><span class="cf-neg">-${fmtEur(cockpit.chargesCopro)}</span></div>
            <div class="cf-row"><span>Taxe foncière/mois</span><span class="cf-neg">-${fmtEur(cockpit.taxeFonciere)}</span></div>
            <div class="cf-row"><span>Vacance locative 5%</span><span class="cf-neg">-${fmtEur(cockpit.vacance)}</span></div>
          </div>
        </div>
        <div class="cf-result" style="border-color:${cfColor}20;background:${cfColor}08">
          <span class="cf-result-label">Cash-flow net mensuel</span>
          <span class="cf-result-val" style="color:${cfColor}">${cashflow > 0 ? '+' : ''}${fmtEur(cashflow)}/mois</span>
        </div>
        <div class="cf-note">Hypothèses : taux crédit 3,8% · 20 ans · vacance 5% · charges réelles 2026</div>
      </div>

      <!-- ROI -->
      <div class="cockpit-card">
        <div class="cockpit-card-title">🎯 ROI prévisionnel</div>
        <div class="roi-bars">
          <div class="roi-bar-item">
            <div class="roi-bar-header">
              <span class="roi-bar-label">Rendement sur 5 ans</span>
              <span class="roi-bar-val">${roi5}% annualisé</span>
            </div>
            <div class="roi-bar-track">
              <div class="roi-bar-fill" style="width:${Math.min(parseFloat(roi5)*8,100)}%;background:linear-gradient(90deg,var(--accent),var(--teal))"></div>
            </div>
            <div class="roi-bar-detail">Cash-flow ${fmtEur(cashflow*12*5)} + Plus-value ${fmtEur(plusvalue)}</div>
          </div>
          <div class="roi-bar-item">
            <div class="roi-bar-header">
              <span class="roi-bar-label">Rendement sur 10 ans</span>
              <span class="roi-bar-val">${roi10}% annualisé</span>
            </div>
            <div class="roi-bar-track">
              <div class="roi-bar-fill" style="width:${Math.min(parseFloat(roi10)*8,100)}%;background:linear-gradient(90deg,var(--teal),var(--gold))"></div>
            </div>
            <div class="roi-bar-detail">Cash-flow ${fmtEur(cashflow*12*10)} + Plus-value estimée ${fmtEur(Math.round(plusvalue*1.2))}</div>
          </div>
        </div>
        <div class="roi-timonia-badge">🛡️ Projections établies par Timonia · Basées sur DVF 2025 + données marché Grenoble</div>
      </div>

    </div>`;
}
