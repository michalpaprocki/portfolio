"use client";
import Tile from "./Tile";
import DayAndNight from "./DayAndNight";
import { useState } from "react";

const Burger = () => {
  const [isOpen, setOpen] = useState(false);
  const [animation, setAnimation] = useState("");
  const animate = async (ms: number) => {
    if (isOpen) {
      setAnimation("animate-fadeOut01s");
      await new Promise((r) => setTimeout(r, ms));
      document.body.classList.remove("overflow-y-hidden");

      setOpen(false);
    } else {
      setAnimation("animate-fadeIn01s");
      await new Promise((r) => setTimeout(r, ms));
      document.body.classList.add("overflow-y-hidden");

      setOpen(true);
    }
  };
  return (
    <>
      <ul className="hidden md:flex">
        {/* <li className="p-1 md:h-auto">
          <Tile
            ariaLabel="got to projects"
            title="Projects"
            text="Projects"
            link="/projects"
            darkHoverTextColor="dark:hover:text-dark-color"
            cursor="cursor-pointer"
          />
        </li>
        <li className="p-1 md:h-auto">
          <Tile
            ariaLabel="go to blog page"
            title="Blog"
            text="Blog"
            link="/blog"
            darkHoverTextColor="dark:hover:text-dark-color"
            cursor="cursor-pointer"
          />
        </li> */}
        <li className="p-1 md:h-auto">
          <Tile
            ariaLabel="go to snippets page"
            title="Snippets"
            text="Snippets"
            link="/snippets"
            darkHoverTextColor="dark:hover:text-dark-color"
            cursor="cursor-pointer"
          />
        </li>
        <li className="hidden p-1 md:block">
          <DayAndNight />
        </li>
      </ul>

      <button
        aria-label="open or close burger menu"
        onClick={(e) => animate(200)}
        className="z-10 flex cursor-pointer flex-col gap-1 p-2 hover:outline-1 focus:outline-dark-color focus:dark:outline-light-color md:hidden"
      >
        <span
          className={`${
            isOpen
              ? "translate-y-2 rotate-45 bg-light-color"
              : "rotate-0 bg-dark-color"
          } h-1 w-8 transition dark:bg-light-color`}
        ></span>
        <span
          className={`${
            isOpen ? "bg-light-color opacity-0" : "bg-dark-color opacity-100"
          } h-1 w-8 transition dark:bg-light-color`}
        ></span>
        <span
          className={`${
            isOpen
              ? "-translate-y-2 -rotate-45 bg-light-color"
              : "rotate-0 bg-dark-color"
          } h-1 w-8 transition dark:bg-light-color`}
        ></span>
      </button>
      {isOpen ? (
        <>
          <div
            className={`absolute top-0 w-full bg-dark-a80 opacity-0 backdrop-blur-sm dark:bg-violet-a80 md:hidden ${animation}`}
          >
            <ul className=" flex min-h-screen flex-col items-center justify-evenly">
              <li className=" bg-light-color dark:bg-dark-color">
                <DayAndNight />
              </li>
              <li>
                <Tile
                  ariaLabel="go to top of the page"
                  title="go to top"
                  text="MP"
                  link="/"
                  fn={(e) => setOpen(false)}
                  hoverBgColor="hover:bg-violet"
                  hoverShadowColor="hover:shadow-link-violet"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  cursor="cursor-pointer"
                />
              </li>
              {/* <li className=" bg-light-color dark:bg-dark-color">
                <Tile
                  ariaLabel="go to projects page"
                  title="Projects"
                  text="Projects"
                  link="/projects"
                  fn={(e) => setOpen(false)}
                  hoverBgColor="hover:bg-violet"
                  hoverShadowColor="hover:shadow-link-violet"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  cursor="cursor-pointer"
                />
              </li>
              <li className=" bg-light-color dark:bg-dark-color">
                <Tile
                  ariaLabel="go to blog page"
                  title="blog"
                  text="blog"
                  link="/blog"
                  fn={(e) => setOpen(false)}
                  hoverBgColor="hover:bg-violet"
                  hoverShadowColor="hover:shadow-link-violet"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  cursor="cursor-pointer"
                />
              </li> */}
              <li className=" bg-light-color dark:bg-dark-color">
                <Tile
                  ariaLabel="go to snippets page"
                  title="Snippets"
                  text="Snippets"
                  link="/snippets"
                  fn={(e) => setOpen(false)}
                  hoverBgColor="hover:bg-violet"
                  hoverShadowColor="hover:shadow-link-violet"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  cursor="cursor-pointer"
                />
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Burger;
