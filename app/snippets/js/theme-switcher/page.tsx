import Snippet from "@/app/components/Snippet";
import Code from "@/app/components/static/Code";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-2 py-8">
      <h1 className="mx-auto py-3 text-xl capitalize">Theme Switcher</h1>
      <div className="flex flex-col pb-10">
        <p className="my-8 w-80p self-center indent-1">
          Many people spend countless hours in front of a screen, prolonged
          exposure to bright color may lead to eye fatigue. One of the best QoL
          features that we can have included in our project, is dark mode nad a
          simple theme switcher. The plan is to check the&nbsp;
          <Code text={'window.matchMedia("(prefers-color-scheme: dark)'} />
          &nbsp;property and add a global css class to the html tag. Later, we
          will build a component that will allow the user to save the choosen
          theme in browser&apos;s&nbsp;
          <Link
            className="underline underline-offset-4 transition hover:cursor-pointer hover:text-violet"
            href={`https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API`}
            target="_blank"
            title="MDM web docs"
          >
            Web Storage API
          </Link>
          .
        </p>
        <h2 className="mx-auto py-8 text-lg capitalize">
          Detecting user preference
        </h2>
        <p className="my-8 w-80p self-center indent-1">
          Our first course of action is to find out whether the user prefers
          dark mode and set the styles accordingly, i&apos;m using Tailwind here
          with&nbsp;
          <Link
            className="underline underline-offset-4 transition hover:cursor-pointer hover:text-violet"
            href={
              "https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually"
            }
            target="_blank"
            title="Tailwind docs"
          >
            `selector` strategy
          </Link>
          , but you can get a similar effect using&nbsp;
          <Link
            className="underline underline-offset-4 transition hover:cursor-pointer hover:text-violet"
            target="_blank"
            title="W3schools docs"
            href={`https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp`}
          >
            plain CSS
          </Link>
          . To achieve this all we need is this simple JS script:
        </p>
        <Snippet
          code={`
        if (window.matchMedia("(prefers-color-scheme: dark)") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
`}
          header="theme.js"
          language="javascript"
        />

        <p className="my-8 w-80p self-center indent-1">
          Next, we want to run the script before any content (
          <Link
            className="underline underline-offset-4 transition hover:cursor-pointer hover:text-violet"
            target="_blank"
            title="MDM web docs"
            href={`https://developer.mozilla.org/en-US/docs/Glossary/IIFE`}
          >
            IIFE
          </Link>
          ) by running it in the head element. This will prevent&nbsp;
          <Link
            className="underline underline-offset-4 transition hover:cursor-pointer hover:text-violet"
            target="_blank"
            title="Wikipedia definition"
            href={`https://en.wikipedia.org/wiki/Flash_of_unstyled_content`}
          >
            FOUC
          </Link>
          . Additionally, we&apos;re including <Code text="themeSwitcher.js" />,
          which will be implement next :
        </p>

        <Snippet
          code={`
                  <html>
                    <head>
                      <script src="theme.js"></script>
                      <script src="themeSwitcher.js" type="module"></script>
                    </head>
                    <body>
                    </body>
                  </html>
              `}
          header="index.html"
          language=""
        />

        <h2 className="mx-auto py-8 text-lg capitalize">
          Building interface and logic
        </h2>
        <p className="my-8 w-80p self-center indent-1">
          Now that we have it running, we can start implementing switcher&apos;s
          functionality. We&apos;ll build a dropdown menu, that will allow the
          user to choose and apply their desired theme and save it in
          browser&apos;s local storage. With logic in place, we can now turn our
          attention to cosmetics, let&apos;s animate the menu by alternating
          it&apos;s height and implement a simple click away function.
        </p>

        <Snippet
          header="index.html"
          code={`
    <header
      class="flex justify-center bg-white text-black dark:bg-black dark:text-white"
    >
      <div class="relative flex w-fitflex-col">
        <button
          class="flex h-12 w-24 flex-col items-center justify-center font-semibold uppercase transition-all hover:bg-slate-500"
          id="theme"
        >
          Theme
        </button>

        <ul
          tabindex="-1"
          id="themeMenu"
          class="absolute top-12 flex h-0 flex-col justify-between overflow-hidden bg-stone-200 dark:bg-stone-950 transition-all duration-200"
        >
          <li>
            <button
              id="os"
              class="w-24 h-12 select-none whitespace-nowrap font-mono font-semibold hover:bg-slate-500"
              type="button"
            >
              System
            </button>
          </li>
          <li>
            <button
              id="dark"
              class="w-24 h-12 select-none whitespace-nowrap font-mono font-semibold hover:bg-slate-500"
              type="button"
            >
              Dark
            </button>
          </li>
          <li>
            <button
              id="light"
              class="w-24 h-12 select-none whitespace-nowrap font-mono font-semibold hover:bg-slate-500"
              type="button"
            >
              Light
            </button>
          </li>
        </ul>
      </div>
    </header>
                    `}
          language="html"
        />
        <Snippet
          header="themeSwitcher.js"
          code={`
                    const darkBtn = document.getElementById("dark")
                    const lightBtn = document.getElementById("light")
                    const osBtn = document.getElementById("os")

                    osBtn.addEventListener("click", ()=>{
                      localStorage.removeItem("theme");
                      if (window.matchMedia("(prefers-color-scheme: dark)")) {
                        document.documentElement.classList.add("dark");
                      } else {
                        document.documentElement.classList.remove("dark");
                      }
                    })

                    darkBtn.addEventListener("click", ()=> {
                        localStorage.setItem("theme", "dark")
                        document.documentElement.classList.add('dark')
                    })

                    lightBtn.addEventListener("click", ()=> {
                        localStorage.setItem("theme", "light")
                        document.documentElement.classList.remove('dark')
                    })

                    // theme menu

                    const themeBtn = document.getElementById("theme")
                    const themeMenu = document.getElementById("theme_header")
                    if(themeBtn){
                      themeBtn.addEventListener("click", ()=> toggleTheme())
                    }

                    const toggleTheme = () => {
                      if(themeMenu.classList.contains("h-0")){
                          themeMenu.classList.replace("h-0", "show_theme")
                        } else {
                          themeMenu.classList.replace("show_theme", "h-0")
                        }
                    }

                    // click away

                    const closeTheme = (e) => {
                        
                      if(!themeBtn.contains(e.target) && themeMenu.classList.contains("show_theme")){
                        themeMenu.classList.replace("show_theme", "h-0")
                      }
                    }  
                        
                    window.addEventListener("click", (e) => {
                      closeTheme(e)
                    })
                    `}
          language="javascript"
        />

        <Snippet
          code={`
              .show_theme {
                height: 150%;
              }
`}
          header="style.css"
          language="css"
        />
      </div>
    </div>
  );
};
export default page;
