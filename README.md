# Dowdle Ventures Company Site

Static site for **Dowdle Ventures LLC**, published at [dowdleventures.com](https://dowdleventures.com) via GitHub Pages. Hand-written HTML, one stylesheet, no build step.

## Editing copy

Main page copy lives in **`index.html`**, including the page title, meta description, Open Graph / Twitter text and the JSON-LD block in `<head>`. The capability statement's copy lives in **`capability-statement.html`**. `css/main.css` and `js/main.js` contain no visible text.

The site makes no accessibility or compliance claims (no "ADA compliant", "WCAG compliant" or "508 compliant"). Keep it that way unless a lawyer has reviewed the wording.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The main page and its copy |
| `capability-statement.html` | One-page capability statement for government and nonprofit buyers; prints to one US Letter page |
| `capability-statement.pdf` | PDF export of the capability statement (tagged, for screen readers) |
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

```bash
python serve.py 8080
```

Open http://localhost:8080

## GitHub Pages

The site is published from the `main` branch. The custom domain is set in `CNAME` to `dowdleventures.com`.

At your DNS provider, point the apex domain at GitHub Pages with `A` records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Add `www` as a `CNAME` to `trevordowdle.github.io`. GitHub will redirect `www.dowdleventures.com` to `dowdleventures.com`. After DNS propagates, enable **Enforce HTTPS** in **Settings → Pages**.

## Logo files

All logo images are made from the two originals, `Logo.png` (monogram) and `LogoWithTitle.png`. Their background green `#0e3125` and gold `#bd9543` are the `--evergreen` and `--gold` tokens in `css/main.css`. The header monogram is the original with the green background removed and the cream D recolored to `#0e3125`, so it sits directly on the light page; the V keeps its original gold. If the logo changes, regenerate the files above from the new originals at the same sizes. A transparent or vector original would make the header version simpler and sharper. For the square icons and the social image, place the logo on a `#0e3125` background, and don't scale any image up.

## Capability statement

Placeholders for the UEI, CAGE code and a past performance section are HTML comments in `capability-statement.html`. Uncomment them once you've registered on SAM.gov and have client work you can cite. Confirm the NAICS codes match the ones you pick during registration.

After any change, re-export the PDF with the preview server running (`python serve.py 8080`):

```bash
chrome --headless=new --no-pdf-header-footer --generate-pdf-document-outline   --virtual-time-budget=8000 --print-to-pdf=capability-statement.pdf http://localhost:8080/capability-statement
```

Chrome tags the PDF for screen readers. Check that it is still one page.

## Accessibility checks

Before publishing changes, run Lighthouse (Chrome DevTools > Lighthouse > Accessibility) on both pages. Also tab through each page with the keyboard and check that every link and field shows a focus outline. As of 2026-10-20, both pages score 100, and every color pair meets WCAG 2.2 AA contrast.
