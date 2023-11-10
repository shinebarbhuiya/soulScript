"use client"




import SingleEntryCard from "@/components/SingleEntryCard";
import { useEffect, useState } from "react"

import axios from "axios";




const EntryPage = ({ params }: { params: { entryId: string } }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [entryData, setEntryData] = useState<any>('');

  

  // const { userId } = auth();

  useEffect(() => {
    const entryId = params.entryId
    const getEntry = axios.get(`/api/entry/${entryId}`)
      .then((res) => {
        setEntryData(res.data)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))


  }, [])



  return (
    <div className="py-4  md:w-3/4 md:m-auto md:mt-6 md:p-4 md:border md:font-bold">
      {/* <h1 className=' py-4 border-b-4 font-bold text-2xl'>This is the title</h1> */}
      {/* {is} */}
      {isLoading ? <div> Loading . . . </div> :
    
        <SingleEntryCard title={entryData.title} date={entryData.date} entryText={entryData.entryText}  />
      }
      
    </div>
  )
}

export default EntryPage