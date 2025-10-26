import React from 'react'
import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
    console.log(props.color)
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor: props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor: props.color}} className=' text-white font-medium px-3 py-2 rounded-full'><ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent