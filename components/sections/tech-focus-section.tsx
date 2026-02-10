export function TechFocusSection() {
  return (
    <section className="w-full px-4 md:px-6 pb-20">
      <div className="mx-auto w-full max-w-5xl space-y-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          tech focus
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          things i think about
        </h2>
        <ul className="mt-2 space-y-2 text-sm md:text-base text-muted-foreground">
          <li>browser execution and runtime interception</li>
          <li>agent-native apis and docset interfaces</li>
          <li>data modeling, ontologies, and schema design</li>
          <li>crawling, rendering, and compilation pipelines for dynamic web</li>
          <li>real-time event collection, streaming, and aggregation</li>
          <li>infra for structured knowledge and retrieval over live systems</li>
          <li>full-stack system design across frontend, backend, and cloud infra</li>
        </ul>
      </div>
    </section>
  );
}

