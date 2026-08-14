export type ProjectVisual = {
  background: string;
  fit?: "cover" | "contain";
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
  href: string;
  type: ProjectLinkType;
  label: string;
  external?: boolean;
};

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  id: string;
  label: string;
  title: string;
  body: string;
  media?: ProjectMedia;
};

export type CaseStudy = {
  title: string;
  summary: string;
  meta: CaseStudyMeta[];
  sections: CaseStudySection[];
};

export type Project = {
  slug: string;
  name: string;
  titleNote?: string;
  year: string;
  shortDescription: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  github?: string;
  link?: ProjectLink;
  media?: ProjectMedia;
  role?: string;
  company?: string;
  caseStudy?: CaseStudy;
  featured?: boolean;
  technologies: string[];
  visual: ProjectVisual;
};

function placeholderStudy(project: {
  name: string;
  role: string;
  focus: string;
  summary: string;
  overview: string;
  work: string;
}): CaseStudy {
  return {
    title: project.summary,
    summary:
      "This is a first-pass case study shell. The goal is to explain the project clearly once the full product story, visuals, and outcomes are ready.",
    meta: [
      { label: "Role", value: project.role },
      { label: "Focus", value: project.focus },
      { label: "Status", value: "Draft" },
    ],
    sections: [
      {
        id: "overview",
        label: "Overview",
        title: project.name,
        body: project.overview,
      },
      {
        id: "work",
        label: "What I worked on",
        title: "The useful parts",
        body: project.work,
      },
    ],
  };
}

export const projects: Project[] = [
  {
    slug: "merchme",
    name: "MerchMe",
    year: "2026",
    shortDescription: "Creator commerce and monetization platform.",
    role: "Founding engineer",
    link: {
      href: "/work/merchme",
      type: "case-study",
      label: "Read case study",
    },
    featured: true,
    technologies: ["Next.js", "Commerce", "Creator tooling"],
    caseStudy: placeholderStudy({
      name: "MerchMe",
      role: "Founding engineer",
      focus: "Commerce, creator tooling",
      summary: "Creator commerce that feels native to the internet",
      overview:
        "MerchMe is a creator commerce and monetization platform for turning audience attention into durable revenue.",
      work:
        "This case study will cover the core flows, technical decisions, and the parts of the system that make adding new creator commerce primitives easier.",
    }),
    visual: {
      background: "#f4f4f4",
    },
  },
  {
    slug: "xpo",
    name: "Xpo",
    year: "2026",
    shortDescription: "Turning LinkedIn-style drafts into native X posts.",
    role: "Builder",
    link: {
      href: "/work/xpo",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/stanley-extension.png",
      alt: "Stanley extension interface for drafting native social posts.",
    },
    featured: true,
    technologies: ["Browser extension", "Content tooling", "Automation"],
    caseStudy: {
      title: "A content tool for rewriting posts where people actually publish",
      summary:
        "Xpo turns LinkedIn-style source material into native X posts, with a browser extension, growth surface, and supporting system flow.",
      meta: [
        { label: "Role", value: "Builder" },
        { label: "Focus", value: "Content tooling" },
        { label: "Format", value: "Extension + app" },
      ],
      sections: [
        {
          id: "overview",
          label: "Overview",
          title: "Making cross-platform writing feel native",
          body: "The project started from a simple observation: content that works on LinkedIn often reads wrong on X. The tool helps preserve the idea while changing the shape, tone, and formatting for the destination.",
          media: {
            type: "image",
            src: "/data/images/stanley-extension.png",
            alt: "Stanley extension interface for drafting native social posts.",
          },
        },
        {
          id: "xpo",
          label: "Xpo",
          title: "A growth surface for X",
          body: "Xpo explores the surrounding workflow: understanding what someone posts, where the account is going, and what the next useful move could be.",
          media: {
            type: "image",
            src: "/data/images/xpo.png",
            alt: "Xpo landing screen for an X growth engine.",
          },
        },
        {
          id: "extension",
          label: "Extension",
          title: "Browser context as the interface",
          body: "The extension keeps the workflow close to where the user already writes, instead of forcing them into yet another dashboard.",
          media: {
            type: "image",
            src: "/data/images/diagram-extension-flow.png",
            alt: "A system flow diagram showing how a browser extension moves messages through scripts and background services.",
          },
        },
      ],
    },
    visual: {
      background: "#ececf1",
      fit: "contain",
    },
  },
  {
    slug: "creatorgraph",
    name: "CreatorGraph",
    year: "2026",
    shortDescription: "Google dorking and discovery tools for creator research.",
    role: "Builder",
    link: {
      href: "/work/creatorgraph",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/stan-lee.jpeg",
      alt: "CreatorGraph brand website generator screen.",
    },
    featured: true,
    technologies: ["Search", "OSINT", "Data enrichment"],
    caseStudy: placeholderStudy({
      name: "CreatorGraph",
      role: "Builder",
      focus: "Search, OSINT",
      summary: "Creator research from messy public signals",
      overview:
        "CreatorGraph experiments with using search operators, enrichment, and structured review to discover useful creator and brand context.",
      work:
        "This case study will explain the discovery workflow, the data model, and how the interface keeps research understandable instead of dumping raw links.",
    }),
    visual: {
      background: "#f2f2f4",
      fit: "cover",
    },
  },
  {
    slug: "ensight",
    name: "ENSight",
    year: "2025",
    shortDescription: "First Web3 app and browser-extension security experiment.",
    role: "Builder",
    link: {
      href: "/work/ensight",
      type: "case-study",
      label: "Read case study",
    },
    featured: true,
    technologies: ["Web3", "Browser extension", "Security"],
    caseStudy: placeholderStudy({
      name: "ENSight",
      role: "Builder",
      focus: "Web3, extension security",
      summary: "A first Web3 app for understanding transaction intent",
      overview:
        "ENSight explored how to make wallet and dapp interactions more understandable before a user signs something important.",
      work:
        "The case study will break down the extension architecture, the risk/intent model, and what I learned building in the browser security boundary.",
    }),
    visual: {
      background: "#f3f3f3",
    },
  },
  {
    slug: "wya",
    name: "WYA App",
    year: "2025",
    shortDescription: "Bluetooth connectivity app for ravers finding each other.",
    role: "Builder",
    link: {
      href: "/work/wya",
      type: "case-study",
      label: "Read case study",
    },
    featured: true,
    technologies: ["Mobile", "Bluetooth", "Events"],
    caseStudy: placeholderStudy({
      name: "WYA App",
      role: "Builder",
      focus: "Mobile, Bluetooth",
      summary: "Finding your friends when signal gets weird",
      overview:
        "WYA is a Bluetooth connectivity app idea for ravers trying to find each other when crowds, noise, and weak service make coordination painful.",
      work:
        "This case study will cover the product idea, the connectivity constraints, and how the app could stay useful in a chaotic live-event environment.",
    }),
    visual: {
      background: "#f5f5f5",
    },
  },
  {
    slug: "behavioural-intelligence",
    name: "Behavioural Intelligence",
    year: "2025",
    shortDescription: "OSINT experiments for finding and organizing signals.",
    role: "Builder",
    link: {
      href: "/work/behavioural-intelligence",
      type: "case-study",
      label: "Read case study",
    },
    featured: true,
    technologies: ["OSINT", "Automation", "Data systems"],
    caseStudy: placeholderStudy({
      name: "Behavioural Intelligence",
      role: "Builder",
      focus: "OSINT, automation",
      summary: "OSINT workflows for turning clues into context",
      overview:
        "Behavioural Intelligence is an OSINT-oriented experiment around gathering public signals, connecting them, and making the result easier to reason about.",
      work:
        "The case study will focus on collection, enrichment, entity review, and where automation helps versus where human judgment still matters.",
    }),
    visual: {
      background: "#eeeeee",
    },
  },
  {
    slug: "ai-phone-agent",
    name: "AI Phone Agent",
    year: "2025",
    shortDescription: "Voice agent experiments for phone-based workflows.",
    role: "Builder",
    link: {
      href: "/work/ai-phone-agent",
      type: "case-study",
      label: "Read case study",
    },
    featured: true,
    technologies: ["Voice AI", "Agents", "Automation"],
    caseStudy: placeholderStudy({
      name: "AI Phone Agent",
      role: "Builder",
      focus: "Voice AI, agents",
      summary: "Phone workflows handled by an AI agent",
      overview:
        "The AI Phone Agent explores what it takes to make a voice agent useful in real phone workflows, where timing, context, and reliability matter.",
      work:
        "This case study will cover the interaction model, agent constraints, and the tradeoffs between automation and human handoff.",
    }),
    visual: {
      background: "#f3f3f3",
    },
  },
  {
    slug: "td-react-library",
    name: "TD Innersource Library",
    year: "2023",
    shortDescription: "Reusable frontend library work for internal product teams.",
    role: "Frontend engineer",
    link: {
      href: "/work/td-react-library",
      type: "case-study",
      label: "Read case study",
    },
    company: "TD",
    featured: false,
    technologies: ["React", "Design systems", "Frontend"],
    caseStudy: placeholderStudy({
      name: "TD Innersource Library",
      role: "Frontend engineer",
      focus: "React, reusable UI",
      summary: "Reusable React patterns for internal product surfaces",
      overview:
        "This work focused on reusable frontend pieces that could make internal product development more consistent.",
      work:
        "The case study will cover component constraints, usage patterns, and what reusable UI needs in a large organization.",
    }),
    visual: {
      background: "#f4f4f4",
    },
  },
  {
    slug: "taplytics-marketing-refresh",
    name: "Taplytics",
    titleNote: "(Rebranded to DevCycle)",
    year: "2024",
    shortDescription: "Marketing page refresh and frontend polish.",
    role: "Software engineer",
    link: {
      href: "/work/taplytics-marketing-refresh",
      type: "case-study",
      label: "Read case study",
    },
    company: "Taplytics",
    featured: false,
    technologies: ["Frontend", "Marketing site", "Polish"],
    caseStudy: placeholderStudy({
      name: "Taplytics",
      role: "Software engineer",
      focus: "Frontend, marketing",
      summary: "Refreshing a marketing surface without overcomplicating it",
      overview:
        "This project focused on improving a marketing page surface and making the presentation clearer.",
      work:
        "The case study will cover the page goals, frontend details, and what changed visually.",
    }),
    visual: {
      background: "#f1f1f1",
    },
  },
  {
    slug: "clover-labs",
    name: "Clover Labs",
    year: "2025",
    shortDescription: "Consumer apps including TryEchos, PillowTalk, and more.",
    role: "Software engineer",
    link: {
      href: "/work/clover-labs",
      type: "case-study",
      label: "Read case study",
    },
    company: "Clover Labs",
    featured: false,
    technologies: ["Consumer apps", "Growth", "Mobile"],
    caseStudy: placeholderStudy({
      name: "Clover Labs",
      role: "Software engineer",
      focus: "Consumer apps",
      summary: "Building and iterating across early consumer products",
      overview:
        "Clover Labs work spanned multiple consumer products and experiments, including TryEchos, PillowTalk, and other apps.",
      work:
        "This case study will group the most relevant product and engineering work from that period into one easy-to-understand story.",
    }),
    visual: {
      background: "#f2f2f2",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudyProjects() {
  return projects.filter((project) => project.caseStudy);
}
