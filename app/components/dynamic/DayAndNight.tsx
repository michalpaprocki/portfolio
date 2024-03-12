"use client";

import { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode, MdContrast } from "react-icons/md";
enum IconType {
  os = "os",
  light = "light",
  dark = "dark",
}
const DayAndNight = () => {
  const [icon, setIcon] = useState<IconType>();
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (localStorage.theme) setIcon(localStorage.theme);
    else setIcon(IconType.os);
  }, []);
  return (
    <div className="">
      <button
        aria-label="select theme"
        onClick={() => setShow(!show)}
        className="font-bold select-none bg-light-color dark:bg-dark-color overflow-hidden"
      >
        <span className="h-8 w-[7rem] flex items-center p-1 whitespace-pre-wrap hover:bg-dark-color hover:text-light-color dark:hover:bg-light-color dark:hover:text-dark-color hover:shadow-link-light dark:hover:shadow-link-dark after:h-16 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:hover:animate-slide after:invisible after:hover:visible after:dark:bg-dark-color after:dark:shadow-link-light-fat after:blur-sm transition-all">
          {icon === IconType.os ? <MdContrast /> : <></>}
          {icon === IconType.light ? <MdLightMode /> : <></>}
          {icon === IconType.dark ? <MdDarkMode /> : <></>} Theme
        </span>
      </button>
      <div
        id="pref-menu"
        className={`${
          show ? "flex" : "hidden"
        } flex-col  absolute font-bold bg-light-color dark:bg-dark-color`}
      >
        <button
          aria-label="infer the theme from system"
          className="cursor-pointer h-8 w-[7rem] overflow-hidden p-1 flex items-center whitespace-pre-wrap hover:bg-dark-color hover:text-light-color dark:hover:bg-light-color dark:hover:text-dark-color hover:shadow-link-light dark:hover:shadow-link-dark after:h-16 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:hover:animate-slide after:invisivble after:hover:visible after:dark:bg-dark-color after:dark:shadow-link-light-fat after:blur-sm transition-all"
          onClick={(e) => {
            setIcon(IconType.os);
            localStorage.removeItem("theme");
            if (window.matchMedia("(prefers-color-scheme: dark)")) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }}
        >
          <MdContrast /> System
        </button>
        <button
          aria-label="select light theme"
          className=" cursor-pointer h-8 w-[7rem] overflow-hidden p-1 flex items-center whitespace-pre-wrap hover:bg-dark-color hover:text-light-color dark:hover:bg-light-color dark:hover:text-dark-color hover:shadow-link-light dark:hover:shadow-link-dark after:h-16 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:hover:animate-slide after:invisivble after:hover:visible after:dark:bg-dark-color after:dark:shadow-link-light-fat after:blur-sm "
          onClick={(e) => {
            setIcon(IconType.light);
            document.documentElement.classList.remove("dark");

            localStorage.theme = "light";
          }}
        >
          <MdLightMode /> Light
        </button>
        <button
          aria-label="select dark theme"
          className="cursor-pointer h-8 w-[7rem] overflow-hidden p-1 flex items-center whitespace-pre-wrap hover:bg-dark-color hover:text-light-color dark:hover:bg-light-color dark:hover:text-dark-color hover:shadow-link-light dark:hover:shadow-link-dark after:h-16 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:hover:animate-slide after:invisivble after:hover:visible after:dark:bg-dark-color after:dark:shadow-link-light-fat after:blur-sm "
          onClick={(e) => {
            setIcon(IconType.dark);
            document.documentElement.classList.add("dark");

            localStorage.theme = "dark";
          }}
        >
          <MdDarkMode /> Dark
        </button>
      </div>
    </div>
  );
};

export default DayAndNight;
