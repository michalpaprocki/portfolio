import Tile from "./Tile";
import { IconType } from "react-icons/lib";

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
    <div className="overflow-hidden border-l-2 border-solid border-violet-dark dark:border-violet hover:border-violet hover:shadow-link-violet-dark shadow-sm shadow-black hover:dark:shadow-violet text-light-color transition-all 200ms">
      <div
        style={
          { "--image-url": `url(/images/${image})` } as React.CSSProperties
        }
        className={`group bg-[image:var(--image-url)] bg-cover bg-center grid-item flex flex-col min-h-[24rem] items-center  relative saturate-150 grayscale hover:grayscale-0 transition-all duration-300 ease-linear`}
      >
        <div className="group-hover:flex hidden bg-black/80 w-full min-h-[24rem] backdrop-blur-sm p-4  flex-col items-center">
          <h2 className="font-bold text-center pb-4 text-2xl">{title}</h2>
          <div className="flex flex-col justify-start h-[16rem]">
            <p className="first-letter:uppercase indent-4 p-4 pb-12 text-center text-xl">
             {description}
            </p>
            <div className="flex transition-all justify-around">
              {icons ? (
                icons.map((icon, index) => (
                  <div
                    key={index}
                    after-dynamic-value={icon.title}
                    className={`after:content-[attr(after-dynamic-value)] flex flex-col items-center p-1 after:transition-all after:ease-linear after:200ms after:delay-150 after:-translate-y-5 hover:after:translate-y-0 after:opacity-0 hover:after:opacity-100 after:scale-75 hover:after:scale-95 after:font-bold hover:text-violet transition-all delay-100 150ms sm:hover:scale-110 sm:scale-100 scale-50 w-12 text-center hover:scale-75`}
                  >
                    <icon.icon size={"3em"} />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="flex md:justify-evenly justify-between md:p-4 p-2 absolute left-0 bottom-0 w-full">
            <Tile
              text="App"
              link={linkApp}
              hoverBgColor="violet"
              hoverShadowColor="link-violet"
            />
            <Tile
              text="<Code />"
              link={linkCode}
              hoverBgColor="violet"
              hoverShadowColor="link-violet"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
