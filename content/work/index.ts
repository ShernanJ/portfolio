import type { ComponentType } from "react";
import type { CaseStudy } from "@/data/projects";
import AiPhoneAgent, {
  caseStudy as aiPhoneAgentCaseStudy,
} from "@/content/work/ai-phone-agent.mdx";
import BehaviouralIntelligence, {
  caseStudy as behaviouralIntelligenceCaseStudy,
} from "@/content/work/behavioural-intelligence.mdx";
import CloverLabs, {
  caseStudy as cloverLabsCaseStudy,
} from "@/content/work/clover-labs.mdx";
import CreatorGraph, {
  caseStudy as creatorGraphCaseStudy,
} from "@/content/work/creatorgraph.mdx";
import ENSight, {
  caseStudy as ensightCaseStudy,
} from "@/content/work/ensight.mdx";
import MerchMe, {
  caseStudy as merchMeCaseStudy,
} from "@/content/work/merchme.mdx";
import Taplytics, {
  caseStudy as taplyticsCaseStudy,
} from "@/content/work/taplytics-marketing-refresh.mdx";
import TdBank, {
  caseStudy as tdBankCaseStudy,
} from "@/content/work/td-bank.mdx";
import Wya, { caseStudy as wyaCaseStudy } from "@/content/work/wya.mdx";
import Xpo, { caseStudy as xpoCaseStudy } from "@/content/work/xpo.mdx";

type CaseStudyContent = {
  caseStudy: CaseStudy;
  Content: ComponentType;
};

const caseStudies: Record<string, CaseStudyContent> = {
  "ai-phone-agent": {
    caseStudy: aiPhoneAgentCaseStudy,
    Content: AiPhoneAgent,
  },
  "behavioural-intelligence": {
    caseStudy: behaviouralIntelligenceCaseStudy,
    Content: BehaviouralIntelligence,
  },
  "clover-labs": {
    caseStudy: cloverLabsCaseStudy,
    Content: CloverLabs,
  },
  creatorgraph: {
    caseStudy: creatorGraphCaseStudy,
    Content: CreatorGraph,
  },
  ensight: {
    caseStudy: ensightCaseStudy,
    Content: ENSight,
  },
  merchme: {
    caseStudy: merchMeCaseStudy,
    Content: MerchMe,
  },
  "taplytics-marketing-refresh": {
    caseStudy: taplyticsCaseStudy,
    Content: Taplytics,
  },
  "td-bank": {
    caseStudy: tdBankCaseStudy,
    Content: TdBank,
  },
  wya: {
    caseStudy: wyaCaseStudy,
    Content: Wya,
  },
  xpo: {
    caseStudy: xpoCaseStudy,
    Content: Xpo,
  },
};

export function getCaseStudy(slug: string) {
  return caseStudies[slug];
}

export function getCaseStudySlugs() {
  return Object.keys(caseStudies);
}
