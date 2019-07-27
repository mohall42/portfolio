import React from "react"
import Navbar from '../components/navbar'
import indexStyles from './index.module.scss'
import Contact from '../components/contactMe'
import About from '../components/about'
import Header from '../components/header'
import Project from '../components/projects'
import styled from 'styled-components'



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





const Index = () => {
  

  
    return(
      
      
      <div className = {indexStyles.html}>
        <Navbar />
        <Header />
        <About />
        <Project />
       
        <Contact />
        
      </div>
    )
  
}


export default Index