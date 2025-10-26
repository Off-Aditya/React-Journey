import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
    return (
        <div className='py-10 px-18 flex gap-10 h-[90vh] bg-purple-300 items-center'>
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default Page1Content