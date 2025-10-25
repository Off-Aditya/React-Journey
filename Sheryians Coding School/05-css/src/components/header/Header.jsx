import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <h3>Aditya</h3>
            <button className="btn">Login</button>
        </div>
    )
}

export default Header