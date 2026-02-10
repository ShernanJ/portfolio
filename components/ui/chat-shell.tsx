"use client";

import * as React from "react";
import { useChat } from "@/components/chat/useChat";

type ChatShellProps = {
  open: boolean;
  onClose: () => void;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ChatShell({ open, onClose }: ChatShellProps) {
  const { messages, send, loading } = useChat();
  const [input, setInput] = React.useState("");
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => {
      scrollerRef.current?.scrollTo({
        top: scrollerRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, [open, messages.length, loading]);

  if (!open) return null;

  const canSend = input.trim().length > 0 && !loading;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = input.trim();
    if (!q || loading) return;
    setInput("");
    await send(q);
  }

  const starter = [
    "what projects have you shipped?",
    "what are you working on right now?",
    "what’s your stack?",
    "what is docforge?",
    "what do you focus on?",
  ];

  return (
    <aside className="h-screen w-full max-w-md border-l border-border bg-card/95 shadow-xl backdrop-blur sticky top-0">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          shernan.chat
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          close
        </button>
      </div>

      <div className="flex h-[calc(100vh-3rem)] flex-col">
        <div
          ref={scrollerRef}
          className="flex-1 overflow-y-auto px-4 py-4 text-left text-sm space-y-3"
        >
          {messages.length === 0 ? (
            <div className="space-y-3 text-muted-foreground">
              <p>
                ask things like &quot;what has shernan shipped?&quot; or
                &quot;what&apos;s the current stack?&quot; and get answers from
                a curated docset.
              </p>

              <div className="space-y-2">
                <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">
                  starter questions
                </div>
                <div className="flex flex-wrap gap-2">
                  {starter.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => !loading && send(q)}
                      className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-foreground/80 hover:text-foreground hover:bg-background/60"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {messages.map((m, idx) => {
            const isUser = m.role === "user";
            return (
              <div
                key={idx}
                className={cx("flex", isUser ? "justify-end" : "justify-start")}
              >
                <div
                  className={cx(
                    "max-w-[85%] rounded-2xl px-4 py-2 leading-relaxed",
                    isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-background/60 text-foreground border border-border"
                  )}
                >
                  <div className="whitespace-pre-wrap">{m.content}</div>

                  {!isUser && Array.isArray(m.sources) && m.sources.length > 0 ? (
                    <details className="mt-2">
                      <summary className="cursor-pointer select-none text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        sources
                      </summary>
                      <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                        {m.sources.map((s: string, i: number) => (
                          <li key={`${s}-${i}`} className="truncate">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : null}

                  {!isUser &&
                  Array.isArray(m.followups) &&
                  m.followups.length > 0 ? (
                    <div className="mt-3">
                      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        go deeper
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {m.followups.map((fq: string) => (
                          <button
                            key={fq}
                            type="button"
                            onClick={() => !loading && send(fq)}
                            className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-foreground/80 hover:text-foreground hover:bg-background/60"
                          >
                            {fq}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}

          {loading ? (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-2 bg-background/60 text-foreground border border-border">
                <span className="text-muted-foreground">thinking…</span>
              </div>
            </div>
          ) : null}
        </div>

        <form onSubmit={onSubmit} className="border-t border-border px-4 py-3">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="type a question about shernan javier..."
              maxLength={500}
              disabled={!open}
            />
            <button
              type="submit"
              disabled={!canSend}
              className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
              send
            </button>
          </div>

          <div className="mt-2 text-[11px] text-muted-foreground">
            grounded answers from a curated docset.
          </div>
        </form>
      </div>
    </aside>
  );
}
