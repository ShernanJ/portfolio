export type Chunk = {
  id: string;
  title: string;
  content: string;
};

export function chunkMarkdown(md: string): Chunk[] {
  const parts = md.split(/\n## /g);
  const chunks: Chunk[] = [];

  parts.forEach((part, i) => {
    if (i === 0) return;

    const [titleLine, ...rest] = part.split("\n");
    chunks.push({
      id: `chunk-${i}`,
      title: titleLine.trim(),
      content: rest.join("\n").trim(),
    });
  });

  return chunks;
}

function tokenize(text: string) {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

export function searchChunks(
  query: string,
  chunks: Chunk[],
  k = 6
) {
  const q = tokenize(query);

  return chunks
    .map(chunk => {
      const text = `${chunk.title} ${chunk.content}`.toLowerCase();
      let score = 0;

      q.forEach(word => {
        if (text.includes(word)) score += 1;
        if (chunk.title.toLowerCase().includes(word)) score += 2;
      });

      return { chunk, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}
