import { projects } from "@/data/projects";
import { ProjectItem } from "@/components/project-item";

export function ProjectList() {
  return (
    <section aria-labelledby="selected-work" className="work" id="work">
      <h2 className="sr-only" id="selected-work">
        Selected work
      </h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectItem index={index} key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
