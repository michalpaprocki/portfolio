interface Props {
  text: string;
}
const Code = ({ text }: Props) => {
  return (
    <code className="rounded-md bg-black/50 p-[2px] px-2 font-semibold text-light-color">
      {text}
    </code>
  );
};
export default Code;
