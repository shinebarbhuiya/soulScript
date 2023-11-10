import { checkCurrentUser } from "@/lib/check-user";
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";


const prisma = new PrismaClient();


export const GET = async (request : Request) => {

    const userId = checkCurrentUser();

    const getEntries = await prisma.entry.findMany({
        where: {
            userTableId: String(userId)
        }
    })

    return NextResponse.json(getEntries, {status: 200})
  
}

