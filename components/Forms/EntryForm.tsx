"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


import { Loader2 } from "lucide-react"

import { useToast } from "@/components/ui/use-toast"



import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"

import { formSchema } from "./constants"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { cn } from "@/lib/utils"
import { createUser } from "@/lib/crudOperation"

import  axios  from 'axios'

import { useRouter } from 'next/navigation'




const EntryForm = () => {

    const { toast } = useToast()

    const router = useRouter()

    const [date, setDate] = useState<Date | undefined>(new Date())

    const [ isSubmitting, setIsSubmitting] = useState(false)


   

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            entryText: "",
            todayDate: date

        },
    })


    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        // createUser()
        setIsSubmitting(true)

        const response = await axios.post("/api/create", {
            values: {
                title : values.title,
                entryText : values.entryText,
                date: values.todayDate,
            }
        })

        const entryId = await response.data.id
        toast({
            title: "Successfully added the entry! ",
            description: "You should be proud of yourself to keep the memory written!",
        })

        form.reset();
        
        
        console.log(response.data)
        router.push(`/diary/entry/${entryId}`)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg ">Enter Title: </FormLabel>
                            <FormControl className="bg-gray-800/10">
                                <Input className="" placeholder="Dear diary.. I had an amazing day today." {...field} />

                            </FormControl>



                            <FormDescription>

                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="entryText"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg ">Make your entry here: </FormLabel>
                            <FormControl className="bg-gray-800/10">
                                <Textarea className="h-52" placeholder="Write something impactful about your day here ." {...field} />

                            </FormControl>



                            <FormDescription>

                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="todayDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg px-1">Select The Date: </FormLabel>
                            <FormControl className="mt-6">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single" 
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            // disabled={(date) =>
                                            //     date > new Date() || date < new Date("1900-01-01")
                                            // }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>

                            </FormControl>



                            <FormDescription>

                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button  className="w-full" type="submit" disabled={isSubmitting && true}  >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                        
                        
                    ) : (
                        <>
                            Make Entry
                        </>
                        
                    )}
                </Button>
                {/* <Button disabled className="w-full" type="submit"><Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait</Button> */}
            </form>
        </Form>
    )
}

export default EntryForm