export type ProjectItem = {
  id: string;
  category: string;
  name: string;
  impact: string;
  bullets: string[];
  tags: string[];
  more?: string[];
  href?: string;
  linkLabel?: string;
  fullWidth?: boolean;
  image?: string;
};

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: "xpo.lol",
    category: "experimental · ai",
    name: "xpo.lol",
    image: "/data/images/xpo.png",
    impact:
      "experimental project to explore the capabilities and limitations of language models in generating and understanding complex narratives.",
    bullets: [
      "prompt engineering and iteration for narrative generation",
      "fine-tuning and evaluation of models on story coherence and creativity",
      "exploration of model limitations and failure modes in storytelling",
    ],
    tags: ["language models", "narrative generation", "prompt engineering"],
    href: "https://github.com/ShernanJ/xpo-app",
    linkLabel: "visit site",
  },
  {
    id: "creator-compatibility-engine",
    category: "creator economy · partnership intelligence",
    name: "stan.store creator compatibility engine",
    image: "/data/images/stan-lee.jpeg",
    impact:
      "experimental project for stan store creators compare and find compatible brand partners.",
    bullets: [
      "brand ingestion and dossier generation from web signals",
      "deterministic scoring and ranking with stored match edges",
      "brief and outreach generation grounded in brand and creator features",
    ],
    tags: ["matching", "pipelines", "ranking", "agents", "postgres"],
    href: "https://github.com/ShernanJ/creatorgraph",
    linkLabel: "view repo",
  },
  {
    id: "stanley-for-x-extension",
    category: "experimental · ai",
    name: "stanley for x browser extension",
    image: "/data/images/stanley-extension.png",
    impact:
      "browser extension that transforms stanley linkedin posts into x native posts.",
    bullets: [
      "runtime interception of web signals and user interactions",
    ],
    tags: ["browser runtime", "interception", "event schemas", "agents"],
    href: "https://github.com/ShernanJ/stanley-x-extension",
  },
  {
    id: "ensight",
    category: "wallet safety",
    name: "ensight browser extension",
    image: "/data/images/diagram-extension-flow.png",
    impact:
      "browser extension that helps users understand and mitigate risks in their web3 transactions.",
    bullets: [
      "runtime interception of wallet request flows and transaction intents",
      "structured intent event schema for downstream analysis and UI",
      "lightweight risk heuristics and explainable breakdowns pre-signing",
    ],
    tags: ["browser runtime", "interception", "event schemas", "web3"],
    href: "https://github.com/eth-ensight/ensight-extension",
    linkLabel: "view repo",
  },
];
