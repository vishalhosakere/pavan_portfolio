import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const seo = {
  title: "Pavan Kendaganna Swamy",
  description: "Portfolio of Pavan Kendaganna Swamy, Electrical Engineer",
  url: "https://pavanportfolio.xyz",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
