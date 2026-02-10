// lib/retrieval.ts

export type Chunk = {
  id: string;
  title: string;
  content: string;
};

// splits markdown into chunks by headings level 2+ (##, ###, ####...)
// note: the first section before the first "##" is intentionally ignored
export function chunkMarkdown(md: string): Chunk[] {
  const parts = md.split(/\n###+\s/g);
  const chunks: Chunk[] = [];

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const [titleLine, ...rest] = part.split("\n");

    const title = (titleLine ?? "").trim();
    const content = rest.join("\n").trim();

    if (!title && !content) continue;

    chunks.push({
      id: `chunk-${i}`,
      title: title || "untitled",
      content,
    });
  }

  return chunks;
}

function rewriteQuery(query: string, topic: string | null) {
  if (!topic) return query;

  const q = query.toLowerCase().trim();

  // vague followups
  if (
    q === "what did i do for it?" ||
    q === "what did you do?" ||
    q === "what was your role?" ||
    q === "tell me more" ||
    q === "what did that involve?"
  ) {
    return `what did i do for ${topic}`;
  }

  return query;
}


function tokenize(text: string) {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

// simple lexical retrieval:
// - exact token matches (avoids substring weirdness)
// - title token matches are boosted
// - small phrase boost when the full query appears in a chunk
export function searchChunks(query: string, chunks: Chunk[], k = 6) {
  const qTokens = tokenize(query);
  const qSet = new Set(qTokens);
  const qLower = query.toLowerCase().trim();

  return chunks
    .map((chunk) => {
      const titleTokens = tokenize(chunk.title);
      const bodyTokens = tokenize(chunk.content);

      const tokenSet = new Set<string>([...titleTokens, ...bodyTokens]);

      let score = 0;

      // exact token matches
      for (const t of qSet) {
        if (tokenSet.has(t)) score += 1;
        if (titleTokens.includes(t)) score += 2;
      }

      // phrase boost (helps for things like "meraki cohort" or "ikigai project")
      if (qLower.length >= 6) {
        const chunkText = `${chunk.title}\n${chunk.content}`.toLowerCase();
        if (chunkText.includes(qLower)) score += 3;
      }

      return { chunk, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}
