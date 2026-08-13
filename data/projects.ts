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
    caseStudy: {
      title: "Creator commerce that feels native to the internet",
      summary:
        "MerchMe is a creator commerce and monetization platform. This page is a first-pass case study shell so the project can be explained clearly once the product story and artifacts are ready.",
      meta: [
        { label: "Role", value: "Founding engineer" },
        { label: "Focus", value: "Commerce, creator tooling" },
        { label: "Status", value: "In progress" },
      ],
      sections: [
        {
          id: "overview",
          label: "Overview",
          title: "A commerce surface for creators",
          body: "The goal is to make monetization feel less like a bolt-on storefront and more like part of the creator's existing relationship with their audience.",
        },
        {
          id: "work",
          label: "What I worked on",
          title: "The product foundation",
          body: "This case study will cover the core flows, technical decisions, and the parts of the system that made adding new creator commerce primitives easier.",
        },
      ],
    },
    visual: {
      background: "#f4f4f4",
    },
  },
  {
    slug: "echos",
    name: "Echos",
    year: "2026",
    shortDescription: "Attribution and referral infrastructure for consumer apps.",
    role: "Product engineer",
    link: {
      href: "/work/echos",
      type: "case-study",
      label: "Read case study",
    },
    featured: true,
    technologies: ["Attribution", "Referrals", "Infrastructure"],
    caseStudy: {
      title: "Referral infrastructure for consumer growth",
      summary:
        "Echos is attribution and referral infrastructure for consumer apps. The case study will explain the system in plain language: what gets tracked, why it matters, and how the product makes growth loops easier to operate.",
      meta: [
        { label: "Role", value: "Product engineer" },
        { label: "Focus", value: "Attribution, referrals" },
        { label: "Stack", value: "Infrastructure + product UX" },
      ],
      sections: [
        {
          id: "overview",
          label: "Overview",
          title: "Making referrals understandable",
          body: "The product sits between user actions, attribution events, and reward logic. The hard part is making that invisible infrastructure legible to teams operating consumer growth.",
        },
        {
          id: "system",
          label: "System",
          title: "Events, identities, and rewards",
          body: "This section will eventually break down how the system models users, tracks referral paths, and helps teams debug the difference between a real conversion and noisy attribution.",
        },
      ],
    },
    visual: {
      background: "#f1f1f1",
    },
  },
  {
    slug: "pillowtalk",
    name: "PillowTalk",
    year: "2025",
    shortDescription: "iOS sleep tracking product.",
    role: "iOS engineer",
    link: {
      href: "/work/pillowtalk",
      type: "case-study",
      label: "Read case study",
    },
    featured: true,
    technologies: ["iOS", "Health", "Consumer product"],
    caseStudy: {
      title: "Sleep tracking that stays out of the way",
      summary:
        "PillowTalk is an iOS sleep tracking product. This case study shell is structured to explain the user problem, the product interaction, and what made the app feel calm instead of clinical.",
      meta: [
        { label: "Role", value: "iOS engineer" },
        { label: "Focus", value: "Consumer health" },
        { label: "Platform", value: "iOS" },
      ],
      sections: [
        {
          id: "overview",
          label: "Overview",
          title: "A quieter sleep product",
          body: "Sleep products can easily become noisy dashboards. The opportunity here is to make tracking feel simple, personal, and useful without overwhelming the user.",
        },
        {
          id: "interaction",
          label: "Interaction",
          title: "Designing for low-energy moments",
          body: "This section will cover the interaction decisions that matter when people are tired, waking up, or quickly checking patterns before moving on with their day.",
        },
      ],
    },
    visual: {
      background: "#f1f1f1",
    },
  },
  {
    slug: "mini-foundry",
    name: "Mini Foundry",
    year: "2025",
    shortDescription: "Experimental data intelligence and OSINT platform.",
    role: "Builder",
    link: {
      href: "/work/mini-foundry",
      type: "case-study",
      label: "Read case study",
    },
    media: {
      type: "image",
      src: "/data/images/stanley-extension.png",
      alt: "Stanley extension interface for drafting native social posts.",
    },
    featured: true,
    technologies: ["Data systems", "OSINT", "Automation"],
    caseStudy: {
      title: "A small lab for data intelligence systems",
      summary:
        "Mini Foundry is an experimental data intelligence and OSINT platform. The case study explains the project as a set of experiments around collection, enrichment, and usable investigation workflows.",
      meta: [
        { label: "Role", value: "Builder" },
        { label: "Focus", value: "OSINT, automation" },
        { label: "Format", value: "Experimental platform" },
      ],
      sections: [
        {
          id: "overview",
          label: "Overview",
          title: "Turning messy signals into useful context",
          body: "The project explores how scattered public signals can be collected, enriched, and presented in a way that helps someone understand an entity or situation faster.",
          media: {
            type: "image",
            src: "/data/images/stanley-extension.png",
            alt: "Stanley extension interface for drafting native social posts.",
          },
        },
        {
          id: "system",
          label: "System",
          title: "Collection, enrichment, and review",
          body: "This section will eventually show the system map: where data comes from, how it is normalized, and how the interface keeps the human in control of interpretation.",
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
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudyProjects() {
  return projects.filter((project) => project.caseStudy);
}
