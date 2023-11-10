import * as z from "zod"


export const formSchema = z.object({
    title: z.string().min(1, {
        message: "Please entery the title of the entry."
    }),

    entryText: z.string().min(1, {
        message: "Entry can't be empty my fella!",
    }),
    todayDate: z.date({
        required_error: "Please select a date to make the entry.",
    }),

    
  })