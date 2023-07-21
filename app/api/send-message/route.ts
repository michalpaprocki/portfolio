import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
interface Body {
  name: string;
  email: string;
  message: string;
}
function isBody(body: any): body is Body {
  return (
    typeof body.name === "string" &&
    typeof body.email === "string" &&
    typeof body.message === "string"
  );
}

export async function POST(req: Request) {
  const body = await req.json();

  if (isBody(body)) {
    const prisma = new PrismaClient();
    try {
      
    const resp = await prisma.message.create({ data:{email: body.email, name: body.name, message: body.message}});
    return NextResponse.json({ message: `Thank You ${body.name}!` });
    } catch (error) {
      if(error){
        return NextResponse.json({ message: `Internal Server Error` }, {status: 500});
      }
    }
  }
  
}
