See live hosted at [pavanportfolio.xyz](https://pavanportfolio.xyz/)

## Getting started

Requires Node.js 20.9 or newer (Netlify builds with Node 24, set in `netlify.toml`).

```bash
npm install
npm run dev        # http://127.0.0.1:4103
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the build at http://127.0.0.1:4113
npm run lint       # ESLint (flat config in eslint.config.mjs)
npm run typecheck  # tsc --noEmit
```

Content lives in `src/data/*.json`: edit those files to update the site. SEO title, description and
structured-data facts are in `src/data/seo.json`.

## Stack

Next.js 16 (App Router, static prerender), React 19, Tailwind CSS 4 (CSS-first config in
`src/app/globals.css`), TypeScript 6, ESLint 10. Deployed on Netlify, which detects Next.js and
installs its adapter automatically.

## Environment variables

See `.env.example`. On Netlify set them under **Site configuration > Environment variables**, then redeploy.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional. Google Search Console HTML-tag token; adds `<meta name="google-site-verification">` only when set. |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | Optional. GA4 measurement ID; analytics load only when set. |

The canonical site URL and indexing rules come from Netlify's build variables (see `next.config.ts`):
production uses the primary custom domain and is indexable; deploy previews and branch deploys are
`noindex, nofollow` and their `robots.txt` disallows everything.

## Getting the site on Google

These steps need the owner's Google account and DNS access:

1. **Verify ownership in [Google Search Console](https://search.google.com/search-console).**
   Preferred: add a **Domain** property for `pavanportfolio.xyz` and add the TXT record Google shows
   at your DNS provider (covers `https`, `http` and `www`). Alternative: add a **URL-prefix** property
   for `https://pavanportfolio.xyz/`, choose **HTML tag**, put the `content` value in
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` on Netlify, redeploy, then click **Verify**.
2. **Submit the sitemap:** Search Console > Sitemaps > enter `sitemap.xml` > Submit.
3. **Request indexing:** URL Inspection > `https://pavanportfolio.xyz/` > Test live URL > Request indexing.
4. **Link to the site** so Google can discover and trust it: add `https://pavanportfolio.xyz` to the
   LinkedIn profile (Contact info > Website and the Featured section), the GitHub profile Website
   field and profile README, and any studio or portfolio pages that feature the site.
5. Check back in a few days under Pages and Performance; searching `site:pavanportfolio.xyz` shows what is indexed.
