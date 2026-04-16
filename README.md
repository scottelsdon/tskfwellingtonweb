# TSKF Wellington — Static Website

Traditional Shotokan Karate-do Federation Wellington Dojo  
**Domain:** tsfkwellington.org.nz  
**Hosting:** Cloudflare Pages (free)  
**Source:** GitHub repository

---

## Site Structure

```
tskf-site/
├── index.html          Home page
├── about.html          About the dojo, instructors, events
├── timetable.html      Training times and venues
├── grading.html        Belt system, grading schedule, events calendar
├── contact.html        Contact form and details
├── css/
│   └── style.css       All styles (shared across pages)
└── README.md           This file
```

---

## Setup Steps

### 1. Contact Form (Formspree)

The contact form uses [Formspree](https://formspree.io) for free email delivery from a static site.

1. Sign up free at https://formspree.io
2. Create a new form → copy your Form ID (looks like `xpwzbrqy`)
3. In `contact.html`, find this line and replace `YOUR_FORM_ID`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
   ```
4. Done — submissions will be emailed to the address you registered with.

---

### 2. GitHub Repository

1. Create a new repository at https://github.com/new
   - Name: `tskf-wellington-website` (or similar)
   - Visibility: Public (required for Cloudflare Pages free tier) or Private
2. From this folder, initialise and push:
   ```bash
   git init
   git add .
   git commit -m "Initial site build"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tskf-wellington-website.git
   git push -u origin main
   ```

---

### 3. Cloudflare Pages Deployment

1. Log in to [Cloudflare dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Authorise GitHub and select your repository
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (or leave blank — root of repo)
5. Click **Save and Deploy**
6. Cloudflare will deploy and give you a `*.pages.dev` URL to test with

---

### 4. Point Your Domain to Cloudflare Pages

Since your domain is already registered through Cloudflare and DNS is managed in Cloudflare, this is simple:

1. In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `tsfkwellington.org.nz`
3. Cloudflare will automatically add the required DNS record (a CNAME)
4. Also add `www.tsfkwellington.org.nz` as a second custom domain if desired
5. SSL certificate is provisioned automatically — typically ready within minutes

---

## Google Maps Embed

The map iframe URLs in `timetable.html` and `contact.html` use placeholder embed URLs for Newlands Centennial Hall. For the most accurate pin:

1. Go to https://maps.google.co.nz
2. Search for **Newlands Centennial Hall, 212 Newlands Road, Newlands, Wellington**
3. Click **Share** → **Embed a map** → copy the `<iframe>` src URL
4. Replace the `src="..."` value in the map iframe on both pages

---

## Favicon

Add a `favicon.ico` (or `favicon.png`) to the root folder, then add to the `<head>` of each HTML file:
```html
<link rel="icon" href="favicon.ico">
```

---

## Images

The hero background on the home page currently uses an image URL from the Wix CDN:
```
https://static.wixstatic.com/media/c02827_71202cfd5b794b0a82cb081426827249.jpg
```

This will work for now but may stop working if the Wix site is deleted.  
**Recommended:** Download the dojo photos from your Wix media manager, save them to an `images/` folder in this repo, and update the CSS `background-image` URL.

---

## Updating Content

All content is plain HTML — no build tools, no CMS. To update:

- **Training times:** Edit the `<div class="session-card">` blocks in `timetable.html` and `index.html`
- **Events/notices:** Edit the `<div class="event-row">` blocks in `about.html` and `grading.html`
- **Contact details:** Edit `contact.html`
- **Instructors:** Edit the `<div class="instructor-card">` blocks in `about.html`

After editing, commit and push to GitHub — Cloudflare Pages will auto-deploy within ~30 seconds.

---

© 2025 TSKF Wellington Dojo
