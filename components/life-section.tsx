import Image from "next/image";
import { lifeItems } from "@/data/life";

function LifeTileContent({ item }: { item: (typeof lifeItems)[number] }) {
  return (
    <>
      {item.image ? (
        <Image
          alt={item.alt ?? item.title}
          className="life-photo"
          fill
          loading="lazy"
          quality={72}
          sizes="(max-width: 760px) 100vw, (max-width: 1120px) 45vw, 25vw"
          src={item.image}
        />
      ) : (
        <div aria-hidden="true" className="life-photo-placeholder" />
      )}
      <div className="life-photo-caption">
        <h3>{item.title}</h3>
        {item.shortDescription ? <p>{item.shortDescription}</p> : null}
      </div>
    </>
  );
}

export function LifeSection() {
  return (
    <section className="page-section life-section" id="life">
      <div className="section-kicker">
        <p>Life</p>
        <h2 className="life-subtitle">
          <span>a glimpse of</span> my sidequests and things i like
        </h2>
      </div>
      <div className="life-masonry">
        {lifeItems.map((item) => {
          const tileStyle = {
            "--life-aspect": item.aspect,
            "--life-background": item.background,
            "--life-position": item.objectPosition ?? "center",
          } as React.CSSProperties;

          return item.isClickable ? (
            <a
              className="life-photo-card"
              href={`/life/${item.slug}`}
              key={item.slug}
              style={tileStyle}
            >
              <LifeTileContent item={item} />
            </a>
          ) : (
            <article className="life-photo-card" key={item.slug} style={tileStyle}>
              <LifeTileContent item={item} />
            </article>
          );
        })}
      </div>
      <p className="life-more">more to come :)</p>
    </section>
  );
}
