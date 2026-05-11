import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { LearningsSection } from "@/components/sections/learnings-section";
import { WritingSection } from "@/components/sections/writing-section";
import { CTASection } from "@/components/ui/hero-dithering-card";
import { SocialLinks } from "@/components/ui/social-links";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex">
      <div className="flex-1 flex flex-col">
        <CTASection />
        <ProjectsSection />
        <ExperienceSection />
        <LearningsSection />
      <WritingSection />
        <footer className="w-full px-4 md:px-6 pb-8">
          <div className="mx-auto w-full max-w-5xl flex items-center justify-between gap-4 border-t border-border/60 pt-4">
            <span className="text-[11px] text-muted-foreground">
              built by shernan javier
            </span>
            <SocialLinks />
          </div>
        </footer>
      </div>
    </main>
  );
}
