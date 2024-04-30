"use client";
import { useState, useRef, useEffect } from "react";

const DropDownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const refEl = useRef<HTMLDivElement>(null);

  const ClickAway = (e: MouseEvent) => {
    if (
      showMenu &&
      e.target instanceof Node &&
      !refEl.current?.contains(e.target)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      ClickAway(e);
    });

    return () => {
      window.removeEventListener("click", (e) => {
        ClickAway(e);
      });
    };
  }, [showMenu]);

  return (
    <>
      <div
        ref={refEl}
        className="relative z-30 self-center whitespace-nowrap font-mono"
      >
        <button
          id="button"
          onClick={() => setShowMenu(!showMenu)}
          className=" bg-lime-300 p-8 text-black hover:bg-cyan-200"
        >
          Menu
        </button>

        {showMenu ? (
          <div
            id="pref-menu"
            className={`absolute w-full flex-col bg-light-color text-xs font-semibold ring-1 dark:bg-dark-color`}
          >
            <ul className="bg-lime-300 text-black">
              <li
                onClick={() => {
                  setShowMenu(false);
                  alert("Hello");
                }}
                className="w-full cursor-pointer p-1 hover:bg-cyan-200"
              >
                Say Hello
              </li>
              <li
                onClick={() => {
                  setShowMenu(false);
                  alert("Good Day");
                }}
                className="w-full cursor-pointer p-1 hover:bg-cyan-200"
              >
                Say Good Day
              </li>
              <li
                onClick={() => {
                  setShowMenu(false);
                  alert("Howdy");
                }}
                className="w-full cursor-pointer p-1 hover:bg-cyan-200"
              >
                Say Howdy
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default DropDownMenu;
