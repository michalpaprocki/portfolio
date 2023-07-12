interface Props {
  message: string;
  fn?: (e:React.AnimationEvent)=> void
}

const Notification = ({message,fn}:Props) => {
  return (
    <div onAnimationEnd={fn} className="opacity-0 select-none fixed flex justify-center items-center bottom-32 left-[50%] translate-x-[-50%]  bg-violet-dark hover:bg-violet-dark-a80  dark:bg-violet dark:hover:bg-violet-a80 text-light-color rounded-md font-bold text-lg shadow-link-violet-dark dark:shadow-link-violet w-1/2 h-16 sm:w-1/4 min-w-[200px] whitespace-nowrap animate-fadeInOut transition-all">
      {message}
    </div>
  )
}

export default Notification