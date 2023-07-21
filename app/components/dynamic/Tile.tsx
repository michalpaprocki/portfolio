"use client";
interface Props {
  text?: string;
  link?: string;
  bgColor?: string;
  darkBgColor?: string;
  hoverBgColor?: string;
  darkHoverBgColor?: string;
  textColor?: string;
  darkTextColor?: string;
  hoverTextColor?: string;
  darkHoverTextColor? :string;
  hoverShadowColor?: string;
  darkHoverShadowColor?:string;
  target?: string;
  fn?: (e: React.MouseEvent)=> void;
  animationColor?:string;
  animationShadowColor?:string;
  cursor?: string;
}
const Tile = ({
  text,
  link,
  bgColor = "bg-light-color",
  textColor = "text-dark-color",
  darkTextColor = "dark:text-light-color",
  hoverBgColor = " hover:bg-dark-color",
  darkHoverBgColor = "dark:hover:bg-light-color",
  hoverTextColor = "hover:text-light-color",
  darkHoverTextColor= "dark:hover:text-light-color",
  hoverShadowColor = "hover:shadow-link-light",
  darkHoverShadowColor = "dark:hover:shadow-link-dark",
  darkBgColor = "dark:bg-dark-color",
  target = "",
  animationShadowColor =  "md:after:shadow-link-dark-fat",
  animationColor = "md:after:bg-light-color",
  cursor = "cursor-auto",
  fn
}: Props) => {
  return (
    <>
      {link ? (
        <a
          target={target}
          href={link}
          className={`md:overflow-clip ${cursor} ${bgColor} ${textColor} ${darkBgColor} ${darkHoverBgColor} ${darkTextColor} select-none font-bold p-1 h-16 w-[10rem] md:h-8 md:w-[7rem] flex items-center justify-center whitespace-pre-wrap ${hoverBgColor} ${hoverTextColor} ${darkHoverTextColor} ${hoverShadowColor} ${darkHoverShadowColor} md:after:h-16 md:after:w-1 ${animationColor} ${animationColor} md:after:hover:animate-slide md:after:invisible md:after:dark:bg-dark-color md:after:hover:visible md:after:dark:shadow-link-light-fat md:after:blur-sm transition-all`}
        >
          {text}
        </a>
      ) : (
        <span
        onClick={(e)=>{ fn? fn(e): null}}
          className={`md:overflow-clip ${cursor} ${bgColor} ${textColor} ${darkBgColor} ${darkHoverBgColor} ${darkTextColor} select-none text-center font-bold p-1 h-16 w-[10rem] md:h-8 md:w-[7rem] flex items-center justify-center whitespace-pre-wrap ${hoverBgColor} ${hoverTextColor} ${darkHoverTextColor} ${hoverShadowColor} ${darkHoverShadowColor}  md:after:h-16 md:after:w-1 ${animationColor} ${animationShadowColor} md:after:hover:animate-slide md:after:invisible md:after:dark:bg-dark-color md:after:hover:visible md:after:dark:shadow-link-light-fat md:after:blur-sm transition-all`}
        >
          {text}
        </span>
      )}
    </>
  );
};

export default Tile;
