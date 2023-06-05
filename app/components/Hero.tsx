const Hero = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center pt-40 ">
          <div className="flex items-center">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-dark-color dark:text-light-color">
                Hi, i'm Mike
              </h2>
              <h1 className="text-6xl font-black text-violet-dark dark:text-violet ">
                Web Developer
              </h1>
            </div>
            <div className="hidden md:flex border-solid border-l-4 border-dark-color dark:border-light-color p-8">
              <span className="p-2 mx-4 rounded-full block  h-5 w-5 transition-all duration-500 animate-light_toggle1 dark:animate-dark_toggle1 "></span>
              <span className="p-2 mx-4 rounded-full block  h-5 w-5 transition-all duration-500 animate-light_toggle2 dark:animate-dark_toggle2 "></span>
              <span className="p-2 mx-4 rounded-full block  h-5 w-5 transition-all duration-500 animate-light_toggle3 dark:animate-dark_toggle3 "></span>
            </div>
          </div>
          <div className="w-full p-4">
            <p className="first-letter:uppercase text-lg font-bold">short text about me</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Hero;
  