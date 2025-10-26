import React from 'react'
import RightCardContent from './RightCardContent'
import RightCardImage from './RightCardImage'

const RightCard = () => {
    return (
        <div className='h-full w-80 overflow-hidden relative rounded-4xl'>
            <RightCardImage />
            <RightCardContent />
        </div>
    )
}

export default RightCard