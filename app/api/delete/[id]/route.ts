import { checkCurrentUser } from "@/lib/check-user";
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";



const prisma = new PrismaClient();


export const DELETE = async (request: Request, { params } : { params: { id: String}}) => {
    const entryId = params.id
    const currUser = checkCurrentUser();

    const deleted = await prisma.entry.delete({
        where: {
            id: String(entryId),
            userTableId: String(currUser)
        }
    })

    return NextResponse.json(deleted, {status: 200})
}
