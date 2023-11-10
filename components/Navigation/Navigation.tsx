"use client"
import { cn } from "@/lib/utils"
import { Caveat } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Loader2, PenSquare } from "lucide-react"
import { ModeToggle } from "../toggle"
import { UserButton } from "@clerk/nextjs"
import { useState } from "react"
import { useRouter } from 'next/navigation'


const caveat = Caveat({subsets: ['latin']})

const Navigation = () => {
    const router = useRouter()

    const [ isSubmitting, setIsSubmitting] = useState(false)

    const handleClick = () => {
        setIsSubmitting(true)
        router.push("/diary/entry/create")
        setIsSubmitting(false)
    }

  return (
    <>
        <div className="py-4 ">
            <div className="flex justify-between items-center">
                <Link href='/diary' >
                    <div className={cn("font-bold text-3xl", caveat.className)}>
                        <div className="hidden md:block border-solid border-2 px-3 border-black bg-gray-100 dark:bg-black dark:border-white">
                            SoulScript
                        </div>
                        <div className="md:hidden border-solid border-2 pl-2 pr-3 border-black  dark:bg-black dark:border-white  flex items-center ">
                            Ss
                        </div>
                    </div>
                </Link>
                
                
                <div className="flex gap-3 items-center">
                    <UserButton afterSignOutUrl="/" />
                    <ModeToggle />
                    
                        <Button className="flex gap-2"  onClick={handleClick} disabled={isSubmitting}>

                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait
                                </>
                            ) : (
                                <>
                                 <PenSquare />
                                Write Entry
                                </>
                            )}
                            
                               
                            
                        </Button>
                        {/* <Button disabled className="w-full" type="submit"><Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait</Button> */}
                    
                    
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Navigation