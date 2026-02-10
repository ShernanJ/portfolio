export function ExperienceSection() {
  return (
    <section className="w-full px-4 md:px-6 py-16">
      <div className="mx-auto w-full max-w-5xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          experience
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          early systems builder
        </h2>
        <p className="max-w-3xl text-sm md:text-base text-muted-foreground">
          i&apos;ve worked as a founding engineer / early systems builder on
          small and stealth teams, shipping the first versions of browser sdks,
          real-time pipelines, and data platforms. i own the stack end-to-end
          and focus on 0→1 systems: defining primitives, building sane
          abstractions, and hardening them under real traffic.
        </p>
      </div>
    </section>
  );
}

