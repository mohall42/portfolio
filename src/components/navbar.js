import React from 'react'
import {Link } from 'gatsby'
import logo from '../images/logo.svg'
import navBarstyle from './navbar.module.scss'
import rec1 from '../images/rec1.svg'



const NavBar = () => {
 

    return(
           <div >
               <div className= {navBarstyle.container}>
                    <Link to = {"/"}><img className= {navBarstyle.icon} src={logo} alt = 'Michael Hall'></img></Link>
                    <img  src={rec1} alt=''></img>
               </div>

           </div>
        )
}


export default NavBar;