import Tile from "./Tile";
import { IconType } from "react-icons/lib";
import Icon from "./../static/Icon";
interface Props {
  title: string;
  description?: string;
  image: string;
  linkApp?: string;
  linkCode?: string;
  icons?: { icon: IconType; title: string }[];
}

const GridItem = ({
  description,
  title,
  image,
  linkApp,
  linkCode,
  icons,
}: Props) => {
  return (
    <div className="overflow-hidden border-l-2 border-solid border-violet-dark dark:border-violet hover:border-violet hover:shadow-link-violet-dark shadow-sm shadow-black hover:dark:shadow-violet text-light-color transition-all 200ms ">
      <div
        style={
          { "--image-url": `url(/images/${image})` } as React.CSSProperties
        }
        className={`group bg-[image:var(--image-url)] bg-cover bg-center grid-item flex flex-col min-h-[24rem] items-center  relative saturate-150 grayscale hover:grayscale-0 transition-all duration-300 ease-linear`}
      >
        <div className="group-hover:flex hidden bg-dark-a80 dark:bg-dark-a40 w-full min-h-[24rem] backdrop-blur-sm p-4  flex-col items-center">
          <h2 className="font-bold text-center pb-4 text-2xl">{title}</h2>
          <div className="flex flex-col justify-start h-[16rem]">
            <p className="first-letter:uppercase indent-4 p-4 md:pb-16 pb-6 text-center text-xl">
              {description}
            </p>
            <div className="flex transition-all justify-around">
              {icons ? (
                icons.map((icon, index) => (
                  <Icon Icon={icon.icon} key={index} title={icon.title} />
                ))
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="flex md:justify-evenly justify-between md:p-4 p-2 absolute left-0  bottom-0 w-full ">
            <Tile
              ariaLabel="open live version of the project"
              title="App"
              text="App"
              link={linkApp}
              target="_blank"
              hoverTextColor="hover:text-light-color"
              hoverBgColor="hover:bg-violet"
              hoverShadowColor="hover:shadow-link-violet"
              darkBgColor="dark:bg-violet"
              darkHoverTextColor="dark:hover:text-dark-color"
            />
            <Tile
              ariaLabel="open app's repository"
              title="Repo"
              text="<Code />"
              link={linkCode}
              target="_blank"
              hoverTextColor="hover:text-light-color"
              hoverBgColor="hover:bg-violet"
              hoverShadowColor="hover:shadow-link-violet"
              darkBgColor="dark:bg-violet"
              darkHoverTextColor="dark:hover:text-dark-color"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
