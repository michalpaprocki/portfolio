"use client";
import { BsFiletypePdf } from "react-icons/bs";
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
      setOpen(false);
    } else {
      setAnimation("animate-fadeIn01s");
      await new Promise((r) => setTimeout(r, ms));
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
            fn={(e) => ScrollTo("projects")}
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
      <div className="flex justify-center p-4 whitespace-pre-wrap items-center text-xl font-semibold">
        <div className="bg-black rounded-md text-light-color shadow-md shadow-dark-color dark:ring-violet-a40 dark:ring-2 dark:ring-inset">
          <a
            href="/files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 gap-4 hover:text-violet transition-all text-sm"
          >
            <p className="hidden lg:block">Download my resume</p>
            <p className="block lg:hidden">Resume</p>
            <BsFiletypePdf size={"2em"} />
          </a>
        </div>
      </div>
      <button
        aria-label="open or close burger menu"
        onClick={(e) => animate(200)}
        className="md:hidden cursor-pointer flex flex-col gap-1 hover:outline-1 focus:outline-dark-color focus:dark:outline-light-color"
      >
        <span
          className={`${
            isOpen ? "rotate-45 translate-y-3" : "rotate-0"
          } bg-dark-color dark:bg-light-color h-2 w-8 transition`}
        ></span>
        <span
          className={`${
            isOpen ? "opacity-0" : "opacity-100"
          } bg-dark-color dark:bg-light-color h-2 w-8 transition`}
        ></span>
        <span
          className={`${
            isOpen ? "-rotate-45 -translate-y-3" : "rotate-0"
          } bg-dark-color dark:bg-light-color h-2 w-8 transition`}
        ></span>
      </button>
      {isOpen ? (
        <>
          <div
            className={`md:hidden opacity-0 absolute top-0 translate-y-[var(--headerH)] w-full backdrop-blur-sm bg-dark-a80 dark:bg-violet-a80 ${animation}`}
          >
            <ul className=" min-h-[calc(100dvh-var(--headerH))] flex flex-col items-center justify-evenly">
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
                  fn={(e) => {
                    ScrollTo("projects");
                  }}
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
