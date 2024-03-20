"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Path = () => {
  const path = usePathname();
  const pathArray = path.replace("/", "").split("/");
  const pathsSeparated = pathArray
    .map((_p, i) => pathArray.slice(0, pathArray.length - i))
    .reverse();
  const links = pathsSeparated.map((p, i) =>
    p.reduce((prev, current) => prev + "/" + current, "/").replace("/", ""),
  );

  return (
    <div className="fixed z-10 flex w-full rounded-md bg-black/75 p-1 px-4 text-sm font-semibold text-light-color ring-2 ring-violet-a40 backdrop-blur-sm">
      {pathArray.map((p, i) => (
        <div key={i} className="">
          <span className="px-1" key={i}>
            /
          </span>
          <Link className="hover:text-violet" href={links[i]}>
            {p}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Path;
