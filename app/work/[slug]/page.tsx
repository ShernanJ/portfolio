import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { getCaseStudy, getCaseStudySlugs } from "@/content/work";
import { getProject } from "@/data/projects";
import type { ProjectMedia } from "@/data/projects";
import { seo, toMetaDescription } from "@/data/seo";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  const content = getCaseStudy(slug);

  if (!project || !content) {
    return {};
  }

  const description = toMetaDescription(
    `${project.shortDescription} A case study by ${seo.siteName}.`,
  );
  const url = `/work/${project.slug}`;

  return {
    title: content.caseStudy.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      description,
      images: [seo.ogImage],
      siteName: seo.siteName,
      title: content.caseStudy.title,
      type: "article",
      url,
    },
    twitter: {
      card: "summary_large_image",
      creator: seo.twitterHandle,
      description,
      images: [seo.ogImage.url],
      title: content.caseStudy.title,
    },
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
      priority
      sizes="(max-width: 900px) 100vw, 864px"
      src={media.src}
      width={1600}
    />
  );
}

function isExternalLink(href: string) {
  return /^https?:\/\//i.test(href);
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const content = getCaseStudy(slug);

  if (!project || !content) {
    notFound();
  }

  const { caseStudy, Content } = content;
  const navItems = [
    {
      href: `/work/${project.slug}`,
      id: "case-intro",
      label: "Intro",
      scrollToTop: true,
    },
    ...caseStudy.sections.map((section) => ({
      id: section.id,
      label: section.label,
    })),
  ];

  return (
    <main>
      <PageShell
        backItem={{ href: "/#work", label: "Back" }}
        className="case-page"
        navItems={navItems}
      >
        <header className="case-hero" id="case-intro">
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
          <article className="case-content">
            <section className="case-overview" aria-label="Project overview">
              <dl className="case-overview-meta">
                {caseStudy.meta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="case-overview-copy">
                <p className="case-label">At a glance</p>
                <p className="case-overview-summary">{caseStudy.summary}</p>
                {caseStudy.links?.length ? (
                  <div className="case-overview-links" aria-label="Project links">
                    <span>Links</span>
                    {caseStudy.links.map((link) => {
                      const external = link.external ?? isExternalLink(link.href);

                      return (
                        <a
                          href={link.href}
                          key={`${link.type}-${link.href}`}
                          rel={external ? "noreferrer" : undefined}
                          target={external ? "_blank" : undefined}
                        >
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                ) : null}
                {caseStudy.snapshot ? (
                  <div className="case-snapshot" aria-label="Case study snapshot">
                    {caseStudy.snapshot.map((item) => (
                      <div key={item.label}>
                        <h3>{item.label}</h3>
                        <p>{item.value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>

            <Content />
          </article>
        </div>
      </PageShell>
    </main>
  );
}
