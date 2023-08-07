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
      <ul className="flex items-center">
        <li className="p-1">
          
          
            <Logo text="MP" fn={(e)=>ScrollTo("navbar")} />
         
        </li>
      </ul>
      <Burger />
    </nav>
  );
};

export default Header;
