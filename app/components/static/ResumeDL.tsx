import Link from "next/link";
import { BsFiletypePdf } from "react-icons/bs";

const ResumeDL = () => {
  return (
    <div className="bg-black rounded-md text-light-color shadow-md shadow-dark-color dark:ring-violet-a40 dark:ring-2 dark:ring-inset">
      <Link
        aria-label="go to resume"
        href="/files/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-4 gap-4 hover:text-violet transition-all text-sm"
      >
        <p className="">Resume</p>
        <BsFiletypePdf size={"2em"} />
      </Link>
    </div>
  );
};
export default ResumeDL;
