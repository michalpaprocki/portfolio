import Snippet from "@/app/components/Snippet";
import Tabs from "@/app/components/Tabs";
import fs from "fs";

const page = () => {
  const documentStyle1 = fs.readFileSync("styles/spinner1.module.css", "utf-8");
  const documentStyle2 = fs.readFileSync("styles/spinner2.module.css", "utf-8");

  return (
    <div className="flex flex-col gap-2 py-8">
      <h1 className="mx-auto py-3 text-xl">Spinners</h1>
      <div className="flex flex-col items-center pb-10">
        <p className="w-80p">Animated spinners for loading states.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="pb-10">Spinner #1</h2>

            <div className="h-16 w-16 animate-spin rounded-full border-4 border-[black_transparent_black_transparent] dark:border-[white_transparent_white_transparent]"></div>
          </div>
          <Tabs
            tabs={[
              { element: <></>, tabTitle: "Hidden" },
              {
                element: (
                  <>
                    <Snippet code={documentStyle1} language="CSS" />
                    <Snippet
                      code={`<div class="spinner"></div>`}
                      language="HTML"
                    />
                  </>
                ),
                tabTitle: "CSS",
              },
              {
                tabTitle: "TailwindCSS",
                element: (
                  <>
                    <Snippet
                      language="TailwindCSS"
                      code={`<div class="h-16 w-16 animate-spin rounded-full border-4 border-[white_transparent_white_transparent]"></div>`}
                    />
                  </>
                ),
              },
            ]}
          />
        </div>
        <div>
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="pb-10">Spinner #2</h2>
            <div className={`flex h-16 w-8 justify-between`}>
              <div
                className={`h-16 w-2 animate-pendulumTop bg-black dark:bg-white`}
              ></div>
              <div
                className={`h-16 w-2 animate-pendulumCenter bg-black dark:bg-white`}
              ></div>
              <div
                className={`h-16 w-2 animate-pendulumBottom bg-black dark:bg-white`}
              ></div>
            </div>
          </div>
          <Tabs
            tabs={[
              { element: <></>, tabTitle: "Hidden" },
              {
                element: (
                  <>
                    <Snippet code={documentStyle2} language="CSS" />
                    <Snippet
                      code={`<div class="spinner">\n <div class="left"></div>\n <div class="center"></div>\n <div class="right"></div>\n</div>
                    `}
                      language="HTML"
                    />
                  </>
                ),
                tabTitle: "CSS",
              },
              {
                tabTitle: "TailwindCSS",
                element: (
                  <>
                    <Snippet
                      language="tailwind.config.js"
                      code={`
 theme: {
    extend: {
            keyframes: { 
                pendulumFromTop: {
                    "0%, 100%": {
                      transform: "translateY(-50%)",
                    },
                    "50%": {
                      transform: "translateY(50%)",
                    },
                  },
                pendulumFromCenter: {
                    "33%": {
                      transform: "translateY(50%)",
                    },
                    "0%, 100%": {
                      transform: "translateY(-50%)",
                    },
                  },
                pendulumFromBottom: {
                    "0%, 100%": {
                      transform: "translateY(50%)",
                    },
                    "50%": {
                      transform: "translateY(-50%)",
                    },
                  },
            },
            animation: {
              pendulumTop:
                "pendulumFromTop 1s cubic-bezier(0.2, 1.5, 0.2, 0.4) infinite",
              pendulumCenter:
                "pendulumFromCenter 1.5s cubic-bezier(0.2, 1.5, 0.2, 0.4) infinite",
              pendulumBottom:
                "pendulumFromBottom 1s cubic-bezier(0.2, 1.5, 0.2, 0.4) infinite",    
            }
        }
    }`}
                    />
                    <Snippet
                      language="TailwindCSS"
                      code={`<div class="flex h-16 w-8 justify-between">\n <div class="animate-pendulumTop h-16 w-2 bg-black dark:bg-white"></div>\n <div class="animate-pendulumCenter h-16 w-2 bg-black dark:bg-white"></div>\n <div class="animate-pendulumBottom h-16 w-2 bg-black dark:bg-white"></div>\n</div>`}
                    />
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
export default page;
