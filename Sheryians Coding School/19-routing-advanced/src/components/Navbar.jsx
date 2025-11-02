import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex py-4 px-8 items-center bg-purple-700 justify-between'>
            <h2 className='text-3xl font-bold' >.Neon</h2>
            <div className="flex gap-10">
                <Link to="/" className='text-lg font-medium' >HOME</Link>
                <Link to="/about" className='text-lg font-medium' >ABOUT</Link>
                <Link to="/product" className='text-lg font-medium' >PRODUCT</Link>
            </div>
        </div>
    )
}

export default Navbar