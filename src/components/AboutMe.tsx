import Highlighter from "react-highlight-words";

import aboutData from "@/data/aboutme.json";
import SectionHeading from "@/elements/SectionHeading";

function AboutMe() {
  return (
    <section id="about" aria-labelledby="about-heading" className="flex flex-col gap-4 pb-24">
      <SectionHeading id="about-heading">About</SectionHeading>
      {aboutData.strings.map((text, idx) => (
        <p key={idx}>
          <Highlighter
            highlightTag="strong"
            highlightClassName="bg-transparent font-medium text-fg-strong"
            searchWords={aboutData.highlight}
            autoEscape={true}
            textToHighlight={text}
          />
        </p>
      ))}
    </section>
  );
}

export default AboutMe;
