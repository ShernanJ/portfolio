"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

export type SectionNavItem = {
  href?: string;
  id: string;
  label: string;
  scrollToTop?: boolean;
};

type SectionNavProps = {
  backItem?: {
    href: string;
    label: string;
  };
  items: SectionNavItem[];
};

export function SectionNav({ backItem, items }: SectionNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const manualSelectionUntil = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const updateActiveSection = useRef(() => {});
  const scrollOffset = 42;

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (Date.now() < manualSelectionUntil.current) {
        return;
      }

      const activationOffset = Math.min(
        Math.max(window.innerHeight * 0.5, 240),
        520,
      );
      const marker = window.scrollY + activationOffset;
      const scrollBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      let nextActiveId = items[0]?.id ?? "";

      if (window.scrollY <= scrollOffset) {
        setActiveId(nextActiveId);
        return;
      }

      if (scrollBottom >= documentHeight - 8) {
        const lastExistingItem = [...items]
          .reverse()
          .find((item) => document.getElementById(item.id));

        if (lastExistingItem) {
          setActiveId(lastExistingItem.id);
          return;
        }
      }

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

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav
      aria-label="Page sections"
      className={`section-nav${isMenuOpen ? " is-open" : ""}`}
      ref={navRef}
    >
      <button
        aria-controls={menuId}
        aria-expanded={isMenuOpen}
        aria-label="Toggle page navigation"
        className="section-nav-toggle"
        onClick={() => setIsMenuOpen((current) => !current)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <div className="section-nav-panel" id={menuId}>
        {backItem ? (
          <Link
            className="section-nav-back"
            href={backItem.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {backItem.label}
          </Link>
        ) : null}
        <div className="section-nav-primary">
          {items.map((item) => (
            <a
              aria-current={activeId === item.id ? "location" : undefined}
              href={item.href ?? `#${item.id}`}
              key={item.id}
              onClick={(event) => {
                const element = document.getElementById(item.id);

                event.preventDefault();
                setIsMenuOpen(false);
                manualSelectionUntil.current = Date.now() + 900;
                setActiveId(item.id);

                if (item.scrollToTop) {
                  window.history.pushState(null, "", item.href ?? "/");
                  window.scrollTo({ behavior: "smooth", top: 0 });
                  window.setTimeout(() => updateActiveSection.current(), 950);
                  return;
                }

                if (!element) {
                  return;
                }

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
      </div>
    </nav>
  );
}
