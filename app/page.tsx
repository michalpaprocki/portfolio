import Landing from "./components/Landing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main id="up" className={` pb-12 flex flex-col`}>
      <Landing />
      <Contact />
    </main>
  );
}
