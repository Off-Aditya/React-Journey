import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div id='right' className='h-full p-6 w-2/3 flex rounded-4xl overflow-x-auto flex-nowrap gap-10 scroll-auto'>
            {props.users.map((item, idx) =>(
                <RightCard key={idx} id={idx} img={item.img} color={item.color} tag={item.tag} intro={item.intro} />    
            ))}
        </div>
    )
}

export default RightContent