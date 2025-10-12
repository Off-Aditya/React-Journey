import React from 'react'

const CurrentTime = () => {

    const now = new Date();
    const time = now.toLocaleTimeString('en-US',{hour12: true});
    const date =now.toLocaleDateString();
    return (
        <p className='lead'>This is the current time :{date}-{time}</p>
    )
}

export default CurrentTime