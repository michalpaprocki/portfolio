"use client";

import { useState } from "react";

const CheckMessages = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState({
    show: false,
    error: false,
    message: "",
  });
  const [messages, setMessages] = useState([]);
  const handleClick = async () => {
    try {
      const resp = await fetch("/api/check-messages", {
        method: "POST",
        body: JSON.stringify({ name: name, password: password }),
      });
      const messages = await resp.json();
      if (messages.error) {
        setNotify({ show: true, error: true, message: messages.error });
      } else {
        if (typeof messages.messages === "string") {
          setNotify({ error: false, message: messages.messages, show: true });
        } else {
          setNotify({ error: false, message: "", show: false });
          setMessages(messages.messages);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex w-fit flex-col gap-2 p-4 ">
        <div className="flex w-[40ch] justify-between p-2">
          <label className="font-bold">User :</label>
          <input
            className="text-dark-color outline-none ring-2 ring-violet-dark-a40"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className="flex w-[40ch] justify-between p-2">
          <label className="font-bold">Password :</label>
          <input
            className="text-dark-color outline-none ring-2 ring-violet-dark-a40"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button
          onClick={() => handleClick()}
          className="bg-violet p-2 font-semibold text-light-color transition-all hover:bg-dark-color hover:text-light-color dark:bg-violet hover:dark:bg-light-color hover:dark:text-dark-color"
        >
          Check
        </button>
      </div>
      {notify.show ? (
        <div
          className={`${
            notify.error ? "bg-red-500" : ""
          }  w-fit self-center p-4`}
        >
          <span className={``}>{notify.message}</span>
        </div>
      ) : (
        <></>
      )}
      {messages.length === 0 ? null : (
        <div className="mt-8 flex flex-col gap-4 p-4">
          {messages.map(
            (
              m: {
                name: string;
                message: string;
                email: string;
                createdAt: string;
              },
              i,
            ) => (
              <div key={i} className="flex flex-col gap-2 bg-slate-700 p-2">
                <div className="flex gap-2">
                  <span>{m.name}</span>
                  <span>{m.email}</span>
                  <span>
                    {m.createdAt.slice(0, -5).replaceAll("T", " ")}&nbsp; GMT
                  </span>
                </div>
                <span className="p-2 indent-2">{m.message}</span>
              </div>
            ),
          )}
        </div>
      )}
    </>
  );
};

export default CheckMessages;
