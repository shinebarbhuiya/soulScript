"use client"
import { useUser } from "@clerk/nextjs";
import EntryCard from "@/components/EntryCard";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomLoader from "@/utils/Loader";







const DashboardPage = () => {

  const [ isLoading,  setIsLoading ] = useState(true);
  const [ entries, setEntries ] = useState<any[]>([]);
   

  useEffect(() => {
      const req = axios.get("/api/entries")
        .then((res) => {
          setEntries(res.data)
          setIsLoading(false)
        })

        .catch((err) => {
          console.log(err)
          setIsLoading(false)
        })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  const { user } = useUser();
  return (
    <div className="py-4  md:w-3/4 md:m-auto md:mt-6 md:p-4  md:font-bold">
      
      <h1 className=" text-xl border border-gray-600 p-2 text-center border-solid md:hidden"><span className="font-bold">🦊 Aloha!</span> {user?.fullName} 🦊</h1>

      <div>
        <div className="font-md text-2xl py-6 md:text-3xl">Your Entries 👇</div>

        

        {
          // Custom loader for Md screen or bigger because it's showing in Grid 
        (isLoading === true) && (
          
          <div className=" hidden  items-center justify-center w-full h-96  md:flex">
            <CustomLoader />
          </div>
        
        )}
        <div className="grid md:grid md:grid-cols-2 gap-4">

        {  
        //Mobile Loader 
        isLoading === true ? (
          
            <div className=" flex  items-center justify-center  w-full h-96 md:hidden">
              <CustomLoader />
            </div>
          
        ) : entries.length === 0 ? (
          <div className="text-xl  font-mono flex items-center  h-16"> Sorry, you don't have any entries! Please create one. </div>
        ) : (
          entries.map((entry) => (
            <EntryCard key={entry.id} title={entry.title} entryText={entry.entryText} date={entry.date} entryId={entry.id} />
          ))
        )}
        </div>
        
      </div>
      
    </div>
  )
}

export default DashboardPage