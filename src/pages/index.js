import React from "react"
import Navbar from '../components/navbar'
import indexStyled from './index.module.scss'
import Contact from '../components/contactMe'
import {graphql, useStaticQuery} from 'gatsby'



const Index = () => {
  const data = useStaticQuery( graphql `
    query{
      markdownRemark{
        frontmatter{
          title
        }
        id
        html
      }
    }
  
  `)

  
    return(
      
      <div className={indexStyled.body}>
      <Navbar />
      <header className={indexStyled.header}>
        <h1>Software Developer</h1>
        <h2>CompSci grad with a passion for buiding for the Web</h2>
      </header>  
      <div>
        <h2> About Me</h2>
       <div> {data.markdownRemark.html} </div>
       
      </div>

       
      <Contact />
        
      </div>
    )
  
}

export default Index