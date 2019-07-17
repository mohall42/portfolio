import React from 'react'
import headerStyles from './header.module.scss'
import Zoom from 'react-reveal/Zoom'


const Header = () => {

    return (

        <header className={headerStyles.header}>
            


            <div className={headerStyles.content}>
                <Zoom>

                    <h1>Software Developer</h1>
                    <h2>CompSci grad with a passion for buiding for the Web</h2>
                </Zoom>

            </div>
            
        </header> 
    )
}

export default Header