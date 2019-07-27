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

html{

  background: #232526;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-blend-mode: multiply;
    

}
   


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