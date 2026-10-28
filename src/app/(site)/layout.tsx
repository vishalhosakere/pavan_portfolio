import "../globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import headerData from "@/data/header.json";
import seo from "@/data/seo.json";
import { CANONICAL_URL, GOOGLE_SITE_VERIFICATION, IS_INDEXABLE, SITE_URL } from "@/lib/site";
import { THEME_INIT_SCRIPT, THEME_VIEWPORT } from "@/lib/theme";

const inter = Inter({ subsets: ["latin"] });

const OG_IMAGE = { url: seo.ogImage, width: seo.ogImageWidth, height: seo.ogImageHeight, alt: seo.ogImageAlt };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: headerData.name, url: CANONICAL_URL }],
  creator: headerData.name,
  robots: IS_INDEXABLE
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      }
    : { index: false, follow: false },
  openGraph: {
    type: "profile",
    url: CANONICAL_URL,
    siteName: headerData.name,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
    firstName: seo.givenName,
    lastName: seo.familyName,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [OG_IMAGE],
  },
  ...(GOOGLE_SITE_VERIFICATION ? { verification: { google: GOOGLE_SITE_VERIFICATION } } : {}),
};

export const viewport = THEME_VIEWPORT;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-pt-24 motion-safe:scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={inter.className}>
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} /> : null}
      </body>
    </html>
  );
}
