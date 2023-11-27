import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


async function handler(req: Request) {
    if (req.method === "POST") {
        const body = await req.json()
        console.log(body)
        if (!body || typeof body.name !== "string" || typeof body.password !== "string") {
            return NextResponse.json({ error: "Bad request" }, { status: 400 })
        }
        const prisma = new PrismaClient()
        const user = await prisma.user.findFirst({ where: { name: body.name, password: body.password } })
        if (!user) {
            return NextResponse.json({ error: "Bad Credentials" }, { status: 403 })
        }
        const messages = await prisma.message.findMany({})
  
        if(messages.length > 0){
            return NextResponse.json({ messages: messages })
        } else {
            return NextResponse.json({ messages: 'There are no messages' })
        }

    } else {
        return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
    }
}

export {handler as POST}