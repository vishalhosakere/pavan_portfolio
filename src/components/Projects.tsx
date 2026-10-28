import projectData from "@/data/projects.json";
import Card from "@/elements/Card";
import SectionHeading from "@/elements/SectionHeading";

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="pb-24">
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      <ol className="group/list list-none">
        {projectData.items.map((project, idx) => (
          <Card
            year={project.date}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tags={project.tags}
            key={idx}
          />
        ))}
      </ol>
    </section>
  );
}

export default Projects;
