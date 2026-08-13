import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

type ProjectItemProps = {
  project: Project;
  index: number;
};

export function ProjectItem({ project, index }: ProjectItemProps) {
  const content = (
    <>
      <ProjectVisual project={project} />
      <div className="project-meta">
        <div>
          <h3>{project.name}</h3>
          <p>{project.shortDescription}</p>
        </div>
        <div className="project-action">
          <time dateTime={project.year}>{project.year}</time>
          {project.link ? <span>{project.link.label} -&gt;</span> : null}
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
        style={{ "--delay": `${index * 45}ms` } as React.CSSProperties}
        target={project.link.external ? "_blank" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      className="project-item section-reveal"
      style={{ "--delay": `${index * 45}ms` } as React.CSSProperties}
    >
      {content}
    </article>
  );
}
