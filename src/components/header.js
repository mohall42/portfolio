import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { device } from './device'
import styled from "styled-components"
/* import arrow from '../images/arrow.svg' */
import BackgroundImage from './background'


const StyledBackgroundImage = styled(BackgroundImage)` 

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 96.67%, #FFFFFF 100%);
 
   

`;



const Content = styled.div` 

   ${'' /*  font-size: 4vmin; */}
    color: white;
    font-size: calc(16px + 1vw);
    position: absolute;
    font-weight: bold;
    margin: 0, 50%;
    top: 50%;
    left: 50%;
    margin-right: -50%; 
    transform: translate(-50%, -50%);
    

    h1, p{
     ${'' /*  position: absolute; */}
      font-style: italic;
      margin-bottom: 3%;
      text-shadow: 0 0 10px #000;
    }

    @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}){
      margin-left: 2%;


    }

   

`;


const Header = () => {

  const data = useStaticQuery(graphql` 

    query {
      file(relativePath: { eq: "images/background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    
    `)

  return (



    <StyledBackgroundImage tag="section" title="header" fluid={data.file.childImageSharp.fluid} height="100vh" >




      <Content>


        <h1>Hello, I'm Michael Hall </h1>
        <p>A newly graduated Computer Science major</p>


      </Content>






    </StyledBackgroundImage>


  )
}

export default Header