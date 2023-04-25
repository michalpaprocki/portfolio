"use client";
interface Props {
  text?: string;
  fn?: (e: React.MouseEvent) => void;
}

const Logo = ({ text, fn }: Props) => {
  return (
    <>
    {fn ? (
      <span
        onClick={(e) => fn(e)}
        className="text-4xl overflow-clip select-none font-black p-1 h-12 w-[10.5rem] flex items-center justify-center whitespace-pre-wrap hover:bg-violet-dark hover:text-light-color dark:hover:bg-violet dark:hover:text-light-color hover:shadow-link-violet-dark dark:hover:shadow-violet after:h-20 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:hover:animate-logo_slide after:invisible after:dark:bg-dark-color after:hover:visible after:dark:shadow-link-light-fat after:blur-sm transition-all"
      >
        {text}
      </span>
    ) : (
      <span className="text-4xl overflow-clip select-none font-black p-1 h-12 w-[10.5rem] flex items-center justify-center whitespace-pre-wrap hover:bg-violet-dark hover:text-light-color dark:hover:bg-violet dark:hover:text-light-color hover:shadow-link-violet-dark dark:hover:shadow-violet after:h-20 after:w-1 after:bg-light-color after:shadow-link-dark-fat after:hover:animate-logo_slide after:invisible after:dark:bg-dark-color after:hover:visible after:dark:shadow-link-light-fat after:blur-sm transition-all">
        {text}
      </span>
    )}
  </>
  )
}

export default Logo