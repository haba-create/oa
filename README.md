# obenewa.co.uk

Personal portfolio of Obenewa Adu — creative, commercial and technical operator working across New York and London.

## Stack

- Next.js (App Router) with React and TypeScript
- Hand-written CSS in `app/globals.css` (no framework)
- Static assets in `public/`

## Structure

- `/` — home: hero, about, What I Do, contact
- `/work` — case-study index
- `/work/creator-campaign` — creator partnerships case study
- `/work/haircare-ugc-campaign` — UGC and shoot production case study
- `/work/afia` — AFIA textile research and product development case study

Project copy lives in `content/projects.ts`; shared case-study layout and slideshows live in `components/`.

## Development

```bash
npm install
npm run dev     # local dev server
npm run build   # production build
npm start       # serve the production build
```

## Deployment

Hosted on Railway. Pushes to `main` auto-deploy.
