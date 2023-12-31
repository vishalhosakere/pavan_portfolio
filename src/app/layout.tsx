import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const seo = {
  title: "Pavan Kendaganna Swamy",
  description: "Portfolio of Pavan Kendaganna Swamy, Electrical Engineer",
  url: "https://pavanportfolio.xyz",
  image: "/og_image.jpg",
};
export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: "Pavan Kendaganna Swamy",
  description: "Portfolio of Pavan Kendaganna Swamy, Electrical Engineer",
  keywords: [
    "Electrical Engineer",
    "Portfolio",
    "Professional",
    "VLSI",
    "Jobs",
  ],
  openGraph: {
    type: "website",
    url: seo.url,
    title: seo.title,
    description: seo.description,
    images: seo.image,
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-24 scroll-smooth">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
