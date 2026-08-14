import { Footer } from "@/components/footer";
import { Intro } from "@/components/intro";
import { LifeSection } from "@/components/life-section";
import { ProjectList } from "@/components/project-list";
import { SectionNav } from "@/components/section-nav";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "life", label: "Life" },
];

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <SectionNav items={sections} />
        <Intro />
        <ProjectList />
        <LifeSection />
        <Footer />
      </div>
    </main>
  );
}
