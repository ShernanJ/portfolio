import { site } from "@/data/site";
import { SocialLinks } from "@/components/social-links";

export function Intro() {
  return (
    <header className="intro section-reveal" id="intro">
      <div className="intro-topline">
        <p className="eyebrow">
          {site.role} / {site.location}
        </p>
        <SocialLinks className="intro-links" links={site.links} />
      </div>
      <div className="intro-copy">
        <h1>
          <span>
            I&apos;m <strong>{site.name}</strong>.
          </span>{" "}
          <span>{site.description}</span>
        </h1>
      </div>
    </header>
  );
}
