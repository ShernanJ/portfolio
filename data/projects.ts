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
};

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: "creatorgraph",
    category: "creator economy · partnership intelligence",
    name: "creatorgraph",
    impact:
      "brand-side dealflow engine for stan-style ecosystems. converts a brand url into a structured dossier, generates campaign briefs, ranks creators with explainable scoring, and outputs outreach grounded in real signals.",
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
    id: "ensight",
    category: "wallet safety",
    name: "ensight",
    impact:
      "browser extension + backend that sits in the path of ethereum wallet requests and turns them into structured intent events, so users get readable explanations instead of opaque hex.",
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
