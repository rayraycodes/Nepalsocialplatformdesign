# Nepal Social Platform Design

This is a code bundle for Nepal Social Platform Design. The original project is available at [Figma](https://www.figma.com/design/SdL2Un2UvcdIDcZtXtlg1p/Nepal-Social-Platform-Design).

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deploying to GitHub Pages (rayraycodes.github.io)

The repo is set up to deploy to **https://rayraycodes.github.io/Nepalsocialplatformdesign/** via GitHub Actions.

### One-time setup

1. In the repo: **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### Deploy

- **Automatic:** Push to the `main` branch. The workflow builds and deploys.
- **Manual:** **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

### If you want the URL to be .../nepalsocial

Use a repository named `nepalsocial` (e.g. `rayraycodes/nepalsocial`). Then in `vite.config.ts` set:

```ts
base: '/nepalsocial/',
```

Then the site will be at **https://rayraycodes.github.io/nepalsocial/**.
  