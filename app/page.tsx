import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GridItem from "./components/UI/GridItem";
export default function Home() {
  return (
    <>
      <main className="min-h-[calc(100dvh-10rem)] bg-light-color text-dark-color dark:bg-dark-color dark:text-light-color items-center pb-12">
        <Header />
        <Hero />
        <section className="md:p-16 p-8 mt-16 grid md:gap-8 gap-4 md:grid-cols-2 grid-cols-1 items-center ">
          <GridItem title="Memory Game" image="memory.png" linkApp="https://match-game-olive.vercel.app" linkCode="https://github.com/str4ng3love/match-game"/>
          <GridItem title="Minesweeper Game" image="minesweeper.png" linkApp="https://minesweeper-neon-rho.vercel.app" linkCode="https://github.com/str4ng3love/minesweeper"/>
          <GridItem title="Blogging Site" image="blogga.png" linkApp="https://blogga-v17g.onrender.com" linkCode="https://github.com/str4ng3love/blogga"/>
    
        </section>
      </main>
      <Footer />
    </>
  );
}
