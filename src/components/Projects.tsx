import projects from "@/data/projects.json";
import Card from "@/elements/Card";
import { PiArrowRightBold } from "react-icons/pi";

function Projects() {
  return (
    <section id="projects" className="pb-24">
      <h3 className="flex lg:hidden text-primary-200 text-xl uppercase font-bold pb-10">
        Projects
      </h3>
      <ol className="list-none group/list">
        {projects.map((exp, idx) => (
          <Card
            year={exp.date}
            title={exp.title}
            description={exp.description}
            tags={exp.tags}
            key={idx}
          />
        ))}
      </ol>
    </section>
  );
}

export default Projects;
