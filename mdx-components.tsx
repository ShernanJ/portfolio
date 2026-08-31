import type { MDXComponents } from "mdx/types";
import {
  CaseImage,
  CaseSection,
  CaseVideoEmbed,
} from "@/components/case-study-mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    CaseImage,
    CaseSection,
    CaseVideoEmbed,
    img: ({ alt = "", src }) => (
      <CaseImage alt={alt} src={typeof src === "string" ? src : ""} />
    ),
    ...components,
  };
}
