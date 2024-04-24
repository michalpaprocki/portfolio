import Logo from "./static/Logo";
import Burger from "./dynamic/Burger";

const Header = () => {
  return (
    <nav
      id="navbar"
      className="fixed z-50 flex h-header w-full items-center justify-around whitespace-pre-wrap bg-light-color px-10 text-xl text-dark-color shadow-sm shadow-dark-color dark:bg-dark-color dark:text-light-color dark:shadow-light-color md:justify-between"
    >
      <Logo ariaLabel="Go to home page" text="Michał Paprocki" href={"/"} />

      <Burger />
    </nav>
  );
};

export default Header;
