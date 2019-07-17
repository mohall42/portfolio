import React from "react"
import Navbar from '../components/navbar'
import indexStyled from './index.module.scss'
import Contact from '../components/contactMe'
import About from '../components/about'
import Header from '../components/header'
import Zoom from 'react-reveal/Zoom'



const Index = () => {
  

  
    return(
      
      <div className={indexStyled.body}>
        <Navbar />
        <Zoom>

          <Header />
        </Zoom>
         
        <About />

       
        <Contact />
        
      </div>
    )
  
}

export default Index