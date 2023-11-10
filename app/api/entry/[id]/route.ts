

import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export const GET = async (request: Request, { params } : { params : { id: string}}) => {

    // const json = await request.json();
    // const { body } = json
    const entryId = params.id

    const getEntry = await prisma.entry.findUnique({
        where: {
            id: entryId
        }
    })


    return NextResponse.json(getEntry, {status: 200})
    
}