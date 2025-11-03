# CIO/CISO Roadmap (Next.js + Tailwind)

An interactive, localStorage‑backed roadmap for certifications and career milestones.

## 🚀 Quick Start (Local)

```bash
npm install
npm run dev
# open http://localhost:3000
```

## ☁️ Deploy to Vercel

1. Create a free Vercel account at https://vercel.com and install the Vercel CLI (optional).
2. Push this folder to a new GitHub repo (e.g., `ciociso-roadmap`).
3. On Vercel, click **New Project** → **Import Git Repository** → select your repo.
4. Framework preset should be **Next.js**. No environment variables required.
5. Click **Deploy**. Your app will be available at `https://<project>.vercel.app`.
6. (Optional) Add a custom domain (e.g., `davidperez.tech/roadmap`) in **Settings → Domains**.

## 🧩 Notes

- Progress and hours are stored in **browser localStorage**.
- No server or database is required.
- To reset all progress, click **Reset** in the top card.
- Use **Export CSV** to download your current tasks/hours snapshot.
