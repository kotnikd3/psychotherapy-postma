# www.sandra-postma.nl
A Vue.js website.

## Update node on MacOS
```sh
brew update
```

## Update npm
```sh
npm install -g npm@latest
```

## Update packages
```sh
# Check for updates
ncu
# Update packages by modifying package.json
ncu -u
# Install new packages
npm install
```

## Project setup
```sh
npm install
```

### Compiles and hot-reloads for development
```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

The build uses `vite-prerender-plugin` and Vue's matching server renderer to
produce complete HTML for all five Dutch pages and their English counterparts:

| Dutch | English |
| --- | --- |
| `/` | `/en/` |
| `/therapie` | `/en/therapy` |
| `/sessies` | `/en/sessions` |
| `/over` | `/en/about` |
| `/contact` | `/en/contact` |

Each page has a localized title, description, canonical URL, reciprocal
`hreflang` links (`nl`, `en`, and Dutch `x-default`), Open Graph tags and
structured data. Route metadata lives in `src/router/index.js`; shared head and
JSON-LD generation lives in `src/seo.js`. The browser hydrates the prerendered
content and updates metadata on client-side navigation. Each render receives its
own router and translation instance.

Update `public/sitemap.xml` and `public/llms.txt` when adding indexable pages.

### Cloudflare Pages

- Keep the Git-triggered build command: `npm run build`
- Output directory: `dist`
- Use Node.js 22.18.0 or a newer supported version; `.node-version` selects 22
- Install packages from public npm, configured in `.npmrc`

No browser download, runtime SSR server, or Pages Functions are required.
If the Cloudflare dashboard explicitly sets a Node version, align it with
`package.json`. Existing verification, contact form settings, practice address
and fees are preserved.

Preview the production output locally with `npm run preview`.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
