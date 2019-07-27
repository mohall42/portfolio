import React from "react"
import styled from 'styled-components'
import Slider from 'react-slick'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

import Img from 'gatsby-image'


const Section = styled.section` 
  
display: block;
box-sizing: border-box;
width: 100%;
height: 60vh;


`;

const Container = styled.div ` 

    width: 100%;
  
`;

const Card = styled.div ` 

    width: 20%;
    height: 20%;
  
`;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 9000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;


const Project = () => {

    const data = useStaticQuery (graphql`
    query {
      portfolio: file(relativePath: {eq: "images/ocean.jpg"}){
        ...fluidImage
      }
    }
  `)


    return (

        <Section>
            <Helmet>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Helmet>

            <Container>
                <Slider
                    dots={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={false}
                >
                <Card><Img fluid={data.portfolio.childImageSharp.fluid}/></Card>
                <Card>Page 2</Card>
                <Card>Page 3</Card>


                </Slider>
            </Container>


        </Section>

    )
}

export default Project







