"use client"




import SingleEntryCard from "@/components/SingleEntryCard";
import { useEffect, useState } from "react"

import axios from "axios";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import CustomLoader from "@/utils/Loader";









const EntryPage = ({ params }: { params: { entryId: string } }) => {
 
  const { toast } = useToast()
  const router = useRouter()


  const [ isDeleteSubmitting, setIsDeleteSubmitting] = useState(false)
  const [ isUpdateSubmitting, setIsUpdateSubmitting] = useState(false)





  

  interface EntryData {
    title: string;
    date: string;
    entryText: string;
  }

  const [isLoading, setIsLoading] = useState(true);
  const [entryData, setEntryData] = useState<EntryData>({
    title: "",
    date: "",
    entryText: "",
  });

  

  // const { userId } = auth();

  useEffect(() => {
    const entryId = params.entryId
    const getEntry = axios.get(`/api/entry/${entryId}`)
      .then((res) => {
        
        setEntryData(res.data)
        
        setIsLoading(false)
        
      })
      .catch((error) => {
       
        console.log(error)
       
      
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [params.entryId])


  const handleDelete = async () => {
    setIsDeleteSubmitting(true)
    
    const entryId = params.entryId
    const deleted = await axios.delete(`/api/delete/${entryId}`)
 
    // .then((res) => {
    //   setDeleteData(res)
    // }).catch((error) => console.log(error))

    console.log(deleted.data.entryText)


    toast({
      title: "Deleted Successfully!",
      description: `'${deleted.data.entryText}' is deleted!`,
    })

    router.push("/diary")
    

  }

  const handleUpdate =async () => {
      setIsUpdateSubmitting(true)
      router.push(`/diary/entry/update/${params.entryId}`)
    
  }

  

  



  return (


   
    
    <div className="py-4  md:w-3/4  md:mx-auto md:mt-6 md:p-4   md:font-bold">
      {/* <h1 className=' py-4 border-b-4 font-bold text-2xl'>This is the title</h1> */}
      {/* {is} */}
      {isLoading ? <div className="flex items-center justify-center text-2xl">  <CustomLoader /> </div> :

        
      
      
      

      <div className="">
        
        
        <SingleEntryCard title={entryData.title} date={entryData.date} entryText={entryData.entryText}  />
        
        <div className="flex justify-between items-center gap-6  ">
            {/* <Button className="w-full my-6">Edit</Button> */}
            <Button  onClick={handleUpdate} className="w-full my-6" disabled={isUpdateSubmitting && true}  >
                    {isUpdateSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                        
                    ) : (
                        <>
                            Update
                        </>
                    )}
              </Button>
            {/* <Button onClick={handleDelete} className="w-full my-6 bg-red-500 text-white">Delete</Button> */}
            <Button  onClick={handleDelete} className="w-full my-6 bg-red-500 hover:bg-red-500/80 text-white" disabled={isDeleteSubmitting && true}  >
                    {isDeleteSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                        
                    ) : (
                        <>
                           Delete
                        </>
                    )}
                </Button>
        </div>  

       
        
      </div>
      }
      
    </div>
  )
}

export default EntryPage