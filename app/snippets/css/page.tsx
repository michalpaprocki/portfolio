import LinkSimple from "@/app/components/LinkSimple";

const page = () => {
  return (
    <div className="p-8">
      <h3 className="p-1 text-lg font-semibold">CSS Snippets</h3>
      <ul>
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
