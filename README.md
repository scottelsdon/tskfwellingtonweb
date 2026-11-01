# TSKF Wellington — Static Website

Traditional Shotokan Karate-do Federation Wellington Dojo  
**Domain:** https://tskfwellington.club  
**Hosting:** Cloudflare Pages (auto-deploys from `main`)  
**Source:** https://github.com/scottelsdon/tskfwellingtonweb

Plain HTML/CSS — no build tools, no CMS. Commit and push to `main` and Cloudflare deploys within about a minute.

---

## Site Structure

```
├── index.html          Home page
├── about.html          About the dojo, instructors
├── timetable.html      Training times, venues, map
├── grading.html        Belt system, gradings, events calendar
├── gallery.html        Photo gallery + lightbox
├── contact.html        Contact details + Formspree form
├── 404.html            Not-found page
├── css/style.css       All styles
├── js/site.js          Mobile nav toggle; hides past dated events
├── images/             Full-size photos (max 1600px)
│   └── thumbs/         400px copies used in the gallery grid and home preview
├── sitemap.xml, robots.txt, og-image.jpg, favicons
```

---

## Updating Content

- **Training times:** in three places — the `session-card` blocks in `index.html` and `timetable.html`, and `openingHoursSpecification` in the JSON-LD block at the top of `index.html`.
- **Events:** the `event-row` blocks in `grading.html` (the about page links there). Add `data-date="YYYY-MM-DD"` to a one-off event (e.g. the next grading) and it disappears automatically after that day (NZ time).
- **Contact details:** `contact.html`. Phone links use the international form, e.g. `021 123 8307` → `tel:+64211238307`.
- **Instructors:** the `instructor-card` blocks in `about.html`.
- **Sitemap:** update `<lastmod>` in `sitemap.xml` when a page changes.

### Adding gallery photos

1. Resize the photo to at most 1600px on the long side (JPEG quality ~80) and save it in `images/`.
2. Save a 400px copy with the same filename in `images/thumbs/`.
3. Add `["filename.jpg", "short description of the photo"]` to the `PHOTOS` array in `gallery.html`. The description is the alt text and hover caption.

Python with Pillow can do steps 1–2:

```python
from PIL import Image
im = Image.open('images/NEW.jpg').convert('RGB')
im.thumbnail((1600, 1600)); im.save('images/NEW.jpg', quality=80, optimize=True, progressive=True)
im.thumbnail((400, 400));   im.save('images/thumbs/NEW.jpg', quality=75, optimize=True)
```

---

## Contact Form

The form in `contact.html` posts to Formspree (form `mdayajpz`); submissions are emailed to the account's registered address. Manage it at https://formspree.io.
