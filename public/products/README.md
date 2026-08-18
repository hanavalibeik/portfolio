# Product photography

Every product below is currently showing a generated **placeholder**, not a real
photo. Replacing one takes two steps.

## 1. Drop the file in

| Product | Folder | Filename |
| --- | --- | --- |
| Postcard | `public/products/shiraz-postcard/` | `01.webp` |
| Ceramic mug | `public/products/shiraz-mug/` | `01.webp` |
| Calico tote bag | `public/products/shiraz-tote/` | `01.webp` |
| Magnet | `public/products/shiraz-magnet/` | `01.webp` |
| Decorative frame | `public/products/shiraz-frame/` | `01.webp` |

**Format:** WebP, square (1:1), 1200 × 1200 px, under 250 KB.
Extra angles go in the same folder as `02.webp`, `03.webp` and so on.

## 2. Point the data at it

In `src/data/products.ts`, for that product:

```ts
images: [
  { src: "/products/shiraz-postcard/01.webp", alt: "Shiraz Collection postcard" },
  // ↑ change .svg → .webp, and delete `placeholder: true`
],
```

Deleting `placeholder: true` is what removes the "Photo coming soon" label.
Write real `alt` text describing the object — what it is and what's printed on
it — not the filename.

## Regenerating placeholders

```bash
node scripts/generate-product-placeholders.mjs
```

## Still needed from the shoot

- One clean product shot per item, square crop, on a plain background.
- One lifestyle shot for the collection masthead.
- The exact ink colour — `--shiraz-ink` in `src/app/products.css` is currently
  `#f4c13c`, sampled from a screenshot. Resample it from a real photo.
