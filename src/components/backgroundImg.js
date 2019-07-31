import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Navbar from './navbar'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, props }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "ocean.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
          <Navbar />
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection