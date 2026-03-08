/* ─── MANDATAIRE.JS ──────────────────────────────────────────────────────── */

/* ── Équipe HIL (pour les selects d'assignation) ── */
const EQUIPE = [
  { id: 'claire',  nom: 'Claire Dupont',   initiales: 'CD', role: 'mandataire' },
  { id: 'marc',    nom: 'Marc Lefevre',    initiales: 'ML', role: 'mandataire' },
  { id: 'sophie',  nom: 'Sophie Arnaud',   initiales: 'SA', role: 'mandataire' },
  { id: 'thomas',  nom: 'Thomas Renard',   initiales: 'TR', role: 'mandataire' },
  { id: 'julie',   nom: 'Julie Martin',    initiales: 'JM', role: 'mandataire' },
  { id: 'admin',   nom: 'Admin HIL',       initiales: 'AH', role: 'admin'      },
];

/* ── Colonnes Kanban ── */
const COLONNES = [
  { id: 'nouveau',        label: 'Nouveau',         icon: '🔵', cls: 'col-nouveau'       },
  { id: 'diagnostic',     label: 'Diagnostic',      icon: '🔍', cls: 'col-diagnostic'    },
  { id: 'accompagnement', label: 'Accompagnement',  icon: '🤝', cls: 'col-accompagnement'},
  { id: 'mandat',         label: 'Mandat',          icon: '🏠', cls: 'col-mandat'        },
  { id: 'finalise',       label: 'Finalisé',        icon: '✅', cls: 'col-finalise'      },
  { id: 'facturer',       label: 'À facturer',      icon: '💰', cls: 'col-facturer'      },
];

/* ── Données dossiers démo ── */
let DOSSIERS = [
  {
    id: 'd001',
    prenom: 'Thomas', nom: 'Bernard', initiales: 'TB',
    entreprise: 'Société Générale', partenaire: true,
    typeProjet: 'Achat', ville: 'Bordeaux',
    typeMandat: 'mandat', colonne: 'mandat',
    statut: 'actif', progression: 75,
    deadline: '2026-04-15',
    budget: '320 000 €',
    objectif: 'Acquisition résidence principale',
    lead: 'claire', sale: 'marc', agent: 'claire',
    missions: [
      { nom: 'Définition projet', done: true },
      { nom: 'Simulation prêt', done: true },
      { nom: 'Recherche bien', done: true },
      { nom: 'Visites', done: false },
      { nom: 'Négociation', done: false },
      { nom: 'Compromis', done: false },
    ],
  },
  {
    id: 'd002',
    prenom: 'Sophie', nom: 'Martin', initiales: 'SM',
    entreprise: 'Orange', partenaire: true,
    typeProjet: 'Location', ville: 'Lyon',
    typeMandat: 'accompagnement', colonne: 'accompagnement',
    statut: 'actif', progression: 40,
    deadline: '2026-03-28',
    budget: '1 200 €/mois',
    objectif: 'Trouver appartement T3 proche Part-Dieu',
    lead: 'sophie', sale: 'claire', agent: 'sophie',
    missions: [
      { nom: 'Définition critères', done: true },
      { nom: 'Recherche annonces', done: true },
      { nom: 'Visites planifiées', done: false },
      { nom: 'Constitution dossier', done: false },
    ],
  },
  {
    id: 'd003',
    prenom: 'Marie', nom: 'Laurent', initiales: 'ML',
    entreprise: 'SNCF', partenaire: true,
    typeProjet: 'Mise en location', ville: 'Paris',
    typeMandat: 'mandat', colonne: 'diagnostic',
    statut: 'en_attente', progression: 20,
    deadline: '2026-05-01',
    budget: null,
    objectif: 'Louer appartement 2P Montmartre',
    lead: null, sale: 'marc', agent: 'marc',
    missions: [
      { nom: 'Diagnostic DPE', done: true },
      { nom: 'Estimation loyer', done: false },
      { nom: 'Photos professionnelles', done: false },
      { nom: 'Publication annonce', done: false },
    ],
  },
  {
    id: 'd004',
    prenom: 'David', nom: 'Rousseau', initiales: 'DR',
    entreprise: 'Airbus', partenaire: true,
    typeProjet: 'Vente', ville: 'Toulouse',
    typeMandat: 'mandat', colonne: 'finalise',
    statut: 'actif', progression: 90,
    deadline: '2026-03-20',
    budget: '380 000 €',
    objectif: 'Vente maison T5 suite mutation',
    lead: 'thomas', sale: 'thomas', agent: 'thomas',
    missions: [
      { nom: 'Estimation', done: true },
      { nom: 'Photos', done: true },
      { nom: 'Annonce publiée', done: true },
      { nom: 'Visites effectuées', done: true },
      { nom: 'Offre acceptée', done: true },
      { nom: 'Compromis signé', done: false },
    ],
  },
  {
    id: 'd005',
    prenom: 'Pierre', nom: 'Kauffman', initiales: 'PK',
    entreprise: 'EDF', partenaire: true,
    typeProjet: 'Rénovation', ville: 'Grenoble',
    typeMandat: 'conseil', colonne: 'nouveau',
    statut: 'actif', progression: 10,
    deadline: '2026-06-30',
    budget: '45 000 €',
    objectif: 'Rénovation énergétique + MaPrimeRénov',
    lead: null, sale: null, agent: 'julie',
    missions: [
      { nom: 'Audit énergétique', done: false },
      { nom: 'Devis artisans', done: false },
      { nom: 'Dossier MaPrimeRénov', done: false },
    ],
  },
  {
    id: 'd006',
    prenom: 'Julie', nom: 'Moreau', initiales: 'JM',
    entreprise: null, partenaire: false,
    typeProjet: 'Location', ville: 'Nantes',
    typeMandat: 'conseil', colonne: 'diagnostic',
    statut: 'actif', progression: 30,
    deadline: '2026-04-10',
    budget: '900 €/mois',
    objectif: 'Première location — aide dossier',
    lead: null, sale: 'claire', agent: 'claire',
    missions: [
      { nom: 'Diagnostic Flash', done: true },
      { nom: 'Constitution dossier', done: false },
      { nom: 'Recherche bien', done: false },
    ],
  },
  {
    id: 'd007',
    prenom: 'Lucas', nom: 'Petit', initiales: 'LP',
    entreprise: null, partenaire: false,
    typeProjet: 'Achat', ville: 'Rennes',
    typeMandat: 'accompagnement', colonne: 'accompagnement',
    statut: 'en_attente', progression: 55,
    deadline: '2026-05-15',
    budget: '220 000 €',
    objectif: 'Premier achat — PTZ + prêt classique',
    lead: null, sale: 'sophie', agent: 'sophie',
    missions: [
      { nom: 'Simulation PTZ', done: true },
      { nom: 'Dossier bancaire', done: true },
      { nom: 'Accord de principe', done: false },
      { nom: 'Recherche bien', done: false },
    ],
  },
  {
    id: 'd008',
    prenom: 'Camille', nom: 'Dubois', initiales: 'CDB',
    entreprise: 'Total Energies', partenaire: true,
    typeProjet: 'Achat', ville: 'Paris',
    typeMandat: 'mandat', colonne: 'facturer',
    statut: 'non_actif', progression: 100,
    deadline: '2026-02-28',
    budget: '650 000 €',
    objectif: 'Acquisition appartement Paris 15e',
    lead: 'marc', sale: 'marc', agent: 'julie',
    missions: [
      { nom: 'Toutes missions', done: true },
    ],
  },
];

/* ── État global ── */
let currentUser   = null;
let currentFilters = { statut: 'tous', partenaire: 'tous', agent: 'tous' };
let assigningDossierId = null;

/* ══════════════════════════════════════════════════════════════════════════ */
/*  INIT                                                                      */
/* ══════════════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  currentUser = authRequire();
  if (!currentUser) return;

  // Vérifier rôle
  if (currentUser.role !== 'mandataire' && currentUser.role !== 'admin') {
    window.location.href = 'dashboard.html';
    return;
  }

  setupTheme();
  setupNav();
  setupFilters();
  renderStats();
  renderKanban();
});

/* ── Thème ── */
function setupTheme() {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('hil_theme') || 'light';
  document.body.className = saved;
  btn.textContent = saved === 'dark' ? '☀️' : '🌙';
  btn.addEventListener('click', () => {
    const next = document.body.classList.contains('dark') ? 'light' : 'dark';
    document.body.className = next;
    localStorage.setItem('hil_theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

/* ── Navbar ── */
function setupNav() {
  document.getElementById('navAgentName').textContent =
    currentUser.prenom + ' ' + currentUser.nom;
  const badge = document.getElementById('navRoleBadge');
  if (currentUser.role === 'admin') {
    badge.textContent = 'Admin';
    badge.className = 'nav-role-badge badge-admin';
  } else {
    badge.textContent = 'Mandataire';
    badge.className = 'nav-role-badge badge-mandataire';
  }

  // Titre page
  const dossiersMes = getDossiersVisibles();
  document.getElementById('pageTitle').textContent =
    currentUser.role === 'admin' ? 'Tous les dossiers' : 'Mes dossiers';
  document.getElementById('pageSubtitle').textContent =
    dossiersMes.length + ' dossier' + (dossiersMes.length > 1 ? 's' : '') + ' assigné' + (dossiersMes.length > 1 ? 's' : '');

  // Filtre agent (admin seulement)
  if (currentUser.role === 'admin') {
    const wrap = document.getElementById('filterAgent');
    wrap.style.display = 'flex';
    const sel = document.getElementById('filterAgentSelect');
    EQUIPE.forEach(e => {
      const opt = document.createElement('option');
      opt.value = e.id;
      opt.textContent = e.nom;
      sel.appendChild(opt);
    });
    sel.addEventListener('change', () => {
      currentFilters.agent = sel.value;
      renderKanban();
    });
  }
}

/* ── Filtres ── */
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.filter;
      document.querySelectorAll(`.filter-btn[data-filter="${group}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilters[group] = btn.dataset.val;
      renderKanban();
    });
  });
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  DONNÉES                                                                   */
/* ══════════════════════════════════════════════════════════════════════════ */
function getDossiersVisibles() {
  if (currentUser.role === 'admin') return DOSSIERS;
  // Mandataire : dossiers où il est lead, sale ou agent
  return DOSSIERS.filter(d =>
    d.lead === currentUser.agentId ||
    d.sale === currentUser.agentId ||
    d.agent === currentUser.agentId
  );
}

function getDossiersFiltres() {
  return getDossiersVisibles().filter(d => {
    if (currentFilters.statut !== 'tous' && d.statut !== currentFilters.statut) return false;
    if (currentFilters.partenaire === 'oui'  && !d.partenaire) return false;
    if (currentFilters.partenaire === 'non'  &&  d.partenaire) return false;
    if (currentFilters.agent !== 'tous') {
      const id = currentFilters.agent;
      if (d.lead !== id && d.sale !== id && d.agent !== id) return false;
    }
    return true;
  });
}

function getEquipeMember(id) {
  return EQUIPE.find(e => e.id === id) || null;
}

function getInitiales(id) {
  const m = getEquipeMember(id);
  return m ? m.initiales : null;
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  STATS                                                                     */
/* ══════════════════════════════════════════════════════════════════════════ */
function renderStats() {
  const dossiers = getDossiersVisibles();
  const actifs   = dossiers.filter(d => d.statut === 'actif').length;
  const enAttente = dossiers.filter(d => d.statut === 'en_attente').length;
  const termines  = dossiers.filter(d => d.colonne === 'facturer' || d.colonne === 'finalise').length;

  document.getElementById('headerStats').innerHTML = `
    <div class="stat-pill">
      <span class="stat-pill-val">${dossiers.length}</span>
      <span class="stat-pill-label">Total</span>
    </div>
    <div class="stat-pill">
      <span class="stat-pill-val" style="color:#22c55e">${actifs}</span>
      <span class="stat-pill-label">Actifs</span>
    </div>
    <div class="stat-pill">
      <span class="stat-pill-val" style="color:#f59e0b">${enAttente}</span>
      <span class="stat-pill-label">En attente</span>
    </div>
    <div class="stat-pill">
      <span class="stat-pill-val" style="color:var(--teal)">${termines}</span>
      <span class="stat-pill-label">Finalisés</span>
    </div>
  `;
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  KANBAN                                                                    */
/* ══════════════════════════════════════════════════════════════════════════ */
function renderKanban() {
  const board    = document.getElementById('kanbanBoard');
  const dossiers = getDossiersFiltres();
  board.innerHTML = '';

  COLONNES.forEach(col => {
    const cards = dossiers.filter(d => d.colonne === col.id);
    const colEl = document.createElement('div');
    colEl.className = `kanban-col ${col.cls}`;

    colEl.innerHTML = `
      <div class="kanban-col-header">
        <div class="kanban-col-title">
          <span class="kanban-col-dot"></span>
          ${col.icon} ${col.label}
        </div>
        <span class="kanban-col-count">${cards.length}</span>
      </div>
      <div class="kanban-col-cards" id="cards-${col.id}">
        ${cards.length === 0 ? '<div class="kanban-empty">Aucun dossier</div>' : ''}
      </div>
    `;
    board.appendChild(colEl);

    const cardsContainer = colEl.querySelector(`#cards-${col.id}`);
    cards.forEach(d => {
      const cardEl = buildCard(d);
      cardsContainer.appendChild(cardEl);
    });
  });
}

function buildCard(d) {
  const el = document.createElement('div');
  el.className = `kanban-card type-${d.typeMandat} statut-${d.statut}`;

  // Deadline urgente = < 7 jours
  const deadlineDate = new Date(d.deadline);
  const today = new Date();
  const diffDays = Math.ceil((deadlineDate - today) / (1000*60*60*24));
  const urgente = diffDays < 7 && diffDays >= 0;
  const deadlineStr = deadlineDate.toLocaleDateString('fr-FR', { day:'2-digit', month:'short', year:'numeric' });

  // Tags
  const tagMandat = {
    conseil:        { label: 'Conseil Diagnostic', cls: 'tag-conseil' },
    accompagnement: { label: 'Accompagnement',     cls: 'tag-accompagnement' },
    mandat:         { label: 'Mandat Total',        cls: 'tag-mandat' },
  }[d.typeMandat] || { label: d.typeMandat, cls: '' };

  const tagStatut = {
    actif:      { label: '🟢 Actif',      cls: 'tag-actif' },
    en_attente: { label: '🟠 En attente', cls: 'tag-en_attente' },
    non_actif:  { label: '🔴 Non actif',  cls: 'tag-non_actif' },
  }[d.statut];

  // Intervenants
  const leadInit  = getInitiales(d.lead);
  const saleInit  = getInitiales(d.sale);
  const agentInit = getInitiales(d.agent);

  const adminActions = currentUser.role === 'admin' ? `
    <div class="card-admin-actions">
      <button class="btn-card-action" onclick="openAssignerModal('${d.id}', event)">✏️ Assigner</button>
      <button class="btn-card-action" onclick="deplacerColonne('${d.id}', event)">↔️ Déplacer</button>
    </div>
  ` : '';

  el.innerHTML = `
    <div class="card-top">
      <div class="card-avatar">${d.initiales}</div>
      <div class="card-statut-dot"></div>
    </div>
    <div class="card-name">${d.prenom} ${d.nom}</div>
    ${d.partenaire && d.entreprise ? `<div class="card-entreprise">✨ ${d.entreprise}</div>` : ''}
    <div class="card-projet">📍 ${d.typeProjet} · ${d.ville}</div>
    <div class="card-progress-wrap">
      <div class="card-progress-header">
        <span class="card-progress-label">Avancement</span>
        <span class="card-progress-pct">${d.progression}%</span>
      </div>
      <div class="card-progress-bar">
        <div class="card-progress-fill" style="width:${d.progression}%"></div>
      </div>
    </div>
    <div class="card-tags">
      <span class="card-tag ${tagMandat.cls}">${tagMandat.label}</span>
      <span class="card-tag ${tagStatut.cls}">${tagStatut.label}</span>
    </div>
    <div class="card-intervenants">
      <div class="intervenant-slot">
        <span class="intervenant-icon">🏢</span>
        <span class="${leadInit ? 'intervenant-initiales' : 'intervenant-vide'}">${leadInit || '—'}</span>
        <span class="intervenant-role-label">Lead</span>
      </div>
      <div class="intervenant-slot">
        <span class="intervenant-icon">👤</span>
        <span class="${saleInit ? 'intervenant-initiales' : 'intervenant-vide'}">${saleInit || '—'}</span>
        <span class="intervenant-role-label">Sale</span>
      </div>
      <div class="intervenant-slot">
        <span class="intervenant-icon">🏠</span>
        <span class="${agentInit ? 'intervenant-initiales' : 'intervenant-vide'}">${agentInit || '—'}</span>
        <span class="intervenant-role-label">Agent</span>
      </div>
    </div>
    <div class="card-deadline ${urgente ? 'urgent' : ''}">
      ${urgente ? '⚠️' : '📅'} ${deadlineStr}${urgente ? ' — Urgent !' : ''}
    </div>
    ${adminActions}
  `;

  // Clic carte → modal détail
  el.addEventListener('click', (e) => {
    if (e.target.closest('.btn-card-action')) return;
    openDossierModal(d.id);
  });

  return el;
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  MODAL DOSSIER                                                             */
/* ══════════════════════════════════════════════════════════════════════════ */
function openDossierModal(id) {
  const d = DOSSIERS.find(x => x.id === id);
  if (!d) return;

  const tagMandat = { conseil: 'Conseil Diagnostic', accompagnement: 'Accompagnement', mandat: 'Mandat Total' }[d.typeMandat] || d.typeMandat;
  document.getElementById('modalDossierTag').textContent  = tagMandat;
  document.getElementById('modalDossierTitle').textContent = d.prenom + ' ' + d.nom;
  document.getElementById('modalDossierSub').textContent   = d.typeProjet + ' · ' + d.ville;

  const deadlineDate = new Date(d.deadline).toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric' });
  const missionsDone = d.missions.filter(m => m.done).length;

  const leadM  = getEquipeMember(d.lead);
  const saleM  = getEquipeMember(d.sale);
  const agentM = getEquipeMember(d.agent);

  document.getElementById('modalDossierBody').innerHTML = `
    <div class="dossier-section">
      <div class="dossier-section-title">📋 Informations client</div>
      ${d.entreprise ? `<div class="dossier-info-row"><span class="dossier-info-label">Entreprise</span><span class="dossier-info-val">✨ ${d.entreprise}</span></div>` : ''}
      <div class="dossier-info-row"><span class="dossier-info-label">Projet</span><span class="dossier-info-val">${d.typeProjet}</span></div>
      <div class="dossier-info-row"><span class="dossier-info-label">Ville</span><span class="dossier-info-val">${d.ville}</span></div>
      ${d.budget ? `<div class="dossier-info-row"><span class="dossier-info-label">Budget</span><span class="dossier-info-val">${d.budget}</span></div>` : ''}
      <div class="dossier-info-row"><span class="dossier-info-label">Objectif</span><span class="dossier-info-val" style="font-size:12px;text-align:right;max-width:60%">${d.objectif}</span></div>
      <div class="dossier-info-row"><span class="dossier-info-label">Échéance</span><span class="dossier-info-val">${deadlineDate}</span></div>
    </div>

    <div class="dossier-section">
      <div class="dossier-section-title">👥 Équipe assignée</div>
      <div class="dossier-info-row"><span class="dossier-info-label">🏢 Lead</span><span class="dossier-info-val">${leadM ? leadM.nom : '—'}</span></div>
      <div class="dossier-info-row"><span class="dossier-info-label">👤 Sale</span><span class="dossier-info-val">${saleM ? saleM.nom : '—'}</span></div>
      <div class="dossier-info-row"><span class="dossier-info-label">🏠 Agent</span><span class="dossier-info-val">${agentM ? agentM.nom : '—'}</span></div>
      <div class="dossier-info-row"><span class="dossier-info-label">Statut</span>
        <span class="dossier-info-val">${{ actif:'🟢 Actif', en_attente:'🟠 En attente', non_actif:'🔴 Non actif' }[d.statut]}</span>
      </div>
    </div>

    <div class="dossier-section full-width">
      <div class="dossier-section-title">✅ Missions (${missionsDone}/${d.missions.length})</div>
      ${d.missions.map(m => `
        <div class="mission-item">
          <span class="mission-check">${m.done ? '✅' : '⬜'}</span>
          <span class="mission-name ${m.done ? 'mission-done' : ''}">${m.nom}</span>
        </div>
      `).join('')}
    </div>
  `;

  document.getElementById('modalDossier').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeDossierModal() {
  document.getElementById('modalDossier').hidden = true;
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  MODAL ASSIGNER (admin)                                                    */
/* ══════════════════════════════════════════════════════════════════════════ */
function openAssignerModal(id, e) {
  if (e) e.stopPropagation();
  if (currentUser.role !== 'admin') return;

  const d = DOSSIERS.find(x => x.id === id);
  if (!d) return;
  assigningDossierId = id;

  document.getElementById('assignerDossierName').textContent = d.prenom + ' ' + d.nom + ' — ' + d.typeProjet + ' ' + d.ville;

  // Populate selects
  const opts = `<option value="">— Non assigné —</option>` +
    EQUIPE.map(e => `<option value="${e.id}">${e.nom}</option>`).join('');

  ['assignLead','assignSale','assignAgent'].forEach(selId => {
    document.getElementById(selId).innerHTML = opts;
  });
  document.getElementById('assignLead').value  = d.lead  || '';
  document.getElementById('assignSale').value  = d.sale  || '';
  document.getElementById('assignAgent').value = d.agent || '';

  // Colonnes
  const colOpts = COLONNES.map(c =>
    `<option value="${c.id}" ${d.colonne === c.id ? 'selected' : ''}>${c.icon} ${c.label}</option>`
  ).join('');
  document.getElementById('assignColonne').innerHTML = colOpts;

  document.getElementById('assignStatut').value = d.statut;

  document.getElementById('modalAssigner').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeAssignerModal() {
  document.getElementById('modalAssigner').hidden = true;
  document.body.style.overflow = '';
  assigningDossierId = null;
}

function saveAssignment() {
  if (!assigningDossierId) return;
  const d = DOSSIERS.find(x => x.id === assigningDossierId);
  if (!d) return;

  d.lead   = document.getElementById('assignLead').value   || null;
  d.sale   = document.getElementById('assignSale').value   || null;
  d.agent  = document.getElementById('assignAgent').value  || null;
  d.colonne = document.getElementById('assignColonne').value;
  d.statut  = document.getElementById('assignStatut').value;

  closeAssignerModal();
  renderKanban();
  renderStats();
  showToast('✅ Assignation mise à jour !');
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  DÉPLACER COLONNE (admin — raccourci)                                      */
/* ══════════════════════════════════════════════════════════════════════════ */
function deplacerColonne(id, e) {
  if (e) e.stopPropagation();
  openAssignerModal(id, null);
}

/* ══════════════════════════════════════════════════════════════════════════ */
/*  TOAST                                                                     */
/* ══════════════════════════════════════════════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

/* ── Fermer modals au clic extérieur ── */
document.addEventListener('click', function(e) {
  if (e.target.id === 'modalDossier')  closeDossierModal();
  if (e.target.id === 'modalAssigner') closeAssignerModal();
});
