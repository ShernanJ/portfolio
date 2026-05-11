import Image from "next/image";

type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  impact: string;
  bullets: string[];
  tags: string[];
  more?: string[];
  logoSrc?: string;
  logoAlt?: string;
};

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "stealth",
    role: "founding engineer",
    org: "stealth startup",
    logoSrc: "/companies/stealth_startup_logo.jpg",
    logoAlt: "stealth startup logo",
    impact:
      "shipped a behavioral intelligence platform for marketing teams.",
    bullets: [
      "browser sdk instrumentation",
      "streaming / event pipelines",
      "inference / optimization layer",
    ],
    tags: ["browser sdk", "pipelines", "inference", "b2b"],
  },
  {
    id: "clover-labs",
    role: "founding engineer",
    org: "clover labs",
    logoSrc: "/companies/clover_logo.jpg",
    logoAlt: "clover labs logo",
    impact:
      "built ai-driven growth agents and early infrastructure for scalable distribution systems.",
    bullets: [
      "agent workflows and orchestration",
      "automation pipelines",
      "early platform infra",
    ],
    tags: ["agents", "automation", "infra"],
  },
  {
    id: "merchme",
    role: "co-founder & cto",
    org: "merchme",
    logoSrc: "/companies/merchme_logo.jpg",
    logoAlt: "merchme logo",
    impact:
      "led product architecture and full-stack development for a ugc marketplace connecting creators and brands; supported 100+ creators and active brand partners.",
    bullets: [
      "marketplace core and matching",
      "campaign / bounty flows",
      "ops and admin tooling",
    ],
    tags: ["marketplace", "full-stack", "product"],
  },
  {
    id: "internships",
    role: "engineering internships (selected)",
    org: "td · thales · taplytics (yc w14 → devcycle)",
    logoSrc: "/companies/td_logo.jpg",
    logoAlt: "internships logo",
    impact:
      "shipped production features across enterprise and startup environments.",
    bullets: [
      "prod dashboards and reporting surfaces",
      "internal automation tooling",
      "ui sdk and experimentation interfaces",
    ],
    tags: ["prod", "automation", "ui systems"],
  },
];

export function ExperienceSection() {
  return (
    <section className="w-full px-4 md:px-6 pt-16 pb-24">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            experience
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {EXPERIENCE_ITEMS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="space-y-3">
                <div className="flex flex-col gap-1">
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {item.role}
                  </div>
                  {item.id === "internships" ? (
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground/90">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/companies/td_logo.jpg"
                          alt="td logo"
                          width={22}
                          height={22}
                          className="h-5 w-5 rounded-sm border border-border/60 bg-background object-contain"
                        />
                        <span>td</span>
                      </div>
                      <span className="text-muted-foreground/60">·</span>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/companies/thales_logo.jpg"
                          alt="thales logo"
                          width={22}
                          height={22}
                          className="h-5 w-5 rounded-sm border border-border/60 bg-background object-contain"
                        />
                        <span>thales</span>
                      </div>
                      <span className="text-muted-foreground/60">·</span>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/companies/taplytics_logo.jpg"
                          alt="taplytics / devcycle logo"
                          width={22}
                          height={22}
                          className="h-5 w-5 rounded-sm border border-border/60 bg-background object-contain"
                        />
                        <span>taplytics (yc w14 → devcycle)</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground/90">
                      {item.logoSrc ? (
                        <Image
                          src={item.logoSrc}
                          alt={item.logoAlt ?? item.org}
                          width={22}
                          height={22}
                          className="h-5 w-5 rounded-sm border border-border/60 bg-background object-contain"
                        />
                      ) : null}
                      <span>{item.org}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground">{item.impact}</p>

                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-muted-foreground/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {item.more && item.more.length > 0 ? (
                  <details className="mt-3">
                    <summary className="cursor-pointer select-none text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80">
                      more
                    </summary>
                    <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                      {item.more.map((m) => (
                        <li key={m} className="flex gap-2">
                          <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/80 bg-background/40 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/60">
          <span className="text-[11px] uppercase tracking-[0.18em]">links</span>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/shernanjavier"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline cursor-pointer"
            >
              linkedin
            </a>
            <a
              href="https://github.com/ShernanJ"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline cursor-pointer"
            >
              github
            </a>
            <a
              href="/shernan_javier_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline cursor-pointer"
            >
              resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

