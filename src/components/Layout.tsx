import React from 'react'
import NavBar from './NavBar'

function Layout({ children, ...props }: React.PropsWithChildren): React.ReactElement {
    return (
        <div className='flex flex-col justify-start items-start w-screen h-screen bg-slate-200'>
            <NavBar />
            <div className='w-full h-[cacl(100vh-80px)] overflow-y-auto pt-10'>
               {children}
            </div>
        </div>
    )
}

export default Layout
