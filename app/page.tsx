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
        <section className="p-8 mt-16 grid gap-4 grid-cols-2 items-center w-[80%]">
          <GridItem title="project 1" />
          <GridItem title="project 2" />
          <GridItem title="project 3" />
          <GridItem title="project 4" />
          <GridItem title="project 5" />
          <GridItem title="project 6" />
        </section>
      </main>
      <Footer />
    </>
  );
}
