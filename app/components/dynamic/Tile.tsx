"use client";
interface Props {
  text?: string;
  link?: string;
  bgColor?: string;
  darkBgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  hoverShadowColor?: string;
  target?: string;
}
const Tile = ({
  text,
  link,
  bgColor = "bg-light-color",
  textColor = "text-dark-color",
  hoverBgColor = " hover:bg-dark-color",
  hoverTextColor = "hover:text-light-color",
  hoverShadowColor = "hover:shadow-link-light",
  darkBgColor = "dark:bg-dark-color",
  target = ""
}: Props) => {
  return (
    <>
      {link ? (
        <a
          target={target}
          href={link}
          className={`md:overflow-clip ${bgColor} ${textColor} ${darkBgColor} dark:text-light-color select-none font-bold p-1 h-16 w-[10rem] md:h-8 md:w-[7rem] flex items-center justify-center whitespace-pre-wrap ${hoverBgColor} ${hoverTextColor} dark:hover:bg-light-color dark:hover:text-dark-color ${hoverShadowColor} dark:hover:shadow-link-dark  md:after:h-16 md:after:w-1 md:after:bg-light-color md:after:shadow-link-dark-fat md:after:hover:animate-slide md:after:invisible md:after:dark:bg-dark-color md:after:hover:visible md:after:dark:shadow-link-light-fat md:after:blur-sm transition-all`}
        >
          {text}
        </a>
      ) : (
        <span
          className={`md:overflow-clip ${bgColor} ${textColor} ${darkBgColor} dark:text-light-color select-none font-bold p-1 h-16 w-[10rem] md:h-8 md:w-[7rem] flex items-center justify-center whitespace-pre-wrap ${hoverBgColor} ${hoverTextColor} dark:hover:bg-light-color dark:hover:text-dark-color ${hoverShadowColor} dark:hover:shadow-link-dark  md:after:h-16 md:after:w-1 md:after:bg-light-color md:after:shadow-link-dark-fat md:after:hover:animate-slide md:after:invisible md:after:dark:bg-dark-color md:after:hover:visible md:after:dark:shadow-link-light-fat md:after:blur-sm transition-all`}
        >
          {text}
        </span>
      )}
    </>
  );
};

export default Tile;
