"use client";
import { useEffect, useState } from "react";
import { TbCopy } from "react-icons/tb";
import Portal from "./dynamic/Portal";
import Notification from "./dynamic/Notification";
import Tile from "./dynamic/Tile";
const Contact = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [message, setMessage ] = useState<string>()
  const [notify, setNotify ] =useState(false)
  return (
    <section id="contact" className="relative pt-[var(--headerH)] pb-5">
      <div className="flex flex-col items-center justify-center">
        <h5 className="p-8 text-xl font-bold mb-8">Contact me</h5>
        <div className="flex p-4 gap-4 bg-black rounded-md text-light-color">
          <span className="p-1 text-lg ">Email :</span>

          <span className="p-1 text-lg ">Actual email adress</span>
          <span
            className=" hover:drop-shadow-basic-light hover:-translate-y-1 active:text-violet transition-transform "
            onClick={(e) => {
              navigator.clipboard.writeText("Actual email adress");
              setShow(true);
            }}
          >
            <TbCopy size={"2em"} />
          </span>
        </div>
        <h6 className="p-8 font-semibold text-lg">... or drop me a message:</h6>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-black p-6 rounded-md flex flex-col justify-center items-center text-light-color"
        >
          <label className="p-2 my-2 font-semibold rounded-md">Name:</label>
          <input onChange={(e)=>{setName(e.currentTarget.value)}} className="p-2 text-dark-color rounded-md outline-none" type="text" />
          <label className="p-2 my-2 font-semibold rounded-md">Contact Email:</label>
          <input onChange={(e)=>{setEmail(e.currentTarget.value)}} className="p-2 text-dark-color rounded-md outline-none" type="email" name="" id="" />
          <label  className="p-2 my-2 font-semibold rounded-md">Message:</label>
          <textarea
            onChange={(e)=>{setMessage(e.currentTarget.value)}}
            className="p-2 text-dark-color my-6 resize-none rounded-md outline-none"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <Tile text="Send" darkBgColor="dark:bg-violet" darkHoverBgColor="dark:hover:bg-light-color" darkHoverTextColor="dark:hover:text-dark-color" bgColor="bg-violet" textColor="text-light-color" hoverTextColor="hover:text-dark-color" hoverBgColor="hover:bg-light-color" hoverShadowColor="hover:shadow-link-dark" animationColor="md:after:shadow-link-light-fat" animationShadowColor="md:after:bg-dark-color" cursor="cursor-pointer" fn={(e)=>{
            console.log(name, email, message)
            setNotify(true)
          }}/>
        </form>
      </div>
      {show ? (
        <Portal
          children={
            <Notification
              fn={(e) => {
                e.animationName == "fadeOut" ? setShow(false) : null;
              }}
              message="Email Copied"
            />
          }
        />
      ) : (
        <></>
      )}
      {notify ? (
        <Portal
          children={
            <Notification
              fn={(e) => {
                e.animationName == "fadeOut" ? setNotify(false) : null;
              }}
              message="Message sent"
            />
          }
        />
      ) : (
        <></>
      )}
    </section>
  );
};

export default Contact;
