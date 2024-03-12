"use client";
import Tile from "./Tile";
import DayAndNight from "./DayAndNight";
import { useState } from "react";
import ScrollTo from "@/helper/ScrollTo";

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
            ariaLabel="go to about page"
            title="About"
            text="About"
            fn={(e) => ScrollTo("about")}
            darkHoverTextColor="dark:hover:text-dark-color"
            cursor="cursor-pointer"
          />
        </li>
        <li className="p-1 md:h-auto">
          <Tile
            ariaLabel="go to contact page"
            title="contact"
            text="Contact"
            fn={(e) => ScrollTo("contact")}
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
      <div className="flex justify-center p-4 whitespace-pre-wrap items-center text-xl font-semibold"></div>
      <button
        aria-label="open or close burger menu"
        onClick={(e) => animate(200)}
        className="md:hidden z-10 cursor-pointer flex flex-col gap-1 hover:outline-1 focus:outline-dark-color focus:dark:outline-light-color"
      >
        <span
          className={`${
            isOpen ? "rotate-45 translate-y-2" : "rotate-0"
          } bg-dark-color dark:bg-light-color h-1 w-8 transition`}
        ></span>
        <span
          className={`${
            isOpen ? "opacity-0" : "opacity-100"
          } bg-dark-color dark:bg-light-color h-1 w-8 transition`}
        ></span>
        <span
          className={`${
            isOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
          } bg-dark-color dark:bg-light-color h-1 w-8 transition`}
        ></span>
      </button>
      {isOpen ? (
        <>
          <div
            className={`md:hidden opacity-0 absolute top-0 translate-y-[var(--headerH)] w-full backdrop-blur-sm bg-dark-a80 dark:bg-violet-a80 ${animation}`}
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
                  fn={(e) => ScrollTo("navbar")}
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
                  hoverBgColor="hover:bg-violet"
                  hoverShadowColor="hover:shadow-link-violet"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  cursor="cursor-pointer"
                />
              </li>
              <li className=" dark:bg-dark-color bg-light-color">
                <Tile
                  ariaLabel="go to about page"
                  title="About"
                  text="About"
                  fn={(e) => ScrollTo("about")}
                  hoverBgColor="hover:bg-violet"
                  hoverShadowColor="hover:shadow-link-violet"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  cursor="cursor-pointer"
                />
              </li>
              <li className=" dark:bg-dark-color bg-light-color">
                <Tile
                  text="Contact"
                  ariaLabel="go to contact page"
                  title="Contact"
                  fn={(e) => ScrollTo("contact")}
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
