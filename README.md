# Hana Vali — portfolio & shop

Portfolio site for **Hana Vali**, graphic designer and illustrator: case
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

## Analytics

The site uses Umami Cloud for cookieless, client-side analytics. Set the public
website ID in `NEXT_PUBLIC_UMAMI_WEBSITE_ID`. For production builds, add it as a
GitHub Actions repository variable under **Settings → Secrets and variables →
Actions → Variables**.

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

1. Create `public/products/<slug>/` and add a **square** photo as `01.webp`
   (aim for 1200 × 1200, under 250 KB). Square matters: both the card and the
   detail plate render inside an `aspect-ratio: 1` box with `object-fit: cover`,
   so a landscape photo gets centre-cropped by the browser. Add `02.webp`,
   `03.webp` and so on for extra angles.
2. Copy an entry in `src/data/products.ts` and fill in the name in both English
   and Persian, size, material, price and blurb.
3. Write real `alt` text describing the photo, not the product name — the name
   is already in the heading next to it.
4. Set `placeholder: true` on an image only while waiting on real photography;
   it renders a visible "photo coming soon" badge.

The index page, detail pages, sitemap entries and structured data all derive
from that array.

**Ordering has no checkout.** Every order button opens an Instagram DM
(`ig.me/m/<handle>`) with a copy-to-clipboard order summary, plus WhatsApp as an
alternative. There is no cart, no payment gateway and no backend — by design.

---

## Automated Instagram feed

The home page reads its four latest Instagram cards from
`src/data/instagram.json`. The scheduled workflow at
`.github/workflows/sync-instagram.yml` refreshes that file and downloads the
matching images into `public/instagram/` once a day, then commits the result to
`main`. That commit is what triggers the deploy workflow — the sync itself does
not build or deploy, so there is exactly one deploy path.

Clicking a card opens a lightbox with the full image, the full caption, the post
date and a link through to Instagram. It is a native `<dialog>`, so the focus
trap, the Escape key and the return of focus to the thumbnail all come from the
browser; left and right arrows move between posts.

One-time setup:

1. Create a long-lived access token for the Instagram account through Meta's
   Instagram API.
2. In **Settings → Secrets and variables → Actions → Secrets**, add
   `INSTAGRAM_ACCESS_TOKEN`. Never commit the token.
3. If the token doesn't resolve the account through `me`, add an Actions
   variable `INSTAGRAM_USER_ID` with the numeric ID.
4. Optionally set `INSTAGRAM_API_VERSION` when upgrading from the script default.

Scheduled refreshes run daily at 03:17 UTC; you can also run the workflow
manually from the Actions tab. The public site never receives the token, and a
failed API request leaves the last known-good feed in place.

### Keeping the token alive

Instagram long-lived tokens expire after **60 days**. Without renewal the feed
silently freezes about two months after launch — the site keeps working, it just
stops being current, which is the failure mode worth guarding against.

The workflow renews the token on every run and writes the new value back. That
write needs a token of its own: create a **fine-grained personal access token**
scoped to this repository with **Secrets: read and write**, and store it as the
secret `INSTAGRAM_TOKEN_ROTATION_PAT`.

Without that PAT the sync still runs — it just stops working whenever the
current Instagram token lapses, and you re-issue it by hand from the Meta app
dashboard.

### When the feed is empty

If the token is missing, expired, or the first sync has not run yet, the home
page falls back to the hand-curated posts in `site.instagram.curated`. If that
is empty too, the section collapses to a single link across to the profile — it
never renders as a broken loading state. A missing token also raises a workflow
warning rather than failing silently.

---

## Notes on the build

- Fully static (`output: "export"`), no server runtime.
- Images are plain `<img>` with explicit dimensions; Next's image optimisation is
  off because GitHub Pages can't run it.
- Fonts are self-hosted through Fontsource: Archivo (display and body), Spline
  Sans Mono (metadata), Vazirmatn (Persian).
- Accessibility is part of the build: semantic landmarks, a skip link, visible
  focus states, 44px touch targets and `prefers-reduced-motion` respected. The
  auto-scrolling services rail has an explicit pause control, since pausing on
  hover and focus alone never reaches a touch user (WCAG 2.2.2).
- SEO is derived, not hand-maintained: canonical URLs, per-page Open Graph
  images and the sitemap all run through `src/lib/seo.tsx`, so they cannot drift
  apart. Structured data covers `Person` and `WebSite` on the home page,
  `CreativeWork` on case studies, `Product` on shop pages and `BreadcrumbList`
  on both detail types.
