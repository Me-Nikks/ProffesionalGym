# Aurora Forge Athletics — Luxury Gym Website

A premium, production-ready Next.js (App Router) experience for a high-end gym brand. Designed with a cinematic dark aesthetic, precise typography, and motion-forward UI.

## ✨ Features
- **Next.js App Router + TypeScript**
- **Tailwind CSS with CSS variables** for a luxury dark palette
- **Framer Motion** transitions and micro-interactions
- **Zod + React Hook Form** for validated concierge contact forms
- **Config-driven content** with `/src/config/site.ts`
- **SEO + OpenGraph** metadata
- **Accessible + responsive** layouts and components
- **Vercel-ready** with minimal configuration

---

## 📦 Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🔐 Environment Variables

Create a `.env.local` file using `.env.example`:

```bash
cp .env.example .env.local
```

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Base URL for SEO metadata |
| `CONTACT_RECEIVER_EMAIL` | Displayed concierge email address |

---

## 🚀 Deployment (Vercel)

1. Push the repo to GitHub.
2. Import into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.

---

## 🧭 Customization Guide

### Update content
Edit `/src/config/site.ts` to change:
- Navigation links
- Programs
- Trainers
- Memberships
- CTA copy

### Update brand visuals
- Replace SVGs in `/public/images`.
- Adjust theme values in `/src/app/globals.css` and `tailwind.config.ts`.

### Add new pages
Create new routes in `/src/app/<route>/page.tsx` and update navigation in `/src/config/site.ts`.

---

## 🗂️ Project Structure

```
.
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── memberships/
│   │   ├── programs/
│   │   ├── trainers/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── config/
│   └── lib/
├── .env.example
└── package.json
```

---

## ✅ Production Notes
- Fonts loaded via `next/font` for optimized delivery.
- Images are optimized and lazy-loaded via `next/image`.
- Form submissions run through a server action in `/src/app/contact/actions.ts`.

---

## 📝 License
This project is provided as a premium starter. Customize as needed for your brand.
