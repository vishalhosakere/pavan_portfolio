import headerData from "@/data/header.json";
import seo from "@/data/seo.json";
import socialLinks from "@/data/sociallinks.json";
import { CANONICAL_URL } from "@/lib/site";

const PERSON_ID = `${CANONICAL_URL}#person`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${CANONICAL_URL}#website`,
      url: CANONICAL_URL,
      name: headerData.name,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: headerData.name,
      givenName: seo.givenName,
      familyName: seo.familyName,
      url: CANONICAL_URL,
      jobTitle: headerData.role,
      description: seo.description,
      alumniOf: { "@type": "CollegeOrUniversity", name: seo.alumniOf },
      knowsAbout: seo.knowsAbout,
      sameAs: Object.values(socialLinks),
    },
  ],
};

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

export default StructuredData;
