import Navbar from '@/componenets/Navbar'
import React, { ReactNode } from 'react'


const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
export default Layout
