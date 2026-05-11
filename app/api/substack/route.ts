import { NextResponse } from "next/server";

const SUBSTACK_FEED = "https://shernanjavier.substack.com/feed";

export const runtime = "nodejs";

export async function GET() {
  try {
    const res = await fetch(SUBSTACK_FEED, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Feed returned ${res.status}`);
    const xml = await res.text();
    const posts = parseFeed(xml);
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json(
      { posts: [], error: "Failed to fetch Substack posts" },
      { status: 500 }
    );
  }
}

function extract(xml: string, tag: string): string {
  const cdata = xml.match(
    new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\/${tag}>`)
  );
  if (cdata) return cdata[1].trim();
  const plain = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\/${tag}>`));
  if (plain) return plain[1].trim();
  return "";
}

function parseFeed(xml: string) {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];
  return items.map((item) => {
    const title = extract(item, "title");
    const link = extract(item, "link");
    const description = extract(item, "description");
    const date = extract(item, "pubDate");
    const enclosure = item.match(/<enclosure[^>]*url="([^"]*)"/);
    const image = enclosure ? enclosure[1] : "";
    return { title, link, image, description, date };
  });
}
