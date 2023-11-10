import { checkCurrentUser } from "./check-user"
import { PrismaClient } from '@prisma/client'




const prisma = new PrismaClient();



export const createUser = async () => {


    
  
    
    // Data Needed 
    const currentUserId =  checkCurrentUser();
    // console.log(String(`slslslsl=  - ${currentUserId}`))
    

    const isUserAlreadyInDb = await prisma.user.findUnique({
        where: {
            userId: String(currentUserId)
        }
    });


    if (!isUserAlreadyInDb) {
        const createUserInDb =  await prisma.user.create({
            data: {userId: String(currentUserId) }
        })

        return createUserInDb
    } else {
        return true
    }
  
}

