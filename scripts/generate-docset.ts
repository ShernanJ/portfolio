import * as fs from "node:fs";
import * as path from "node:path";
import { EXPERIENCE_ITEMS, type ExperienceItem } from "../data/experiences";
import { PROJECT_ITEMS, type ProjectItem } from "../data/projects";

const ROOT = path.resolve(process.cwd());
const BASE_TEMPLATE = path.join(ROOT, "data", "base-docset.md");
const OUTPUT = path.join(ROOT, "public", "docsets", "shernan.profile.md");

function experienceToMd(item: ExperienceItem): string {
  const lines: string[] = [];

  lines.push(`### ${item.org} — ${item.role}`);
  lines.push("");
  lines.push(item.impact);
  lines.push("");

  for (const b of item.bullets) {
    lines.push(`- ${b}`);
  }

  if (item.more && item.more.length > 0) {
    lines.push("");
    lines.push("more:");
    for (const m of item.more) {
      lines.push(`- ${m}`);
    }
  }

  return lines.join("\n");
}

function projectToMd(item: ProjectItem): string {
  const lines: string[] = [];

  lines.push(`### ${item.name} — ${item.category}`);
  lines.push("");
  lines.push(item.impact);
  lines.push("");

  for (const b of item.bullets) {
    lines.push(`- ${b}`);
  }

  return lines.join("\n");
}

function buildExperiencesSection(): string {
  return EXPERIENCE_ITEMS.map(experienceToMd).join("\n\n");
}

function buildProjectsSection(): string {
  return PROJECT_ITEMS.map(projectToMd).join("\n\n");
}

function main() {
  const template = fs.readFileSync(BASE_TEMPLATE, "utf-8");

  let output = template;
  output = output.replace("{{PROJECTS}}", buildProjectsSection());
  output = output.replace("{{EXPERIENCES}}", buildExperiencesSection());

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, output, "utf-8");

  console.log(`docset generated → ${OUTPUT}`);
}

main();
