const Hero = () => {
    return (
      <>
        <div className="pt-[var(--headerH)] min-h-screen z-50 ">
          <div className="flex justify-center translate-y-[-20rem] animate-slideIn">
            <div className="p-8 ">
              <h2 className="text-2xl font-bold text-dark-color dark:text-light-color">
                Hi, i'm Mike
              </h2>
     
              <h1 className="text-6xl font-black text-violet-dark dark:text-violet opacity-0 animate-fadeIn ">
                Web Developer
              </h1>
            </div>
            <div className="hidden md:flex items-center border-solid border-l-4 border-dark-color dark:border-light-color p-8  opacity-0  animate-fadeIn">
              <span className="p-2 mx-4 rounded-full block  h-5 w-5 transition-all duration-500 animate-light_toggle1 dark:animate-dark_toggle1 "></span>
              <span className="p-2 mx-4 rounded-full block  h-5 w-5 transition-all duration-500 animate-light_toggle2 dark:animate-dark_toggle2 "></span>
              <span className="p-2 mx-4 rounded-full block  h-5 w-5 transition-all duration-500 animate-light_toggle3 dark:animate-dark_toggle3 "></span>
            </div>
          </div>
          <div className="w-full p-4 pt-8 flex justify-center">
            <p className="first-letter:uppercase text-lg font-bold">short text about me</p>
          </div>
        </div>
      </>
    );
  };
  
  export default Hero;
  