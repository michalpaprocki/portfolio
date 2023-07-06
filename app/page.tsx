import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GridItem from "./components/UI/GridItem";

import {
  SiVercel,
  SiRender,
  SiExpress,
  SiPlanetscale,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100dvh-10rem)] bg-light-color text-dark-color dark:bg-dark-color dark:text-light-color items-center pb-12 flex flex-col">
        <Hero />
        <section className="md:p-16 p-8 mt-16 grid md:gap-8 gap-4 xl:grid-cols-2 grid-cols-1 items-center md:w-[80%] w-full">
          <GridItem
            description="Simple Pokemon themed memory game made with React, TypeScript and TailwindCSS. "
            title="Memory Game"
            image="memory.png"
            linkApp="https://match-game-olive.vercel.app"
            linkCode="https://github.com/str4ng3love/match-game"
            icons={[{ icon: SiReact, title: "React" }, {icon:SiTypescript, title: "Typescript"}, {
              icon:SiTailwindcss, title:"Tailwind CSS"
            }]}
          />
          <GridItem
            description="Classic Minesweeper. Written with React, TypeScript and TailwindCSS. "
            title="Minesweeper Game"
            image="minesweeper.png"
            linkApp="https://minesweeper-neon-rho.vercel.app"
            linkCode="https://github.com/str4ng3love/minesweeper"
            icons={[{ icon: SiReact, title: "React" }, {icon:SiTypescript, title: "Typescript"}, {
              icon:SiTailwindcss, title:"Tailwind CSS"
            }]}
          />
          <GridItem
            description="Blogging site in plain Javascipt. Backend running on Express/EJS with MongoDB."
            title="Blogging Site"
            image="blogga.png"
            linkApp="https://blogga-v17g.onrender.com"
            linkCode="https://github.com/str4ng3love/blogga"
            icons={[{ icon: SiExpress, title: "Express" }, {icon:SiJavascript, title: "Javascript"}, {
              icon:SiMongodb, title:"MongoDB"
            }]}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
