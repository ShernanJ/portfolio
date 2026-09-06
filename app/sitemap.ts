import type { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/content/work";
import { getLifeItemSlugs } from "@/data/life";
import { seo } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seo.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getCaseStudySlugs().map((slug) => ({
      url: `${seo.siteUrl}/work/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getLifeItemSlugs().map((slug) => ({
      url: `${seo.siteUrl}/life/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}