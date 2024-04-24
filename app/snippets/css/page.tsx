import LinkSimple from "@/app/components/LinkSimple";

const page = () => {
  return (
    <div className="p-8">
      <h1 className="p-1 text-lg font-semibold">CSS Snippets</h1>
      <ul className="list-disc p-4">
        <li>
          <LinkSimple
            text="Moving Grid Animation"
            href="/snippets/css/moving-grid"
          />
        </li>
        <li>
          <LinkSimple text="Spinners" href="/snippets/css/spinners" />
        </li>
      </ul>
    </div>
  );
};
export default page;
