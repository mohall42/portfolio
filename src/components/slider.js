import React from "react"
import Img from 'gatsby-image'
import Slider from 'react-slick'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import Card from '../components/card'
import styled from 'styled-components'

const Container = styled.div ` 

    
    width: 800px;
    height: 800px;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      width: 100%;
   
    }
  
`;


export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

const Slide = () =>{

    const data = useStaticQuery (graphql`
    query {
      portfolio: file(relativePath: {eq: "images/test.jpg"}){
        ...fluidImage
      }
    }
  `)
   
  const fill = ({
    title:'Portfolio',
    body: 'Something',
    image: data.portfolio,
    

   })
  
  return (
        
    



        <Container>
          <Helmet>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Helmet>

          <Card
             title={fill.title}
              body={fill.body}
              image={fill.image}>   
              </Card>
               
       


        </Container>

       
  )

}

export  default Slide