"use client";
import { useRef, useState } from "react";
import { TbCopy } from "react-icons/tb";
import Portal from "./dynamic/Portal";
import Notification from "./dynamic/Notification";
import Tile from "./dynamic/Tile";
import { SiGithub } from "react-icons/si";
import Icon from "./static/Icon";
import Link from "next/link";
import ResumeDL from "./static/ResumeDL";
const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [notify, setNotify] = useState({ show: false, message: "" });
  const [canSend, setCanSend] = useState(true);

  const refName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refTextArea = useRef<HTMLTextAreaElement>(null);

  const sendMessage = async (name: string, email: string, message: string) => {
    if (name.length == 0) {
      setNotify({ show: true, message: "Please provide a name" });
    } else if (name.length <= 2) {
      setNotify({
        show: true,
        message: "Name should be atleast 3 characters long",
      });
    } else if (email.length == 0 && !email.includes("@")) {
      setNotify({
        show: true,
        message: "Please provide a valid email adress",
      });
    } else if (message.length == 0) {
      setNotify({ show: true, message: "Please provide a message" });
    } else {
      setNotify({ show: true, message: "Sending ..." });
      setCanSend(false);
      const resp = await fetch("/api/send-message", {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
      const parsedResp = await resp.json();
      setCanSend(true);
      setNotify({ show: true, message: parsedResp.message });
    }
  };
  return (
    <section id="contact" className="relative pt-[var(--headerH)] pb-5">
      <div className="flex xl:flex-row xl:items-start items-center justify-center flex-col">
        <div className=" mx-8">
          <h2 className="text-xl font-bold my-10 text-center">
            Contact me ...
          </h2>
          <div className="flex p-4 gap-4 bg-black rounded-md text-light-color shadow-md shadow-dark-color dark:ring-violet-a40 dark:ring-2 dark:ring-inset">
            <span className="p-1 text-xl font-semibold whitespace-nowrap">
              Email :
            </span>

            <a
              aria-label="send an email"
              href="mailto:michalpaprocki@proton.me"
              className="p-1 text-xl font-semibold hover:text-violet transition-all"
            >
              michalpaprocki@proton.me
            </a>

            <button
              aria-label="copy email address"
              title="copy email"
              className="focus:outline-1 outline-dark-color dark:outline-light-color hover:drop-shadow-basic-violet hover:dark:drop-shadow-basic-violet hover:text-violet hover:-translate-y-1 active:text-violet transition-transform "
              onClick={(e) => {
                navigator.clipboard.writeText("michalpaprocki@proton.me");
                setNotify({ show: true, message: "Email adress copied" });
              }}
            >
              <TbCopy size={"2em"} />
            </button>
          </div>
        </div>
        <div className=" mx-8">
          <h2 className="my-10 font-bold text-xl text-center">
            ... drop me a message ...
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-black p-6 rounded-md flex flex-col justify-center items-center text-light-color shadow-md shadow-dark-color dark:ring-violet-a40 dark:ring-2 dark:ring-inset "
          >
            <label
              onClick={() => {
                if (refName.current) refName.current.focus();
              }}
              htmlFor="inputName"
              className="p-2 my-2 font-semibold rounded-md"
            >
              Name:
            </label>
            <input
              ref={refName}
              id="inputName"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              onPaste={(e) => {
                setName(e.currentTarget.value);
              }}
              className="focus:outline-1 focus:outline-blue-500 p-2 text-dark-color rounded-md outline-none shadow-inner shadow-violet-a40 dark:ring-violet-a40 dark:ring-2 dark:ring-inset"
              type="text"
            />
            <label
              onClick={() => {
                if (refEmail.current) refEmail.current.focus();
              }}
              htmlFor="inputEmail"
              className="p-2 my-2 font-semibold rounded-md"
            >
              Contact Email:
            </label>
            <input
              ref={refEmail}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              onPaste={(e) => {
                setEmail(e.currentTarget.value);
              }}
              className="focus:outline-1  focus:outline-blue-500 p-2 text-dark-color rounded-md outline-none shadow-inner shadow-violet-a40 dark:ring-violet-a40 dark:ring-2 dark:ring-inset"
              type="email"
              id="inputEmail"
            />
            <label
              onClick={() => {
                if (refTextArea.current) refTextArea.current.focus();
              }}
              htmlFor="textarea"
              className="p-2 my-2 font-semibold rounded-md"
            >
              Message:
            </label>
            <textarea
              ref={refTextArea}
              onChange={(e) => {
                setMessage(e.currentTarget.value);
              }}
              onPaste={(e) => {
                setMessage(e.currentTarget.value);
              }}
              className="focus:outline-1  focus:outline-blue-500 p-2 text-dark-color my-6 resize-none rounded-md outline-none shadow-inner shadow-violet-a40 dark:ring-violet-a40 dark:ring-2 dark:ring-inset"
              name=""
              id="textarea"
              cols={30}
              rows={10}
            ></textarea>
            {canSend ? (
              <Tile
                ariaLabel="send the message"
                title="send message"
                text="Send"
                darkBgColor="dark:bg-violet"
                darkHoverBgColor="dark:hover:bg-light-color"
                darkHoverTextColor="dark:hover:text-dark-color"
                bgColor="bg-violet"
                textColor="text-light-color"
                hoverTextColor="hover:text-dark-color"
                hoverBgColor="hover:bg-light-color"
                hoverShadowColor="hover:shadow-link-dark"
                animationColor="md:after:shadow-link-light-fat"
                animationShadowColor="md:after:bg-dark-color"
                cursor="cursor-pointer"
                fn={(e) => {
                  sendMessage(name, email, message);
                }}
              />
            ) : (
              <Tile
                ariaLabel="button is disabled"
                title="disabled button"
                text="Sending..."
                darkBgColor="dark:bg-violet"
                darkHoverBgColor="dark:hover:bg-light-color"
                darkHoverTextColor="dark:hover:text-dark-color"
                bgColor="bg-violet"
                textColor="text-light-color"
                hoverTextColor="hover:text-dark-color"
                hoverBgColor="hover:bg-light-color"
                hoverShadowColor="hover:shadow-link-dark"
                animationColor="md:after:shadow-link-light-fat"
                animationShadowColor="md:after:bg-dark-color"
                cursor="cursor-pointer"
              />
            )}
          </form>
        </div>
        <div className=" mx-8 ">
          <h2 className="my-10 font-bold text-xl text-right xl:text-center">
            ... or check out my GitHub profile.
          </h2>
          <div className="flex p-4 gap-4 bg-black rounded-md text-light-color shadow-md shadow-dark-color dark:ring-violet-a40 dark:ring-2 dark:ring-inset justify-center items-center">
            <Link
              aria-label="go to github profile"
              href="https://github.com/str4ng3love"
              target="_blank"
            >
              <Icon
                Icon={SiGithub}
                title="GitHub"
                darkHoverTextColor="dark:hover:text-light-color"
                DarkHoverAfterTextColor="dark:hover:after:text-light-color"
              />
            </Link>
          </div>
          <div className="flex p-4 gap-4 bg-black rounded-md text-light-color shadow-md shadow-dark-color dark:ring-violet-a40 dark:ring-2 dark:ring-inset justify-center items-center">
            <ResumeDL />
          </div>
        </div>
        <div
          onClick={(e) => {}}
          className={`hidden xl:block active:border-2 hover:-hue-rotate-60 opacity-0 absolute blob3 bg-violet-dark-a40 dark:bg-violet-a40 blur-sm animate-blobAround3 left-[25rem] transition-all ease-in-out duration-1000 delay-100 rotate-12`}
        ></div>
      </div>
      {notify.show ? (
        <Portal>
          <Notification
            fn={(e) => {
              e.animationName == "fadeOut"
                ? setNotify({ show: false, message: "" })
                : null;
            }}
            message={notify.message}
          />
        </Portal>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Contact;
