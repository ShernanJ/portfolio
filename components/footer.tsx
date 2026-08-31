import { site } from "@/data/site";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  return (
    <footer className="footer">
      <SocialLinks links={site.links.filter((link) => link.label !== "X")} />
      <p>&copy; {site.name}</p>
    </footer>
  );
}
