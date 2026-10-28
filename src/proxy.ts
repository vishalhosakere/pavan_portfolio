import { NextResponse } from "next/server";

/**
 * The CMS admin is closed unless it is gated:
 * - GitHub or Keystatic Cloud mode: editors sign in, and only accounts with write access to the repo can save.
 * - Local mode: only under `next dev` (bound to 127.0.0.1) with KEYSTATIC_LOCAL_ADMIN=true from .env.development.
 *   Keystatic's local API writes files without authenticating, so it must never be reachable from `next start`
 *   or a deploy, even if the opt-in variable leaks into that environment.
 */
export function proxy() {
  const storage = process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE;
  const remoteStorage = storage === "github" || storage === "cloud";
  const localDevOptIn = process.env.KEYSTATIC_LOCAL_ADMIN === "true" && process.env.NODE_ENV === "development";
  if (remoteStorage || localDevOptIn) return NextResponse.next();
  return new NextResponse("Not found", { status: 404, headers: { "content-type": "text/plain" } });
}

export const config = {
  matcher: ["/keystatic", "/keystatic/:path*", "/api/keystatic/:path*"],
};
