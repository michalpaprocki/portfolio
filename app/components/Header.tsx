
import Link from "next/link";
import Logo from "./UI/Logo";
import Burger from "./UI/Burger";

const Header = () => {
  return (
    <nav
      id="navbar"
      className="h-[var(--headerH)] justify-around fixed shadow-sm shadow-dark-color dark:shadow-light-color bg-light-color dark:bg-dark-color flex md:justify-evenly w-full items-center text-xl z-50"
    >
      <ul className="flex items-center">
        <li className="p-1">
          <Link href={"#"}>
            <Logo text="MP" />
          </Link>
        </li>
      </ul>
     <Burger />
    </nav>
  );
};

export default Header;
