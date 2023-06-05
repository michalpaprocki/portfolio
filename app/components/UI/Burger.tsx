"use client";
import Tile from "./Tile";
import DayAndNight from "../DayAndNight";
import { useState } from "react";
const Burger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ul className="md:flex hidden">
        <li className="p-1 md:h-auto h-[5rem]">
          <Tile text="Projects" />
        </li>
        <li className="p-1 md:h-auto h-[5rem]">
          <Tile text="About" />
        </li>
        <li className="p-1 md:h-auto h-[5rem]">
          <Tile text="Contact" />
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
        <span className="border-b-4 border-solid border-[var(--dark)] dark:border-[var(--light)] h-[1rem] w-[3rem] block group-hover:animate-burger_up transition-all 200ms ease-in "></span>
        <span className="border-b-4 border-solid border-[var(--dark)] dark:border-[var(--light)] h-[1rem] w-[3rem] block group-hover:animate-burger_mid transition-all 200ms ease-in"></span>
        <span className="border-b-4 border-solid border-[var(--dark)] dark:border-[var(--light)] h-[1rem] w-[3rem] block group-hover:animate-burger_down transition-all 200ms ease-in"></span>
      </div>
      {isOpen ? (
        <>
          <div className="md:hidden absolute top-0 min-h-[calc(100lvh-var(--headerH))] bg-gradient-to-br dark:from-violet-a80 dark:to-violet-dark-a80 from-violet-a80 to-violet-dark-a80 translate-y-[var(--headerH)] w-full backdrop-blur-sm">
            <ul className="min-h-[calc(100dvh-var(--headerH))] flex flex-col items-center justify-evenly">
              <li className="p-1 dark:bg-inherit bg-light-color">
                <DayAndNight />
              </li>
              <li className="p-1 dark:bg-inherit bg-light-color">
                <Tile text="Projects" />
              </li>
              <li className="p-1 dark:bg-inherit bg-light-color">
                <Tile text="About" />
              </li>
              <li className="p-1 dark:bg-inherit bg-light-color">
                <Tile text="Contact" />
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
