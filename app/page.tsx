"use client";

import { useState } from "react";

import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { TechFocusSection } from "@/components/sections/tech-focus-section";
import { CTASection } from "@/components/ui/hero-dithering-card";
import { ChatShell } from "@/components/ui/chat-shell";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground flex">
      <div className="flex-1">
        <CTASection onOpenChat={() => setIsChatOpen(true)} />
        <ProjectsSection />
        <ExperienceSection />
        <TechFocusSection />
      </div>
      <ChatShell open={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  );
}
