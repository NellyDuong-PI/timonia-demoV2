
// ─── DASHBOARD SPA ────────────────────────────────────────────────────────────
let currentProjet = null;

document.addEventListener('DOMContentLoaded', function () {
  renderDashboard();
  setupDetailTabs();

  document.getElementById('backBtn').addEventListener('click', function () {
    showView('dashboard');
  });

  // Handle hash navigation (e.g. dashboard.html#achat)
  const hash = location.hash.replace('#', '');
  if (hash && PROJETS[hash]) {
    openProjet(hash);
  }
});

// ─── VIEW SWITCHING ───────────────────────────────────────────────────────────
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');

  // Update nav tabs
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const activeTab = document.querySelector('.tab-btn[data-view="' + name + '"]');
  if (activeTab) activeTab.classList.add('active');

  if (name === 'dashboard') {
    renderDashboard(); // refresh progress bars
    // Remove projet tab from nav
    const projTab = document.getElementById('navProjetTab');
    if (projTab) projTab.remove();
  }
}

function openProjet(id) {
  currentProjet = id;
  renderProjet(id);
  showView('projet');
  window.scrollTo(0, 0);

  // Add/update projet tab in nav
  let projTab = document.getElementById('navProjetTab');
  if (!projTab) {
    projTab = document.createElement('button');
    projTab.id = 'navProjetTab';
    projTab.className = 'nav-link tab-btn';
    projTab.dataset.view = 'projet';
    projTab.addEventListener('click', () => showView('projet'));
    document.getElementById('projectTabs').appendChild(projTab);
  }
  projTab.textContent = PROJETS[id].icon + ' ' + PROJETS[id].label;
  projTab.classList.add('active');
}

// ─── DASHBOARD RENDER ─────────────────────────────────────────────────────────
function renderDashboard() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';

  Object.values(PROJETS).forEach(function (p) {
    const stats = getStats(p.id);
    const col   = getColor(p.color);
    const colL  = getColorL(p.color);
    const active = p.timeline.find(s => s.active);

    const card = document.createElement('div');
    card.className = 'card card-lift project-card';
    card.innerHTML = `
      <div class="project-card-top">
        <div class="project-icon-wrap" style="background:${colL}">${p.icon}</div>
        <span class="badge" style="background:${colL};color:${col};border-color:${col}30">${stats.pct}%</span>
      </div>
      <h3>${p.label}</h3>
      <p class="project-sub">${p.hero}</p>
      ${active ? `
        <div class="project-active-step" style="background:var(--surf2)">
          <span>${active.icon}</span>
          <p style="color:${col}">En cours : ${active.label}</p>
        </div>
      ` : ''}
      <div class="progress-bar"><div class="progress-fill" style="width:${stats.pct}%;background:${col}"></div></div>
      <div class="project-progress-meta">
        <span>${stats.done}/${stats.total} tâches</span>
        <span class="proj-link" style="color:${col}">Voir le détail →</span>
      </div>
    `;
    card.addEventListener('click', () => openProjet(p.id));
    grid.appendChild(card);
  });
}

// ─── PROJET RENDER ────────────────────────────────────────────────────────────
function renderProjet(id) {
  const p     = PROJETS[id];
  const stats = getStats(id);
  const col   = getColor(p.color);
  const colL  = getColorL(p.color);

  // Header
  document.getElementById('projetHeader').innerHTML = `
    <div class="projet-header-left">
      <div class="projet-big-icon" style="background:${colL}">${p.icon}</div>
      <div>
        <p class="projet-title">${p.label}</p>
        <p class="projet-hero">${p.hero}</p>
        <p class="projet-sub">${p.sub}</p>
      </div>
    </div>
    <button class="btn btn-primary" style="background:${col}" onclick="document.getElementById('modalExpert').hidden=false">
      📞 Appeler mon expert
    </button>
  `;

  // KPIs
  document.getElementById('projetKpis').innerHTML = `
    <div class="kpi-big">
      <p class="kpi-big-val" style="color:${col}">${stats.pct}%</p>
      <p class="kpi-big-label">Avancement</p>
      <p class="kpi-big-sub">${stats.done}/${stats.total} tâches</p>
    </div>
    <div class="kpi-big">
      <p class="kpi-big-val" style="color:var(--accent)">${stats.seul}</p>
      <p class="kpi-big-label">En cours</p>
      <p class="kpi-big-sub">Je fais moi-même</p>
    </div>
    <div class="kpi-big">
      <p class="kpi-big-val" style="color:var(--gold)">${stats.delegue}</p>
      <p class="kpi-big-label">Délégués</p>
      <p class="kpi-big-sub">à Timonia</p>
    </div>
    <div class="kpi-big">
      <p class="kpi-big-val">${stats.coutDelegue} €</p>
      <p class="kpi-big-label">Budget délégation</p>
      <p class="kpi-big-sub">${stats.coutCouvert > 0 ? `+ ${stats.coutCouvert} € couverts Veolia` : 'à votre charge'}</p>
    </div>
  `;

  // Progress bar
  document.getElementById('progressPct').textContent  = stats.pct + '%';
  document.getElementById('progressPct').style.color  = col;
  document.getElementById('progressFill').style.width = stats.pct + '%';
  document.getElementById('progressFill').style.background = col;

  // Render all tabs
  renderChecklist(id, col, colL);
  renderTimeline(id, col);
  renderDocs(id);
}

// ─── CHECKLIST ────────────────────────────────────────────────────────────────
function renderChecklist(id, col, colL) {
  const container = document.getElementById('tab-checklist');
  const taches = STATE.taches[id];
  const stats  = getStats(id);

  const cats = [...new Set(taches.map(t => t.cat))];

  let html = `
    <div class="checklist-legend">
      <div class="legend-item" style="background:var(--accent-l);border-color:rgba(30,99,240,0.2)">
        <div class="legend-dot" style="background:var(--accent)"></div>
        <span style="font-size:11px;font-weight:700;color:var(--accent)">Je fais seul — gratuit</span>
      </div>
      <div class="legend-item" style="background:var(--gold-l);border-color:rgba(196,122,0,0.2)">
        <div class="legend-dot" style="background:var(--gold)"></div>
        <span style="font-size:11px;font-weight:700;color:var(--gold)">Je délègue — coût affiché</span>
      </div>
      <div class="legend-item" style="background:var(--green-l);border-color:rgba(22,163,74,0.2)">
        <div class="legend-dot" style="background:var(--green)"></div>
        <span style="font-size:11px;font-weight:700;color:var(--green)">C'est fait ✓</span>
      </div>
      <div class="legend-item" style="background:var(--teal-l);border-color:rgba(11,165,146,0.2)">
        <div class="legend-dot" style="background:var(--teal)"></div>
        <span style="font-size:11px;font-weight:700;color:var(--teal)">✓ Veolia couvre</span>
      </div>
    </div>
  `;

  cats.forEach(function (cat) {
    const catTaches = taches.filter(t => t.cat === cat);
    const catDone   = catTaches.filter(t => t.statut === 'fait').length;

    html += `
      <div class="cat-group">
        <div class="cat-header">
          <span class="cat-title">${cat}</span>
          <div class="cat-line"></div>
          <span class="cat-count">${catDone}/${catTaches.length}</span>
        </div>
        <div class="task-list">
    `;

    catTaches.forEach(function (task) {
      const rowClass = task.statut === 'fait' ? 'is-done' : task.statut === 'delegue' ? 'is-delegue' : task.statut === 'seul' ? 'is-seul' : '';
      const dotColor = task.statut === 'fait' ? 'var(--green)' : task.statut === 'delegue' ? 'var(--gold)' : task.statut === 'seul' ? 'var(--accent)' : 'var(--surf3)';
      const labelClass = task.statut === 'fait' ? 'task-label struck' : 'task-label';

      let noteBadge = '';
      if (task.pce) noteBadge += `<span class="task-note-badge" style="background:var(--teal-l);color:var(--teal);border:1px solid rgba(11,165,146,0.2)">✓ Veolia</span>`;
      if (task.note) noteBadge += `<span class="task-note-badge" style="background:var(--green-l);color:var(--green);border:1px solid rgba(22,163,74,0.2)">${task.note}</span>`;

      const costBadge = (task.cout > 0 && !task.pce)
        ? `<span class="task-cost">${task.cout} €</span>`
        : '';

      const deleguerLabel = task.pce
        ? `🤝 Déléguer (couvert)`
        : (task.cout > 0 ? `🤝 Déléguer · ${task.cout} €` : `🤝 Déléguer`);

      html += `
        <div class="task-row ${rowClass}" data-id="${task.id}" data-proj="${id}">
          <div class="task-dot" style="background:${dotColor}"></div>
          <div class="task-label-wrap">
            <div class="task-label-row">
              <span class="${labelClass}">${task.label}</span>
              ${noteBadge}
            </div>
          </div>
          ${costBadge}
          <div class="task-actions">
            <button class="action-btn ${task.statut === 'seul' ? 'act-seul' : ''}"
              onclick="setStatut('${id}', ${task.id}, 'seul')">👤 Je fais</button>
            <button class="action-btn ${task.statut === 'delegue' ? 'act-delegue' : ''}"
              onclick="setStatut('${id}', ${task.id}, 'delegue')">${deleguerLabel}</button>
            <button class="action-btn ${task.statut === 'fait' ? 'act-fait' : ''}"
              onclick="setStatut('${id}', ${task.id}, 'fait')">✅ Fait</button>
          </div>
        </div>
      `;
    });

    html += `</div></div>`;
  });

  // Financial recap
  const s = getStats(id);
  html += `
    <div class="financial-recap">
      <p class="recap-title">💳 Récapitulatif délégation</p>
      <div class="recap-grid">
        <div>
          <p class="recap-val">${s.coutDelegue} €</p>
          <p class="recap-label">À votre charge</p>
          <p class="recap-sub">Tâches déléguées non couvertes</p>
        </div>
        <div>
          <p class="recap-val" style="color:var(--teal)">${s.coutCouvert > 0 ? s.coutCouvert + ' €' : '—'}</p>
          <p class="recap-label">Couvert par Veolia</p>
          <p class="recap-sub">Pris en charge employeur</p>
        </div>
        <div>
          <p class="recap-val" style="color:var(--green)">Gratuit</p>
          <p class="recap-label">Économie estimée</p>
          <p class="recap-sub">vs cabinet spécialisé classique</p>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function setStatut(projId, taskId, statut) {
  const taches = STATE.taches[projId];
  const task   = taches.find(t => t.id === taskId);
  if (!task) return;

  // Toggle off if same
  task.statut = (task.statut === statut) ? null : statut;

  // Re-render
  const col  = getColor(PROJETS[projId].color);
  const colL = getColorL(PROJETS[projId].color);
  renderChecklist(projId, col, colL);
  updateProgress(projId);
}

function updateProgress(projId) {
  const s = getStats(projId);
  const col = getColor(PROJETS[projId].color);
  document.getElementById('progressPct').textContent  = s.pct + '%';
  document.getElementById('progressFill').style.width = s.pct + '%';

  // Update KPI vals
  const kpis = document.querySelectorAll('.kpi-big-val');
  if (kpis[0]) kpis[0].textContent = s.pct + '%';
  if (kpis[2]) kpis[2].textContent = s.delegue;
  if (kpis[3]) kpis[3].textContent = s.coutDelegue + ' €';
  if (kpis[1]) kpis[1].textContent = s.seul;
}

// ─── TIMELINE ─────────────────────────────────────────────────────────────────
function renderTimeline(id, col) {
  const container = document.getElementById('tab-timeline');
  const p     = PROJETS[id];
  const steps = p.timeline;
  const taches = STATE.taches[id];
  const doneCount   = steps.filter(s => s.done).length;
  const pendingCount= steps.filter(s => !s.done).length;
  const activeStep  = steps.find(s => s.active);

  let html = `
    <div class="timeline-wrap">
      <div class="timeline-current">
        <span class="timeline-current-icon">📍</span>
        <div>
          <p class="timeline-current-title" style="color:${col}">
            Étape en cours : ${activeStep ? activeStep.label : 'À définir'}
          </p>
          <p class="timeline-current-sub">${doneCount} étapes complétées · ${pendingCount} à venir</p>
        </div>
      </div>
  `;

  steps.forEach(function (step, i) {
    const isLast    = i === steps.length - 1;
    const dotBg     = step.done ? col : step.active ? col + '22' : 'var(--surf3)';
    const dotBorder = step.done || step.active ? col : 'var(--border)';
    const dotColor  = step.done ? '#fff' : step.active ? col : 'var(--muted)';
    const dotContent= step.done ? '✓' : step.icon;
    const lineBg    = step.done ? col : 'var(--border)';
    const labelWeight = step.active ? '800' : '600';
    const labelColor  = step.active ? col : step.done ? 'var(--muted)' : 'var(--text)';

    // For active step: show linked tasks
    let tasksHtml = '';
    if (step.active) {
      const pendingTasks = taches.filter(t => t.statut !== 'fait').slice(0, 3);
      if (pendingTasks.length) {
        const taskItems = pendingTasks.map(function (t) {
          const tDotColor = t.statut === 'delegue' ? 'var(--gold)' : t.statut === 'seul' ? 'var(--accent)' : 'var(--muted)';
          const cost = (t.cout > 0 && !t.pce) ? `<span class="timeline-task-cost" style="color:var(--gold)">${t.cout} €</span>` : '';
          return `
            <div class="timeline-task-item">
              <div class="timeline-task-dot" style="background:${tDotColor}"></div>
              <span class="timeline-task-label">${t.label}</span>
              ${cost}
            </div>
          `;
        }).join('');

        tasksHtml = `
          <div class="timeline-tasks" style="background:var(--surf2);border-color:${col}20">
            <p class="timeline-tasks-title">Tâches associées :</p>
            ${taskItems}
            <button class="btn btn-primary" style="font-size:12px;padding:6px 14px;margin-top:10px;background:${col}"
              onclick="switchTab('checklist')">Voir toutes les tâches →</button>
          </div>
        `;
      }
    }

    html += `
      <div class="timeline-item">
        <div class="timeline-left">
          <div class="timeline-dot${step.active ? ' active' : ''}"
            style="background:${dotBg};border:2px solid ${dotBorder};color:${dotColor};
                   ${step.active ? 'box-shadow:0 0 0 5px ' + col + '18' : ''}">
            ${dotContent}
          </div>
          ${!isLast ? `<div class="timeline-line" style="background:${lineBg}"></div>` : ''}
        </div>
        <div class="timeline-right">
          <p class="timeline-date">${step.date}</p>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <p class="timeline-label${step.active ? ' active' : ''}"
               style="color:${labelColor};font-weight:${labelWeight}">${step.label}</p>
            ${step.active
              ? `<span class="timeline-status" style="background:${col}18;color:${col}">● En cours</span>`
              : step.done
              ? `<span class="timeline-status" style="background:var(--green-l);color:var(--green)">✓ Fait</span>`
              : ''}
          </div>
          ${tasksHtml}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// ─── DOCUMENTS ────────────────────────────────────────────────────────────────
function renderDocs(id) {
  const container = document.getElementById('tab-docs');
  const docs = PROJETS[id].docs;

  let html = `<div class="docs-grid">`;

  docs.forEach(function (doc) {
    html += `
      <div class="card card-lift doc-card">
        <span class="doc-icon">${doc.icon}</span>
        <p class="doc-name">${doc.nom}</p>
        <p class="doc-meta">${doc.date}</p>
        <span class="doc-status ${doc.statut === 'ok' ? 'ok' : 'wait'}">
          ${doc.statut === 'ok' ? '✓ Validé' : '⏳ En attente'}
        </span><br/>
        <button class="doc-dl">↓ Télécharger</button>
      </div>
    `;
  });

  html += `
    <div class="card doc-card doc-add">
      <span>➕</span>
      <p>Ajouter un document</p>
    </div>
  </div>`;

  container.innerHTML = html;
}

// ─── TABS ─────────────────────────────────────────────────────────────────────
function setupDetailTabs() {
  document.querySelectorAll('.detail-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      switchTab(btn.dataset.tab);
    });
  });
}

function switchTab(name) {
  document.querySelectorAll('.detail-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  const btn = document.querySelector('.detail-tab[data-tab="' + name + '"]');
  const content = document.getElementById('tab-' + name);
  if (btn)     btn.classList.add('active');
  if (content) content.classList.add('active');
}

// ─── EXPERT MODAL ─────────────────────────────────────────────────────────────
function closeExpertModal() {
  document.getElementById('modalExpert').hidden = true;
}
