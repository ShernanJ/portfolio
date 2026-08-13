import { site } from "@/data/site";
import { SocialLinks } from "@/components/social-links";

export function Intro() {
  return (
    <header className="intro section-reveal">
      <div className="intro-copy">
        <p className="eyebrow">
          {site.role} / {site.location}
        </p>
        <h1>
          <span>
            I&apos;m <strong>{site.name}</strong>.
          </span>{" "}
          <span>{site.description}</span>
        </h1>
      </div>
      <SocialLinks className="intro-links" links={site.links} />
    </header>
  );
}
