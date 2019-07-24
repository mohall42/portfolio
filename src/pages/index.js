import React from "react"
import Navbar from '../components/navbar'
import indexStyled from './index.module.scss'
import Contact from '../components/contactMe'
import About from '../components/about'
import Header from '../components/header'
import Project from '../components/projects'







const Index = () => {
  

  
    return(
      
      <div className={indexStyled.body}>
       
        <Navbar />
      
        <Header />
        <About />
        <Project />
       
        <Contact />
        
      </div>
    )
  
}

export default Index