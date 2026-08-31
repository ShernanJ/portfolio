import type { MetadataRoute } from "next";
import { getCaseStudySlugs } from "@/content/work";
import { getLifeItemSlugs } from "@/data/life";
import { seo } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    {
      url: seo.siteUrl,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...getCaseStudySlugs().map((slug) => ({
      url: `${seo.siteUrl}/work/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getLifeItemSlugs().map((slug) => ({
      url: `${seo.siteUrl}/life/${slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];

  return routes;
}
