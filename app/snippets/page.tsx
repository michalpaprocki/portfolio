import LinkSimple from "../components/LinkSimple";

const page = () => {
  return (
    <div className="flex flex-col items-center pt-8">
      <div className="w-full md:w-[80%]">
        <h2 className="text p-4 text-lg font-bold">
          Mike&apos;s Code Snippets
        </h2>
        <div className="flex gap-2">
          <LinkSimple href="/snippets/js" text="Javascript" />
          <LinkSimple href="/snippets/css" text="CSS" />
          <LinkSimple href="/snippets/elixir" text="Elixir" />
        </div>
      </div>
    </div>
  );
};

export default page;
