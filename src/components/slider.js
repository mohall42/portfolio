import React from "react"
import Img from 'gatsby-image'
import Slider from 'react-slick'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

const Container = styled.div ` 

    width: 100%;
  
`;

const Card = styled.div ` 

  height:40%;
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
      portfolio: file(relativePath: {eq: "test.jpg"}){
        ...fluidImage
      }
    }
  `)

  return (
        


        <Container>
        <Helmet>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Helmet>

        <Slider
                dots={true}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={false}
                swipeToSlide={true}
                arrows={false}
                adaptiveHeight={true}
            >
                <slide><Img fluid={data.portfolio.childImageSharp.fluid} /></slide>
                <Card>Page 2</Card>
                <Card>Page 3</Card>


            </Slider>


        </Container>

       
  )

}

export  default Slide