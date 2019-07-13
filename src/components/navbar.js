import React from 'react'
import {Link } from 'gatsby'
import logo from '../images/logo.png'
import menuLogo from './navIcon.png'
import navBarstyle from './navbar.module.scss'



const NavBar = () => {
 

    return(
           <div >
               <ul className= {navBarstyle.nav}>
                   <li ><Link to = {"/"}><img className= {navBarstyle.icon} src={logo}></img></Link></li>
                   <li></li>
               </ul>

           </div>
        )
}


export default NavBar;