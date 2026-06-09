# FrontDesk Intelligence — Marketing Site

Static website for **FrontDesk Intelligence**, built to satisfy Twilio toll-free verification requirements (30489: website must be established and active).

## Pages

| Page | URL path | Purpose |
|------|----------|---------|
| Home | `/` | Business overview, services, credibility |
| Contact | `/contact.html` | Business name, email, phone, address |
| SMS Opt-In | `/sms-opt-in.html` | Public opt-in methodology (required for verification) |
| Privacy | `/privacy.html` | Privacy policy |
| Terms | `/terms.html` | Terms of service |

## Before Twilio resubmission

Update these placeholders to match **exactly** what you submitted in Twilio Console:

1. **Business legal name** — `contact.html`, footer
2. **Email** — currently `trevordowdle@gmail.com` (use your real inbox)
3. **Phone** — currently `(801) 895-2696` (your toll-free; confirm this is what you want public)
4. **Mailing address** — placeholder in `contact.html` and `privacy.html` (replace with registered business address)
5. **Domain** — GitHub Pages URL or custom domain must match verification form

Twilio reviewers check that business details, privacy policy, and opt-in URL are consistent and publicly reachable over HTTPS.

## Local preview

```bash
cd /Users/trevordowdle/Projects/frontdesk-intelligence-website
python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy to GitHub Pages

### Option A — New repo (recommended)

```bash
cd /Users/trevordowdle/Projects/frontdesk-intelligence-website
git init
git add .
git commit -m "Add FrontDesk Intelligence marketing site for Twilio verification"
gh repo create frontdesk-intelligence-website --public --source=. --push
```

Then in GitHub: **Settings → Pages → Build and deployment → Source: Deploy from branch → Branch: `main` / `/ (root)`**.

Your site will be live at:

```text
https://<your-github-username>.github.io/frontdesk-intelligence-website/
```

### Option B — Custom domain (optional, stronger for verification)

1. Add a `CNAME` file with your domain (e.g. `www.frontdeskintelligence.com`)
2. Configure DNS `CNAME` → `<username>.github.io`
3. Enable HTTPS in GitHub Pages settings

## URLs to submit in Twilio toll-free verification

| Field | Example URL |
|-------|-------------|
| Website | `https://<username>.github.io/frontdesk-intelligence-website/` |
| Privacy policy | `https://<username>.github.io/frontdesk-intelligence-website/privacy.html` |
| Opt-in / consent | `https://<username>.github.io/frontdesk-intelligence-website/sms-opt-in.html` |

Use case category: **Customer care / account notifications** (transactional missed-call follow-up, not marketing).

Sample message (from your compliance doc):

```text
Hi — we missed your call at [Clinic Name]. Reply here and we'll help with scheduling or questions. Msg & data rates may apply. Reply STOP to opt out.
```

## Verification checklist

- [ ] Site loads in incognito browser over HTTPS
- [ ] Contact page has real email, phone, and address
- [ ] Privacy and Terms links work from footer
- [ ] SMS opt-in page describes call-initiated consent
- [ ] Business name matches Twilio Trust Hub / verification form
- [ ] No "under construction" or placeholder-only pages

## Related repo docs

Content is aligned with:

- `ai-frontdesk-intelligence/docs/compliance/sms-opt-in-methodology.md`
- `ai-frontdesk-intelligence/docs/essence/SalesPositioning.md`
