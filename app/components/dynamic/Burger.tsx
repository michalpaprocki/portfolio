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
      <ul className="md:flex hidden">
        <li className="p-1 md:h-auto">
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
        </li>
      </ul>
      <ul className="hidden md:block">
        <li className="p-1">
          <DayAndNight />
        </li>
      </ul>

      <button
        aria-label="open or close burger menu"
        onClick={(e) => animate(200)}
        className="md:hidden p-2 z-10 cursor-pointer flex flex-col gap-1 hover:outline-1 focus:outline-dark-color focus:dark:outline-light-color"
      >
        <span
          className={`${
            isOpen
              ? "rotate-45 translate-y-2 bg-light-color"
              : "rotate-0 bg-dark-color"
          } dark:bg-light-color h-1 w-8 transition`}
        ></span>
        <span
          className={`${
            isOpen ? "opacity-0 bg-light-color" : "opacity-100 bg-dark-color"
          } dark:bg-light-color h-1 w-8 transition`}
        ></span>
        <span
          className={`${
            isOpen
              ? "-rotate-45 -translate-y-2 bg-light-color"
              : "rotate-0 bg-dark-color"
          } dark:bg-light-color h-1 w-8 transition`}
        ></span>
      </button>
      {isOpen ? (
        <>
          <div
            className={`md:hidden opacity-0 absolute top-0 w-full backdrop-blur-sm bg-dark-a80 dark:bg-violet-a80 ${animation}`}
          >
            <ul className=" min-h-screen flex flex-col items-center justify-evenly">
              <li className=" dark:bg-dark-color bg-light-color">
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
              <li className=" dark:bg-dark-color bg-light-color">
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
              <li className=" dark:bg-dark-color bg-light-color">
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
