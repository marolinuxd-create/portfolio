# Marolin Solano — Portfolio

UX / Interaction Designer portfolio. This folder contains all the files needed to deploy to GitHub Pages.

## Deploy to GitHub Pages

1. **Create a GitHub repository**
   - Go to github.com and create a new public repository
   - Name it: `portfolio` (or any name you prefer)

2. **Upload these files**
   - Clone the repository to your computer
   - Copy all files from this folder into the repository root
   - Commit and push to GitHub

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Save

4. **Your portfolio is live!**
   - Visit: `https://yourusername.github.io/portfolio`
   - Share the link with anyone

## File Structure

```
├── index.html              (Home page)
├── about.html              (About page)
├── contact.html            (Contact page)
├── case-*.html             (Case studies)
├── styles.css              (Global styles)
├── case-study.css          (Case study styles)
├── app.js                  (Main app logic)
├── chrome.js               (Nav/footer rendering)
├── design-mode.js          (Design mode features)
├── tweaks-panel.jsx        (Tweaks UI component)
├── tweaks-portfolio.jsx    (Portfolio tweaks)
└── images/                 (All images)
```

## No Dependencies

Everything runs client-side with no build process needed. Just upload and go!
