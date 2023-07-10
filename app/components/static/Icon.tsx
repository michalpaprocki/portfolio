import { IconType } from "react-icons/lib";

interface Props {
  Icon: IconType;
  title: string;
  darkHoverTextColor?: string;
  DarkHoverAfterTextColor?:string;
}

const Icon = ({ Icon, title, darkHoverTextColor="dark:hover:text-light-color", DarkHoverAfterTextColor="dark:hover:after:text-light-color" }: Props) => {
  return (
    <div
      after-dynamic-value={title}
      className={`after:content-[attr(after-dynamic-value)] sm:m-2 m-1 flex flex-col items-center p-1 after:transition-all after:ease-linear after:200ms after:delay-150 after:-translate-y-5 hover:after:translate-y-0 after:opacity-0 hover:after:opacity-100 after:scale-75 hover:after:scale-95 after:font-bold hover:text-violet transition-all delay-100 150ms sm:hover:scale-110 sm:scale-100 scale-75 w-12 hover:rotate-3 after:-rotate-3 text-center hover:scale-90 dark:text-violet ${darkHoverTextColor} ${DarkHoverAfterTextColor}`}
    >
      <Icon size={"3em"} />
    </div>
  );
};

export default Icon;
