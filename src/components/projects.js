import React from "react"
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import Card from './Card'
import styled from 'styled-components'

const Box = styled.section ` 

    
    width: 100%;
    height: 70%;
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

const FlexRow = styled.div` 
 
  width: 100%;
  height: 50%;
  display: flex;
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
            <FlexRow>
                <Card fill={fill} />
            </FlexRow>

          
        </Box>

       
  )

}

export  default Slide