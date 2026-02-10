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
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-5 shadow-sm">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                docforge
              </p>
              <h3 className="text-lg font-semibold tracking-tight">
                docforge
              </h3>
              <p className="text-sm text-muted-foreground">
                documentation compiler and shared docset store for dynamic,
                js-heavy docs. crawls, normalizes, and versions content into
                artifacts exposed through fast search and an agent-facing api.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
              <span className="rounded-full border border-border/80 px-3 py-1">
                crawling
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1">
                rendering
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1">
                agent apis
              </span>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-5 shadow-sm">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                ensight
              </p>
              <h3 className="text-lg font-semibold tracking-tight">
                ensight
              </h3>
              <p className="text-sm text-muted-foreground">
                browser extension + backend that sits in the path of ethereum
                wallet calls and turns them into structured intent events.
                instruments the browser runtime, intercepts transactions before
                they hit the signer, and runs lightweight risk and intent
                analysis so users see explainable breakdowns instead of opaque
                hex.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
              <span className="rounded-full border border-border/80 px-3 py-1">
                browser runtime
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1">
                interception
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1">
                on-chain analysis
              </span>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-5 shadow-sm">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                daytrace
              </p>
              <h3 className="text-lg font-semibold tracking-tight">
                daytrace
              </h3>
              <p className="text-sm text-muted-foreground">
                personal data system for structured life signals like location,
                habits, and activity. maps streams into an ontology for
                reflection and productivity so agents and humans can query a
                graph of explainable daily state.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
              <span className="rounded-full border border-border/80 px-3 py-1">
                life signals
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1">
                ontologies
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1">
                personal analytics
              </span>
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card/60 p-5 shadow-sm">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                webtrace
              </p>
              <h3 className="text-lg font-semibold tracking-tight">
                webtrace
              </h3>
              <p className="text-sm text-muted-foreground">
                browser sdk for live interaction and performance signals. runs
                in the client, captures fine-grained behavioral and timing
                events, and streams structured data into a real-time pipeline
                for analytics and optimization.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted-foreground">
              <span className="rounded-full border border-border/80 px-3 py-1">
                browser sdk
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1">
                real-time events
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1">
                analytics
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

