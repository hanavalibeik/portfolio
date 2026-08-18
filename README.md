# Reiner® — Designer Portfolio


A portfolio website for a logo & identity designer, built with **Next.js 15** and ready to deploy on **Vercel**. Modeled on the conventions of the best working designers' sites: work visible immediately, a three-link nav, a quiet frame where the projects bring the color, and spec-sheet case studies.

Everything on the site is **placeholder content** — one persona ("Alex Reiner"), eight fictional projects, and generated SVG artwork — designed to be replaced with your own work in a few minutes.

## Design language

- **Signature**: the hero renders the name as a logo under construction — cap-height / x-height / baseline guides, a dashed circle guide and registration marks drawn in *non-photo blue* (the pencil color designers sketch with). Project cards echo it with registration marks on hover.
- **Type**: [Archivo Variable](https://fonts.google.com/specimen/Archivo) (width 125 / weight 900 as a logotype-style display, normal width for body) + [Spline Sans Mono](https://fonts.google.com/specimen/Spline+Sans+Mono) for metadata. Self-hosted via Fontsource — no external font requests.
- **Palette**: paper `#FAFAF8`, ink `#151510`, working blue `#2144E0`, sketch blue `#9EC8DD`. The chrome stays quiet; the work supplies the color.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel

**Option A — via GitHub (recommended):**

1. Push this repo to GitHub/GitLab/Bitbucket:
   ```bash
   git remote add origin git@github.com:YOU/your-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy**. Next.js is auto-detected; no configuration needed.

**Option B — Vercel CLI:**

```bash
npm i -g vercel
vercel           # follow the prompts; `vercel --prod` to go live
```

After deploying, set your production URL in `src/data/site.ts` (`url`) so social/OG metadata resolves correctly.

## Replace the placeholders

All content lives in **two data files** and the `/public` folder:

| What | Where |
|---|---|
| Name, role, tagline, email, socials, clients, services, availability | `src/data/site.ts` |
| Projects (titles, case study copy, categories, image paths) | `src/data/projects.ts` |
| Project images | `/public/work/<slug>/` |
| Portrait photo | `/public/about/portrait.png` |
| About page bio copy | `src/app/about/page.tsx` |
| Favicon | `/public/icon.png` (her monogram) |

### Swapping in a real project

1. Create `/public/work/my-project/` and drop in a cover plus any detail images (JPG/PNG/WebP all fine).
2. In `src/data/projects.ts`, edit an entry (or copy one): update `slug`, `title`, copy fields, and point `cover`/`images` at your files. Write real `alt` text.
3. Delete the placeholder projects you don't need — the grid, filters, case study pages and prev/next navigation all derive from that one array.

Categories are typed (`Identity | Logo | Print | Editorial`). To rename or add one, change the union type and the `categories` array at the bottom of `projects.ts`.

### Using next/image for photos

Placeholder art is SVG rendered with plain `<img>`. When you switch to photography, consider replacing those `<img>` tags (in `ProjectCard.tsx` and `work/[slug]/page.tsx`) with [`next/image`](https://nextjs.org/docs/app/building-your-application/optimizing/images) for automatic resizing and lazy loading — on Vercel this works out of the box.

### Contact form (optional)

The contact page uses a `mailto:` link, which needs no backend. If you want a form later, [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com) or a small [Next.js route handler + Resend](https://resend.com) are easy drop-ins.

## Project structure

```
src/
  app/
    layout.tsx            # fonts, metadata, header/footer shell
    page.tsx              # home: hero, selected work, about strip, CTA
    globals.css           # the whole design system (tokens at the top)
    work/page.tsx         # filterable index of all projects
    work/[slug]/page.tsx  # case study template (static, from data)
    about/page.tsx
    contact/page.tsx
    not-found.tsx
  components/             # header, footer, cards, hero, marks
  data/
    site.ts               # ← your identity
    projects.ts           # ← your work
public/
  work/<slug>/            # project artwork
  about/portrait.svg
```

Accessibility & performance are part of the build: fully static pages, semantic landmarks, visible focus states, `prefers-reduced-motion` respected, and no client JS except the nav's active state and the work-page filters.

## Automated Instagram feed

The home page reads its four latest Instagram cards from `src/data/instagram.json`. The scheduled workflow at `.github/workflows/sync-instagram.yml` refreshes that file and the matching images once per day, then rebuilds and deploys GitHub Pages. Each card is generated from one API object so its image, caption, date and permalink cannot become mismatched.

One-time GitHub setup:

1. Create a long-lived access token for the Instagram account through Meta's Instagram API.
2. In the repository, open **Settings → Secrets and variables → Actions → Secrets**, then add `INSTAGRAM_ACCESS_TOKEN`. Never commit the token to the repository.
3. If the token does not resolve the intended account through `me`, add an Actions variable named `INSTAGRAM_USER_ID` with the numeric Instagram user ID.
4. Optionally set `INSTAGRAM_API_VERSION` as an Actions variable when upgrading from the script's default (`v24.0`).
5. The workflow attempts its first sync when these files are deployed. You can also run **Actions → Sync Instagram and deploy → Run workflow** at any time; scheduled refreshes run every day at 03:17 UTC.

The public website never receives the access token. The workflow downloads the media into `public/instagram/`, and a failed API request leaves the last known-good feed unchanged. Long-lived Meta tokens expire and must be replaced before expiry; the workflow notice remains harmless until the secret is configured.
