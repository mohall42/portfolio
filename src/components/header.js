import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { device } from './device'
import styled from "styled-components"
/* import arrow from '../images/arrow.svg' */
import BackgroundImage from './background'

const Content = styled.div` 
  position: absolute;
  width: 318px;
  height: 341px;
  left: 111px;
  top: 138px;

  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 107px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  
  color: #FFFFFF;

  border: 3px solid #000000;
  
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
    <BackgroundImage tag="section" title="header" fluid={data.file.childImageSharp.fluid} height="100vh" >
      <Content>
        <h1>Michael Odane Hall</h1>
      </Content>
    </BackgroundImage>
  )
}

export default Header