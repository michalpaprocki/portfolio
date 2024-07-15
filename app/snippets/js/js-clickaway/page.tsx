import Snippet from "@/app/components/Snippet";
import Code from "@/app/components/static/Code";
import fs from "fs";
import DropDownMenu from "@/app/components/snippets/DropDownMenu";
import Link from "next/link";

const page = () => {
  const dropdownComponent = fs.readFileSync(
    "app/components/snippets/DropDownMenu.tsx",
    "utf-8",
  );
  return (
    <div className="flex flex-col gap-2 py-8">
      <h1 className="mx-auto py-3 text-xl capitalize">
        Javascript click away function
      </h1>
      <div className="flex flex-col pb-10">
        <p className="mt-4 w-80p self-center indent-1">
          While building apps, we often use different kinds of concepts to
          display interactive parts of our program. One of the more popular
          approach is to use drop-down menus. As the name suggests, they
          &quot;drop&quot; i.e. change state from open(interactive) to
          closed(noninteractive), this change is ussually handled by CSS
          pseudo-classes, functions that fire after a button is clicked or,
          sometimes, invisible <Code text="<div/>" /> elements with attached
          click event handlers.
        </p>
        <p className="mt-4 w-80p self-center indent-1">
          Let&apos;s take a look how to close a drop-down menu with a click away
          function. We&apos;ll add an event listener that will detect what is
          the event target, if the target is not the menu, we will simply close
          it.
        </p>
        <p className="mt-4 w-80p self-center indent-1">
          Here&apos;s the implementation in React:
        </p>
        <Snippet header="React | Typescript" language="typescript" code={dropdownComponent} />
        <p className="mb-10 mt-4 w-80p self-center indent-1 ">
          And here&apos;s working component:
        </p>
        <DropDownMenu />
        <p className="mt-20 w-80p self-center indent-1">
          For <Code text="ClickAway" /> fn to work we have to add it as a
          callback to window object&apos;s click event, we&apos;re doing this in{" "}
          <Code text="useEffect" /> hook, on component mount. Now, whenever the{" "}
          <Code text="DropDownMenu" /> component is rendered, our function will
          be invoked by the browser when we click on its window. When called,{" "}
          <Code text="ClickAway" /> function is checking whether the drop down
          menu is open, then it checks if event&apos;s target is an instance of{" "}
          <Code text="Node" /> (mostly to silence Typescript&apos;s
          complaining), and finally it estabilishes whether our{" "}
          <Code text="refEl" />{" "}
          <Link
            href={`https://developer.mozilla.org/en-US/docs/Web/API/Node/contains`}
            className="underline underline-offset-4 transition hover:cursor-pointer hover:text-violet"
            target="_blank"
            title="Node:contains() MDM web docs page."
          >
            contains
          </Link>
          &nbsp; the event target. If all of the above checks pass, it simply
          stops displaying the menu by changing the value of{" "}
          <Code text="showMenu" /> to false.
        </p>
      </div>
    </div>
  );
};

export default page;
