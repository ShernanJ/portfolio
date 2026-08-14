import { hobbies, raveTimeline } from "@/data/life";

export function LifeSection() {
  return (
    <section className="page-section life-section" id="life">
      <div className="section-kicker">
        <p>Life</p>
        <h2>The non-work stuff that still feels very me.</h2>
      </div>
      <div className="life-grid">
        <div className="life-panel">
          <h3>Hobbies</h3>
          <div className="life-list">
            {hobbies.map((hobby) => (
              <article key={hobby.label}>
                <h4>{hobby.label}</h4>
                <p>{hobby.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="life-panel">
          <h3>Rave timeline</h3>
          <div className="rave-list">
            {raveTimeline.map((event) => (
              <article key={`${event.name}-${event.timing}`}>
                <span data-status={event.status}>{event.timing}</span>
                <p>{event.name}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
