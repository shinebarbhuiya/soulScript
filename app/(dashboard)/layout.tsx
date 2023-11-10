
import Navigation from '@/components/Navigation/Navigation'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider"
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Dashboard - SoulScript ',
    description: "Dashboard of the most powerful journaling platform ever.",
  }

const DashboardLayout = ( {children} : { children : React.ReactNode}) => {
  return (
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
      <div className="h-full container flex flex-col justify-between">
         
            
            
          <Navigation />
        
          {children}
        
        
        <div className=''>
          <div className='flex items-center justify-center py-6 '>
            <Footer />
          </div>
          
        </div>
        
      </div>  
       
    </ThemeProvider>
    
  )
}

export default DashboardLayout