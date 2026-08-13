import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  const visualStyle = {
    "--project-background": project.visual.background,
    "--project-fit": project.visual.fit ?? "cover",
  } as React.CSSProperties;

  return (
    <div
      aria-label={
        project.media?.alt ?? project.imageAlt ?? `${project.name} project media`
      }
      className="project-visual"
      role="img"
      style={visualStyle}
    >
      {project.media?.type === "video" ? (
        <video
          aria-label={project.media.alt}
          autoPlay
          className="project-media"
          loop
          muted
          playsInline
          poster={project.media.poster}
          preload="metadata"
        >
          <source src={project.media.src} />
        </video>
      ) : project.media?.type === "image" ? (
        <Image
          alt={project.media.alt}
          className="project-image"
          fill
          sizes="(max-width: 760px) 100vw, 1100px"
          src={project.media.src}
        />
      ) : project.image ? (
        <Image
          alt={project.imageAlt ?? ""}
          className="project-image"
          fill
          sizes="(max-width: 760px) 100vw, 1100px"
          src={project.image}
        />
      ) : (
        <span>{project.name}</span>
      )}
    </div>
  );
}
