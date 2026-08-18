# Hana Valibeik — portfolio & shop

Portfolio site for **Hana Valibeik**, graphic designer and illustrator: case
studies, an about page, and a small shop for her printed products.

Built with **Next.js 15** as a fully static site and deployed to **GitHub Pages**
at <https://hanavalibeik.github.io/portfolio/>.

---

## Run it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # static export → out/
npm run typecheck
```

## Deploying

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which builds and
publishes to GitHub Pages. Nothing else is needed.

The site is served from a **sub-path** (`/portfolio`), so the workflow builds
with `NEXT_PUBLIC_BASE_PATH=/portfolio`. Two consequences worth knowing:

- Any reference to a file in `public/` **must** go through `assetPath()` from
  `src/lib/assetPath.ts`. A bare `src="/foo.png"` 404s in production.
- `next/link` applies the base path itself — never wrap a `<Link href>` in
  `assetPath()`.

To preview the production export locally, serve it from a matching sub-path:

```bash
npm run build:pages
rm -rf /tmp/site && mkdir -p /tmp/site/portfolio && cp -r out/* /tmp/site/portfolio/
npx serve /tmp/site        # → http://localhost:3000/portfolio/
```

---

## Where the content lives

| What | Where |
| --- | --- |
| Name, role, contact details, socials, clients, services | `src/data/site.ts` |
| Case studies | `src/data/projects.ts` |
| Products | `src/data/products.ts` |
| Project images | `public/work/<slug>/` |
| Product images | `public/products/<slug>/` |
| Portrait | `public/about/portrait.webp` |
| About page copy | `src/app/about/page.tsx` |

### Adding a project

1. Create `public/work/<slug>/` and drop the images in.
2. Copy an entry in `src/data/projects.ts`, update the fields, point
   `cover`/`images` at the new files, and write real `alt` text.

The grid, filters, case study page and prev/next links all derive from that
array.

### Adding a product

1. Create `public/products/<slug>/` and add a square photo as `01.webp`
   (1200 × 1200, under 250 KB). See `public/products/README.md`.
2. Copy an entry in `src/data/products.ts` and fill in the name in both English
   and Persian, size, material, price and blurb.
3. Delete `placeholder: true` from the image once a real photo is in place.

The index page, detail pages, sitemap entries and structured data all derive
from that array.

**Ordering has no checkout.** Every order button opens an Instagram DM
(`ig.me/m/<handle>`) with a copy-to-clipboard order summary, plus WhatsApp as an
alternative. There is no cart, no payment gateway and no backend — by design.

---

## Automated Instagram feed

The home page reads its four latest Instagram cards from
`src/data/instagram.json`. The scheduled workflow at
`.github/workflows/sync-instagram.yml` refreshes that file and the matching
images once a day, then rebuilds and deploys.

One-time setup:

1. Create a long-lived access token for the Instagram account through Meta's
   Instagram API.
2. In **Settings → Secrets and variables → Actions → Secrets**, add
   `INSTAGRAM_ACCESS_TOKEN`. Never commit the token.
3. If the token doesn't resolve the account through `me`, add an Actions
   variable `INSTAGRAM_USER_ID` with the numeric ID.
4. Optionally set `INSTAGRAM_API_VERSION` when upgrading from the script default.

Scheduled refreshes run daily at 03:17 UTC; you can also run the workflow
manually. The public site never receives the token, and a failed API request
leaves the last known-good feed in place.

Meta tokens expire. When the synced feed is empty for any reason, the home page
falls back to the hand-curated posts in `site.instagram.curated`, so the section
never renders as a broken loading state.

---

## Notes on the build

- Fully static (`output: "export"`), no server runtime.
- Images are plain `<img>` with explicit dimensions; Next's image optimisation is
  off because GitHub Pages can't run it.
- Fonts are self-hosted through Fontsource: Archivo (display and body), Spline
  Sans Mono (metadata), Vazirmatn (Persian).
- Accessibility is part of the build: semantic landmarks, a skip link, visible
  focus states, 44px touch targets and `prefers-reduced-motion` respected.
