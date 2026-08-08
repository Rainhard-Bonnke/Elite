# Elites Stock & Tech Solutions — Website

A world-class, fully responsive inventory and tech solutions website built with **React + Vite + Framer Motion**.

---

## ✨ Features

- ⚡ React + Vite for blazing-fast performance
- 🎨 Custom design system (emerald green + gold palette)
- 🎬 Framer Motion animations (page transitions, scroll reveals, hover effects)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🧭 React Router DOM for multi-page navigation
- 💬 WhatsApp CTA with pre-filled message
- 🖱️ Animated service cards, work gallery, team section
- 🔄 Marquee ticker, floating orbs, grid backgrounds

---

## 📁 Project Structure

```
elites/
├── public/
│   └── images/           ← Replace these with your actual photos
│       ├── README.md     ← Photo guide (sizes & names)
│       ├── team-1.jpg
│       ├── team-2.jpg
│       ├── team-member-1.jpg
│       ├── team-member-2.jpg
│       ├── work-1.jpg → work-8.jpg
│       ├── erp-screenshot.png
│       └── client.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + Navbar.css
│   │   └── Footer.jsx + Footer.css
│   ├── pages/
│   │   ├── Home.jsx + Home.css
│   │   ├── About.jsx + About.css
│   │   ├── Services.jsx + Services.css
│   │   ├── OurWork.jsx + OurWork.css
│   │   └── Contact.jsx + Contact.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Setup & Run Locally

### Prerequisites
- Node.js v18+ (https://nodejs.org)
- npm (comes with Node.js)

### Steps

```bash
# 1. Unzip and navigate to the project folder
cd elites

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open: http://localhost:5173

---

## 🖼️ Replacing Images

All images are in `public/images/`. Replace each file with your own photo of the same name:

| File | What to put |
|------|-------------|
| team-1.jpg | Wide shot of team at work |
| team-2.jpg | Another audit/work scene |
| team-member-1.jpg | Headshot of Strategic Operations lead |
| team-member-2.jpg | Headshot of Systems Architecture lead |
| work-1.jpg to work-8.jpg | Any audit, warehouse, field photos |
| erp-screenshot.png | Screenshot of your ERP or dashboard |
| client.jpg | Client testimonial portrait photo |

Recommended sizes: 800x600px minimum, under 500KB each.

---

## 🏗️ Building for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 🌍 Deploy to Vercel (Free, Recommended)

### Option A – Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done.

### Option B – Vercel Dashboard
1. Push your project to GitHub
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Framework preset: Vite
5. Build command: npm run build
6. Output directory: dist
7. Click Deploy

Your site goes live at elites.vercel.app (or your custom domain).

---

## ⚙️ Customization

### Change contact details
Edit src/pages/Contact.jsx:
```js
const WHATSAPP_NUMBER = '254....'; // your number without +
const WHATSAPP_MSG = encodeURIComponent('Hello! Thanks for contacting Elites...');
```

Edit src/components/Footer.jsx for footer email/phone/location.

### Change brand colors
Edit src/index.css CSS variables:
```css
--green-deep: #0a2e1a;    /* Dark bg */
--green-bright: #16a34a;  /* Primary green */
--gold: #d97706;          /* Gold accent */
--cream: #fafaf7;         /* Light sections */
```

### Update stats on homepage
Edit the `stats` array in src/pages/Home.jsx

### Update services
- Homepage preview: `services` array in src/pages/Home.jsx
- Full services page: `services` array in src/pages/Services.jsx

### Update team members
Edit the `team` array in src/pages/About.jsx

### Update gallery
Edit the `projects` array in src/pages/OurWork.jsx

---

## 📱 Pages Overview

| Route | Description |
|-------|-------------|
| / | Home: Hero, Mission, Services, Why Us, Testimonial, CTA |
| /about | Story, Origins, Mission/Vision, Values, Team |
| /services | All 6 services with detailed feature lists |
| /our-work | Gallery of 8 projects with hover animations |
| /contact | Contact form + WhatsApp button + contact info |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Framer Motion | Animations & transitions |
| React Router DOM | Multi-page routing |
| React Intersection Observer | Scroll-triggered reveals |
| Lucide React | Icons |
| Google Fonts | Syne + Inter + Playfair Display |

---

Elites Stock Solutions © 2026. All rights reserved.
