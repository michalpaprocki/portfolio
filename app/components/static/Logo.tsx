"use client";

import Link from "next/link";

interface Props {
  text?: string;
  fn?: (e: React.MouseEvent) => void;
  ariaLabel: string;
  href: string | null;
}

const Logo = ({ text, fn, ariaLabel, href }: Props) => {
  return (
    <>
      {fn ? (
        <button
          aria-label={ariaLabel}
          onClick={(e) => fn(e)}
          className="text-2xl whitespace-nowrap cursor-pointer overflow-clip select-none font-black p-1 px-4 h-12 flex items-center justify-center  hover:bg-violet-dark hover:text-light-color dark:hover:bg-violet dark:hover:text-light-color hover:shadow-link-violet-dark dark:hover:shadow-violet transition"
        >
          {text}
        </button>
      ) : (
        <Link
          href={href ? href : "#"}
          className="text-2xl whitespace-nowrap justify-center overflow-clip select-none font-black p-1 px-4 h-12 flex items-center  hover:bg-violet-dark hover:text-light-color dark:hover:bg-violet dark:hover:text-light-color hover:shadow-link-violet-dark dark:hover:shadow-violet transition"
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default Logo;
