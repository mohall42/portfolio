import React from "react"
import {Helmet} from 'react-helmet'
import Contact from '../components/contactMe'
import About from '../components/about'
import Header from '../components/header'
import Projects from '../components/projects'
import Education from '../components/education'
import styled from 'styled-components'


const Wrapper = styled.div` 

  @import url(//db.onlinewebfonts.com/c/419fa9c2bf7fadf2bd9edecfe4d8c936?family=Formular);

  font-family: "Formular";
  

  h1{
    font-size: calc(16px + 2vw);
  }
    margin: 0;
    padding: 0;
    border: 0;
  
  width: 100%;
  

`;

const Index = () => {
  

  
    return(
      
       
        <Wrapper> 
        <Helmet title="Michaels-Portfolio" />
          <Header />
          <About />
          <Education />
          <Projects />
          <Contact />

        </Wrapper>
        
      
    )
  
}





export default Index