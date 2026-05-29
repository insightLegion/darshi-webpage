# Darshi — Email Collection Landing Page

> **See the Roads. Fix the System.**

A single-page landing site for Darshi — a civic platform to report road conditions, unify government contracts, and demand accountability. The primary purpose of this site is **email collection** (waitlist signups).

---

## 📧 Email Forwarding Setup

Every email submitted on the site is forwarded directly to:
- `trideepsasmal10@gmail.com`

The site uses the [usepostbox.com](https://usepostbox.com) API integration to handle submissions without requiring a backend.

**How it works:**
The form is integrated directly in `script.js` with the API endpoint you provided. When a user enters their email and clicks "Get Early Access", a POST request is made. The data is processed by the Postbox endpoint and forwarded to your inbox.

```javascript
await fetch("https://usepostbox.com/api/ZDgxY2U5ZjYtMTcwZS00NDYxLWE2M2UtMzhlYWU0ZGY4YTM0XzE/f/touch", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    "email": "user@example.com"
  })
});
```

---

## 📁 File Structure

```
darshi-webpage/
├── index.html              ← Main page
├── style.css               ← All styles
├── script.js               ← GSAP animations + email handler
├── logo_no-text.jpg        ← Darshi eye logo
├── dashboard-working.jpeg  ← Dashboard screenshot
├── images/                 ← Pothole evidence photos
├── skills/                 ← GSAP reference docs
└── README.md               ← This file
```

## 🚀 Deployment

This is a static site — no build step needed. Deploy to any static host:

- **GitHub Pages**: Push to a repo, enable Pages in settings
- **Netlify**: Drag & drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: `npx vercel` in this directory
- **Cloudflare Pages**: Connect your GitHub repo

## 🎨 Tech Stack

- **HTML/CSS/JS** — No frameworks, no build tools
- **Yatra One** — Google Font for "Darshi" branding
- **Inter** — Google Font for body text
- **GSAP 3.12** — Scroll-triggered animations (via CDN)
- **Postbox API** — Email collection endpoint
