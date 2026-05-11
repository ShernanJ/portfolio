import { PROJECT_ITEMS } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="w-full px-4 md:px-6 py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            projects
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
