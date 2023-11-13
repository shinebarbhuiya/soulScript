"use client"
import UpdateForm from "@/components/Forms/UpdateForm"
import axios from "axios";

import { useEffect, useState } from "react";






const UpdatePage = ({ params } : { params : { id: String}}) => {
  const [ isSubmitting, setIsSubmitting] = useState(false)

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

  useEffect(() => {
    const entryId = params.id
    const getEntry = axios.get(`/api/entry/${entryId}`)
      .then((res) => {
        
        setEntryData(res.data)
        
        setIsLoading(false)
        
      })
      .catch((error) => {
       
        console.log(error)
        
      
      })


  }, [])

  




  return (
    <div className="py-4    md:w-3/4 md:m-auto md:mt-6 md:p-4 md:border md:font-bold">
        <h1 className=' py-4 border-b-4 font-bold text-2xl'>Update Your Entry : </h1>
        {/* {currUserId} */}

        {isLoading ? <div> Loading form . . . </div> :
          <div className="py-6">
                    <UpdateForm  updateData={entryData}    />
          </div>
        }
        
        
        
    </div>
  )
}

export default UpdatePage