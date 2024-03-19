"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Path = () => {
  const path = usePathname();
  const pathArray = path.replace("/", "").split("/");
  const pathsSeparated = pathArray
    .map((_p, i) => pathArray.slice(0, pathArray.length - i))
    .toReversed();
  const links = pathsSeparated.map((p, i) =>
    p.reduce((prev, current) => prev + "/" + current, "/").replace("/", ""),
  );

  return (
    <div className="m-1 rounded-md bg-dark-color p-1 text-sm font-semibold text-light-color ring-2 ring-violet-a40 dark:bg-black/50">
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
