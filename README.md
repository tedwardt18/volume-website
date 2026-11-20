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

## Cloudflare (Workers Builds / Pages)

This site deploys via Cloudflare **Workers Builds** (static assets), which runs `npm run build` then `npx wrangler deploy`.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` (default) |
| Assets | `dist/` via `wrangler.jsonc` |
| Root directory | `/` (repo root) |

SPA fallback is configured in `wrangler.jsonc` as `assets.not_found_handling = "single-page-application"` so direct routes and refreshes (`/features`, `/support`, etc.) work.

Do **not** ship `/* /index.html 200` in `_redirects` — Cloudflare rejects that with error **100324** (infinite loop vs clean-URL / `.html` stripping).

## Config

Edit `src/config/site.ts` for App Store URL, support email, socials, and company/legal details. Values starting with `PLACEHOLDER_` must be confirmed before go-live.
