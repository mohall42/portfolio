import React from "react"
import Navbar from '../components/navbar'
import indexStyled from './index.module.scss'
import Contact from '../components/contactMe'
import About from '../components/about'
import Header from '../components/header'

import rec2 from '../images/rec2.svg'





const Index = () => {
  

  
    return(
      
      <div className={indexStyled.body}>
       
        <Navbar />
        

       
        
 
          <Header />
        
         
        <About />

       
        <Contact />
        
      </div>
    )
  
}

export default Index