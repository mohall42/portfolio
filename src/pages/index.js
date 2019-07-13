import React from "react"
import Navbar from '../components/navbar'
import {grapql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export const onClientEntry = () => {  
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }


const Index = () =>{


  const BackgroundSelection = ({className}) =>(
    <StaticQuery query={grapql`
    
      query {
        fileName: file(relativePath: { eq: "images/ocean.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxHeight: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
    } 
    render={data => {
      const imageData = data.
    }}
    return (

        <div>
            <Navbar />

        </div>
    )
} 

export default Index