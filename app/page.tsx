


import Landing from "./components/Landing";
import ProjectsShowcase from "./components/ProjectsShowcase";
import About from "./components/About";
import Contact from "./components/Contact";



export default function Home() {
  return (


    <main
      id="up"
      className={`bg-light-color text-dark-color dark:bg-dark-color dark:text-light-color pb-12 flex flex-col`}
    >
      <Landing />
      <ProjectsShowcase />
      <About />
      <Contact />

    </main>

  );
}
