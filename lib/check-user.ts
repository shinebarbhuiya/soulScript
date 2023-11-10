import { auth } from "@clerk/nextjs";

export const checkCurrentUser =  () => {
  
    const { userId } =  auth();
    return userId
}

