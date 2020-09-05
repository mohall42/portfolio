import React from 'react'
import withReveal from 'react-reveal/withReveal'
import Slide from 'react-reveal/Slide'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { device } from './device'





const Section = styled.section` 

  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 27vmax;
  margin: 0 auto;

  @media (max-width: ${device.laptop} ){
    height: 30vmax;
  }

  @media (min-width: ${device.mobileL}) and (max-width: ${device.tablet})  {     
    height: 40vmax;
  }

  @media (max-width:600px){
    height: 40vmax;
  }

`;


const Card = withReveal(styled.div` 
  possition: absolute;
  width: 524px;
  height: 650px;
  
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

`, <Slide top />);

const About = () => {
  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter:{title: { eq: "About Me"} }){
        html
     }
   }
   
`);

  return (
    <Section>
      <Card>
        <h1>About Me</h1>
        <div className="column body" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Card>
    </Section>
  )
}


export default About