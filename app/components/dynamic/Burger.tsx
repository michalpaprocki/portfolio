"use client";
import Tile from "./Tile";
import DayAndNight from "./DayAndNight";
import { useState } from "react";
import useLink from "@/hooks/useLink";

const Burger = () => {
  const [isOpen, setOpen] = useState(false);
  const [animation, setAnimation] = useState("");

  const animate = async (ms: number) => {
    if (isOpen) {
      setAnimation("animate-fadeOut01s");
      await new Promise((r) => setTimeout(r, ms));
      setOpen(!isOpen);
    } else {
      setAnimation("animate-fadeIn01s");
      await new Promise((r) => setTimeout(r, ms));
      setOpen(!isOpen);
    }
  };
  return (
    <>
      <ul className="md:flex hidden">
        <li className="p-1 md:h-auto">
          <Tile
            text="Projects"
            fn={(e) => useLink("projects")}
            darkHoverTextColor="dark:hover:text-dark-color"
            cursor="cursor-pointer"
          />
        </li>
        <li className="p-1 md:h-auto">
          <Tile
            text="About"
            fn={(e) => useLink("about")}
            darkHoverTextColor="dark:hover:text-dark-color"
            cursor="cursor-pointer"
          />
        </li>
        <li className="p-1 md:h-auto">
          <Tile
            text="Contact"
            fn={(e) => useLink("contact")}
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
      <div
        onClick={(e) => {
          animate(100);
          if (!isOpen) {
            e.currentTarget.children[0].classList.remove(
              "animate-normalize_upper_burger"
            );
            e.currentTarget.children[0].classList.add("animate-burger_up");
            e.currentTarget.children[1].classList.remove(
              "animate-normalize_mid_burger"
            );
            e.currentTarget.children[1].classList.add("animate-burger_mid");
            e.currentTarget.children[2].classList.remove(
              "animate-normalize_lower_burger"
            );
            e.currentTarget.children[2].classList.add("animate-burger_down");
          } else {
            e.currentTarget.children[0].classList.remove("animate-burger_up");
            e.currentTarget.children[0].classList.add(
              "animate-normalize_upper_burger"
            );
            e.currentTarget.children[1].classList.remove("animate-burger_mid");
            e.currentTarget.children[1].classList.add(
              "animate-normalize_mid_burger"
            );
            e.currentTarget.children[2].classList.remove("animate-burger_down");
            e.currentTarget.children[2].classList.add(
              "animate-normalize_lower_burger"
            );
          }
        }}
        className="md:hidden cursor-pointer"
      >
        <span className="border-b-4 border-solid border-[var(--dark)] dark:border-[var(--light)] h-[1rem] w-[3rem] block"></span>
        <span className="border-b-4 border-solid border-[var(--dark)] dark:border-[var(--light)] h-[1rem] w-[3rem] block "></span>
        <span className="border-b-4 border-solid border-[var(--dark)] dark:border-[var(--light)] h-[1rem] w-[3rem] block "></span>
      </div>
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
                  text="MP"
                  fn={(e) => useLink("navbar")}
                  hoverBgColor="hover:bg-violet"
                  hoverShadowColor="hover:shadow-link-violet"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  cursor="cursor-pointer"
                />
              </li>
              <li className=" dark:bg-dark-color bg-light-color">
                <Tile
                  text="Projects"
                  fn={(e) => {
                    useLink("projects");
                  }}
                  hoverBgColor="hover:bg-violet"
                  hoverShadowColor="hover:shadow-link-violet"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  cursor="cursor-pointer"
                />
              </li>
              <li className=" dark:bg-dark-color bg-light-color">
                <Tile
                  text="About"
                  fn={(e) => useLink("about")}
                  hoverBgColor="hover:bg-violet"
                  hoverShadowColor="hover:shadow-link-violet"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  cursor="cursor-pointer"
                />
              </li>
              <li className=" dark:bg-dark-color bg-light-color">
                <Tile
                  text="Contact"
                  fn={(e) => useLink("contact")}
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
