"use client";
interface Props {
  text?: string;
  fn?: (e: React.MouseEvent) => void;
}
const Tile = ({ text, fn }: Props) => {
  return (
    <>
      {fn ? (
        <span
          onClick={(e) => fn(e)}
          className="overflow-clip select-none font-bold p-1 h-8 w-[7rem] flex items-center justify-center whitespace-pre-wrap hover:bg-dark-color hover:text-light-color dark:hover:bg-light-color dark:hover:text-dark-color hover:shadow-link-light dark:hover:shadow-link-dark after:h-16 after:w-1 after:bg-light-color  after:shadow-link-dark-fat after:hover:animate-slide after:invisible after:dark:bg-dark-color after:hover:visible after:dark:shadow-link-light-fat after:blur-sm transition-all"
        >
          {text}
        </span>
      ) : (
        <span className="overflow-clip select-none font-bold p-1 h-8 w-[7rem] flex items-center justify-center whitespace-pre-wrap hover:bg-dark-color hover:text-light-color dark:hover:bg-light-color dark:hover:text-dark-color hover:shadow-link-light dark:hover:shadow-link-dark after:h-16 after:w-1 after:bg-light-color  after:shadow-link-dark-fat after:hover:animate-slide after:invisible after:dark:bg-dark-color after:hover:visible after:dark:shadow-link-light-fat after:blur-sm transition-all">
          {text}
        </span>
      )}
    </>
  );
};

export default Tile;
