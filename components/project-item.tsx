import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

type ProjectItemProps = {
  project: Project;
  index: number;
};

export function ProjectItem({ project, index }: ProjectItemProps) {
  const visualAspect =
    index % 4 === 0 || index % 4 === 3 ? "1.45 / 1" : "1.76 / 1";
  const itemStyle = {
    "--delay": `${index * 45}ms`,
    "--project-order": `${index}`,
    "--visual-aspect": visualAspect,
  } as React.CSSProperties;
  const content = (
    <>
      <ProjectVisual project={project} />
      <div className="project-meta">
        <div className="project-caption">
          <h3>
            {project.name}
            {project.titleNote ? (
              <span className="project-title-note"> {project.titleNote}</span>
            ) : null}
          </h3>
          <span aria-hidden="true" className="project-caption-separator">
            -
          </span>
          <p>{project.shortDescription}</p>
        </div>
        <div className="project-action">
          <time dateTime={project.year}>{project.year}</time>
        </div>
      </div>
    </>
  );

  if (project.link) {
    return (
      <a
        className="project-item section-reveal"
        href={project.link.href}
        rel={project.link.external ? "noreferrer" : undefined}
        style={itemStyle}
        target={project.link.external ? "_blank" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      className="project-item section-reveal"
      style={itemStyle}
    >
      {content}
    </article>
  );
}
