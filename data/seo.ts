export const seo = {
  siteName: "Shernan Javier",
  siteUrl: "https://shernanjavier.com",
  description:
    "Software engineer in Toronto building products, creative tools, and web experiences.",
  twitterHandle: "@shernanjavier",
  ogImage: {
    alt: "Shernan Javier portfolio preview.",
    height: 630,
    url: "/og-image.png",
    width: 1200,
  },
  keywords: [
    "Shernan Javier",
    "software engineer",
    "Toronto software engineer",
    "frontend engineer",
    "full-stack engineer",
    "Next.js developer",
    "React developer",
    "portfolio",
  ],
};

export function toMetaDescription(description: string) {
  const normalized = description.replace(/\s+/g, " ").trim();

  if (normalized.length <= 155) {
    return normalized;
  }

  return `${normalized.slice(0, 152).replace(/\s+\S*$/, "")}...`;
}
