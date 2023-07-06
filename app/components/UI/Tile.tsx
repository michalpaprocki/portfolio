"use client";
interface Props {
  text?: string;
  link?: string;
  bgColor?: string;
  hoverBgColor?:string;
  textColor?:string;
  hoverTextColor?: string;
  hoverShadowColor?:string;
}
const Tile = ({ text, link, bgColor='light-color', textColor='dark-color', hoverBgColor='dark-color', hoverTextColor='light-color', hoverShadowColor='link-light'}: Props) => {
  return (
    <>
      {link ? (
        <a
          target="_blank"
          href={link}
          className={`md:overflow-clip bg-${bgColor} text-${textColor} dark:bg-dark-color dark:text-light-color select-none font-bold p-1 h-16 w-[10rem] md:h-8 md:w-[7rem] flex items-center justify-center whitespace-pre-wrap hover:bg-${hoverBgColor} hover:text-${hoverTextColor} dark:hover:bg-light-color dark:hover:text-dark-color hover:shadow-${hoverShadowColor} dark:hover:shadow-link-dark  md:after:h-16 md:after:w-1 md:after:bg-light-color md:after:shadow-link-dark-fat md:after:hover:animate-slide md:after:invisible md:after:dark:bg-dark-color md:after:hover:visible md:after:dark:shadow-link-light-fat md:after:blur-sm transition-all`}
        >
          {text}
        </a>
      ) : (
        <span className={`md:overflow-clip bg-${bgColor} text-${textColor} dark:bg-dark-color dark:text-light-color select-none font-bold p-1 h-16 w-[10rem] md:h-8 md:w-[7rem] flex items-center justify-center whitespace-pre-wrap hover:bg-${hoverBgColor} hover:text-${hoverTextColor} dark:hover:bg-light-color dark:hover:text-dark-color hover:shadow-${hoverShadowColor} dark:hover:shadow-link-dark  md:after:h-16 md:after:w-1 md:after:bg-light-color md:after:shadow-link-dark-fat md:after:hover:animate-slide md:after:invisible md:after:dark:bg-dark-color md:after:hover:visible md:after:dark:shadow-link-light-fat md:after:blur-sm transition-all`}>
          {text}
        </span>
      )}
    </>
  );
};

export default Tile;
