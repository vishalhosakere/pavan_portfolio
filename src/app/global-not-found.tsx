import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import headerData from "@/data/header.json";
import { THEME_INIT_SCRIPT, THEME_VIEWPORT } from "@/lib/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Page not found | ${headerData.name}`,
};

export const viewport = THEME_VIEWPORT;

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={inter.className}>
        <main className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-4 px-6 md:px-12 lg:px-24">
          <p className="text-sm font-bold tracking-widest uppercase">404</p>
          <h1 className="text-4xl font-bold text-fg-strong">Page not found</h1>
          <p className="max-w-md">The page you are looking for doesn&apos;t exist or has moved.</p>
          <Link href="/" className="w-fit text-accent underline decoration-1 underline-offset-4 hover:decoration-2">
            Back to {headerData.name}
          </Link>
        </main>
      </body>
    </html>
  );
}
