import LinkSimple from "../components/LinkSimple";

const page = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="w-full md:w-[80%]">
        <h1 className="text p-4 text-lg font-bold">
          Mike&apos;s Code Snippets
        </h1>
        <ul className="flex gap-2">
          {/* <LinkSimple href="/snippets/js" text="Javascript" /> */}
          <li>
            <LinkSimple href="/snippets/css" text="CSS" />
          </li>
          <li>
            <LinkSimple href="/snippets/elixir" text="Elixir" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
