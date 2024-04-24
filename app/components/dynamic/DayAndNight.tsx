"use client";

import { useState, useEffect, useRef } from "react";
import { MdLightMode, MdDarkMode, MdContrast } from "react-icons/md";
enum IconType {
  os = "os",
  light = "light",
  dark = "dark",
}
const DayAndNight = () => {
  const [icon, setIcon] = useState<IconType>();
  const [show, setShow] = useState(false);
  const refEl = useRef<HTMLDivElement>(null);
  const setTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)") && !localStorage.theme)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const MenuClickAway = (e: MouseEvent) => {
    if (!e.target) return;
    //@ts-ignore
    if (show && !refEl.current?.contains(e.target)) {
      setShow(false);
    }
  };
  useEffect(() => {
    setTheme();
    if (localStorage.theme) setIcon(localStorage.theme);
    else setIcon(IconType.os);
  }, []);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      MenuClickAway(e);
    });
    return () => {
      window.removeEventListener("click", () => {});
    };
  }, [show]);
  return (
    <div ref={refEl} className="">
      <button
        aria-label="select theme"
        onClick={() => setShow(!show)}
        className={`${show ? "ring-1" : ""} select-none overflow-hidden bg-light-color font-bold dark:bg-dark-color`}
      >
        <span className="flex h-8 w-[7rem] items-center whitespace-pre-wrap p-1 transition-all after:invisible after:h-16 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:blur-sm hover:bg-dark-color hover:text-light-color hover:shadow-link-light after:hover:visible after:hover:animate-slide after:dark:bg-dark-color after:dark:shadow-link-light-fat dark:hover:bg-light-color dark:hover:text-dark-color dark:hover:shadow-link-dark">
          {icon === IconType.os ? <MdContrast /> : null}
          {icon === IconType.light ? <MdLightMode /> : null}
          {icon === IconType.dark ? <MdDarkMode /> : null} Theme
        </span>
      </button>
      <div
        id="pref-menu"
        className={`${
          show ? "flex" : "hidden"
        } absolute flex-col bg-light-color font-bold ring-1  dark:bg-dark-color`}
      >
        <button
          aria-label="infer the theme from system"
          className="after:invisivble flex h-8 w-[7rem] cursor-pointer items-center overflow-hidden whitespace-pre-wrap p-1 transition-all after:h-16 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:blur-sm hover:bg-dark-color hover:text-light-color hover:shadow-link-light after:hover:visible after:hover:animate-slide after:dark:bg-dark-color after:dark:shadow-link-light-fat dark:hover:bg-light-color dark:hover:text-dark-color dark:hover:shadow-link-dark"
          onClick={(e) => {
            setIcon(IconType.os);
            localStorage.removeItem("theme");
            if (window.matchMedia("(prefers-color-scheme: dark)")) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
            setShow(false);
          }}
        >
          <MdContrast /> System
        </button>
        <button
          aria-label="select light theme"
          className=" after:invisivble flex h-8 w-[7rem] cursor-pointer items-center overflow-hidden whitespace-pre-wrap p-1 after:h-16 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:blur-sm hover:bg-dark-color hover:text-light-color hover:shadow-link-light after:hover:visible after:hover:animate-slide after:dark:bg-dark-color after:dark:shadow-link-light-fat dark:hover:bg-light-color dark:hover:text-dark-color dark:hover:shadow-link-dark "
          onClick={(e) => {
            setIcon(IconType.light);
            document.documentElement.classList.remove("dark");

            localStorage.theme = "light";
            setShow(false);
          }}
        >
          <MdLightMode /> Light
        </button>
        <button
          aria-label="select dark theme"
          className="after:invisivble flex h-8 w-[7rem] cursor-pointer items-center overflow-hidden whitespace-pre-wrap p-1 after:h-16 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:blur-sm hover:bg-dark-color hover:text-light-color hover:shadow-link-light after:hover:visible after:hover:animate-slide after:dark:bg-dark-color after:dark:shadow-link-light-fat dark:hover:bg-light-color dark:hover:text-dark-color dark:hover:shadow-link-dark "
          onClick={(e) => {
            setIcon(IconType.dark);
            document.documentElement.classList.add("dark");

            localStorage.theme = "dark";
            setShow(false);
          }}
        >
          <MdDarkMode /> Dark
        </button>
      </div>
    </div>
  );
};

export default DayAndNight;
