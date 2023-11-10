import { NextResponse } from "next/server"

import { createUser } from "@/lib/crudOperation";
import { PrismaClient } from "@prisma/client";
import { checkCurrentUser } from "@/lib/check-user";

// import { auth } from "@clerk/nextjs";





const prisma = new PrismaClient();

export const POST = async (request: Request) => {


    const body = await request.json();
    const { values } = body

    
    // const { userId } = auth();

    const currentUser = checkCurrentUser();
    console.log(`current user - ${currentUser}`)
    
    // const values = params.values;

    const isUserCreated = await createUser();

 

    if (isUserCreated) {

        // const currUser = await prisma.user.findUnique({
        //     where: {
        //        userId: String(currentUser)
        //     }
        // })

        const createEntry = await prisma.entry.create({
            data: {...values, userTableId:  currentUser},
            
        })
        return NextResponse.json(createEntry, {status: 200})
    }

    return NextResponse.json(values, {status: 200})

}


export const GET =async (request: Request) => {
    return NextResponse.json({'status': 'working'}, {status: 200})
}