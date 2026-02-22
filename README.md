# The Insects of Duke: A Campus Collection

A photographic collection of insects found on Duke University's campus, showcasing biodiversity of the local ecosystem.

## Tech stack

- **Vite** – build tool and dev server
- **TypeScript** – type safety
- **React** – UI
- **React Router** – client-side routing
- **shadcn/ui** – UI components
- **Tailwind CSS** – styling

## Local development

Requirements: Node.js and npm (e.g. [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd duke-insects

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Scripts

- `npm run dev` – start dev server with hot reload
- `npm run build` – production build (output in `dist/`)
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

## Deploy

The site is configured for **GitHub Pages** with base path `/duke-insects/`. Pushing to the `main` branch triggers the GitHub Actions workflow to build and deploy from the `dist/` folder.

To deploy elsewhere, run `npm run build` and serve the contents of `dist/` as a static site (and adjust the `base` in `vite.config.ts` if needed).
