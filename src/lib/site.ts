const NON_INDEXABLE_DEPLOY_CONTEXTS = new Set(["deploy-preview", "branch-deploy"]);

function requireBuildEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`${name} is not set; next.config.ts defines it at build time.`);
  }
  return value;
}

export const SITE_URL = new URL(requireBuildEnv("NEXT_PUBLIC_SITE_URL", process.env.NEXT_PUBLIC_SITE_URL)).origin;

export const CANONICAL_URL = `${SITE_URL}/`;

export const DEPLOY_CONTEXT = requireBuildEnv("NEXT_PUBLIC_DEPLOY_CONTEXT", process.env.NEXT_PUBLIC_DEPLOY_CONTEXT);

export const IS_INDEXABLE = !NON_INDEXABLE_DEPLOY_CONTEXTS.has(DEPLOY_CONTEXT);

export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined;
