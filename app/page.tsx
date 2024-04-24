import Landing from "./components/Landing";
import Contact from "./components/Contact";
import ProjectsShowcase from "./components/ProjectsShowcase";

export default function Home() {
  return (
    <main id="up" className={` flex flex-col pb-12`}>
      <Landing />
      <ProjectsShowcase />
      <Contact />
    </main>
  );
}
