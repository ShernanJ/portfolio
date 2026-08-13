import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudyProjects, getProject } from "@/data/projects";
import type { ProjectMedia } from "@/data/projects";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getCaseStudyProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.caseStudy) {
    return {};
  }

  return {
    title: `${project.name} / Shernan Javier`,
    description: project.caseStudy.summary,
  };
}

function CaseMedia({ media }: { media: ProjectMedia }) {
  if (media.type === "video") {
    return (
      <video
        aria-label={media.alt}
        autoPlay
        className="case-media"
        loop
        muted
        playsInline
        poster={media.poster}
        preload="metadata"
      >
        <source src={media.src} />
      </video>
    );
  }

  return (
    <Image
      alt={media.alt}
      className="case-image"
      height={1200}
      sizes="(max-width: 900px) 100vw, 864px"
      src={media.src}
      width={1600}
    />
  );
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <main className="case-page">
      <header className="case-hero">
        <Link className="case-back" href="/#work">
          Back
        </Link>
        <p className="eyebrow">{project.name}</p>
        <h1>{caseStudy.title}</h1>
        <div className="case-hero-media">
          {project.media ? (
            <CaseMedia media={project.media} />
          ) : (
            <span>{project.name}</span>
          )}
        </div>
      </header>

      <div className="case-layout">
        <aside className="case-toc">
          <nav aria-label="On this page">
            <Link href="/#work">Back</Link>
            {caseStudy.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="case-content">
          <section className="case-meta-grid" aria-label="Project details">
            {caseStudy.meta.map((item) => (
              <div key={item.label}>
                <p>{item.label}</p>
                <span>{item.value}</span>
              </div>
            ))}
          </section>

          <section className="case-section">
            <p className="case-label">Overview</p>
            <h2>{caseStudy.summary}</h2>
          </section>

          {caseStudy.sections.map((section) => (
            <section className="case-section" id={section.id} key={section.id}>
              <p className="case-label">{section.label}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.media ? (
                <div className="case-section-media">
                  <CaseMedia media={section.media} />
                </div>
              ) : null}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
