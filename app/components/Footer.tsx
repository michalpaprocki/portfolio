import { TbCopyrightOff } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <footer className="h-[10rem] bg-black flex justify-center">
        <div className="w-[80%] text-light-color p-8 flex justify-center items-center whitespace-pre-wrap">
          <span>MP </span>
          <TbCopyrightOff /> <span> 2023 </span>
          <span className="after:pl-1 pr-1 after:content-['💓'] after:animate-heartPulse after:text-lg after:absolute whitespace-pre-wrap">
            Made with  
          </span>
       
          <span className="translate-x-[40%]  before:content-['🔥']  before:text-lg after:content-['☕'] after:text-lg"> and </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
