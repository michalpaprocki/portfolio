import LinkSimple from "@/app/components/LinkSimple";

const page = () => {
  return (
    <div className="p-8">
      <h1 className="p-1 text-lg font-semibold">Elixir Snippets</h1>
      <ul className="list-disc p-4">
        <li>
          <LinkSimple
            text="Using Phoenix Liveview with Schemaless Changeset"
            href="/snippets/elixir/liveview-schemaless-changeset"
          />
        </li>
      </ul>
    </div>
  );
};
export default page;
