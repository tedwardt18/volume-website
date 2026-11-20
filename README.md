# VOLUME website

Official marketing site for **VOLUME** (`trainwithvolume.com`).

## Stack

- React + Vite + TypeScript
- React Router (SPA)
- Cloudflare Pages–ready static build

## Develop

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output directory: `dist/`

## Cloudflare Pages

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (repo root) |

SPA fallback: do **not** ship `/* /index.html 200` in `_redirects` — Cloudflare Pages rejects that with error 100324 (infinite loop vs clean-URL / `.html` stripping). With no top-level `404.html`, Pages already serves `/` for unmatched paths so client routes and refreshes work.

## Config

Edit `src/config/site.ts` for App Store URL, support email, socials, and company/legal details. Values starting with `PLACEHOLDER_` must be confirmed before go-live.
