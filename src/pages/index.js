import React from "react"
import {Helmet} from 'react-helmet'
import Contact from '../components/contactMe'
import About from '../components/about'
import Header from '../components/header'
import Projects from '../components/projects'
import Education from '../components/education'
import styled from 'styled-components'


const Wrapper = styled.div` 

  
  

  h1{
    font-size: calc(16px + 2vw);
  }

  html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}

`;

const Index = () => {
  

  
    return(
      
       
        <Wrapper> 
        <Helmet title="Michaels-Portfolio" >
          
        </Helmet>
          <Header />
          <About />
          <Education />
          <Projects />
          <Contact />

        </Wrapper>
        
      
    )
  
}





export default Index