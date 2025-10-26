import React from 'react'
import RightCardContent from './RightCardContent'
import RightCardImage from './RightCardImage'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl'>
            <RightCardImage img={props.img} />
            <RightCardContent id={props.id} color={props.color} tag={props.tag} intro={props.intro} />
        </div>
    )
}

export default RightCard