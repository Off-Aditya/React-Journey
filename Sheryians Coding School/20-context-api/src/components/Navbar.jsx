import React from 'react'

const NavBar = (props) => {

    const changeTheme = () =>{
        props.setTheme('Dark')
        
    }

    return (
        <div>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default NavBar