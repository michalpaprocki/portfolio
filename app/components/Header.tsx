"use client";
import Link from "next/link";
import DayAndNight from "./DayAndNight";
import Tile from "./UI/Tile";
import Logo from "./UI/Logo";

const Header = () => {
  return (
    <nav
      id="navbar"
      className="fixed shadow-sm shadow-dark-color dark:shadow-light-color bg-light-color dark:bg-dark-color flex justify-evenly min-w-full items-center p-6 max-h-fit text-xl z-50"
    >
      <ul className="flex items-center">
        <li className="p-1">
          <Link href={"#"}>
            <Logo text="MP" />
          </Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="p-1">
          <Tile text="Projects" />
        </li>
        <li className="p-1">
          <Tile text="About" />
        </li>
        <li className="p-1">
          <Tile text="Contact" />
        </li>
      </ul>
      <ul>
        <li className="p-1">
          <DayAndNight />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
