import { checkCurrentUser } from "@/lib/check-user";
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";



export const GET =async (request:Request) => {

    return NextResponse.json({"status": "working"}, {status: 200})
    
}


const prisma = new PrismaClient();

export const PUT = async (request:Request, { params } : { params : { id: String}}) => {
    const entryId = params.id
    const userId = checkCurrentUser()

    const body = await request.json();
    const { values } = body

    console.log(values)


    const updated = await prisma.entry.update({
        where: {
            id : String(entryId),
            // userTableId: String(userId)
        },
        data: {
            title : values.title,
            entryText: values.entryText,
            date: values.date,
            userTableId : String(userId)
        
        }
    })

    return NextResponse.json(updated, {status: 200})
}