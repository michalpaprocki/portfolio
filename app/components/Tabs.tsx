"use client";

import React, { useState } from "react";
import Tile from "./dynamic/Tile";

interface Props {
  tabs: { tabTitle: string; element: JSX.Element }[];
}
const Tabs = ({ tabs }: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center gap-4 py-4">
        {tabs.map((t, i) => (
          <Tile
            key={i}
            ariaLabel="selects tab"
            fn={(e) => {
              setSelected(i);
            }}
            bgColor={`${i === selected ? "bg-violet dark:bg-violet" : ""}`}
            textColor={`${i === selected ? "text-light-color" : ""}`}
            text={t.tabTitle}
            darkHoverTextColor="dark:hover:text-dark-color"
          />
        ))}
      </div>
      <div>
        {tabs.map((t, i) =>
          i === selected ? (
            <React.Fragment key={i}> {t.element}</React.Fragment>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default Tabs;
