import React from 'react'
import { CornerDownRight } from 'lucide-react';

const Header = () => {
    return (
        <div className='navbar ml-16 mt-8 mr-16 flex justify-between items-center'>
            <div className="logo">
                <button className='text-white font-mono  bg-black font-medium rounded-full p-2.5 pl-4 pr-4'>TARGET AUDIENCE</button>
            </div>

            <div className="items flex gap-2 font-mono text-xl">
                <span><CornerDownRight /></span>
                <span>DIGITAL</span>
                <span>BANKING</span>
                <span>PLATFORM</span>
                
            </div>
        </div>
    )
}

export default Header