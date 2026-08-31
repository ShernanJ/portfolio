import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { getLifeItem, getLifeItemSlugs } from "@/data/life";
import { seo, toMetaDescription } from "@/data/seo";

type LifePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getLifeItemSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: LifePageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getLifeItem(slug);

  if (!item) {
    return {};
  }

  const description = toMetaDescription(
    item.shortDescription ||
      `${item.title} from Shernan Javier's life section.`,
  );
  const url = `/life/${item.slug}`;

  return {
    title: item.title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      description,
      images: [seo.ogImage],
      siteName: seo.siteName,
      title: item.title,
      type: "article",
      url,
    },
    twitter: {
      card: "summary_large_image",
      creator: seo.twitterHandle,
      description,
      images: [seo.ogImage.url],
      title: item.title,
    },
  };
}

export default async function LifePage({ params }: LifePageProps) {
  const { slug } = await params;
  const item = getLifeItem(slug);

  if (!item) {
    notFound();
  }

  const navItems = [
    {
      href: `/life/${item.slug}`,
      id: "life-intro",
      label: "Intro",
      scrollToTop: true,
    },
    ...item.sections.map((section) => ({
      id: section.id,
      label: section.label,
    })),
  ];

  return (
    <main>
      <PageShell
        backItem={{ href: "/#life", label: "Back" }}
        className="case-page"
        navItems={navItems}
      >
        <header className="case-hero" id="life-intro">
          <p className="eyebrow">Life</p>
          <h1>{item.title}</h1>
          <div
            className="case-hero-media life-hero-media"
            style={
              {
                "--life-background": item.background,
              } as React.CSSProperties
            }
          >
            {item.image ? (
              <Image
                alt={item.alt ?? item.title}
                className="case-image"
                height={1200}
                priority
                sizes="(max-width: 900px) 100vw, 864px"
                src={item.image}
                width={1600}
              />
            ) : (
              <span>{item.title}</span>
            )}
          </div>
        </header>

        <div className="case-layout">
          <article className="case-content">
            <section className="case-overview" aria-label="Life overview">
              <dl className="case-overview-meta">
                {(item.meta ?? []).map((meta) => (
                  <div key={meta.label}>
                    <dt>{meta.label}</dt>
                    <dd>{meta.value}</dd>
                  </div>
                ))}
              </dl>
              {item.shortDescription ? (
                <div className="case-overview-copy">
                  <p className="case-label">At a glance</p>
                  <p className="case-overview-summary">{item.shortDescription}</p>
                </div>
              ) : null}
            </section>

            {item.sections.map((section) => (
              <section className="case-section" id={section.id} key={section.id}>
                <p className="case-label">{section.label}</p>
                <h2>{section.title}</h2>
                <div className="case-section-body">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </PageShell>
    </main>
  );
}
