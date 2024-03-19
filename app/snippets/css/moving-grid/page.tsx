import Snippet from "@/app/components/Snippet";
import fs from "fs";
import styles from "@/styles/moving-grid.module.css";
import Tabs from "@/app/components/Tabs";

const page = () => {
  const documentStyles = fs.readFileSync(
    "styles/moving-grid.module.css",
    "utf-8",
  );
  return (
    <div className="flex flex-col gap-2 py-8">
      <h2 className="mx-auto py-3 text-xl">Moving Grid</h2>
      <div className="flex flex-col items-center pb-10">
        <p className="w-80p">
          Simple animation that moves a grid across the screen. You can modify
          the direction of movement by tinkering with{" "}
          <code>background-position</code> in <code>@keyframes</code>, add some
          blur with <code>filter: blur(4px)</code> for more style or even add
          another grid with pseudo elements <code>::before</code> or{" "}
          <code>::after</code> and reverse .
        </p>
      </div>
      <div className="flex justify-center py-20">
        <div className={styles.grid}></div>
      </div>
      <Tabs
        tabs={[
          {
            element: (
              <>
                <Snippet code={documentStyles} language="css" />
                <Snippet code={`<div class="grid"></div>`} language="html" />
              </>
            ),
            tabTitle: "CSS",
          },
          {
            element: (
              <>
                <Snippet
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
                  language="tailwind.config.js"
                />
                <Snippet
                  code={`<div class="w-[50%] md:w-[80%] h-80 bg-gradient-grid bg-3x3 animate-gridMove"></div>`}
                  language="TailwindCSS"
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
