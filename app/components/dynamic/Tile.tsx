"use client";

import Link from "next/link";

interface Props {
  text?: string;
  ariaLabel: string;
  title?: string;
  link?: string;
  bgColor?: string;
  darkBgColor?: string;
  hoverBgColor?: string;
  darkHoverBgColor?: string;
  textColor?: string;
  darkTextColor?: string;
  hoverTextColor?: string;
  darkHoverTextColor?: string;
  hoverShadowColor?: string;
  darkHoverShadowColor?: string;
  target?: string;
  fn?: (e: React.MouseEvent) => void;
  animationColor?: string;
  animationShadowColor?: string;
  cursor?: string;
}
const Tile = ({
  text,
  ariaLabel,
  title,
  link,
  bgColor = "bg-light-color",
  textColor = "text-dark-color",
  darkTextColor = "dark:text-light-color",
  hoverBgColor = " hover:bg-dark-color",
  darkHoverBgColor = "dark:hover:bg-light-color",
  hoverTextColor = "hover:text-light-color",
  darkHoverTextColor = "dark:hover:text-light-color",
  hoverShadowColor = "hover:shadow-link-light",
  darkHoverShadowColor = "dark:hover:shadow-link-dark",
  darkBgColor = "dark:bg-dark-color",
  target = "",
  animationShadowColor = "md:after:shadow-link-dark-fat",
  animationColor = "md:after:bg-light-color",
  cursor = "cursor-auto",
  fn,
}: Props) => {
  return (
    <>
      {link ? (
        <Link
          onClick={(e) => (fn ? fn(e) : null)}
          title={title}
          aria-label={ariaLabel}
          target={target}
          href={link}
          className={`capitalize md:overflow-clip ${cursor} ${bgColor} ${textColor} ${darkBgColor} ${darkHoverBgColor} ${darkTextColor} flex h-16 w-[10rem] cursor-pointer select-none items-center justify-center whitespace-pre-wrap p-1 font-bold md:h-8 md:w-[7rem] ${hoverBgColor} ${hoverTextColor} ${darkHoverTextColor} ${hoverShadowColor} ${darkHoverShadowColor} md:after:h-16 md:after:w-1 ${animationColor} ${animationColor} transition-all md:after:invisible md:after:blur-sm md:after:hover:visible motion-safe:md:after:hover:animate-slide  md:after:dark:bg-dark-color md:after:dark:shadow-link-light-fat `}
        >
          {text}
        </Link>
      ) : (
        <button
          title={title}
          aria-label={ariaLabel}
          onClick={(e) => {
            fn ? fn(e) : null;
          }}
          className={`capitalize md:overflow-clip ${cursor} ${bgColor} ${textColor} ${darkBgColor} ${darkHoverBgColor} ${darkTextColor} flex h-16 w-[10rem] cursor-pointer select-none items-center justify-center whitespace-pre-wrap p-1 text-center font-bold md:h-8 md:w-[7rem] ${hoverBgColor} ${hoverTextColor} ${darkHoverTextColor} ${hoverShadowColor} ${darkHoverShadowColor}  md:after:h-16 md:after:w-1 ${animationColor} ${animationShadowColor} transition-all md:after:invisible md:after:blur-sm md:after:hover:visible motion-safe:md:after:hover:animate-slide   md:after:dark:bg-dark-color md:after:dark:shadow-link-light-fat`}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Tile;
