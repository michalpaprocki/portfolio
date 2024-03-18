const Blobs = () => {
  return (
    <div>
      <div
        className={` hover:hue-rotate-30  absolute blob animate-blobAround1 bg-violet-dark-a40 dark:bg-violet-a40 blur-sm transition-all duration-500 delay-100  `}
      ></div>
      <div
        className={`opacity-0 absolute blob2 bg-violet-dark-a40 dark:bg-violet-a40 blur-sm animate-blobAround2 lg:opacity-100 transition-all duration-500 delay-100`}
      ></div>
      <div
        className={`active:border-sky-400 active:border-2 hover:-hue-rotate-90 opacity-0 absolute blob3 bg-violet-dark-a40 dark:bg-violet-a40 blur-sm animate-blobAround3  left-[20rem] transition-all ease-in-out duration-1000 delay-100 `}
      ></div>
    </div>
  );
};

export default Blobs;
