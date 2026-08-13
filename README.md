# Belal Abdalhuk — Portfolio

Personal portfolio for Belal Abdalhuk, Senior Full-Stack Software Engineer.

## Edit the site

- Portfolio content: `app/page.tsx`
- Styling and responsive layout: `app/globals.css`
- SEO and social preview: `app/layout.tsx`
- Resume: `public/Belal-Abdalhuk-Resume.pdf`

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

## Validate production builds

```bash
npm run build
npm run build:pages
```

`npm run build:pages` creates a static site in `gh-pages-dist/`. The workflow in
`.github/workflows/deploy-pages.yml` publishes that output to GitHub Pages after
every push to `main`.

## Publishing

This repository is intended to be named `Belal2.github.io`, which publishes at
<https://belal2.github.io/>. In GitHub, set **Settings → Pages → Source** to
**GitHub Actions** if it is not selected automatically.
