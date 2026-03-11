# Carole Millot Psychologue

Refonte du site en [Astro](https://astro.build/) pour une génération statique simple, maintenable et rapide.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

Le site de développement tourne ensuite sur `http://localhost:4321`.

## Structure

```text
public/           assets statiques servis tels quels
src/components/   header, footer, sidebar
src/config/       configuration du site et navigation
src/layouts/      layouts Astro partagés
src/pages/        pages statiques du site
src/styles/       feuille de style globale
```

## Déploiement

Le build de production est généré dans `dist/` avec `npm run build`.
