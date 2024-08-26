import LinkSimple from "@/app/components/LinkSimple";

const page = () => {
  return (
    <div className="p-8">
      <h1 className="p-1 text-lg font-semibold">Javascript Snippets</h1>
      <ul className="list-disc p-4">
        <li>
          <LinkSimple
            text="Javascript click away"
            href="/snippets/js/js-clickaway"
          />
        </li>
        <li>
          <LinkSimple
            text="Theme switcher"
            href="/snippets/js/theme-switcher"
          />
        </li>
      </ul>
    </div>
  );
};
export default page;
