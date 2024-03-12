"use client";
import ScrollTo from "@/helper/ScrollTo";
import Logo from "../static/Logo";
import Burger from "./Burger";
const Header = () => {
  return (
    <nav
      id="navbar"
      className="h-[var(--headerH)] justify-around fixed shadow-sm shadow-dark-color dark:shadow-light-color bg-light-color dark:bg-dark-color flex md:justify-evenly w-full items-center text-xl z-50 text-dark-color dark:text-light-color"
    >
      <Logo
        ariaLabel="Go to home page"
        text="MP"
        fn={(e) => ScrollTo("navbar")}
      />

      <Burger />
    </nav>
  );
};

export default Header;
