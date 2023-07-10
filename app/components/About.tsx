import Icon from "./static/Icon";

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
} from "react-icons/si";
const About = () => {
  return (
    <section
      id="about"
      className="group mb-32 mt-32 text-light-color bg-dark-color dark:text-dark-color dark:bg-light-a80 relative flex justify-center dark:shadow-link-dark-fat shadow-link-light-fat bg-gradient-grid dark:bg-gradient-grid-dark bg-3x3 animate-gridMove dark:animate-gridMoveDark transition-all 500ms delay-75"
    >
      <div className=" p-8 backdrop-blur-sm bg-transparent w-full dark:hover:backdrop-saturate-100 hover:backdrop-saturate-200 transition-all 300ms">
        <div className="flex flex-col items-center dark:bg-light-color dark:shadow-link-dark-fat bg-dark-color shadow-link-light-fat">
          <h3 className="text-2xl font-bold first-letter:capitalize text-center p-8">
            my experiences
          </h3>
          <p className="p-1 text-center">something wrote about my experiences and skill i gained </p>
          <h5>Tools i use</h5>
          <div className="flex justify-evenly pb-4 pt-8 lg:w-[60%] w-[80%] flex-wrap">
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
              Icon={SiNextdotjs}
              title="Next.js"
              darkHoverTextColor="dark:hover:text-dark-color"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiNodedotjs}
              title="Node.js"
              darkHoverTextColor="dark:hover:text-node-logo"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiTailwindcss}
              title="TailwindCSS"
              darkHoverTextColor="dark:hover:text-sky-400"
              DarkHoverAfterTextColor="dark:hover:after:text-dark-color"
            />
            <Icon
              Icon={SiPrisma}
              title="Prisma"
              darkHoverTextColor="dark:hover:text-dark-color"
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
          </div>
          <h5>Currently im learning</h5>
          <div className="flex justify-evenly pb-4 pt-8 w-[80%] flex-wrap">
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
        </div>
      </div>
    </section>
  );
};

export default About;
