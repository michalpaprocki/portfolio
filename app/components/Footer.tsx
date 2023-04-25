import { TbCopyrightOff } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <footer className="h-[10rem] bg-black flex flex-col justify-center items-center">
        <div className="w-[80%] text-light-color p-8 flex justify-center items-center whitespace-pre-wrap">
          <span>MP </span>
          <TbCopyrightOff /> <span> 2023</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
