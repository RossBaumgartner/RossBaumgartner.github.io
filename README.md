# Ross Baumgartner · Portfolio

Personal site built with Next.js (static export), Tailwind CSS and Motion, deployed to GitHub Pages.

## Editing content

All text lives in [`src/data/resume.ts`](src/data/resume.ts). Images live in `public/images/`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
