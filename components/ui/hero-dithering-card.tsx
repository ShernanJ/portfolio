"use client";

import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";
import { HeroAvatar } from "@/components/ui/hero-avatar";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  }))
);

type CTASectionProps = {
  onOpenChat?: () => void;
};

export function CTASection({ onOpenChat }: CTASectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-border bg-card shadow-sm min-h-[600px] md:min-h-[600px] flex flex-col items-center justify-center duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-25 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen">
              <Dithering
                colorBack="#0B1220"
                colorFront="#6EA8FF"
                shape="warp"
                type="8x8"
                size={2}
                speed={isHovered ? 0.3 : 0.1}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-10 flex w-full flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-8">
              <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
                <a
                  href="/shernan_javier_resume.pdf"
                  target="_blank"
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm cursor-pointer transition-colors duration-150 hover:bg-primary/10 hover:border-primary/40"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5FA8FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  open for work
                </a>

                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6 leading-[1.05]">
                  shernan javier
                </h2>

                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-0 md:mb-2 leading-relaxed">
                  building systems that turn messy, live signals into structured
                  knowledge.
                  <br />
                  infra, abstraction, and browser tools for humans + agents
                  to reason over.
                </p>
              </div>

              <div className="order-1 md:order-2 md:translate-y-1">
                <HeroAvatar
                  src="/me.jpg"
                  alt="shernan javier"
                  badgeSrc="/badges/cansbridge.jpg"
                  badgeAlt="cansbridge scholars"
                />
              </div>
            </div>

            <button
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-12 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20 cursor-pointer"
              onClick={onOpenChat}
              type="button"
            >
              <span className="relative z-10">ask the system</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              or{" "}
              <a
                href="mailto:shernanjavier@gmail.com"
                className="underline-offset-4 hover:underline cursor-pointer"
              >
                contact me directly
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

