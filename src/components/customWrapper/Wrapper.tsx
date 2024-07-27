import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-gradient-to-t to-[#FFFFFF] from-[#AFA3FF] h-screen w-screen flex items-center justify-center '>
            {children}
        </div>
    )
}

export default Wrapper