import React from "react"
import Navbar from '../components/navbar'
import indexStyled from './index.module.scss'
import Contact from '../components/contactMe'
import About from '../components/about'
import Header from '../components/header'
import styled from 'styled-components'

const CcSkew = styled.div` 

    width:100%
    height:100px;
    position:absolute;
    left:0px;
    background:linear-gradient(to right bottom, #823A9C 49%, #fff 50%),    
    linear-gradient(-50deg, #ffffff 16px, #000 0);


`;






const Index = () => {
  

  
    return(
      
      <div className={indexStyled.body}>
       
        <Navbar />
        

       
        
 
          <Header />
         {/*  <CcSkew/> */}
        
         
        <About />

       
        <Contact />
        
      </div>
    )
  
}

export default Index