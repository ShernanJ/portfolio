import type { SiteLink } from "@/data/site";

type SocialLinksProps = {
  links: SiteLink[];
  className?: string;
};

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className={className}>
      <ul className="link-row">
        {links.map((link) => (
          <li key={link.label}>
            <a
              aria-disabled={link.placeholder ? "true" : undefined}
              className="text-link"
              href={link.href}
              rel={link.external ? "noreferrer" : undefined}
              target={link.external ? "_blank" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
