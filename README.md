# Darshi — Email Collection Landing Page

> **See the Roads. Fix the System.**

A single-page landing site for Darshi — a civic platform to report road conditions, unify government contracts, and demand accountability. The primary purpose of this site is **email collection** (waitlist signups).

---

## 📧 Email Forwarding Setup (IMPORTANT)

Every email submitted on the site gets forwarded to your inbox. Here's how to set it up:

### Option 1: Formspree (Recommended — Free, 50 emails/month)

1. **Go to** [https://formspree.io](https://formspree.io) and create a free account.

2. **Create a new form** → Click "New Form" → Give it a name like "Darshi Waitlist".

3. **Set the forwarding email** to:
   - `trideepsasmal10@gmail.com` — or —
   - `sarthakispolice@gmail.com`
   
   You can add **both emails** as recipients in Formspree's form settings.

4. **Copy the Form ID** — It looks like `xyzjkwpq` (from the URL: `formspree.io/f/xyzjkwpq`)

5. **Open `index.html`** and find this line (~line 136):
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   Replace `YOUR_FORM_ID` with your actual ID:
   ```html
   action="https://formspree.io/f/xyzjkwpq"
   ```

6. **Done!** Every email submission now gets forwarded to your inbox.

> **Formspree free tier**: 50 submissions/month. If you need more, upgrade to their $10/month plan (1,000 submissions) at [formspree.io/plans](https://formspree.io/plans).

---

### Option 2: Web3Forms (Free, 250 emails/month)

If you want more free submissions:

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email (`trideepsasmal10@gmail.com` or `sarthakispolice@gmail.com`)
3. Get your **Access Key** via email
4. Modify `index.html`:

   Change the form action:
   ```html
   action="https://api.web3forms.com/submit"
   ```

   Add this hidden input inside the form (before the email input):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```

---

### Option 3: Google Forms (Unlimited, Free)

For unlimited submissions with no code changes:

1. Create a Google Form with one field: "Email"
2. In `script.js`, modify the `handleCollectSubmit` function to POST to your Google Form's response URL
3. All responses go to a Google Sheet, which sends email notifications

---

## 🔧 What Each Email Contains

When someone submits the form, you receive an email with:
- **Subject**: 🚀 New Darshi Waitlist Signup!
- **Email**: The submitted email address
- **Timestamp**: When they signed up

All submissions are also stored in your Formspree/Web3Forms dashboard.

---

## 📁 File Structure

```
darshi-webpage/
├── index.html              ← Main page (edit Formspree ID here)
├── style.css               ← All styles
├── script.js               ← GSAP animations + email handler
├── logo_no-text.jpg        ← Darshi eye logo
├── dashboard-working.jpeg  ← Dashboard screenshot
├── images/                 ← Pothole evidence photos (76 images)
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
- **Formspree** — Email forwarding service (free tier)
