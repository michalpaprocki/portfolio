interface Props {
  message: string;
  fn?: (e:React.AnimationEvent)=> void
}

const Notification = ({message,fn}:Props) => {
  return (
    <div onAnimationEnd={fn} className=" p-2 opacity-0 select-none fixed flex justify-center items-center bottom-32 left-[50%] translate-x-[-50%]  bg-violet hover:bg-violet-a80   text-light-color rounded-md font-bold text-lg shadow-link-violet-dark dark:shadow-link-violet max-w-[36ch] h-16 min-w-[200px] whitespace-nowrap animate-fadeInOut transition-all">
      {message}
    </div>
  )
}

export default Notification