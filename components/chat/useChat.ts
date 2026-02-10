"use client";

import * as React from "react";

type Role = "user" | "assistant";

export type ChatMessage = {
  role: Role;
  content: string;
  sources?: string[];
  followups?: string[];
  debug?: string;
  status?: number;
  model?: string;
};

function clampInput(s: string) {
  const trimmed = s.trim();
  return trimmed.length > 800 ? trimmed.slice(0, 800) : trimmed;
}

function toApiMessages(msgs: ChatMessage[]) {
  // only send role/content (prevents request #2+ from breaking)
  return msgs.map((m) => ({ role: m.role, content: m.content }));
}

export function useChat() {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [loading, setLoading] = React.useState(false);

  async function send(content: string) {
    const userContent = clampInput(content);
    if (!userContent || loading) return;

    const next: ChatMessage[] = [
      ...messages,
      { role: "user", content: userContent },
    ];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: toApiMessages(next) }),
      });

      const data = await res.json().catch(() => null);

      const assistant: ChatMessage = {
        role: "assistant",
        content:
          data?.answer ??
          (res.ok ? "i don’t have that in my docset yet." : "request failed."),
        sources: Array.isArray(data?.sources) ? data.sources : [],
        followups: Array.isArray(data?.followups) ? data.followups : [],
      };

      if (!res.ok) {
        assistant.debug = typeof data?.debug === "string" ? data.debug : "";
        assistant.status = data?.status ?? res.status;
        assistant.model = typeof data?.model === "string" ? data.model : "";
      }

      setMessages([...next, assistant]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "network error. try again. (if it keeps happening, the api route is failing.)",
          sources: [],
          followups: [],
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return { messages, loading, send };
}
