import React from 'react'
import {Link } from 'gatsby'
import logo from '../images/logo.png'
import navBarstyle from './navbar.module.scss'



const NavBar = () => {
 

    return(
           <div >
               <ul className= {navBarstyle.nav}>
                   <li ><Link to = {"/"}><img className= {navBarstyle.icon} src={logo} alt = 'Michael Hall'></img></Link></li>
                   <li></li>
               </ul>

           </div>
        )
}


export default NavBar;