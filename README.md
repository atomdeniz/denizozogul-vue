# denizozogul.com

Personal website built with Vue 3 and Vite.

Requires Node.js 22.12 or newer.

```sh
npm install      # install dependencies
npm run dev      # dev server with hot reload
npm run build    # production build + per-route prerender (scripts/prerender.mjs)
npm run preview  # serve the production build locally
npm run lint     # ESLint
```

Production runs in Docker: the build output is served by nginx (`nginx.conf`).
