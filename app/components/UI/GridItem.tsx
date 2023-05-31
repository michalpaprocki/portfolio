import Tile from "./Tile";

interface Props {
  title: string;
  description?: string;
  image: string;
}

const GridItem = ({ description, title, image }: Props) => {

  
  return (
    // image background | prefferably with scale change on hover
    <div className="overflow-hidden border-l-2 border-solid border-violet-dark dark:border-violet hover:border-violet hover:shadow-link-violet-dark shadow-sm shadow-black hover:dark:shadow-violet text-light-color">
      <div

       style={{'--image-url':`url(/images/${image})`} as React.CSSProperties}
        className={`group bg-[image:var(--image-url)] bg-cover bg-center grid-item flex flex-col min-h-[20rem] items-center  relative saturate-150 grayscale hover:grayscale-0 transition-all duration-300 ease-linear`}
      >
        <div className="group-hover:block hidden bg-black/80 w-full min-h-[20rem] backdrop-blur-sm p-4">
          <h2 className="font-bold text-center text-xl">{title}</h2>
          <div className="flex flex-col justify-between mt-16 h-full">
            <p className="p-1 first-letter:uppercase indent-1">
              Descrition{description}
            </p>
            <span> techno here</span>
          </div>
          <div className="flex justify-evenly p-4 absolute left-0 bottom-0 w-full">
            <Tile text="App" />
            <Tile text="<Code />" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
