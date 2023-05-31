import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GridItem from "./components/UI/GridItem";
export default function Home() {
  return (
    <>
      <main className="min-h-[calc(100dvh-10rem)] bg-light-color text-dark-color dark:bg-dark-color dark:text-light-color items-center flex flex-col">
        <Header />
        <Hero />
        <section className="p-8 mt-16 grid gap-4 md:grid-cols-2 grid-cols-1 items-center md:w-[80%] w-[90%]">
          <GridItem title="Memory Game" image="memory.png" />
          <GridItem title="Minesweeper Game" image="minesweeper.png" />
          <GridItem title="Blogging Site" image="blogga.png"/>
    
        </section>
      </main>
      <Footer />
    </>
  );
}
