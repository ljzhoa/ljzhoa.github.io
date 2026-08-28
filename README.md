# Jinzhao Lian — Personal Homepage

A responsive academic homepage built from the content in `cv of Jinzhao Lian.pdf`, following the layout and interaction style of [ganminghao.github.io](https://ganminghao.github.io/).

## Open directly

Double-click `index.html` (it redirects to `homepage.html`) or open `homepage.html` directly. The standalone page contains the portrait, styles, scripts, and downloadable CV in one file—no local server is required.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Publish to GitHub Pages

Push the complete project to the `main` branch of a GitHub repository. In `Settings → Pages`, select **GitHub Actions** as the source. The included workflow installs dependencies, checks the source, builds the site, and publishes `dist` automatically.

For manual deployment, add the repository as `origin`, then run:

```bash
npm run deploy
```

The production build also generates a self-contained `dist/index.html`, so it works both on a user site (`username.github.io`) and a project site (`username.github.io/repository-name`).

## Edit content

Most homepage text is kept in `src/data.js`. Replace `images/profile.jpg` to update the portrait. After making changes, double-click `rebuild-homepage.cmd` to regenerate the standalone page. A Chinese editing guide is available in `编辑主页说明.md`.
