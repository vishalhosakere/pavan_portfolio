See live hosted at [pavanportfolio.xyz](https://pavanportfolio.xyz/)

## Getting started

Requires Node.js 20.9 or newer (Netlify builds with Node 24, set in `netlify.toml`).

```bash
npm install
npm run dev        # http://127.0.0.1:4103, CMS at http://127.0.0.1:4103/keystatic
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the build at http://127.0.0.1:4113
npm run lint       # ESLint (flat config in eslint.config.mjs)
npm run typecheck  # tsc --noEmit
```

Content lives in `src/data/*.json` and is imported at build time, so the site stays fully static.
Edit it in the browser with the CMS (below) or edit the files directly.

## Edit content in the browser (Keystatic)

| CMS screen | File |
| --- | --- |
| Header (name, role, intro) | `src/data/header.json` |
| About (paragraphs, highlighted phrases) | `src/data/aboutme.json` |
| Experience (+ resume PDF) | `src/data/experience.json`, `public/resume.pdf` |
| Projects | `src/data/projects.json` |
| Footer (quote, contact email) | `src/data/footer.json` |
| Social links | `src/data/sociallinks.json` |
| Search and sharing (title, description, share image) | `src/data/seo.json`, `public/ogImage.*` |

**Locally:** `npm run dev`, open http://127.0.0.1:4103/keystatic, edit, Save. Saves write the JSON (and
uploaded files) on disk; commit and push to publish. The admin only opens under `next dev`
(`KEYSTATIC_LOCAL_ADMIN=true` in `.env.development`); `next start` and deploys return 404 for
`/keystatic` and `/api/keystatic/*` unless production editing is set up.

**In production (GitHub mode)**, after this setup is merged to `master` (Keystatic saves to the
repo's default branch, and each save is a commit that triggers a Netlify deploy):

1. Locally, add `NEXT_PUBLIC_KEYSTATIC_STORAGE=github` to `.env.local`, run `npm run dev` and open
   http://127.0.0.1:4103/keystatic/setup. Enter `https://pavanportfolio.xyz` as the deployed URL and
   create the GitHub App, then install it on `vishalhosakere/pavan_portfolio` only. Keystatic writes
   the app credentials to `.env` (git-ignored).
2. In Netlify (Site configuration > Environment variables, scopes Builds and Functions) add, all at
   once: `NEXT_PUBLIC_KEYSTATIC_STORAGE=github` plus `KEYSTATIC_GITHUB_CLIENT_ID`,
   `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET` and `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
   from `.env`. With the storage variable but no credentials the build fails (the previous deploy
   stays live). Redeploy.
3. Add the editor as a collaborator with Write access on the GitHub repo. They sign in at
   https://pavanportfolio.xyz/keystatic with GitHub; only accounts with write access can save.

No GitHub account? Use [Keystatic Cloud](https://keystatic.cloud): create a project connected to
the repo, set `NEXT_PUBLIC_KEYSTATIC_STORAGE=cloud` and `NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT=<team>/<project>`
in Netlify, redeploy, and invite the editor from Keystatic Cloud.

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
| `NEXT_PUBLIC_KEYSTATIC_STORAGE` | Optional. `github` or `cloud` turns on production editing; unset keeps the CMS closed. |
| `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | GitHub mode only; created by `/keystatic/setup`. |
| `NEXT_PUBLIC_KEYSTATIC_REPO` | Optional. Defaults to `vishalhosakere/pavan_portfolio`. |
| `NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT` | Keystatic Cloud mode only. |

The canonical site URL and indexing rules come from Netlify's build variables (see `next.config.ts`):
production uses the primary custom domain and is indexable (with `/keystatic` and `/api/`
disallowed); deploy previews and branch deploys are `noindex, nofollow` and their `robots.txt`
disallows everything.

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

## Structure

```
src/data/                content (JSON, edited by the CMS)
keystatic.config.ts      CMS schema
src/app/(site)/          the public page and its root layout
src/app/keystatic/       CMS admin (separate root layout)
src/app/api/keystatic/   CMS API
src/app/global-not-found.tsx  404 for unmatched URLs
src/proxy.ts             keeps the CMS closed unless it is gated
```
