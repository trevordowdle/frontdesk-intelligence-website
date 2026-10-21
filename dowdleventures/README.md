# Dowdle Ventures Company Site

Static one-page site for **Dowdle Ventures LLC** (dowdleventures.com). Same stack as the FrontDesk Intelligence site in the repo root (hand-written HTML, one stylesheet, no build step), but fully self-contained in this folder.

## Editing copy

All copy lives in **`index.html`**, including the page title, meta description, Open Graph / Twitter text and the JSON-LD block in `<head>`. `css/main.css` and `js/main.js` contain no visible text.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The page and all its copy |
| `css/main.css` | Styles; palette and fonts are tokens on `:root` |
| `js/main.js` | Copyright year, copy-email button, contact form to email app |
| `img/logo.png` | Header monogram: letters only on a transparent background, D recolored to the page green (192×132) |
| `img/trevor.jpg`, `img/jakob.jpg` | Founder headshots, square crops at 240×240 (shown at 72px, so they stay sharp on high-res screens) |
| `img/logo-mark-src.png` | Full-size version of the same transparent monogram, for re-sizing |
| `img/logo-square.png` | Monogram padded to a square; the logo search engines see |
| `favicon-32.png`, `apple-touch-icon.png` | Browser tab and home-screen icons |
| `og-image.png` | 1200×630 social preview: the logo with title, centered |
| `robots.txt`, `sitemap.xml` | Basic SEO |

## Contact form

The form opens the visitor's email app with a pre-filled message to `contact@dowdleventures.com` (the address comes from the form's `action`). Without JavaScript it falls back to a plain `mailto:` submit. To switch to a hosted form service later (Formspree, etc.), change the form's `action`/`method`/`enctype` and remove the submit handler in `js/main.js`.

## Local preview

From this folder, reuse the root site's preview server:

```bash
python ../serve.py 8081
```

Open http://localhost:8081

## Logo files

All logo images are made from the two originals, `Logo.png` (monogram) and `LogoWithTitle.png`. Their background green `#0e3125` and gold `#bd9543` are the `--evergreen` and `--gold` tokens in `css/main.css`. The header monogram is the original with the green background removed and the cream D recolored to `#0e3125`, so it sits directly on the light page; the V keeps its original gold. If the logo changes, regenerate the files above from the new originals at the same sizes. A transparent or vector original would make the header version simpler and sharper. For the square icons and the social image, place the logo on a `#0e3125` background, and don't scale any image up.
