/* ─── dashboard.js — Timonia Dashboard Logic ────────────────────────────────
   Requires auth.js to be loaded first
   ─────────────────────────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════════════════════
   CONFIG
   ═══════════════════════════════════════════════════════════════════════════ */

const TYPE_CONFIG = {
  location:        { label: 'Recherche Location', emoji: '🔍', color: '#1e63f0' },
  achat:           { label: 'Recherche Achat',    emoji: '🔑', color: '#0ba592' },
  'mise-location': { label: 'Mise en Location',   emoji: '🏠', color: '#c47a00' },
  vente:           { label: 'Mise en Vente',       emoji: '💰', color: '#16a34a' },
  renovation:      { label: 'Rénovation',          emoji: '🔨', color: '#7c3aed' },
  autre:           { label: 'Autre',               emoji: '📋', color: '#8494b8' },
};

// Mission types
const MISSION_TYPES = {
  mission:     { label: 'Mission',       color: 'type-mission' },
  aide:        { label: 'Aide financière', color: 'type-aide' },
  subvention:  { label: 'Subvention',    color: 'type-subvention' },
};

/* ═══════════════════════════════════════════════════════════════════════════
   DEMO DATA
   ═══════════════════════════════════════════════════════════════════════════ */

function buildDemoProjects(user) {
  const J = (days) => {
    const d = new Date('2026-01-01');
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  };

  const ALL = {

    /* ── RECHERCHE LOCATION ── */
    location: {
      type: 'location',
      description: 'Recherche d\'un T2 meublé à Lyon Part-Dieu',
      objectif: 'Trouver un logement avant ma prise de poste le 1er mars 2026',
      adresse: 'Lyon 3e / Lyon 6e — 69003, 69006',
      deadline: '2026-03-01',
      budget1Label: 'Loyer max CC',
      budget1: 850,
      budget1Suffix: '€/mois',
      budget2Label: 'Budget frais & dépôt',
      budget2: 2500,
      nextMissionId: 28,
      prestataires: [
        {
          id: 1, nom: 'Timonia', type: 'timonia', avatar: '⭐',
          email: 'contact@timonia.fr', tel: '+33 1 XX XX XX XX', specialite: 'Accompagnement immobilier',
          missions: ['Préparation dossier', 'Vérif. aides', 'Dépôt dossiers visites', 'Signature bail'],
          coutEngage: 500, coutPrev: 350,
        },
      ],
      notes: [
        { id: 1, text: 'Visite appart rue Garibaldi — très lumineux, bon état général. Propriétaire réactif. À rappeler avant vendredi.', date: '2026-01-22T14:32:00' },
        { id: 2, text: 'Dossier CAF envoyé. En attente confirmation sous 15 jours.', date: '2026-01-16T09:15:00' },
      ],
      nextNoteId: 3,
      missions: [
        { id:1,  name:'Définition des besoins',                          type:'mission',    date:J(0),  prix:100,  delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:2,  name:'Définition du budget et cahier des charges',       type:'mission',    date:J(3),  prix:100,  delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:3,  name:'Préparation du dossier locataire',                 type:'mission',    date:J(7),  prix:200,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:4,  name:'💰 Vérif. éligibilité Visale',                    type:'aide',       date:J(7),  prix:150,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:5,  name:'🎁 Demande Visale — Garantie loyers impayés',     type:'subvention', date:J(10), prix:0,    delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:6,  name:'💰 Vérif. éligibilité Loca-Pass',                type:'aide',       date:J(7),  prix:150,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:7,  name:'🏦 Demande Loca-Pass — Prêt 0% dépôt garantie',  type:'subvention', date:J(10), prix:0,    delegation:'self',    delegatee:'', done:false, validated:false },
        { id:8,  name:'💰 Vérif. éligibilité APL/ALS CAF',              type:'aide',       date:J(7),  prix:150,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:9,  name:'🎁 Demande APL/ALS auprès de la CAF',            type:'subvention', date:J(14), prix:0,    delegation:'self',    delegatee:'', done:false, validated:false },
        { id:10, name:'💰 Vérif. éligibilité prime déménagement CAF',   type:'aide',       date:J(7),  prix:150,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:11, name:'🎁 Dépôt dossier prime déménagement CAF (1 309 €)', type:'subvention', date:J(14), prix:1309, delegation:'self', delegatee:'', done:true,  validated:false },
        { id:12, name:'Vérification conformité bail (loi ALUR)',          type:'mission',    date:J(9),  prix:150,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:13, name:'Vérification DPE fourni par le propriétaire',      type:'mission',    date:J(9),  prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:14, name:'Recherche des logements',                          type:'mission',    date:J(7),  prix:200,  delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:15, name:'Dépôt des dossiers pour demande de visites',       type:'mission',    date:J(14), prix:200,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:16, name:'Visites',                                          type:'mission',    date:J(21), prix:200,  delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:17, name:'Dossier accepté',                                  type:'mission',    date:J(30), prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:18, name:'Signature du bail',                                type:'mission',    date:J(35), prix:200,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:19, name:'Versement caution et loyer',                       type:'mission',    date:J(35), prix:100,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:20, name:'Prise d\'une assurance habitation',                type:'mission',    date:J(35), prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:21, name:'Mise en place abonnement Enedis',                  type:'mission',    date:J(38), prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:22, name:'Mise en place abonnement eau',                     type:'mission',    date:J(38), prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:23, name:'Mise en place abonnement internet/box',            type:'mission',    date:J(38), prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:24, name:'Entrée dans les lieux',                            type:'mission',    date:J(44), prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:25, name:'État des lieux contradictoire si besoin (sous 10j)', type:'mission', date:J(54), prix:150,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:26, name:'Déclaration nouveau logement (impôts / CAF / Sécu)', type:'mission', date:J(55), prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:27, name:'🤝 Accompagnement gestion de projet Timonia',      type: user.partenaire ? 'subvention' : 'mission', date:J(0), prix: user.partenaire ? 0 : 190, delegation:'timonia', delegatee:'', done:false, validated:false },
      ],
      documents: {
        sections: [
          {
            title: 'Documents à fournir (dossier locataire)',
            items: [
              { id:1,  name:'Pièce d\'identité (recto/verso)',         status:'todo' },
              { id:2,  name:'3 derniers bulletins de salaire',          status:'done' },
              { id:3,  name:'Dernier avis d\'imposition',               status:'done' },
              { id:4,  name:'Contrat de travail / promesse d\'embauche',status:'done' },
              { id:5,  name:'RIB',                                      status:'todo' },
              { id:6,  name:'Justificatif de domicile actuel',          status:'todo' },
              { id:7,  name:'Attestation employeur',                    status:'todo' },
              { id:8,  name:'3 derniers relevés bancaires',             status:'todo' },
            ],
          },
          {
            title: 'Documents à recevoir',
            items: [
              { id:9,  name:'Bail signé',                               status:'waiting' },
              { id:10, name:'État des lieux d\'entrée',                 status:'waiting' },
              { id:11, name:'Attestation Visale',                       status:'done' },
              { id:12, name:'Quittance dépôt de garantie',              status:'waiting' },
              { id:13, name:'DPE du logement',                          status:'waiting' },
              { id:14, name:'Règlement de copropriété',                 status:'waiting' },
              { id:15, name:'Attestation assurance habitation',         status:'waiting' },
              { id:16, name:'Confirmation APL/ALS CAF',                 status:'waiting' },
              { id:17, name:'Confirmation prime déménagement CAF',      status:'waiting' },
            ],
          },
        ],
        nextDocId: 18,
        uploaded: [],
      },
    },

    /* ── MISE EN VENTE ── */
    vente: {
      type: 'vente',
      description: 'Mise en vente appartement 65m² — Bordeaux Chartrons',
      objectif: 'Vendre avant juillet 2026 pour financer le prochain achat',
      adresse: '14 rue Notre-Dame, 33000 Bordeaux',
      deadline: '2026-07-01',
      budget1Label: null,
      budget1: 0,
      budget2Label: 'Budget frais & prestations',
      budget2: 8000,
      nextMissionId: 25,
      prestataires: [
        {
          id: 1, nom: 'Timonia', type: 'timonia', avatar: '⭐',
          email: 'contact@timonia.fr', tel: '+33 1 XX XX XX XX', specialite: 'Accompagnement immobilier',
          missions: ['Estimation', 'Diagnostics', 'Annonce', 'Suivi compromis', 'Coordination notaire'],
          coutEngage: 950, coutPrev: 2150,
        },
        {
          id: 2, nom: 'Diag Express', type: 'other', avatar: '🔧',
          email: 'contact@diagexpress.fr', tel: '05 56 XX XX XX', specialite: 'Diagnostics immobiliers',
          missions: ['Diagnostics obligatoires (DDT complet)'],
          coutEngage: 500, coutPrev: 0,
        },
      ],
      notes: [
        { id: 1, text: 'Acheteur potentiel — famille avec 2 enfants, financement en cours. Accord de principe banque reçu. RDV compromis semaine prochaine.', date: '2026-02-20T16:45:00' },
        { id: 2, text: 'Photos réalisées par photographe pro. Très bon résultat. Annonce mise en ligne sur SeLoger et LeBonCoin.', date: '2026-01-19T11:20:00' },
      ],
      nextNoteId: 3,
      missions: [
        { id:1,  name:'Estimation du prix de vente',                      type:'mission', date:'2026-01-05', prix:250,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:2,  name:'Récupération du titre de propriété',               type:'mission', date:'2026-01-05', prix:50,   delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:3,  name:'Vérification absence d\'hypothèque',               type:'mission', date:'2026-01-08', prix:150,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:4,  name:'💰 Vérif. éligibilité exonération plus-value',    type:'aide',    date:'2026-01-08', prix:200,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:5,  name:'🎁 Dépôt dossier exonération plus-value',         type:'subvention', date:'2026-02-05', prix:500, delegation:'self',  delegatee:'', done:false, validated:false },
        { id:6,  name:'💰 Vérif. éligibilité abattement fiscal',         type:'aide',    date:'2026-01-08', prix:200,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:7,  name:'Calcul de la plus-value et impôt éventuel',        type:'mission', date:'2026-01-08', prix:200,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:8,  name:'Préparation et home staging',                      type:'mission', date:'2026-01-12', prix:500,  delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:9,  name:'Réalisation diagnostics obligatoires (DDT complet)',type:'mission', date:'2026-01-15', prix:500, delegation:'other',   delegatee:'Diag Express', done:true, validated:true },
        { id:10, name:'Rédaction annonce et photos pro',                   type:'mission', date:'2026-01-19', prix:250,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:11, name:'Publication de l\'annonce',                         type:'mission', date:'2026-01-22', prix:50,   delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:12, name:'Vérification financement avant visites',            type:'mission', date:'2026-01-29', prix:150,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:13, name:'Visites',                                           type:'mission', date:'2026-02-02', prix:300,  delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:14, name:'Réception et analyse des offres',                   type:'mission', date:'2026-02-16', prix:200,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:15, name:'Vérification financement avant acceptation offre',  type:'mission', date:'2026-02-16', prix:150,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:16, name:'Acceptation d\'une offre',                          type:'mission', date:'2026-02-23', prix:100,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:17, name:'Signature du compromis de vente',                   type:'mission', date:'2026-03-02', prix:900,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:18, name:'Suivi période de rétractation',                     type:'mission', date:'2026-03-12', prix:200,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:19, name:'Coordination notaire',                              type:'mission', date:'2026-03-17', prix:500,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:20, name:'Signature de l\'acte authentique',                  type:'mission', date:'2026-04-05', prix:750,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:21, name:'Remise des clés',                                   type:'mission', date:'2026-04-10', prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:22, name:'Remboursement anticipé prêt si besoin',             type:'mission', date:'2026-04-10', prix:100,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:23, name:'🤝 Accompagnement gestion de projet Timonia',       type: user.partenaire ? 'subvention' : 'mission', date:'2026-01-05', prix: user.partenaire ? 0 : 190, delegation:'timonia', delegatee:'', done:false, validated:false },
      ],
      documents: {
        sections: [
          {
            title: 'Documents du bien',
            items: [
              { id:1, name:'Titre de propriété',              status:'done' },
              { id:2, name:'DDT complet (élec, gaz, amiante, plomb)', status:'done' },
              { id:3, name:'DPE',                             status:'done' },
              { id:4, name:'Règlement de copropriété',        status:'done' },
              { id:5, name:'PV AG des 3 dernières années',    status:'todo' },
              { id:6, name:'Relevé charges copropriété',      status:'todo' },
              { id:7, name:'Taxe foncière dernière année',    status:'todo' },
            ],
          },
          {
            title: 'Documents financiers',
            items: [
              { id:8,  name:'Tableau d\'amortissement prêt en cours', status:'todo' },
              { id:9,  name:'Attestation remboursement anticipé',      status:'waiting' },
              { id:10, name:'Calcul plus-value et impôt',              status:'waiting' },
              { id:11, name:'Attestation exonération plus-value',      status:'waiting' },
            ],
          },
          {
            title: 'Documents contractuels',
            items: [
              { id:12, name:'Compromis de vente signé',        status:'waiting' },
              { id:13, name:'Acte authentique de vente',       status:'waiting' },
              { id:14, name:'Attestation de vente notaire',    status:'waiting' },
            ],
          },
        ],
        nextDocId: 15,
        uploaded: [],
      },
    },

    /* ── RÉNOVATION ── */
    renovation: {
      type: 'renovation',
      description: 'Rénovation énergétique maison 90m² — Toulouse',
      objectif: 'Passer de l\'étiquette E à B pour mise en location LMNP',
      adresse: '8 allée des Roses, 31000 Toulouse',
      deadline: '2026-05-15',
      budget1Label: 'Budget travaux total',
      budget1: 25000,
      budget2Label: null,
      budget2: 0,
      nextMissionId: 32,
      prestataires: [
        {
          id: 1, nom: 'Timonia', type: 'timonia', avatar: '⭐',
          email: 'contact@timonia.fr', tel: '+33 1 XX XX XX XX', specialite: 'Accompagnement & aides',
          missions: ['Estimation budget', 'Vérif. aides', 'Validation artisans', 'Suivi chantier'],
          coutEngage: 750, coutPrev: 500,
        },
        {
          id: 2, nom: 'Elec Martin', type: 'other', avatar: '⚡',
          email: 'martin.elec@gmail.com', tel: '06 12 34 56 78', specialite: 'Électricité RGE',
          missions: ['Travaux électricité'],
          coutEngage: 3450, coutPrev: 0,
        },
        {
          id: 3, nom: 'Thermo Rénov', type: 'other', avatar: '🏗️',
          email: 'contact@thermobrenov.fr', tel: '05 61 XX XX XX', specialite: 'Isolation & chauffage RGE',
          missions: ['Isolation combles', 'Pompe à chaleur'],
          coutEngage: 0, coutPrev: 12000,
        },
      ],
      notes: [
        { id: 1, text: 'Dossier MaPrimeRénov\' déposé en ligne. Numéro de dossier : MPR-2026-XXXXX. Délai traitement estimé : 3 semaines.', date: '2026-01-19T10:30:00' },
        { id: 2, text: 'Elec Martin retenu — meilleur rapport qualité/prix. Décennale vérifiée. Certification RGE valide jusqu\'en 2027.', date: '2026-02-02T15:20:00' },
      ],
      nextNoteId: 3,
      missions: [
        { id:1,  name:'Définition du projet et des travaux',              type:'mission',    date:'2026-01-05', prix:200,  delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:2,  name:'Estimation du budget travaux',                     type:'mission',    date:'2026-01-12', prix:200,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:3,  name:'💰 Vérif. éligibilité MaPrimeRénov\'',           type:'aide',       date:'2026-01-12', prix:250,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:4,  name:'🎁 Dépôt dossier MaPrimeRénov\' (4 200 €)',      type:'subvention', date:'2026-01-19', prix:4200, delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:5,  name:'💰 Vérif. éligibilité Éco-PTZ',                  type:'aide',       date:'2026-01-12', prix:250,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:6,  name:'🎁 Dépôt dossier Éco-PTZ (2 000 €)',             type:'subvention', date:'2026-01-26', prix:2000, delegation:'self',    delegatee:'', done:false, validated:false },
        { id:7,  name:'💰 Vérif. éligibilité CEE',                      type:'aide',       date:'2026-01-12', prix:250,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:8,  name:'🎁 Dépôt dossier CEE (1 500 €)',                 type:'subvention', date:'2026-01-26', prix:1500, delegation:'self',    delegatee:'', done:false, validated:false },
        { id:9,  name:'💰 Vérif. éligibilité Aide Action Logement travaux', type:'aide',  date:'2026-01-12', prix:250,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:10, name:'🎁 Dépôt dossier Aide Action Logement travaux',   type:'subvention', date:'2026-01-26', prix:500, delegation:'self',    delegatee:'', done:false, validated:false },
        { id:11, name:'Prise de photos avant travaux',                    type:'mission',    date:'2026-01-19', prix:50,   delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:12, name:'Recherche artisans RGE & mise en concurrence',     type:'mission',    date:'2026-01-19', prix:300,  delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:13, name:'Vérification décennales des artisans',             type:'mission',    date:'2026-01-26', prix:150,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:14, name:'Obtention des devis',                              type:'mission',    date:'2026-01-26', prix:100,  delegation:'self',    delegatee:'', done:true,  validated:false },
        { id:15, name:'Validation des artisans',                          type:'mission',    date:'2026-02-02', prix:200,  delegation:'timonia', delegatee:'', done:true,  validated:false },
        { id:16, name:'Travaux électricité — Elec Martin',                type:'mission',    date:'2026-02-09', prix:3450, delegation:'other',   delegatee:'Elec Martin', done:true, validated:true },
        { id:17, name:'Isolation combles & PAC — Thermo Rénov',          type:'mission',    date:'2026-03-01', prix:12000,delegation:'other',   delegatee:'Thermo Rénov', done:false, validated:true },
        { id:18, name:'Suivi du chantier',                                type:'mission',    date:'2026-02-09', prix:500,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:19, name:'Suivi paiements échelonnés artisans',              type:'mission',    date:'2026-02-09', prix:150,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:20, name:'Paiement des artisans',                            type:'mission',    date:'2026-02-09', prix:100,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:21, name:'Réception des travaux',                            type:'mission',    date:'2026-04-25', prix:200,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:22, name:'Prise de photos après travaux',                    type:'mission',    date:'2026-04-25', prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:23, name:'Transmission justificatifs déblocage aides',       type:'mission',    date:'2026-04-30', prix:100,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:24, name:'Conservation factures (aides et garanties)',       type:'mission',    date:'2026-04-30', prix:50,   delegation:'self',    delegatee:'', done:false, validated:false },
        { id:25, name:'Levée des réserves',                               type:'mission',    date:'2026-05-05', prix:150,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:26, name:'Mise à jour DPE après travaux',                    type:'mission',    date:'2026-05-10', prix:200,  delegation:'other',   delegatee:'', done:false, validated:false },
        { id:27, name:'Bilan final et clôture du chantier',               type:'mission',    date:'2026-05-15', prix:100,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:28, name:'Vérification assurance dommages-ouvrage',          type:'mission',    date:'2026-02-02', prix:150,  delegation:'timonia', delegatee:'', done:false, validated:false },
        { id:29, name:'Demande permis / déclaration préalable',           type:'mission',    date:'2026-02-02', prix:200,  delegation:'self',    delegatee:'', done:false, validated:false },
        { id:30, name:'🤝 Accompagnement gestion de projet Timonia',      type: user.partenaire ? 'subvention' : 'mission', date:'2026-01-05', prix: user.partenaire ? 0 : 190, delegation:'timonia', delegatee:'', done:false, validated:false },
      ],
      documents: {
        sections: [
          {
            title: 'Documents administratifs',
            items: [
              { id:1, name:'Titre de propriété',                     status:'done' },
              { id:2, name:'Permis de construire / déclaration préalable', status:'waiting' },
              { id:3, name:'Autorisation copropriété si besoin',     status:'todo' },
            ],
          },
          {
            title: 'Documents artisans',
            items: [
              { id:4, name:'Devis Elec Martin — Électricité',         status:'done' },
              { id:5, name:'Devis Thermo Rénov — Isolation & PAC',    status:'done' },
              { id:6, name:'Attestation décennale Elec Martin',        status:'done' },
              { id:7, name:'Attestation décennale Thermo Rénov',       status:'done' },
              { id:8, name:'Factures travaux électricité',             status:'done' },
              { id:9, name:'Factures travaux isolation & PAC',         status:'waiting' },
            ],
          },
          {
            title: 'Documents aides',
            items: [
              { id:10, name:'Dossier MaPrimeRénov\' déposé',          status:'done' },
              { id:11, name:'Attestation MaPrimeRénov\' obtenue',      status:'waiting' },
              { id:12, name:'Dossier Éco-PTZ déposé',                  status:'waiting' },
              { id:13, name:'Dossier CEE déposé',                      status:'waiting' },
              { id:14, name:'Dossier Aide Action Logement déposé',     status:'waiting' },
            ],
          },
          {
            title: 'Documents de réception',
            items: [
              { id:15, name:'Photos avant travaux',                    status:'done' },
              { id:16, name:'Photos après travaux',                    status:'waiting' },
              { id:17, name:'PV de réception des travaux',             status:'waiting' },
              { id:18, name:'DPE mis à jour après travaux',            status:'waiting' },
              { id:19, name:'Attestation assurance dommages-ouvrage',  status:'waiting' },
            ],
          },
        ],
        nextDocId: 20,
        uploaded: [],
      },
    },
  };

  // Return only the project matching user's type
  return ALL[user.projetType] || ALL['location'];
}

/* ═══════════════════════════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════════════════════════ */
let currentUser = null;
let project = null;
let detailOpen = false;

/* ═══════════════════════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  currentUser = authRequire();
  if (!currentUser) return;
  project = buildDemoProjects(currentUser);
  renderNavbar();
  renderProjectHeader();
  renderTabs();
  renderBilan();
  renderMissions();
  renderPrestataires();
  renderDocuments();
  renderNotes();
});

/* ═══════════════════════════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════════════════════════ */
function renderNavbar() {
  const u = currentUser;
  document.getElementById('navAvatar').textContent = u.avatar;
  document.getElementById('navName').textContent = `${u.prenom} ${u.nom}`;
  document.getElementById('navCompany').textContent = u.entreprise || 'Sans entreprise partenaire';
  const badge = document.getElementById('navBadge');
  if (u.partenaire) {
    badge.textContent = '👔 Entreprise partenaire';
    badge.style.display = 'inline-flex';
  } else {
    badge.textContent = '👤 Sans partenaire';
    badge.style.background = 'rgba(132,148,184,0.1)';
    badge.style.color = '#8494b8';
    badge.style.border = '1px solid rgba(132,148,184,0.2)';
    badge.style.display = 'inline-flex';
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   PROJECT HEADER
   ═══════════════════════════════════════════════════════════════════════════ */
function renderProjectHeader() {
  const p = project;
  const cfg = TYPE_CONFIG[p.type] || TYPE_CONFIG.autre;
  const total = p.missions.length;
  const done = p.missions.filter(m => m.done).length;
  const pct = total ? Math.round(done / total * 100) : 0;

  document.getElementById('projBadge').textContent = `${cfg.emoji} ${cfg.label}`;
  document.getElementById('projTitle').textContent = p.description;
  document.getElementById('projAdresse').textContent = p.adresse || '—';
  document.getElementById('projObjectif').textContent = p.objectif || '—';
  document.getElementById('projDeadline').textContent = fmtDeadline(p.deadline);
  document.getElementById('projProgressPct').textContent = `${done}/${total} missions · ${pct}%`;
  document.getElementById('projProgressFill').style.width = pct + '%';
}

/* ═══════════════════════════════════════════════════════════════════════════
   TABS
   ═══════════════════════════════════════════════════════════════════════════ */
function switchTab(tabId) {
  document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(t => t.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function renderTabs() {
  document.querySelectorAll('.dash-tab').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   FINANCE CALCULATIONS
   ═══════════════════════════════════════════════════════════════════════════ */
function calcFinance() {
  const p = project;
  let coutEngage = 0, coutPrev = 0;
  let economieSelf = 0, economiePrev = 0;
  let aideObtenue = 0, aidePrev = 0;
  let servicesObtained = [], servicesPrev = [];

  p.missions.forEach(m => {
    if (m.type === 'subvention') {
      // Check if it's a real financial benefit or a service
      if (m.prix > 0) {
        if (m.done) aideObtenue += m.prix;
        else aidePrev += m.prix;
      } else {
        if (m.done) servicesObtained.push(m);
        else servicesPrev.push(m);
      }
    } else if (m.type === 'aide') {
      // Verification cost
      if (m.delegation !== 'self') {
        if (m.done) coutEngage += m.prix || 0;
        else coutPrev += m.prix || 0;
      } else {
        if (m.done) economieSelf += m.prix || 0;
        else economiePrev += m.prix || 0;
      }
    } else {
      // Standard mission
      if (m.delegation !== 'self') {
        if (m.done) coutEngage += m.prix || 0;
        else coutPrev += m.prix || 0;
      } else {
        if (m.done) economieSelf += m.prix || 0;
        else economiePrev += m.prix || 0;
      }
    }
  });

  const totalCout = coutEngage + coutPrev;
  const totalEconomie = economieSelf + economiePrev;
  const totalAide = aideObtenue + aidePrev;
  const totalGain = economieSelf + aideObtenue;
  const totalGainPrev = economiePrev + aidePrev;

  return {
    coutEngage, coutPrev, totalCout,
    economieSelf, economiePrev, totalEconomie,
    aideObtenue, aidePrev, totalAide,
    totalGain, totalGainPrev,
    servicesObtained, servicesPrev,
  };
}

function getBudget() {
  return (project.budget1 || 0) + (project.budget2 || 0);
}

/* ═══════════════════════════════════════════════════════════════════════════
   BILAN TAB
   ═══════════════════════════════════════════════════════════════════════════ */
function renderBilan() {
  if (!currentUser.partenaire) {
    renderLockedBilan();
    return;
  }

  const p = project;
  const f = calcFinance();
  const budget = getBudget();
  const pctBudget = budget > 0 ? Math.min(Math.round(f.totalCout / budget * 100), 100) : 0;
  const restant = budget - f.totalCout;

  const wrap = document.getElementById('bilanContent');
  wrap.innerHTML = '';

  // ── Budget card ──
  const b1 = p.budget1 > 0 ? `
    <div style="margin-bottom:12px">
      <div class="summary-label" style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--muted);margin-bottom:4px">${p.budget1Label}</div>
      <div style="font-family:'Lora',serif;font-size:20px;font-weight:600;color:var(--text)">${p.budget1.toLocaleString('fr-FR')} ${p.budget1Suffix || '€'}</div>
    </div>` : '';

  const b2 = p.budget2 > 0 ? `
    <div class="budget-amount-row">
      <div>
        <div style="font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--muted);margin-bottom:4px">${p.budget2Label}</div>
        <div class="budget-amount" id="budgetDisplay">${p.budget2.toLocaleString('fr-FR')} €</div>
      </div>
      <button class="budget-edit-btn" onclick="editBudget()">✏️ Modifier</button>
    </div>` : '';

  const budgetCard = document.createElement('div');
  budgetCard.className = 'budget-card';
  budgetCard.innerHTML = `
    <div class="budget-card-title">Budget du projet</div>
    ${b1}
    ${b2}
    ${budget > 0 ? `
    <div style="margin-top:14px">
      <div class="budget-progress-label">
        <span>${pctBudget}% engagé</span>
        <span>${f.totalCout.toLocaleString('fr-FR')} € / ${budget.toLocaleString('fr-FR')} €</span>
      </div>
      <div class="budget-progress-bar">
        <div class="budget-progress-fill ${pctBudget < 80 ? 'green' : pctBudget < 100 ? 'orange' : 'red'}"
          style="width:${pctBudget}%"></div>
      </div>
      <div class="budget-restant">
        <div class="budget-restant-label">Budget restant</div>
        <div class="budget-restant-value" style="color:${restant >= 0 ? 'var(--green)' : 'var(--red)'}">
          ${restant >= 0 ? '' : '- '}${Math.abs(restant).toLocaleString('fr-FR')} € ${restant >= 0 ? '🟢' : '🔴'}
        </div>
      </div>
    </div>` : ''}
  `;
  wrap.appendChild(budgetCard);

  // ── Synthèse card ──
  const syntheseCard = document.createElement('div');
  syntheseCard.className = 'synthese-card';
  syntheseCard.innerHTML = `
    <div class="synthese-row">
      <div>
        <div class="synthese-label">Ce projet vous coûte</div>
        <div class="synthese-sub">Missions déléguées (réalisées + à venir)</div>
      </div>
      <div class="synthese-value cost">− ${f.totalCout.toLocaleString('fr-FR')} €</div>
    </div>
    <div class="synthese-row">
      <div>
        <div class="synthese-label">Vous avez économisé</div>
        <div class="synthese-sub">Missions faites vous-même</div>
      </div>
      <div class="synthese-value saving">+ ${f.totalEconomie.toLocaleString('fr-FR')} €</div>
    </div>
    <div class="synthese-row">
      <div>
        <div class="synthese-label">Vous avez bénéficié</div>
        <div class="synthese-sub">Aides financières obtenues + à venir</div>
      </div>
      <div class="synthese-value benefit">+ ${f.totalAide.toLocaleString('fr-FR')} €</div>
    </div>
    ${f.servicesObtained.length + f.servicesPrev.length > 0 ? `
    <div class="services-row" onclick="toggleDetail()">
      <div>
        <div class="synthese-label">Services obtenus</div>
        <div class="synthese-sub">Garanties & facilités de trésorerie</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="services-count">${f.servicesObtained.length + f.servicesPrev.length}</div>
        <span style="font-size:12px;color:var(--muted)">Voir ▼</span>
      </div>
    </div>` : ''}
  `;
  wrap.appendChild(syntheseCard);

  // ── Équivalent / Trophy card ──
  const totalGain = f.totalEconomie + f.totalAide;
  if (totalGain > 0) {
    const equiv = getEquivalent(totalGain, project.type);
    const equivCard = document.createElement('div');
    equivCard.className = 'equiv-card';
    equivCard.innerHTML = `
      <div class="equiv-trophy">🏆</div>
      <div class="equiv-title">Votre gain total estimé</div>
      <div class="equiv-amount">+ ${totalGain.toLocaleString('fr-FR')} €</div>
      <div class="equiv-sub">${equiv.line1}<br>${equiv.line2}</div>
      ${currentUser.partenaire ? '<div class="equiv-note">💡 Grâce à votre entreprise partenaire, ces aides ont été identifiées et obtenues pour vous.</div>' : ''}
    `;
    wrap.appendChild(equivCard);
  }

  // ── Toggle detail ──
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'detail-toggle';
  toggleBtn.id = 'detailToggle';
  toggleBtn.onclick = toggleDetail;
  toggleBtn.textContent = '▼ Voir le détail complet';
  wrap.appendChild(toggleBtn);

  // ── Detail panel ──
  const detailPanel = document.createElement('div');
  detailPanel.className = 'detail-panel';
  detailPanel.id = 'detailPanel';
  detailPanel.innerHTML = buildDetailHTML(f);
  wrap.appendChild(detailPanel);
}

function getEquivalent(amount, type) {
  if (type === 'location') {
    const months = Math.round(amount / (project.budget1 || 800));
    return { line1: `≈ ${months} mois de loyer CC économisés`, line2: `ou ${Math.round(amount / 50)} mois d'abonnement internet + téléphone` };
  } else if (type === 'vente') {
    return { line1: `≈ économie vs agence classique à 4%`, line2: `soit l'équivalent de ${Math.round(amount / 2400)} mois de salaire net moyen` };
  } else if (type === 'renovation') {
    return { line1: `≈ aides récupérées grâce à Timonia`, line2: `soit ${Math.round(amount / 350)} mois de remboursement de prêt` };
  }
  return { line1: `≈ ${Math.round(amount / 50)} mois d'abonnements`, line2: `économisés grâce à Timonia` };
}

function buildDetailHTML(f) {
  return `
  <div class="detail-section">
    <div class="detail-section-title">💸 Dépenses</div>
    <div class="detail-line">
      <div class="detail-line-name">Engagées (réalisées)<div class="detail-sub">Missions déléguées terminées</div></div>
      <div class="detail-line-amount cost">− ${f.coutEngage.toLocaleString('fr-FR')} €</div>
    </div>
    <div class="detail-line">
      <div class="detail-line-name">Prévisionnelles (à venir)<div class="detail-sub">Missions déléguées restantes</div></div>
      <div class="detail-line-amount cost">− ${f.coutPrev.toLocaleString('fr-FR')} €</div>
    </div>
    <div class="detail-total-line">
      <span>Total dépenses</span>
      <span class="detail-line-amount cost">− ${f.totalCout.toLocaleString('fr-FR')} €</span>
    </div>
  </div>
  <div class="detail-section">
    <div class="detail-section-title">💪 Économies (missions faites vous-même)</div>
    <div class="detail-line">
      <div class="detail-line-name">Réalisées<div class="detail-sub">Missions "Je fais" terminées</div></div>
      <div class="detail-line-amount saving">+ ${f.economieSelf.toLocaleString('fr-FR')} €</div>
    </div>
    <div class="detail-line">
      <div class="detail-line-name">À venir<div class="detail-sub">Missions "Je fais" restantes</div></div>
      <div class="detail-line-amount saving">+ ${f.economiePrev.toLocaleString('fr-FR')} €</div>
    </div>
    <div class="detail-total-line">
      <span>Total économisé</span>
      <span class="detail-line-amount saving">+ ${f.totalEconomie.toLocaleString('fr-FR')} €</span>
    </div>
  </div>
  <div class="detail-section">
    <div class="detail-section-title">🎁 Aides financières</div>
    <div class="detail-line">
      <div class="detail-line-name">Obtenues<div class="detail-sub">Aides débloquées</div></div>
      <div class="detail-line-amount benefit">+ ${f.aideObtenue.toLocaleString('fr-FR')} €</div>
    </div>
    <div class="detail-line">
      <div class="detail-line-name">À obtenir<div class="detail-sub">Dossiers en cours</div></div>
      <div class="detail-line-amount benefit">+ ${f.aidePrev.toLocaleString('fr-FR')} €</div>
    </div>
    <div class="detail-total-line">
      <span>Total aides</span>
      <span class="detail-line-amount benefit">+ ${f.totalAide.toLocaleString('fr-FR')} €</span>
    </div>
  </div>
  ${f.servicesObtained.length + f.servicesPrev.length > 0 ? `
  <div class="detail-section">
    <div class="detail-section-title">✅ Services & subventions</div>
    ${[...f.servicesObtained, ...f.servicesPrev].map(s => `
      <div class="detail-service-item">
        <div class="detail-service-icon">${s.done ? '✅' : '⏳'}</div>
        <div>
          <div class="detail-service-name">${s.name.replace('🎁 ', '').replace('🏦 ', '').replace('🤝 ', '')}</div>
          <div class="detail-service-desc">${s.done ? 'Obtenu' : 'En cours'} · Gratuit${s.delegation === 'timonia' ? ' · Accompagné par Timonia' : ''}</div>
        </div>
      </div>`).join('')}
  </div>` : ''}
  `;
}

function toggleDetail() {
  detailOpen = !detailOpen;
  const panel = document.getElementById('detailPanel');
  const btn = document.getElementById('detailToggle');
  if (panel) panel.classList.toggle('open', detailOpen);
  if (btn) btn.textContent = detailOpen ? '▲ Masquer le détail' : '▼ Voir le détail complet';
}

function editBudget() {
  const display = document.getElementById('budgetDisplay');
  if (!display) return;
  const input = document.createElement('input');
  input.type = 'number';
  input.className = 'budget-edit-input';
  input.value = project.budget2;
  input.onblur = () => {
    project.budget2 = parseFloat(input.value) || 0;
    renderBilan();
  };
  input.onkeydown = e => { if (e.key === 'Enter') input.blur(); };
  display.replaceWith(input);
  input.focus();
}

function renderLockedBilan() {
  const wrap = document.getElementById('bilanContent');
  wrap.innerHTML = `
    <div class="locked-cta">
      <div class="locked-icon">🔒</div>
      <div class="locked-title">Accédez à votre bilan financier complet</div>
      <div class="locked-desc">
        Nos experts ont identifié toutes les aides financières et les économies possibles pour votre projet.
        Sans accompagnement, ces aides passent souvent inaperçues.
      </div>
      <button class="btn btn-primary" onclick="alert('Redirection vers les offres Timonia...')">
        Démarrer mon accompagnement — 190 €/mois →
      </button>
      <div class="locked-note">💡 Votre entreprise est peut-être partenaire — premier appel offert !</div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════════════════════
   MISSIONS TAB
   ═══════════════════════════════════════════════════════════════════════════ */
function renderMissions() {
  if (!currentUser.partenaire) {
    renderLockedMissions();
    return;
  }
  renderMissionList();
  renderMissionTimeline();
}

function renderLockedMissions() {
  document.getElementById('missionsContent').innerHTML = `
    <div style="filter:blur(5px);pointer-events:none;user-select:none;opacity:0.35;margin-bottom:-80px">
      <table class="mission-table" style="width:100%">
        ${[1,2,3,4,5].map(i => `<tr><td style="padding:12px"><div style="height:14px;background:var(--surf3);border-radius:4px;width:${60+i*8}%"></div></td></tr>`).join('')}
      </table>
    </div>
    <div class="locked-cta">
      <div class="locked-icon">🔒</div>
      <div class="locked-title">Débloquez votre checklist complète</div>
      <div class="locked-desc">
        ${project.missions.length} étapes identifiées par nos experts pour votre projet —
        aides financières incluses. Sans accompagnement, ces étapes et aides passent souvent inaperçues.
      </div>
      <button class="btn btn-primary" onclick="alert('Redirection...')">Démarrer — 190 €/mois →</button>
      <button class="btn btn-outline" style="margin-top:10px" onclick="alert('Vérification...')">Mon entreprise est peut-être partenaire ?</button>
      <div class="locked-note">💡 Si votre entreprise souscrit, votre accès devient gratuit.</div>
    </div>
  `;
}

function renderMissionList() {
  const tbody = document.getElementById('missionBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  const sorted = [...project.missions].sort((a,b) => (a.date||'zz') > (b.date||'zz') ? 1 : -1);

  sorted.forEach(m => {
    const tr = document.createElement('tr');
    tr.className = 'mission-row' + (m.done ? ' done' : '');
    const typeInfo = MISSION_TYPES[m.type] || MISSION_TYPES.mission;
    const priceClass = m.type === 'subvention' ? 'price-benefit' : m.delegation === 'self' ? 'price-saving' : 'price-cost';

    tr.innerHTML = `
      <td>
        <div class="task-check ${m.done?'checked':''}" onclick="toggleMission(${m.id})">
          ${m.done ? '✓' : ''}
        </div>
      </td>
      <td class="mission-name">${m.name}</td>
      <td><span class="type-badge ${typeInfo.color}">${typeInfo.label}</span></td>
      <td>
        <input type="date" class="date-input" value="${m.date||''}"
          onchange="changeDate(${m.id},this.value)">
      </td>
      <td>
        <select class="deleg-select" onchange="changeDeleg(${m.id},this)">
          <option value="self"    ${m.delegation==='self'   ?'selected':''}>✋ Je fais</option>
          <option value="timonia" ${m.delegation==='timonia'?'selected':''}>⭐ Timonia</option>
          <option value="other"   ${m.delegation==='other'  ?'selected':''}>👤 Autre</option>
        </select>
      </td>
      <td>
        <input type="text" class="deleg-input ${m.delegation==='other'?'':'hidden'}"
          value="${m.delegatee||''}" placeholder="Qui ?"
          onchange="changeDelegatee(${m.id},this.value)">
        ${m.delegation==='timonia'&&!m.done?'<span style="font-size:11px;color:var(--accent)">⭐ Timonia</span>':''}
        ${m.delegation==='self'&&!m.done?'<span style="font-size:11px;color:var(--teal)">✋ Moi</span>':''}
      </td>
      <td>
        <input type="number" class="price-input ${m.validated?'validated':'estimated'} ${priceClass}"
          value="${m.prix||0}" min="0"
          onchange="changePrice(${m.id},this.value)"
          title="${m.validated?'Prix validé ✅':'Prix estimatif 💡'}">
      </td>
      <td>
        <button class="btn-row-delete" onclick="deleteMission(${m.id})" title="Supprimer">✕</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function renderMissionTimeline() {
  const wrap = document.getElementById('timelineWrap');
  if (!wrap) return;
  const sorted = [...project.missions].sort((a,b) => (a.date||'zz') > (b.date||'zz') ? 1 : -1);
  const months = {};
  sorted.forEach(m => {
    const key = m.date ? m.date.slice(0,7) : 'sans-date';
    if (!months[key]) months[key] = [];
    months[key].push(m);
  });
  wrap.innerHTML = '';
  Object.entries(months).forEach(([month, missions]) => {
    const div = document.createElement('div');
    div.className = 'timeline-month';
    const label = month === 'sans-date' ? 'Sans date planifiée'
      : new Date(month+'-01').toLocaleDateString('fr-FR',{month:'long',year:'numeric'});
    div.innerHTML = `<div class="timeline-month-label">${label}</div>`;
    missions.forEach((m, i) => {
      const dotColor = m.type === 'subvention' ? 'var(--green)' : m.type === 'aide' ? 'var(--gold)' : m.delegation==='timonia' ? 'var(--accent)' : m.delegation==='self' ? 'var(--teal)' : 'var(--purple)';
      const delegLabel = m.delegation==='timonia' ? '⭐ Timonia' : m.delegation==='self' ? '✋ Moi' : `👤 ${m.delegatee||'Autre'}`;
      const typeInfo = MISSION_TYPES[m.type] || MISSION_TYPES.mission;
      div.innerHTML += `
        <div class="timeline-item">
          <div class="tl-dot-col">
            <div class="tl-dot" style="background:${dotColor};${m.done?'opacity:0.4':''}"></div>
            ${i < missions.length-1 ? '<div class="tl-line"></div>' : ''}
          </div>
          <div class="tl-card" style="${m.done?'opacity:0.55':''}">
            <div class="tl-card-title" style="${m.done?'text-decoration:line-through;color:var(--muted)':''}">
              ${m.done?'✓ ':''}${m.name}
            </div>
            <div class="tl-card-meta">
              <span>${fmtDate(m.date)}</span>
              <span style="color:${dotColor}">${delegLabel}</span>
              <span class="type-badge ${typeInfo.color}" style="font-size:10px">${typeInfo.label}</span>
              ${m.prix>0?`<span style="font-weight:700">${m.prix.toLocaleString('fr-FR')} €</span>`:''}
            </div>
          </div>
        </div>`;
    });
    wrap.appendChild(div);
  });
}

function switchView(view) {
  document.getElementById('listViewWrap').style.display = view==='list' ? 'block' : 'none';
  const tl = document.getElementById('timelineWrap');
  if (tl) tl.className = 'timeline-wrap' + (view==='timeline'?' active':'');
  document.getElementById('viewListBtn').classList.toggle('active', view==='list');
  document.getElementById('viewTlBtn').classList.toggle('active', view==='timeline');
}

/* Mission actions */
function toggleMission(id) {
  const m = project.missions.find(x=>x.id===id);
  if (m) {
    m.done = !m.done;
    renderMissionList();
    renderMissionTimeline();
    renderBilan();
    renderProjectHeader();
  }
}
function changeDate(id, val) {
  const m = project.missions.find(x=>x.id===id);
  if (m) { m.date = val; renderMissionTimeline(); }
}
function changeDeleg(id, sel) {
  const m = project.missions.find(x=>x.id===id);
  if (m) { m.delegation = sel.value; renderMissionList(); renderBilan(); }
}
function changeDelegatee(id, val) {
  const m = project.missions.find(x=>x.id===id);
  if (m) m.delegatee = val;
}
function changePrice(id, val) {
  const m = project.missions.find(x=>x.id===id);
  if (m) { m.prix = parseFloat(val)||0; m.validated = true; renderBilan(); }
}
function deleteMission(id) {
  project.missions = project.missions.filter(x=>x.id!==id);
  renderMissionList(); renderMissionTimeline(); renderBilan(); renderProjectHeader();
}
function addMission() {
  const name = prompt('Nom de la mission :'); if (!name) return;
  const types = Object.keys(MISSION_TYPES);
  const typeChoice = prompt(`Type (${types.join(' / ')}) :`,'mission') || 'mission';
  const prix = parseFloat(prompt('Prix estimatif (€) :','0'))||0;
  project.missions.push({
    id: project.nextMissionId++, name, type: typeChoice in MISSION_TYPES ? typeChoice : 'mission',
    date:'', prix, delegation: prix>0 ? 'timonia' : 'self',
    delegatee:'', done:false, validated:false,
  });
  renderMissionList(); renderMissionTimeline(); renderBilan(); renderProjectHeader();
}

/* ═══════════════════════════════════════════════════════════════════════════
   PRESTATAIRES TAB
   ═══════════════════════════════════════════════════════════════════════════ */
function renderPrestataires() {
  if (!currentUser.partenaire) {
    document.getElementById('prestContent').innerHTML = `<div class="locked-cta"><div class="locked-icon">🔒</div><div class="locked-title">Accès réservé aux membres</div><div class="locked-desc">Le carnet de prestataires est disponible avec l'accompagnement Timonia.</div><button class="btn btn-primary" onclick="alert('Redirection...')">Démarrer — 190 €/mois →</button></div>`;
    return;
  }
  const grid = document.getElementById('prestContent');
  grid.innerHTML = '<div class="prest-grid" id="prestGrid"></div>';
  const g = document.getElementById('prestGrid');

  project.prestataires.forEach(p => {
    const card = document.createElement('div');
    card.className = 'prest-card';
    card.innerHTML = `
      <div class="prest-card-header">
        <div class="prest-avatar ${p.type}">${p.avatar}</div>
        <div>
          <div class="prest-name">${p.nom}</div>
          <div class="prest-type">${p.specialite}</div>
        </div>
      </div>
      <div class="prest-contacts">
        <div class="prest-contact">📧 <a href="mailto:${p.email}">${p.email}</a></div>
        <div class="prest-contact">📞 ${p.tel}</div>
      </div>
      <div class="prest-finance">
        <div class="prest-finance-item">
          <div class="prest-finance-label">Coût engagé</div>
          <div class="prest-finance-value" style="color:var(--red)">${p.coutEngage.toLocaleString('fr-FR')} €</div>
        </div>
        <div class="prest-finance-item">
          <div class="prest-finance-label">Prévisionnel</div>
          <div class="prest-finance-value" style="color:var(--accent)">${p.coutPrev.toLocaleString('fr-FR')} €</div>
        </div>
      </div>
      <div class="prest-missions">
        Missions : ${p.missions.join(' · ')}
      </div>
    `;
    g.appendChild(card);
  });

  const addBtn = document.createElement('button');
  addBtn.className = 'btn-add-prest';
  addBtn.innerHTML = '<div style="font-size:1.5rem">＋</div><div>Ajouter un prestataire</div>';
  addBtn.onclick = () => alert('Formulaire ajout prestataire — à développer');
  g.appendChild(addBtn);
}

/* ═══════════════════════════════════════════════════════════════════════════
   DOCUMENTS TAB
   ═══════════════════════════════════════════════════════════════════════════ */
function renderDocuments() {
  if (!currentUser.partenaire) {
    document.getElementById('docsContent').innerHTML = `<div class="locked-cta"><div class="locked-icon">🔒</div><div class="locked-title">Documents réservés aux membres</div><div class="locked-desc">La checklist documentaire et l'espace de stockage sont disponibles avec l'accompagnement Timonia.</div><button class="btn btn-primary" onclick="alert('Redirection...')">Démarrer — 190 €/mois →</button></div>`;
    return;
  }
  const wrap = document.getElementById('docsContent');
  wrap.innerHTML = '';

  const statusConfig = {
    todo:    { icon: '⬜', label: 'À fournir',   cls: 'doc-status-todo' },
    waiting: { icon: '⏳', label: 'En attente',   cls: 'doc-status-waiting' },
    done:    { icon: '✅', label: 'Reçu',         cls: 'doc-status-done' },
  };

  project.documents.sections.forEach(section => {
    const div = document.createElement('div');
    div.className = 'doc-section';
    div.innerHTML = `<div class="doc-section-title">${section.title}</div><div class="doc-list" id="docList-${section.title.replace(/\s/g,'_')}"></div>`;
    wrap.appendChild(div);

    const list = div.querySelector('.doc-list');
    section.items.forEach(doc => {
      const cfg = statusConfig[doc.status] || statusConfig.todo;
      const item = document.createElement('div');
      item.className = 'doc-item';
      item.innerHTML = `
        <div class="doc-item-status ${cfg.cls}" title="${cfg.label}">${cfg.icon}</div>
        <div class="doc-item-name">${doc.name}</div>
        <div class="doc-item-actions">
          <button class="doc-action-btn" onclick="cycleDocStatus(this,'${section.title}',${doc.id})">
            ${cfg.label}
          </button>
          <button class="doc-action-btn" onclick="alert('Upload de fichier...')">📎</button>
          <button class="doc-action-btn danger" onclick="deleteDoc('${section.title}',${doc.id})">✕</button>
        </div>
      `;
      list.appendChild(item);
    });
  });

  // Upload zone
  const uploadDiv = document.createElement('div');
  uploadDiv.innerHTML = `
    <div class="doc-section">
      <div class="doc-section-title">Documents uploadés</div>
      <button class="btn-add-prest" style="width:100%;margin-top:0" onclick="document.getElementById('fileInput').click()">
        <div style="font-size:1.5rem">📎</div>
        <div>Ajouter un document</div>
      </button>
      <input type="file" id="fileInput" style="display:none" onchange="handleUpload(event)">
      <div id="uploadedList" style="margin-top:12px;display:flex;flex-direction:column;gap:6px"></div>
    </div>`;
  wrap.appendChild(uploadDiv);
  renderUploadedDocs();
}

function cycleDocStatus(btn, sectionTitle, docId) {
  const statuses = ['todo','waiting','done'];
  const section = project.documents.sections.find(s => s.title === sectionTitle);
  const doc = section?.items.find(d => d.id === docId);
  if (doc) {
    const idx = statuses.indexOf(doc.status);
    doc.status = statuses[(idx + 1) % statuses.length];
    renderDocuments();
  }
}

function deleteDoc(sectionTitle, docId) {
  const section = project.documents.sections.find(s => s.title === sectionTitle);
  if (section) {
    section.items = section.items.filter(d => d.id !== docId);
    renderDocuments();
  }
}

function handleUpload(event) {
  const file = event.target.files[0]; if (!file) return;
  project.documents.uploaded.push({ name: file.name, date: new Date().toLocaleDateString('fr-FR') });
  renderUploadedDocs();
  event.target.value = '';
}

function renderUploadedDocs() {
  const list = document.getElementById('uploadedList');
  if (!list) return;
  list.innerHTML = '';
  const icons = { pdf:'📄', xlsx:'📊', xls:'📊', doc:'📝', docx:'📝', jpg:'🖼', png:'🖼', jpeg:'🖼' };
  project.documents.uploaded.forEach(doc => {
    const ext = doc.name.split('.').pop().toLowerCase();
    const div = document.createElement('div');
    div.className = 'doc-item';
    div.innerHTML = `
      <div style="font-size:1.2rem">${icons[ext]||'📎'}</div>
      <div class="doc-item-name">${doc.name}</div>
      <div class="doc-item-actions">
        <span style="font-size:11px;color:var(--muted)">${doc.date}</span>
      </div>`;
    list.appendChild(div);
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   NOTES TAB
   ═══════════════════════════════════════════════════════════════════════════ */
function renderNotes() {
  const list = document.getElementById('notesList');
  if (!list) return;
  list.innerHTML = '';

  if (project.notes.length === 0) {
    list.innerHTML = '<div class="notes-empty">📝 Aucune note pour l\'instant.<br>Commencez à noter vos observations !</div>';
    return;
  }

  const sorted = [...project.notes].sort((a,b) => new Date(b.date) - new Date(a.date));
  sorted.forEach(note => {
    const card = document.createElement('div');
    card.className = 'note-card anim-in';
    card.innerHTML = `
      <div class="note-header">
        <div class="note-timestamp">🕐 ${fmtDateTime(note.date)}</div>
        <button class="note-delete" onclick="deleteNote(${note.id})">✕</button>
      </div>
      <div class="note-text">${escHtml(note.text)}</div>
    `;
    list.appendChild(card);
  });
}

function addNote() {
  const ta = document.getElementById('noteInput');
  const text = ta.value.trim();
  if (!text) return;
  project.notes.push({
    id: project.nextNoteId++,
    text,
    date: new Date().toISOString(),
  });
  ta.value = '';
  renderNotes();
}

function deleteNote(id) {
  project.notes = project.notes.filter(n => n.id !== id);
  renderNotes();
}

// Ctrl+Enter to add note
document.addEventListener('DOMContentLoaded', () => {
  const ta = document.getElementById('noteInput');
  if (ta) {
    ta.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') addNote();
    });
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
   UTILS
   ═══════════════════════════════════════════════════════════════════════════ */
function fmtDeadline(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('fr-FR',{month:'long',year:'numeric'});
}
function fmtDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('fr-FR',{day:'2-digit',month:'short'});
}
function fmtDateTime(d) {
  const date = new Date(d);
  return date.toLocaleDateString('fr-FR',{day:'2-digit',month:'short',year:'numeric'}) +
    ' à ' + date.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
}
function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function toggleDark() {
  document.body.classList.toggle('dark');
  document.getElementById('themeBtn').textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}
