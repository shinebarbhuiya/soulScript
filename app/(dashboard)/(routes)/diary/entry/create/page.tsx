


// import { zodResolver } from "@hookform/resolvers/zod"

// import { useForm } from "react-hook-form"
// import { formSchema } from './constants'
// import * as z from 'zod'
// import { PrismaClient } from '@prisma/client'
import { checkCurrentUser } from "@/lib/check-user";






import { Button } from "@/components/ui/button"


import EntryForm from "@/components/Forms/EntryForm";
// import setSubmitted from "@/lib/setSubmitted";
import { NavStatus } from "@/lib/Store";







// const prisma = new PrismaClient();



const CreateEntryPage = () => {

  
    // const navState = NavStatus();

    const currUserId = checkCurrentUser();
    console.log(currUserId)

    
    // navState.onSubmitted()

   
    


    // setSubmitted(true)

    

   


   
    

    // const form = useForm<z.infer<typeof formSchema>>({
    //     resolver : zodResolver(formSchema),
    //     defaultValues: {
    //         entryText: ""
    //     }
    // })

    // const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //     if (!userId) {
    //         return false
    //     }

    //     const userExists = await prisma.user.findUnique({
    //         where: {
    //             userId: userId
    //         }
    //     })

    //     // const submit = await prisma.
    // }

  return (
   
    <div className="py-4    md:w-3/4 md:m-auto md:mt-6 md:p-4 md:border md:font-bold">
        <h1 className=' py-4 border-b-4 font-bold text-2xl'>Enter Your Entry For Today : </h1>
        {/* {currUserId} */}
        <div className="py-6">
          <EntryForm  />

        </div>
        
        
    </div>
  )
}

export default CreateEntryPage