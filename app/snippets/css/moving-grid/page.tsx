import Snippet from "@/app/components/Snippet";
import fs from "fs";
import styles from "@/styles/moving-grid.module.css";
import Tabs from "@/app/components/Tabs";
import Code from "@/app/components/static/Code";

const page = () => {
  const documentStyles = fs.readFileSync(
    "styles/moving-grid.module.css",
    "utf-8",
  );
  return (
    <div className="flex flex-col gap-2 py-8">
      <h1 className="mx-auto py-3 text-xl">Moving Grid</h1>
      <div className="flex flex-col items-center pb-10">
        <p className="w-80p">
          Simple animation that moves a grid across the screen. You can modify
          the direction of movement by tinkering with{" "}
          <Code text="background-position" /> in <Code text="@keyframes" />, add
          some blur with <Code text="filter: blur(4px)" /> for more style or
          even add another grid with pseudo elements <Code text="::before" /> or{" "}
          <Code text="::after" /> and reverse the keyframes.
        </p>
      </div>
      <div className="flex justify-center py-20">
        <div className="flex w-full flex-col items-center justify-center">
          <div className={styles.grid}></div>
          <div className="group relative mb-16 mt-32 flex h-[20rem] w-[80%] animate-gridMove justify-center bg-dark-color bg-gradient-grid bg-3x3 bg-fixed text-light-color shadow-inner transition-all delay-75 dark:animate-gridMoveDark dark:bg-light-a80 dark:bg-gradient-grid-dark dark:text-dark-color dark:shadow-link-dark-fat md:w-[50%]"></div>
        </div>
      </div>
      <Tabs
        tabs={[
          {
            element: (
              <>
                <Snippet header="css" code={documentStyles} language="css" />
                <Snippet header="html" code={`<div class="grid"></div>`} language="html" />
              </>
            ),
            tabTitle: "CSS",
          },
          {
            element: (
              <>
                <Snippet
                header="tailwind.config.js"
                  code={`
theme: {
    extend: {
      backgroundImage: {
        "gradient-grid": 
        "linear-gradient(90deg , blue 1%, transparent 5%),
        linear-gradient(270deg, blue 1%, transparent 5%),
        linear-gradient(180deg , blue 1%, transparent 5%),
        linear-gradient(0deg, blue 1%, transparent 5%)"
    }

      backgroundSize: {
        "3x3": "3rem 3rem",
      },
      keyframes: {
        gridMove: {
            "0%, 100%": {
              backgroundPosition: "100% 0%",
            },
            "25%": {
              backgroundPosition: "0% 100%",
            },
            "50%": {
              backgroundPosition: "-100% 0%",
            },
            "75%": {
              backgroundPosition: "0% -100%",
            },
          },
        },
      animation: {
        gridMove: "gridMove linear 150s infinite",
      }
    }
}
    `}
                  language="js"
                />
                <Snippet
                  header="TailwindCSS"
                  code={`<div class="w-[50%] md:w-[80%] h-80 bg-gradient-grid bg-3x3 animate-gridMove bg-fixed border-2 border-blue-800 border-solid"></div>`}
                  language="js"
                />
              </>
            ),
            tabTitle: "TailwindCSS",
          },
        ]}
      />
    </div>
  );
};

export default page;
