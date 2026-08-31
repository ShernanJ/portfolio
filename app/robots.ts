import type { MetadataRoute } from "next";
import { seo } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    host: seo.siteUrl,
    rules: {
      allow: "/",
      userAgent: "*",
    },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}
