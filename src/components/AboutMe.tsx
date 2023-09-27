import aboutData from "@/data/aboutme.json";

import Highlighter from "react-highlight-words";

function AboutMe() {
  return (
    <section className="flex flex-col gap-4 pb-24" id="about">
      <h3 className="flex lg:hidden text-primary-200 text-xl uppercase font-bold pb-10">
        About
      </h3>
      {aboutData.strings.map((text, idx) => {
        return (
          <Highlighter
            highlightClassName="text-primary-200 bg-transparent"
            searchWords={aboutData.highlight}
            autoEscape={true}
            textToHighlight={text}
            key={idx}
          />
        );
      })}
    </section>
  );
}

export default AboutMe;
