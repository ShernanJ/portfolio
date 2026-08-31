import { Footer } from "@/components/footer";
import { SectionNav } from "@/components/section-nav";
import type { SectionNavItem } from "@/components/section-nav";

type PageShellProps = {
  backItem?: {
    href: string;
    label: string;
  };
  children: React.ReactNode;
  className: string;
  navItems: SectionNavItem[];
};

export function PageShell({
  backItem,
  children,
  className,
  navItems,
}: PageShellProps) {
  return (
    <div className={className}>
      <SectionNav backItem={backItem} items={navItems} />
      {children}
      <Footer />
    </div>
  );
}
