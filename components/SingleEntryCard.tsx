
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { cn } from "@/lib/utils"

import { Indie_Flower } from "next/font/google"
import parse from 'html-react-parser'



const indie = Indie_Flower({ subsets: ['latin'], weight: ["400"] })

const SingleEntryCard = ({title, date, entryText} : { title : string, date: string, entryText: string}) => {


    const normalDate = new Date(date);
    const formattedDate = normalDate.toDateString();
    const customFormattedDate = formattedDate.replace(/(\w+) (\w+) (\d+) (\d+)/, '$1, $2 $3 $4');

    const formattedText = entryText.split('\n').map((line, index) => [
      line,
      <br key={index} />,
    ]);


  return (
    <Card className="bg-gray-800/20  font-mono">
        <CardHeader className="">
          <CardTitle className="border-b-4 pb-2 text-2xl 	">{title}</CardTitle>
          <CardDescription> {customFormattedDate}</CardDescription>
        </CardHeader>
        <CardContent >
          <p className={cn("font-normal") }>{formattedText}</p>
        </CardContent>
        <CardFooter className="block  justify-center items-center ">
          <p className="font-normal text-sm text-center ">💥 Live A Happy Life! 💥</p>
        </CardFooter>
      </Card>
  )
}

export default SingleEntryCard