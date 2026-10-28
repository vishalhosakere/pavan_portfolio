import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import StructuredData from "@/components/StructuredData";
import { CANONICAL_URL } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Next's alternates.canonical renders the root as a bare origin; this keeps it identical to the sitemap <loc>. */}
      <link rel="canonical" href={CANONICAL_URL} />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent-800 focus:px-4 focus:py-2 focus:text-accent-200"
      >
        Skip to content
      </a>
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <main id="content">
              <AboutMe />
              <Experiences />
              <Projects />
            </main>
            <Footer />
          </div>
        </div>
      </div>
      <StructuredData />
    </>
  );
}
