const Hero = () => {
  return (
    <>
      <div className="pt-[var(--headerH)] min-h-screen z-50 ">
        <div className="flex justify-center translate-y-[-20rem] animate-slideIn">
          <div className="p-8 ">
            <h2 id="hero-heading" className="text-3xl font-bold text-dark-color dark:text-light-color p-8 transition-all duration-300 delay-150 h-[10rem] text-center align-middle">
              Hi, i'm Mike
            </h2>

            <h1 className="text-6xl font-black text-violet-dark dark:text-violet opacity-0 animate-fadeIn3s transition-all duration-300 delay-150">
              Web Developer
            </h1>
          </div>
        </div>
        <div className="absolute translate-y-[12rem] w-full p-4 flex justify-center">
          <p className="opacity-0 first-letter:uppercase text-xl font-bold transition-all delay-150 duration-300 text-center w-full md:w-[80%] lg:w-[75%] animate-fadeIn4s">
            Based in Siedlce, Poland. I like simple, minimalistic designs,
            learning new things and a cup of good coffee.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
