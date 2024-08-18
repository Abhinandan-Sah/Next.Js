import { NextRequest } from "next/server"
import {PrismaClient} from "@prisma/client"

const client = new PrismaClient();

export function GET(){
    return Response.json({
        email: "avi@gmail.com",
        name: "Avi",
    })
}
export async function POST(req: NextRequest){
    //extract the body
    const body = await req.json(); 
    await client.user.create({
        data: {
            name: body.name,
            username: body.username,
            password: body.password
        }
    })

    // store the body in the database
    console.log(body)


    return Response.json({
        message: "You are logged in!"
    })
}
