export type ProjectVisual = {
  background: string;
};

export type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      alt: string;
    };

export type ProjectLinkType = "case-study" | "github" | "site";

export type ProjectLink = {
  external?: boolean;
  href: string;
  label: string;
  type: ProjectLinkType;
};

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  id: string;
  label: string;
};

export type CaseStudySnapshotItem = {
  label: string;
  value: string;
};

export type CaseStudyLink = {
  external?: boolean;
  href: string;
  label: string;
  type:
    | "github"
    | "live"
    | "linkedin"
    | "x"
    | "youtube"
    | "video"
    | "other";
};

export type CaseStudy = {
  links?: CaseStudyLink[];
  meta: CaseStudyMeta[];
  sections: CaseStudySection[];
  snapshot?: CaseStudySnapshotItem[];
  summary: string;
  title: string;
};

export type Project = {
  company?: string;
  featured?: boolean;
  github?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  link?: ProjectLink;
  media?: ProjectMedia;
  name: string;
  role?: string;
  shortDescription: string;
  slug: string;
  technologies: string[];
  titleNote?: string;
  visual: ProjectVisual;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "merchme",
    name: "MerchMe",
    year: "2025",
    shortDescription: "UGC marketplace connecting brands with creators.",
    role: "Co-Founder",
    link: {
      href: "/work/merchme",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/optimized/work/merchme-showcase.webp",
      alt: "MerchMe creator dashboard showing available paid UGC campaigns.",
    },
    featured: true,
    technologies: ["Next.js", "NestJS", "Marketplace"],
    visual: {
      background: "#f4f4f4",
    },
  },
  {
    slug: "xpo",
    name: "Xpo",
    year: "2026",
    shortDescription: "AI distribution content tool for growing on X.",
    role: "Builder",
    link: {
      href: "/work/xpo",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/optimized/work/xpo-showcase.webp",
      alt: "Xpo browser extension interface for drafting native social posts.",
    },
    featured: true,
    technologies: ["AI", "Browser extension", "Creator tooling"],
    visual: {
      background: "#ececf1",
    },
  },
  {
    slug: "creatorgraph",
    name: "CreatorGraph",
    year: "2026",
    shortDescription: "Scraping tool to find compatible creators using AI and graph search.",
    role: "Builder",
    link: {
      href: "/work/creatorgraph",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/optimized/work/creatorgraph-showcase.webp",
      alt: "CreatorGraph interface for brand-to-creator matching.",
    },
    featured: true,
    technologies: ["Search", "Enrichment", "Matchmaking"],
    visual: {
      background: "#f2f2f4",
    },
  },
  {
    slug: "clover-labs",
    name: "Clover Labs",
    year: "2025",
    shortDescription: "Distribution product work, Echos foundation, and consumer iOS app studio experiments.",
    role: "Founding Engineer",
    link: {
      href: "/work/clover-labs",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/optimized/work/cloverlabs-showcase.webp",
      alt: "Clover Labs distribution product and consumer iOS app studio work, anchored by Echos.",
    },
    company: "Clover Labs",
    featured: false,
    technologies: ["Distribution", "iOS", "Echos"],
    visual: {
      background: "#f2f2f2",
    },
  },
  {
    slug: "taplytics-marketing-refresh",
    name: "Taplytics",
    titleNote: "(Later DevCycle, acquired by Dynatrace)",
    year: "2021",
    shortDescription: "Marketing site refresh for Taplytics, a feature flagging and experimentation platform.",
    role: "Software engineer intern",
    link: {
      href: "/work/taplytics-marketing-refresh",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/optimized/work/taplytics-showcase.webp",
      alt: "Taplytics marketing refresh homepage showing new hero section and product features.",
    },
    company: "Taplytics",
    featured: false,
    technologies: ["PHP", "WordPress", "React"],
    visual: {
      background: "#f1f1f1",
    },
  },
  {
    slug: "behavioural-intelligence",
    name: "Behavioural Intelligence",
    year: "2026",
    shortDescription: "Browser SDK for real-time customer intent signals.",
    role: "Founding engineer",
    link: {
      href: "/work/behavioural-intelligence",
      type: "case-study",
      label: "Read case study",
    },
    media:{
      type: "image",
      src: "/data/images/optimized/work/bi-showcase.webp",
      alt: "Behavioural Intelligence browser SDK work.",
    },
    featured: true,
    technologies: ["Browser SDK", "Event pipelines", "Marketing AI"],
    visual: {
      background: "#eeeeee",
    },
  },
  {
    slug: "td-bank",
    name: "TD Bank",
    year: "2023",
    shortDescription: "Internal UI SDK aligned with TD's design system.",
    role: "Software Engineer Intern",
    link: {
      href: "/work/td-bank",
      type: "case-study",
      label: "Read case study",
    },
    media:{
      type: "image",
      src: "/data/images/optimized/work/td-showcase.webp",
      alt: "TD UI SDK work.",
    },
    company: "TD",
    featured: false,
    technologies: ["React", "TypeScript", "Design systems"],
    visual: {
      background: "#f4f4f4",
    },
  },
  {
    slug: "ensight",
    name: "ENSight",
    year: "2026",
    shortDescription: "Web3 safety extension for explaining Ethereum wallet intent.",
    role: "Builder",
    link: {
      href: "/work/ensight",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/optimized/work/ensight-showcase.webp",
      alt: "ENSight extension flow diagram showing wallet intent moving through page context, content script, background worker, and UI.",
    },
    featured: true,
    technologies: ["Web3", "Browser extension", "Security"],
    visual: {
      background: "#f3f3f3",
    },
  },
    {
    slug: "wya",
    name: "WYA App",
    titleNote: "(Work In Progress)",
    year: "2026",
    shortDescription: "Bluetooth connectivity app for ravers finding each other.",
    role: "Builder",
    link: {
      href: "/work/wya",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/optimized/work/wya-showcase-updated.webp",
      alt: "WYA app showing Bluetooth connectivity and event discovery.",
    },
    featured: true,
    technologies: ["Mobile", "Bluetooth", "Events"],
    visual: {
      background: "#f5f5f5",
    },
  },
  {
    slug: "ai-phone-agent",
    name: "AI Phone Agent",
    year: "2024",
    shortDescription: "Early voice-AI customer-service proof of concept.",
    role: "Builder",
    link: {
      href: "/work/ai-phone-agent",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/optimized/work/ai-phone-agent-showcase.webp",
      alt: "AI Phone Agent proof of concept showing Twilio call flow and Cohere AI integration.",
    },
    featured: true,
    technologies: ["Go", "Twilio", "Cohere"],
    visual: {
      background: "#f3f3f3",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudyProjects() {
  return projects.filter((project) => project.link?.type === "case-study");
}
