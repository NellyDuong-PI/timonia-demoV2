/* ─── auth.js — Timonia Demo Authentication ─────────────────────────────── */

const DEMO_PASSWORD = 'homeinlove2026';

const DEMO_USERS = [
  {
    email: 'sophie@demo.fr',
    password: DEMO_PASSWORD,
    prenom: 'Sophie',
    nom: 'Martin',
    entreprise: 'Orange',
    partenaire: true,
    projetType: 'location',
    avatar: 'SM',
  },
  {
    email: 'thomas@demo.fr',
    password: DEMO_PASSWORD,
    prenom: 'Thomas',
    nom: 'Bernard',
    entreprise: 'Société Générale',
    partenaire: true,
    projetType: 'achat',
    avatar: 'TB',
  },
  {
    email: 'marie@demo.fr',
    password: DEMO_PASSWORD,
    prenom: 'Marie',
    nom: 'Laurent',
    entreprise: 'SNCF',
    partenaire: true,
    projetType: 'mise-location',
    avatar: 'ML',
  },
  {
    email: 'david@demo.fr',
    password: DEMO_PASSWORD,
    prenom: 'David',
    nom: 'Rousseau',
    entreprise: 'Airbus',
    partenaire: true,
    projetType: 'vente',
    avatar: 'DR',
  },
  {
    email: 'pierre@demo.fr',
    password: DEMO_PASSWORD,
    prenom: 'Pierre',
    nom: 'Kauffman',
    entreprise: 'EDF',
    partenaire: true,
    projetType: 'renovation',
    avatar: 'PK',
  },
  {
    email: 'julie@demo.fr',
    password: DEMO_PASSWORD,
    prenom: 'Julie',
    nom: 'Moreau',
    entreprise: null,
    partenaire: false,
    projetType: 'location',
    avatar: 'JM',
  },
];
/* ── Mandataire ── */
  {
    email: 'claire@homeinlove.fr',
    password: DEMO_PASSWORD,
    role: 'mandataire',
    agentId: 'claire',
    prenom: 'Claire',
    nom: 'Dupont',
    avatar: 'CD',
  },
  /* ── Admin ── */
  {
    email: 'admin@homeinlove.fr',
    password: DEMO_PASSWORD,
    role: 'admin',
    agentId: 'admin',
    prenom: 'Admin',
    nom: 'HIL',
    avatar: 'AH',
  },
];

/* ─── Auth helpers ──────────────────────────────────────────────────────── */

function authLogin(email, password) {
  const user = DEMO_USERS.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (user) {
    sessionStorage.setItem('timonia_user', JSON.stringify(user));
    return user;
  }
  return null;
}

function authGetUser() {
  const raw = sessionStorage.getItem('timonia_user');
  return raw ? JSON.parse(raw) : null;
}

function authLogout() {
  sessionStorage.removeItem('timonia_user');
  window.location.href = 'login.html';
}

