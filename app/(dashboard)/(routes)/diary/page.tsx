"use client"
import { useUser } from "@clerk/nextjs";
import EntryCard from "@/components/EntryCard";
import axios from "axios";
import { useEffect, useState } from "react";







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
        
  }, [])

  

  const { user } = useUser();
  return (
    <div className="py-4  md:w-3/4 md:m-auto md:mt-6 md:p-4 md:border md:font-bold">
      
      <h1 className=" text-xl border border-gray-600 p-2 text-center border-solid md:hidden"><span className="font-bold">🦊 Aloha!</span> {user?.fullName} 🦊</h1>

      <div>
        <div className="font-md text-2xl py-6 md:text-3xl">Your Entries 👇</div>
        <div className="grid md:grid md:grid-cols-2 gap-4">

          {isLoading ? 
          
            <div>Loading . . .</div> :


            (entries.map((entry) => (
              <EntryCard key={entry.id} title={entry.title} entryText={entry.entryText} date={entry.date} entryId={entry.id} />
            )))
          }
        </div>
        
      </div>
      
    </div>
  )
}

export default DashboardPage