
# Timonia — Prototype UI

Prototype haute-fidélité pour Timonia, gestionnaire de projets immobiliers.
Développé en HTML/CSS/JS vanilla — zéro dépendance, zéro framework.

## Structure du projet

```
timonia/
├── index.html          # Page salarié (landing)
├── entreprise.html     # Page entreprise / DRH
├── dashboard.html      # Espace client salarié
├── css/
│   ├── base.css        # Variables, reset, composants partagés
│   ├── salarie.css     # Styles page salarié
│   ├── entreprise.css  # Styles page entreprise
│   └── dashboard.css   # Styles espace client
├── js/
│   ├── theme.js        # Dark/light mode (partagé)
│   ├── data.js         # Données mock des 4 projets
│   ├── salarie.js      # Logique page salarié
│   ├── entreprise.js   # Logique page entreprise
│   └── dashboard.js    # SPA dashboard (checklist, timeline, docs)
└── README.md
```

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Salarié | `index.html` | Landing page, coverage checker, tarifs, CTA |
| Entreprise | `entreprise.html` | ROI, offres DRH, démo Veolia |
| Dashboard | `dashboard.html` | 4 projets avec checklist + délégation + timeline + docs |

## Fonctionnalités

- ☀️🌙 **Dark/Light mode** — bascule en temps réel, persisté en localStorage
- 🔍 **Coverage checker** — vérifie si l'entreprise est adhérente Timonia
- ✅ **Checklist interactive** — 3 états par tâche : *Je fais / Je délègue (prix affiché) / C'est fait*
- 📅 **Timeline** — progression visuelle par projet avec tâches associées
- 📁 **Documents** — grille avec statuts et téléchargement
- 📊 **Récap financier** — budget délégation en temps réel, couverture Veolia
- 📱 **Responsive** — mobile friendly

## 4 projets démo

- 🏠 **Achat immobilier** — Lyon 6e, mutation Veolia, PTZ + MOBILI-PASS
- 🔧 **Rénovation énergétique** — DPE F→B, MaPrimeRénov', CEE, suivi chantier
- 🏘️ **Mise en location** — Loi ALUR, diagnostics, LOCA-PASS, gestion
- 💰 **Mise en vente** — Bordeaux, diagnostics vendeur, home staging, plus-value

## Démarrage

Ouvrez simplement `index.html` dans un navigateur.
Aucune installation requise — aucune dépendance externe sauf Google Fonts.

Pour un serveur local :
```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Puis ouvrez `http://localhost:8000`

## Modèle économique intégré

| Qui paie | Quoi | Prix |
|----------|------|------|
| **Entreprise** | Abonnement annuel par salarié | 69–89 €/an |
| **Salarié** (sans entreprise adhérente) | Premier appel expert | 49 € |
| **Salarié** | Pack accompagnement complet | 190 € |
| **Salarié** | Délégation de tâche à la carte | Prix affiché avant validation |

> ℹ️ Pour ajouter votre logo : placez un fichier `logo-timonia.png` à la racine du projet.

---

© 2025 Timonia · Partenaire Action Logement certifié
