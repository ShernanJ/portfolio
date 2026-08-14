import { projects } from "@/data/projects";
import { ProjectItem } from "@/components/project-item";

export function ProjectList() {
  const columns = projects.reduce<[typeof projects, typeof projects]>(
    (accumulator, project, index) => {
      accumulator[index % 2].push(project);
      return accumulator;
    },
    [[], []],
  );

  return (
    <section aria-labelledby="selected-work" className="page-section work" id="work">
      <h2 className="sr-only" id="selected-work">
        Work
      </h2>
      <div className="project-list">
        {columns.map((column, columnIndex) => (
          <div className="project-column" key={columnIndex}>
            {column.map((project, columnItemIndex) => {
              const projectIndex = columnItemIndex * 2 + columnIndex;

              return (
                <ProjectItem
                  index={projectIndex}
                  key={project.slug}
                  project={project}
                />
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
