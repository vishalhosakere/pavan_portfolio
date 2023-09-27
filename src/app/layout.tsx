import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavan Kendaganna Swamy",
  description: "Portfolio of Pavan Kendaganna Swamy, Electrical Engineer",
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
