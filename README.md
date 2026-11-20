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

SPA fallback is provided by `public/_redirects` (`/* /index.html 200`) so direct routes and refreshes work.

## Config

Edit `src/config/site.ts` for App Store URL, support email, socials, and company/legal details. Values starting with `PLACEHOLDER_` must be confirmed before go-live.
