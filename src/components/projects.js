import React from "react"
import styled from 'styled-components'
import Slider from 'react-slick'
import {Helmet} from 'react-helmet'






const Section = styled.section` 
  
display: block;
box-sizing: border-box;
width: 100%;
height: 60vh;


`;

const Container = styled.div ` 

    width: 100%;
  
`;

const Page = styled.div ` 

    width: 100%;
  
`;



const Project = () => {

    return (

        <Section>
            <Helmet>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Helmet>

            <Container>
                <Slider
                slidesToShow={1}
                slidesToScroll={1}
                infinite={false}
                >
                <Page>Page 1</Page>
                <Page>Page 2</Page>
                <Page>Page 3</Page>


                </Slider>
            </Container>


        </Section>

    )
}

export default Project


