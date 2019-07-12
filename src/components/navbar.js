import React from 'react'
import {Link } from 'gatsby'
import logo from '../images/logo.png'
import navStyles from './navbar.module.scss'
import Menu from '../components/navIcon'


const NavBar = () => {
 
    
    

    return(
            <div >
                <ul className = {navStyles.nav}>
                     <li>
                         <Link to='/'><img src={logo} alt = ''></img></Link>

                     </li> 
                     <li>
                         <button className = {navStyles.icon}>
                             <Menu />
                         </button>
                     
                     </li>
                </ul>
            </div>
            )
}


export default NavBar;