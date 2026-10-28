import { PiArrowRightBold } from "react-icons/pi";

import experiences from "@/data/experience.json";
import Card from "@/elements/Card";
import SectionHeading from "@/elements/SectionHeading";

function Experiences() {
  return (
    <section id="experiences" aria-labelledby="experiences-heading" className="pb-24">
      <SectionHeading id="experiences-heading">Experiences</SectionHeading>
      <ol className="group/list list-none">
        {experiences.map((exp, idx) => (
          <Card
            year={exp.date}
            title={exp.title}
            subtitle={exp.subtitle}
            description={exp.description}
            tags={exp.tags}
            key={idx}
          />
        ))}
      </ol>
      <div className="px-4">
        <a className="group flex w-fit items-center gap-1 text-xl" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <span className="border-b-2 border-transparent group-hover:border-b-accent-200">View Full Resume</span>
          <span className="sr-only"> (PDF, opens in a new tab)</span>
          <PiArrowRightBold aria-hidden="true" className="duration-200 group-hover:translate-x-2 group-hover:text-accent-200" />
        </a>
      </div>
    </section>
  );
}

export default Experiences;
