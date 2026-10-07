# Santosh Yadav: Portfolio

Portfolio of **Santosh Ramachal Yadav**, Lead Application Support Engineer (Mumbai).

The stack is React 19 and Vite, with plain CSS for styling and animation and self-hosted open-source fonts. Everything used is free: no backend, no paid service, no paid API and no tracking.

## Run it

```bash
cd E:\Portfolio
npm install        # first time only
npm run dev        # local dev server, usually http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally, usually http://localhost:4173
```

## Project structure

```
Portfolio/
├── index.html                    # HTML shell, SEO + Open Graph meta
├── vite.config.js                # base './' (works under any GitHub repo path)
├── public/
│   ├── Santosh_Yadav_Resume.pdf  # the downloadable resume
│   ├── favicon.svg
│   ├── og-image.jpg              # link-preview image
│   └── images/profile/           # (optional) profile photo, not used yet
├── src/
│   ├── data/profile.js           # profile, about, experience, skills, education
│   ├── data/projects.js          # the 7 projects: status, highlights, use cases, features
│   ├── components/               # nav, background, project cards, UI helpers
│   ├── sections/                 # Hero, About, Experience, Skills, Projects, ProjectDetail, Resume, Contact
│   ├── styles/global.css         # colour tokens (indigo-cyan on pure black + light theme), layout, animations
│   ├── App.jsx                   # hash routing (#/project/<id>) + section scrolling
│   └── main.jsx
└── .github/workflows/deploy.yml  # builds and publishes to GitHub Pages
```

## Editing content

- **Text:** `src/data/profile.js` and `src/data/projects.js`. The resume PDF is the source of truth, so keep the two in step.
- **Project status:** set `status` in `projects.js` to `live`, `uat`, `built` or `deployed`. The badge colour follows automatically.
- **LinkedIn:** set `linkedin` in `profile.js`. While it is empty, the LinkedIn link stays hidden.
- **Resume:** replace `public/Santosh_Yadav_Resume.pdf`, keeping the same file name.

## Deploy to GitHub Pages (free)

### 1. Create the repository
On https://github.com/new, create a **public** repository (this one is `Santosh_Portfolio`). Don't add a README, .gitignore or licence.

### 2. Push

```bash
cd E:\Portfolio
git init
git config user.name  "Santosh Yadav"
git config user.email "santoshr8874@gmail.com"
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/santosh-4788/Santosh_Portfolio.git
git push -u origin main
```

Set your own Git identity as shown. This machine has no global Git name configured. When asked to sign in, use a Personal Access Token or GitHub Desktop, not your password.

### 3. Turn on Pages
Repository → **Settings** → **Pages** → *Build and deployment* → **Source: GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` runs on every push to `main`. It installs, builds and publishes `dist/`. Progress shows on the **Actions** tab. After about a minute the site is live at:

```
https://santosh-4788.github.io/Santosh_Portfolio/
```

Project pages use hash URLs, for example `.../Santosh_Portfolio/#/project/datasanity`, and all asset paths are relative. That means the site works under any repository name, and a page refresh never returns a 404.

**Optional:** name the repository `santosh-4788.github.io` to serve the site at `https://santosh-4788.github.io/`.

### Link previews
`og:image` in `index.html` is relative. Some platforms (LinkedIn, WhatsApp) need an absolute URL. Once the site is live, change it to `https://santosh-4788.github.io/Santosh_Portfolio/og-image.jpg`.

## Credits
The design is original. Fonts are Inter and Plus Jakarta Sans (SIL Open Font License), bundled through Fontsource.
