import Tile from "./Tile";

interface Props {
  title: string;
  description?: string;
}

const GridItem = ({ description, title }: Props) => {
  return (
    <div className="p-4 flex flex-col items-center border-l-2 border-solid border-violet-dark dark:border-violet hover:border-violet hover:shadow-link-violet-dark dark:shadow-violet transition-all duration-200">
      <Tile text={title} />
      <div className="flex flex-col w-full"
      >
        <p className="p-1 first-letter:uppercase indent-1">
          Descrition{description}
        </p>
        <span>img goes to bg on hover:bg-scale ↓↑</span>
        <span> techno here</span>
        <span>challenges here</span>
      </div>
      <div className="flex justify-evenly p-4">
        <Tile text="App" />
        <Tile text="<Code />" />
      </div>
    </div>
  );
};

export default GridItem;
