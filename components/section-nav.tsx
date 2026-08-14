"use client";

import { useEffect, useRef, useState } from "react";

export type SectionNavItem = {
  id: string;
  label: string;
};

type SectionNavProps = {
  items: SectionNavItem[];
};

export function SectionNav({ items }: SectionNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const manualSelectionUntil = useRef(0);
  const updateActiveSection = useRef(() => {});
  const scrollOffset = 42;

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (Date.now() < manualSelectionUntil.current) {
        return;
      }

      const marker = window.scrollY + 170;
      let nextActiveId = items[0]?.id ?? "";

      for (const item of items) {
        const element = document.getElementById(item.id);

        if (!element) {
          continue;
        }

        const sectionTop = element.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= marker) {
          nextActiveId = item.id;
        }
      }

      setActiveId(nextActiveId);
    };

    const queueUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    updateActiveSection.current = update;
    update();

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [items]);

  return (
    <nav aria-label="Page sections" className="section-nav">
      <div className="section-nav-primary">
        {items.map((item) => (
          <a
            aria-current={activeId === item.id ? "location" : undefined}
            href={`#${item.id}`}
            key={item.id}
            onClick={(event) => {
              const element = document.getElementById(item.id);

              if (!element) {
                return;
              }

              event.preventDefault();
              manualSelectionUntil.current = Date.now() + 900;
              setActiveId(item.id);
              window.history.pushState(null, "", `#${item.id}`);
              window.scrollTo({
                behavior: "smooth",
                top:
                  element.getBoundingClientRect().top +
                  window.scrollY -
                  scrollOffset,
              });
              window.setTimeout(() => updateActiveSection.current(), 950);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
