import Image from "next/image";
import { EXPERIENCE_ITEMS } from "@/data/experiences";

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

