"use client";
import Tile from "./Tile";
import DayAndNight from "./DayAndNight";
import { useState } from "react";
import Logo from "../static/Logo";
const Burger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ul className="md:flex hidden">
        <li className="p-1 md:h-auto">
          <Tile text="Projects" link="#projects"/>
        </li>
        <li className="p-1 md:h-auto">
          <Tile text="About" link="#about" />
        </li>
        <li className="p-1 md:h-auto">
          <Tile text="Contact" link="#contact"/>
        </li>
      </ul>
      <ul className="hidden md:block">
        <li className="p-1">
          <DayAndNight />
        </li>
      </ul>
      <div
        onClick={(e) => {
          setOpen(!isOpen);
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
        className="md:hidden"
      >
        <span className="border-b-4 border-solid border-[var(--dark)] dark:border-[var(--light)] h-[1rem] w-[3rem] block"></span>
        <span className="border-b-4 border-solid border-[var(--dark)] dark:border-[var(--light)] h-[1rem] w-[3rem] block "></span>
        <span className="border-b-4 border-solid border-[var(--dark)] dark:border-[var(--light)] h-[1rem] w-[3rem] block "></span>
      </div>
      {isOpen ? (
        <>
          <div className="md:hidden absolute top-0 min-h-[calc(100lvh-var(--headerH))] translate-y-[var(--headerH)] w-full backdrop-blur-sm bg-dark-a80 dark:bg-violet-a80">
            <ul className="min-h-[calc(100dvh-var(--headerH))] flex flex-col items-center justify-evenly">
              <li className=" dark:bg-dark-color bg-light-color">
                <DayAndNight />
              </li>
              <li><a href="#up"><Tile text="MP" /></a></li>
              <li className=" dark:bg-dark-color bg-light-color">
                <Tile text="Projects" link="#projects" hoverBgColor="hover:bg-violet" hoverShadowColor="hover:shadow-link-violet"/>
              </li>
              <li className=" dark:bg-dark-color bg-light-color">
                <Tile text="About" link="#about" hoverBgColor="hover:bg-violet" hoverShadowColor="hover:shadow-link-violet"/>
              </li>
              <li className=" dark:bg-dark-color bg-light-color">
                <Tile text="Contact" link="#contact" hoverBgColor="hover:bg-violet" hoverShadowColor="hover:shadow-link-violet"/>
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
