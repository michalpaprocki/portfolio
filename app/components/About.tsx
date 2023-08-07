"use client";
import { useState } from "react";
import Icon from "./static/Icon";
import Tile from "./dynamic/Tile";
import {
  SiVercel,
  SiRender,
  SiExpress,
  SiPlanetscale,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFlask,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiGithub,
  SiGit,
  SiTrpc,
  SiSvelte,
  SiElectron,
  SiHeadlessui,
} from "react-icons/si";
const About = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [showText, setShowText] = useState(false);
  return (
    <section
      id="about"
      className="bg-fixed group mb-16 mt-32 text-light-color bg-dark-color dark:text-dark-color dark:bg-light-a80 relative flex justify-center dark:shadow-link-dark-fat shadow-inner bg-gradient-grid dark:bg-gradient-grid-dark bg-3x3 animate-gridMove dark:animate-gridMoveDark transition-all 500ms delay-75"
    >
      <div className="flex flex-col items-center p-4 sm:p-8 pt-16 pb-16 backdrop-blur-sm bg-transparent w-full dark:hover:backdrop-saturate-200 hover:backdrop-saturate-200 transition-all 300ms">
        <div
          className="rounded-md overflow-clip flex flex-col items-center dark:bg-light-color dark:shadow-link-dark-fat bg-dark-color shadow-link-light-fat p-4 sm:p-8 w-full lg:w-[70%] md:w-[80%] sm:w-[90%] ring-inset ring-2 ring-violet-a40
        "
        >
          <h3 className="text-2xl font-bold first-letter:capitalize text-center p-8 sm:mt-12">
            Experience
          </h3>
          <p className="p-8 sm:w-[80%] w-full text-center text-lg semibol">
            While working on many personal projects, I learned how to design,
            build and ship front-end and fullstack web apps. Solid fundamentals,
            fast learning and perseverance allow me to tackle any project.
          </p>
          {showText ? (
            <>
              <p className="sm:w-[80%] w-full text-center text-lg p-8">
                My time with React/Next ecosystem taught me how to use:
              </p>
              <div className="flex sm:flex-row flex-col justify-center text-sm sm:text-base">
                <ul className="flex flex-col items-start sm:p-8 list-inside">
                  <li className="list-disc p-2 ">
                    Functional Components and Hooks
                  </li>
                  <li className="list-disc p-2 ">Promises</li>
                  <li className="list-disc p-2 ">Server Side Rendering</li>
                  <li className="list-disc p-2 ">Create and Consume APIs</li>
                </ul>
                <ul className="flex flex-col items-start  sm:p-8 list-inside">
                  <li className="list-disc p-2 ">
                    Create and Operate Document and MySQL Databases
                  </li>
                  <li className="list-disc p-2 ">
                    Authentication and Authorization
                  </li>
                  <li className="list-disc p-2 ">MERN Stack</li>
                </ul>
              </div>
              <p className="sm:w-[80%] w-full text-center text-lg p-8 font-semibold">
                With ever changing industry landscape, I&apos;ve grown to understand and embrace the need to stay in the know to keep with it&apos;s pace.
              </p>
              <p className="sm:w-[80%] w-full text-center text-lg p-8">
                
              </p>
            </>
          ) : (
            <></>
          )}
          <div className="p-8">
            <Tile
              fn={(e) => {
                setShowText(!showText);
              }}
              text={showText ? "Hide" : "Read More"}
              darkTextColor="dark:text-light-color"
              hoverBgColor="hover:bg-violet"
              hoverShadowColor="hover:shadow-link-violet"
              darkHoverBgColor="dark:hover:bg-violet"
              darkHoverShadowColor="dark:hover:shadow-link-violet"
            />
          </div>
          <h5 className="p-1 text-center text-lg font-bold mt-12">
            Tools I Use :
          </h5>
          <div className="flex justify-evenly gap-1 md:gap-8 sm:gap-4 pb-4 pt-8 px-2 md:p-8  flex-wrap">
            <Icon
              Icon={SiJavascript}
              title="Javacript"
              darkHoverTextColor="dark:hover:text-yellow-500"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiTypescript}
              title="TypeScript"
              darkHoverTextColor="dark:hover:text-blue-500"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiReact}
              title="React"
              darkHoverTextColor="dark:hover:text-react-logo"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiTailwindcss}
              title="TailwindCSS"
              darkHoverTextColor="dark:hover:text-sky-400"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
        
            <Icon
              Icon={SiNodedotjs}
              title="Node.js"
              darkHoverTextColor="dark:hover:text-node-logo"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiGit}
              title="Git"
              darkHoverTextColor="dark:hover:text-git-logo"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiGithub}
              title="GitHub"
              darkHoverTextColor="dark:hover:text-dark-color"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />

            {showIcons ? (
              <>
                <Icon
                  Icon={SiNextdotjs}
                  title="Next.js"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
                />
                <Icon
                  Icon={SiPrisma}
                  title="Prisma"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
                />
                    <Icon
              Icon={SiHeadlessui}
              title="HeadlessUI"
              darkHoverTextColor="dark:hover:text-sky-400"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
                <Icon
                  Icon={SiExpress}
                  title="Express"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
                />
                <Icon
                  Icon={SiMongodb}
                  title="MongoDB"
                  darkHoverTextColor="dark:hover:text-mongo-logo"
                  DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
                />
                <Icon
                  Icon={SiPlanetscale}
                  title="Planetscale"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
                />
                <Icon
                  Icon={SiVercel}
                  title="Vercel"
                  darkHoverTextColor="dark:hover:text-dark-color"
                  DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
                />
                <Icon
                  Icon={SiRender}
                  title="Render"
                  darkHoverTextColor="dark:hover:text-render-logo"
                  DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="p-8">
            <Tile
              fn={() => {
                setShowIcons(!showIcons);
              }}
              text={showIcons ? "Hide" : "Show More"}
              darkTextColor="dark:text-light-color"
              hoverBgColor="hover:bg-violet"
              hoverShadowColor="hover:shadow-link-violet"
              darkHoverBgColor="dark:hover:bg-violet"
              darkHoverShadowColor="dark:hover:shadow-link-violet"
            />
          </div>
          <h5 className="p-1 text-center text-lg font-bold mt-12">
            Currently Learning :
          </h5>
          <div className="flex justify-evenly gap-1 md:gap-8 sm:gap-4 pb-4 pt-8 px-2 md:p-8  flex-wrap">
            <Icon
              Icon={SiPython}
              title="Python"
              darkHoverTextColor="dark:hover:text-dark-color"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiFlask}
              title="Flask"
              darkHoverTextColor="dark:hover:text-dark-color"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
          </div>
          <h5 className="p-1 text-center text-lg font-bold mt-12">
            On My Radar :
          </h5>
          <div className="flex justify-evenly gap-1 md:gap-8 sm:gap-4 pb-4 pt-8 px-2 md:p-8  flex-wrap">
            <Icon
              Icon={SiTrpc}
              title="trpc"
              darkHoverTextColor="dark:hover:text-dark-color"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiTailwindcss}
              text="Oxide"
              title="Tailwind Oxide"
              darkHoverTextColor="dark:hover:text-dark-color"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiTailwindcss}
              text="Catalyst"
              title="Tailwind Catalyst"
              darkHoverTextColor="dark:hover:text-dark-color"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiSvelte}
              title="Svelte"
              darkHoverTextColor="dark:hover:text-svelte-logo"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiElectron}
              title="Electron"
              darkHoverTextColor="dark:hover:text-electron-logo"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
