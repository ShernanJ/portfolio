import Image from "next/image";
import { CaseVideoPlayer } from "./case-video-player";

type CaseImageProps = {
  alt: string;
  aspect?: string;
  caption?: React.ReactNode;
  src: string;
};

type CaseVideoEmbedProps = {
  aspect?: string;
  caption?: React.ReactNode;
  poster?: string;
  src: string;
  title: string;
};

type CaseSectionProps = {
  children: React.ReactNode;
  id: string;
  label: string;
  title: string;
};

export function CaseImage({
  alt,
  aspect = "16 / 9",
  caption,
  src,
}: CaseImageProps) {
  return (
    <figure className="case-mdx-figure">
      <div
        className="case-mdx-image-frame"
        style={{ "--case-image-aspect": aspect } as React.CSSProperties}
      >
        <Image
          alt={alt}
          className="case-mdx-image"
          fill
          sizes="(max-width: 900px) 100vw, 864px"
          src={src}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function CaseVideoEmbed({
  aspect = "16 / 9",
  caption,
  poster,
  src,
  title,
}: CaseVideoEmbedProps) {
  return (
    <figure className="case-mdx-figure case-video-embed-figure">
      <div
        className="case-video-embed-frame"
        style={{ "--case-video-aspect": aspect } as React.CSSProperties}
      >
        <CaseVideoPlayer poster={poster} src={src} title={title} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function CaseSection({
  children,
  id,
  label,
  title,
}: CaseSectionProps) {
  return (
    <section className="case-section" id={id}>
      <p className="case-label">{label}</p>
      <h2>{title}</h2>
      <div className="case-section-body">{children}</div>
    </section>
  );
}
