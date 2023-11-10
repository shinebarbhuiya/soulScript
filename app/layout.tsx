import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils'

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "300", "500", "700", "900"] }, )

export const metadata: Metadata = {
  title: 'SoulScript - AI Powered Daily Journaling',
  description: "Your personal daily journaling ally driven by advanced AI. Dive into self-discovery securely and intuitively. Join now and elevate your daily reflection journey.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className} >{children}</body>
        <Toaster />
      </html>
    </ClerkProvider>
    
  )
}
