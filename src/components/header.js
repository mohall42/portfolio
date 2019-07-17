import React from 'react'
import headerStyles from './header.module.scss'


const Header = () => {

    return (

        <header className={headerStyles.header}>
            <div className={headerStyles.content}>
                <h1>Software Developer</h1>
                <h2>CompSci grad with a passion for buiding for the Web</h2>

            </div>
        </header> 
    )
}

export default Header