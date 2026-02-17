type ProjectItem = {
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

const PROJECT_ITEMS: ProjectItem[] = [
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
    more: [
      "normalized creator and brand features into a scoring-friendly schema for explainability",
      "designed a scoring breakdown so brands can audit why a creator ranked",
      "iterating toward richer signals such as topic embeddings and audience fit priors",
    ],
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
    more: [
      "focused on turning wallet calls into a consistent event contract across providers",
      "optimized for fast local analysis so the user experience stays interactive",
      "designed for traceability: from raw call to parsed intent to explanation",
    ],
    href: "https://github.com/eth-ensight/ensight-extension",
    linkLabel: "view repo",
  },
  {
    id: "docforge",
    category: "documentation infra",
    name: "docforge",
    impact:
      "documentation compiler and shared docset store for dynamic, js-heavy docs. renders pages, normalizes content, versions artifacts, and exposes fast search plus an agent-facing api for retrieval.",
    bullets: [
      "playwright rendering for js-heavy docs and consistent extraction",
      "versioned doc artifacts with freshness checks and diffs",
      "agent-facing retrieval surfaces to reduce repeated crawling",
    ],
    tags: ["playwright", "queues", "postgres", "search", "agent api"],
    more: [
      "separates render, extract, normalize, and index into explicit stages",
      "designed cacheable artifacts so multiple consumers reuse the same docsets",
      "building toward structured knowledge outputs with stable ids over time",
    ],
    href: "https://github.com/ShernanJ/docforge",
    linkLabel: "view repo",
  },
  {
    id: "cansbridge-connects",
    category: "community graph · consent-first intros",
    name: "cansbridge connects",
    impact:
      "internal connection layer for cansbridge scholars and fellows designed to reduce social pressure. sender requests an intro, recipient privately accepts or ignores, and only approvals create a connection.",
    bullets: [
      "recipient-gated intros that remove obligation and awkwardness",
      "preference-aware connection intent to separate friends vs hiring asks",
      "graph densification for senior retention and community continuity",
    ],
    tags: ["workflow design", "community", "graph", "consent-first"],
    more: [
      "designed the intro flow so the recipient holds the power by default",
      "optimizing for retention and repeated engagement, not hiring throughput first",
      "future phase: discovery layer that increases surface area without spam",
    ],
    // swap this when you have a repo/case study link
    href: "https://github.com/ShernanJ",
    linkLabel: "view",
  },
  {
    id: "daytrace",
    category: "personal data systems",
    name: "daytrace",
    impact:
      "personal data system for structured life signals like location, habits, and activity. maps streams into an ontology so agents and humans can query an explainable graph of daily state.",
    bullets: [
      "stream to ontology mapping for durable, queryable state",
      "traceable primitives for reflection and agent workflows",
      "data modeling under uncertainty with explainability first",
    ],
    tags: ["ontologies", "graph", "personal analytics", "data modeling"],
    more: [
      "focus on stable concepts and ids so longitudinal analysis stays coherent",
      "prioritizes readable representations over black-box summaries",
      "built as a foundation for future agent tooling over personal data",
    ],
    href: "https://github.com/ShernanJ/daytrace",
    linkLabel: "view repo",
  },
  {
    id: "webtrace",
    category: "browser telemetry",
    name: "webtrace",
    impact:
      "browser sdk for live interaction and performance signals. captures fine-grained client events and streams structured data into a pipeline for analytics and optimization.",
    bullets: [
      "client-side instrumentation with structured event schemas",
      "low overhead capture for behavior and timing signals",
      "stream-friendly payloads designed for real-time analysis",
    ],
    tags: ["browser sdk", "telemetry", "event schemas", "analytics"],
    more: [
      "built around contracts that stay stable as events evolve",
      "optimized for signal quality without turning into surveillance bloat",
      "designed for replayability and debugging of event flows",
    ],
    // add repo link when ready
    // href: "https://github.com/ShernanJ/webtrace",
    // linkLabel: "view repo",
  },
  {
    id: "experiments",
    category: "labs & experiments",
    name: "experiments",
    impact:
      "small, focused builds exploring system design, browser internals, and agent-native interfaces. each one makes the reasoning and tradeoffs explicit instead of hiding them.",
    bullets: [
      "system design sketches and working prototypes",
      "browser internals exploration and tooling",
      "agent-native interfaces and docs experiments",
    ],
    tags: ["system design", "browser internals", "agents"],
    more: [
      "kept as a public engineering notebook of constraints and decisions",
      "used to test primitives before promoting them to larger products",
    ],
    href: "https://github.com/ShernanJ/experiments",
    linkLabel: "view repo",
    fullWidth: true,
  },
];

export function ProjectsSection() {
  return (
    <section className="w-full px-4 md:px-6 py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            projects
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            things i&apos;ve shipped
          </h2>
          <p className="max-w-3xl text-sm md:text-base text-muted-foreground">
            product-first builds backed by technical primitives: crawling,
            browser runtime hooks, event pipelines, and explainable scoring.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECT_ITEMS.map((p) => (
            <article
              key={p.id}
              className={[
                "flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/40",
                p.fullWidth ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <div className="space-y-3">
                <div className="flex flex-col gap-1">
                  <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/80">
                    {p.category}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.name}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground">{p.impact}</p>

                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-muted-foreground/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {p.more && p.more.length > 0 ? (
                  <details className="mt-3">
                    <summary className="cursor-pointer select-none text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80">
                      more
                    </summary>
                    <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                      {p.more.map((m) => (
                        <li key={m} className="flex gap-2">
                          <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-muted-foreground/60" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2 text-[11px] text-muted-foreground">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/80 bg-background/40 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {p.linkLabel ?? "view"}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
