
"use client"
import Logo from "../static/Logo";
import Burger from "./Burger";
import Tile from "./Tile";
import DayAndNight from "./DayAndNight";
const Header = () => {
  return (
    <nav
      id="navbar"
      className="h-[var(--headerH)] justify-around fixed shadow-sm shadow-dark-color dark:shadow-light-color bg-light-color dark:bg-dark-color flex md:justify-evenly w-full items-center text-xl z-50 text-dark-color dark:text-light-color"
    >
      <ul className="flex items-center">
        <li className="p-1">
          <a href="#up">
            <Logo text="MP" />
          </a>
        </li>
        <ul className="md:flex hidden">
        <li className="p-1 md:h-auto">
          <Tile
            text="Projects"
            link="#projects"
            darkHoverTextColor="dark:hover:text-dark-color"
            cursor="cursor-pointer"
          />
        </li>
        <li className="p-1 md:h-auto">
          <Tile
            text="About"
            link="#about"
            darkHoverTextColor="dark:hover:text-dark-color"
            cursor="cursor-pointer"
          />
        </li>
        <li className="p-1 md:h-auto">
          <Tile
            text="Contact"
            link="#contact"
            darkHoverTextColor="dark:hover:text-dark-color"
            cursor="cursor-pointer"
          />
        </li>
      </ul>
      <ul className="hidden md:block">
        <li className="p-1">
          <DayAndNight />
        </li>
      </ul>
      </ul>
     <Burger />
    </nav>
  );
};

export default Header;
