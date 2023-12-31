import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { websiteUrl } from "@/constants"
import { useState } from "react"
import { Loader2 } from "lucide-react"

const EntryCard = ({ title, entryText, date, entryId} : {title: any, entryText:any, date: any, entryId: any}) => {

    const form = useForm()
    const normalDate = new Date(date);
    const formattedDate = normalDate.toDateString();
    const customFormattedDate = formattedDate.replace(/(\w+) (\w+) (\d+) (\d+)/, '$1, $2 $3 $4');


    const [isLoading, setIsLoading] = useState(false);


    const diaryText = entryText
    const truncatedDiaryText = diaryText.length > 300 ? `${diaryText.substring(0, 300)}...` : diaryText;


    const handleClick = () => {
        setIsLoading(true)
    }

    return (
        <Card className="flex flex-col bg-gray-800/20  justify-between">
            <CardHeader>
                <CardTitle className="text-2xl font-md ">{title}</CardTitle>
                <CardDescription>{customFormattedDate}</CardDescription>
                
            </CardHeader>
            <CardContent>
                <p>{truncatedDiaryText}</p>
            </CardContent>
            <CardFooter className=" ">
                <Link href={`/diary/entry/${entryId}`} className="block w-full" >
                    
                    {/* <Button onClick={handleClick} className="w-full " >
                            Read
                    </Button> */}

                    <Button  onClick={handleClick} className="w-full" disabled={isLoading && true}  >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                        
                    ) : (
                        <>
                           Read
                        </>
                    )}
                </Button>
                </Link>
                
            </CardFooter>
        </Card>

    )
}

export default EntryCard