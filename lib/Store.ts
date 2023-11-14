"use client"
import { create } from "zustand"

interface NavStore {
    isSubmitting: boolean;
    onSubmitting: () => void;
    onSubmitted: () => void;
}



export const NavStatus = create<NavStore>((set) => ({
    isSubmitting: false,
    onSubmitting: () => set({isSubmitting: true}),
    onSubmitted: () => set({isSubmitting: false})
}))




