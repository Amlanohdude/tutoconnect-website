# TutoConnect — Find Tuition & Tutors in Guwahati

TutoConnect is a modern web platform connecting students, parents, and private tutors across Guwahati, Assam. Discover verified educators, review qualifications and subjects, and connect directly with 0% platform commission.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- `npm`

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local dev server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000/`.

3. **Type-check and lint:**
   ```bash
   npm run lint
   ```

4. **Create a production build:**
   ```bash
   npm run build
   ```
   Compiled assets are generated in the `dist/` directory.

---

## 🌐 Deploying to Cloudflare Pages via GitHub

This project is pre-configured for **Cloudflare Pages**:
- **SPA Routing**: `public/_redirects` ensures direct routes (`/become-a-tutor/`, `/tuition/guwahati/`) load cleanly without 404 errors.
- **Security Headers**: `public/_headers` enforces Content Security Policy (CSP), `X-Frame-Options: DENY`, and `X-Content-Type-Options: nosniff`.

### Cloudflare Build Configuration
- **Framework preset:** `Vite`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`
- **Node.js version:** `20` (or modern LTS)

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Custom Tokens
- **Icons**: Lucide React
- **Animations**: Motion (`motion/react`)
- **Type Safety**: TypeScript 5.8
- **SEO & Structured Data**: Schema.org JSON-LD microdata (`SoftwareApplication`) + XML Sitemap
