# Mindwalker Web

Landing page starter menggunakan React + TypeScript dengan pendekatan komponen dan design token.

## Tech Stack
- React 18
- TypeScript 5
- Vite 5
- ESLint (TypeScript + React Hooks)
- CSS modular by folder (reset, token, global)

Stack ini cocok untuk landing page karena:
- Iterasi UI cepat (`vite`)
- Type safety untuk scaling section/component
- Struktur ringan tanpa overhead framework berat

## Struktur Folder
```text
mindwalker_web/
  reference/
    image.png
  src/
    components/
      Navbar.tsx
      FeatureCard.tsx
    sections/
      HeroSection.tsx
    styles/
      reset.css
      tokens.css
      global.css
    App.tsx
    main.tsx
  .eslintrc.cjs
  .gitignore
  index.html
  package.json
  tsconfig.json
  tsconfig.app.json
  tsconfig.node.json
  vite.config.ts
```

## Menjalankan Project
```bash
npm install
npm run dev
```

## Script
- `npm run dev` : jalankan local dev server
- `npm run build` : type-check + build production
- `npm run preview` : preview hasil build
- `npm run lint` : linting code

## Next Implementation (Recommended)
1. Pecah hero menjadi data-driven content (`src/content/home.ts`).
2. Tambahkan section lanjutan: `Trust`, `Solutions`, `Testimonials`, `CTA`, `Footer`.
3. Integrasi aset asli (logo, foto, icon) ke `src/assets/`.
4. Setup deploy (Vercel/Netlify) + CI lint/build.