"use client";

import { TbCopy } from "react-icons/tb";

interface Props {
  code: string;
  language: string;
}
const Snippet = ({ code, language }: Props) => {
  return (
    <div className="flex animate-fadeIn01s flex-col items-center py-8 text-sm transition">
      <div className="relative w-[90%] text-light-color ring-2 ring-violet md:w-[70%]">
        <span className="absolute left-1 top-1">{language}</span>
        <pre className="overflow-x-scroll bg-dark-color p-4 pt-6">{code}</pre>
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          aria-label="copy code snippet"
          title="copy code"
          className="absolute right-1 top-1 transition hover:-translate-y-1 hover:text-violet"
        >
          {<TbCopy size={"2.5em"} />}
        </button>
      </div>
    </div>
  );
};
export default Snippet;
