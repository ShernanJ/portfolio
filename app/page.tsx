import { Intro } from "@/components/intro";
import { LifeSection } from "@/components/life-section";
import { PageShell } from "@/components/page-shell";
import { ProjectList } from "@/components/project-list";

const sections = [
  { href: "/", id: "intro", label: "Intro", scrollToTop: true },
  { id: "work", label: "Work" },
  { id: "life", label: "Life" },
];

export default function Home() {
  return (
    <main>
      <PageShell className="site-shell" navItems={sections}>
        <Intro />
        <ProjectList />
        <LifeSection />
      </PageShell>
    </main>
  );
}
