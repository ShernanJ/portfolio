"use client";

import { useState } from "react";

import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { TechFocusSection } from "@/components/sections/tech-focus-section";
import { CTASection } from "@/components/ui/hero-dithering-card";
import { ChatShell } from "@/components/ui/chat-shell";
import { SocialLinks } from "@/components/ui/social-links";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground flex">
      <div className="flex-1 flex flex-col">
        <CTASection onOpenChat={() => setIsChatOpen(true)} />
        <ProjectsSection />
        <ExperienceSection />
        <TechFocusSection />
        <footer className="w-full px-4 md:px-6 pb-8">
          <div className="mx-auto w-full max-w-5xl flex items-center justify-between gap-4 border-t border-border/60 pt-4">
            <span className="text-[11px] text-muted-foreground">
              built by shernan javier
            </span>
            <SocialLinks />
          </div>
        </footer>
      </div>
      <ChatShell open={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  );
}
