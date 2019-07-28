import React from "react"
import Navbar from '../components/navbar'
import Contact from '../components/contactMe'
import About from '../components/about'
import Header from '../components/header'
import Project from '../components/projects'
import styled from 'styled-components'
import Background from '../components/background'
import { graphql } from "gatsby";


// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {  
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

const Wrapper = styled.section` 

  @import url(//db.onlinewebfonts.com/c/419fa9c2bf7fadf2bd9edecfe4d8c936?family=Formular);

  font-family: "Formular";
  

   


`;





const Index = ({data}) => {
  

  
    return(
      
      
      
        <Wrapper>

          <Navbar />
          <Header />
          <About />
          <Project />
          <Contact />

        </Wrapper>
        
      
    )
  
}

export const query = graphql` 

query {
  waves: file(relativePath: { eq: "images/ocean.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 300){
        ...GatsbyImageSharpFluid
      }
    }
  }
}


`;



export default Index