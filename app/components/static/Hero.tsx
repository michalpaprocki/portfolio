const Hero = () => {
  return (
    <>
      <div className="z-50 min-h-screen ">
        <div className="flex translate-y-[-20rem] animate-slideIn justify-center">
          <div className="p-8 ">
            <h2
              id="hero-heading"
              className="z-10 mb-8 p-8 text-center text-3xl font-bold text-dark-color dark:text-light-color"
            >
              Hi, I&apos;m Mike
            </h2>

            <h1 className="animate-fadeIn2s p-4 text-center text-6xl font-black text-violet-dark opacity-0 dark:text-violet">
              Web Developer
            </h1>
          </div>
        </div>
        <div className="absolute z-10 flex w-full translate-y-[12rem] justify-center p-4">
          <p className="w-[90%] animate-fadeIn3s p-4 text-center text-xl font-bold opacity-0 transition-all delay-150 duration-300 first-letter:uppercase  md:w-[60%]">
            I like simple, minimalistic designs, learning new things and a cup
            of good coffee.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
