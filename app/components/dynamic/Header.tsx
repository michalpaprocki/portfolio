import Logo from "../static/Logo";
import Burger from "./Burger";
const Header = () => {
  return (
    <nav
      id="navbar"
      className="h-header justify-around fixed shadow-sm shadow-dark-color dark:shadow-light-color bg-light-color dark:bg-dark-color flex md:justify-evenly w-full items-center text-xl z-50 text-dark-color dark:text-light-color whitespace-pre-wrap"
    >
      <Logo ariaLabel="Go to home page" text="Michał Paprocki" href={"/"} />

      <Burger />
    </nav>
  );
};

export default Header;
