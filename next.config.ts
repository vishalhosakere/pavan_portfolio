import type { NextConfig } from "next";

// On Netlify, URL is the primary (custom) domain in production and DEPLOY_PRIME_URL the per-deploy alias,
// so a .netlify.app alias canonicalises to the custom domain.
const siteUrl = (process.env.CONTEXT === "production" ? process.env.URL : process.env.DEPLOY_PRIME_URL) ?? "https://pavanportfolio.xyz";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
    NEXT_PUBLIC_DEPLOY_CONTEXT: process.env.CONTEXT ?? "local",
  },
};

export default nextConfig;
