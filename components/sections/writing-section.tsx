"use client";

import { useEffect, useState } from "react";

type SubstackPost = {
  title: string;
  link: string;
  image: string;
  description: string;
  date: string;
};

export function WritingSection() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/substack")
      .then((r) => r.json())
      .then((d) => {
        if (d.posts) setPosts(d.posts);
        else setError(true);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <section className="w-full px-4 md:px-6 pb-20">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            writing
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            substack
          </h2>
        </div>

        {error ? (
          <p className="text-sm text-muted-foreground">
            couldn&apos;t load articles right now.
          </p>
        ) : posts.length === 0 ? (
          <p className="text-sm text-muted-foreground">loading...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-2xl border border-border/80 bg-card/60 p-0 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/40 overflow-hidden"
              >
                {post.image && (
                  <div className="aspect-[2/1] overflow-hidden bg-muted/30">
                    <img
                      src={post.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1.5 p-5 pt-4">
                  <h3 className="text-base font-semibold tracking-tight leading-snug">
                    {post.title}
                  </h3>
                  {post.date && (
                    <time className="text-[11px] text-muted-foreground/70">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="pt-2">
          <a
            href="https://shernanjavier.substack.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
          >
            view all on substack &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
