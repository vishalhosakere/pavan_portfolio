import experiences from "@/data/experience.json";
import Card from "@/elements/Card";
import { PiArrowRightBold } from "react-icons/pi";

function Experiences() {
  return (
    <section id="experiences" className="pb-24">
      <h3 className="flex lg:hidden text-primary-200 text-xl uppercase font-bold pb-10">
        Experiences
      </h3>
      <ol className="list-none group/list">
        {experiences.map((exp, idx) => (
          <Card
            year={exp.date}
            title={exp.title}
            description={exp.description}
            tags={exp.tags}
            key={idx}
          />
        ))}
      </ol>
      <div className="px-4">
        <a
          className="w-fit flex items-center gap-1 group text-xl relative"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <p className="hover:border-b-accent-200 border-b-2 border-transparent ">
            View Full Resume
          </p>
          <PiArrowRightBold className="group-hover:translate-x-2 duration-200 group-hover:text-accent-200" />
        </a>
      </div>
    </section>
  );
}

export default Experiences;
