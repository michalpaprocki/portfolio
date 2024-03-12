import Landing from "./components/Landing";

import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main id="up" className={` pb-12 flex flex-col`}>
      <Landing />
      <About />
      <Contact />
    </main>
  );
}
