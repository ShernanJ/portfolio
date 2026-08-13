import { Footer } from "@/components/footer";
import { Intro } from "@/components/intro";
import { ProjectList } from "@/components/project-list";

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <Intro />
        <ProjectList />
        <Footer />
      </div>
    </main>
  );
}
