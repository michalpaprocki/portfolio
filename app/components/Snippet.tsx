"use client";

import { TbCopy } from "react-icons/tb";
import hljs from "highlight.js"
import "highlight.js/styles/github-dark.min.css"
import { useEffect } from "react";
interface Props {
  code: string;
  language: string;
  header: string;
}



const Snippet = ({ code, header, language }: Props) => {

  useEffect(()=> {

    if(typeof window !== "undefined" ){
      hljs.highlightAll()
    }
    // console.log(`code runs with ${language} para `)

   
  }, [])
  
  return (


    <div className="flex animate-fadeIn01s flex-col items-center py-8 font-mono text-sm transition">
      <div className="relative w-[90%] text-light-color ring-2 ring-violet md:w-[70%]">
        <span className="absolute left-1 top-1">{header}</span>
        <pre className={`language-${language} bg-github_bg p-4 pt-6`}><code>{code}</code></pre>
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
