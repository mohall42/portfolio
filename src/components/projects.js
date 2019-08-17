import React from "react"
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'
import Card from './card'
import withReveal from 'react-reveal/withReveal'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const Box = styled.section ` 

    width: 100%;
    height: 70%;
    margin: 0 auto;
    display: block;
  
`;


const FlexRow = withReveal(styled.div` 
 
  width: 95%;
  height: 50%;
  display: flex;
  margin: 5% auto;
  flex-wrap: wrap;
  justify-content: space-around;
  
`, <Fade left cascade/>);


const Slide = () =>{

    const data = useStaticQuery (graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { title: { eq: "Project" } } }) {
        edges {
          node {
            frontmatter {
              title
              name
              link
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `)
   

  
  return (
        

        <Box>
          <Helmet>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Helmet>
            <FlexRow>
              {data.allMarkdownRemark.edges.map((edge) =>{
                
                const fill = ({
                  body: edge.node.excerpt,
                  title: edge.node.frontmatter.name,
                  image: edge.node.frontmatter.featuredImage,
                  link: edge.node.frontmatter.link,

                })

                return(
                 
    
                 <Card key={fill.title} fill={fill}/>
                
                )
              }
                
              )}
            </FlexRow>

          
        </Box>

       
  )

}

export default Slide