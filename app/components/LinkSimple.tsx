import Link from "next/link";

interface Props {
  text: string;
  href: string;
}

const LinkSimple = ({ text, href }: Props) => {
  return (
    <Link
      className="p-2 transition hover:text-violet-dark dark:hover:text-violet"
      href={href}
    >
      {text}
    </Link>
  );
};
export default LinkSimple;
