import React from "react"
import Img from 'gatsby-image'
import Slider from 'react-slick'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import Card from './Card'
import styled from 'styled-components'

const Box = styled.section ` 

    
    width: 100%;
    height: 30%;
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      width: 100%;
   
    }
  
`;

const SlideContainer = styled.div` 

   
    width: 40%;
    height: 20%;
    margin: 0 auto;



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

const FlexRow = styled.div` 
 
  width: 50%;
  margin: 0 auto;
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
    link: 'https://www.netlify.com/docs/teams',
    

   })
  
  return (
        

        <Box>
          <Helmet>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Helmet>
          <SlideContainer>


            <Slider
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={false}
            dots={true} 
            >
              <Page> <Card fill={fill} /></Page>
              <Page>Page 2</Page>
              <Page>Page 3</Page>
              

            </Slider>
          </SlideContainer>

          
        </Box>

       
  )

}

export  default Slide