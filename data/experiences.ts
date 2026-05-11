export type ExperienceItem = {
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

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
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
    more: [
      "designed the event schema and contracts between client, stream, and inference layer",
      "made tradeoffs around latency vs depth of analysis for in-session decisions",
      "built internal tooling to replay traffic and validate new inference logic",
    ],
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
    more: [
      "defined the core agent loop: perception → planning → action → logging",
      "built guardrails and failure modes to keep agents debuggable, not magic",
      "set up basic observability around agent runs and downstream effects",
    ],
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
    more: [
      "designed data model for creators, brands, campaigns, and payouts",
      "built internal dashboards for campaign health, creator performance, and fulfillment",
      "iterated quickly on flows with tight feedback loops from brands and creators",
    ],
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
    more: [
      "worked on real user-facing systems instead of throwaway prototypes",
      "picked up existing codebases and shipped within existing constraints",
    ],
  },
];
