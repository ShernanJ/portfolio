declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { CaseStudy } from "@/data/projects";

  export const caseStudy: CaseStudy;

  const MDXContent: ComponentType;
  export default MDXContent;
}
