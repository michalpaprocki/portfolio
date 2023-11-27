'use client'

import { useState } from "react"

const CheckMessages = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [notify, setNotify] = useState({ show: false, error: false, message: '' })
    const [messages, setMessages] = useState([])
    const handleClick = async () => {
        try {
            const resp = await fetch("/api/check-messages", {
                method: "POST",
                body: JSON.stringify({ name: name, password: password })
            })
            const messages = await resp.json()
            if (messages.error) {
                setNotify({ show: true, error: true, message: messages.error })
            } else {


                if (typeof messages.messages === "string") {
                    setNotify({ error: false, message: messages.messages, show: true })
                } else {
                    setNotify({ error: false, message: "", show: false })
                    setMessages(messages.messages)
                    console.log(messages.messages)
                }

            }

        } catch (error) {
            console.log()
        }
    }
    return (<>
        <div className="p-4 w-fit flex flex-col gap-2 ">
            <div className="flex justify-between w-[40ch] p-2">
                <label className="font-bold">User :</label>
                <input className="text-dark-color outline-none ring-2 ring-violet-dark-a40" type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            </div>
            <div className="flex justify-between w-[40ch] p-2">
                <label className="font-bold">Password :</label>
                <input className="text-dark-color outline-none ring-2 ring-violet-dark-a40" type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
            </div>
            <button onClick={() => handleClick()} className="p-2 bg-violet dark:bg-violet text-light-color font-semibold hover:bg-dark-color hover:dark:bg-light-color hover:text-light-color hover:dark:text-dark-color transition-all">Check</button>
        </div>
        {notify.show ? <div className={`${notify.error ? "bg-red-500" : ""}  w-fit p-4 self-center`}>
            <span className={``}>{notify.message}</span>
        </div> : <></>}
        {messages.length === 0 ? <></> :
            <div className="mt-8 flex flex-col gap-4 p-4">
                {messages.map((m: { name: string, message: string, email: string, createdAt:string }, i) =>
                    <div key={i} className="bg-slate-700 p-2 flex flex-col gap-2">
                        <div className="flex gap-2">
                            <span>{m.name}</span>
                            <span>{m.email}</span>
                            <span>{m.createdAt.slice(0, -5).replaceAll("T", " ")}&nbsp; GMT</span>
                        </div>
                        <span className="indent-2 p-2">{m.message}</span>
                    </div>)}
            </div>}
    </>
    )
}

export default CheckMessages