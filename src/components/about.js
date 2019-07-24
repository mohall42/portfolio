import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'


const About = () => {
  
  
  const data = useStaticQuery( graphql `
  query{
    markdownRemark{
      frontmatter{
        title
      }
      id
      html
    }
  }
  
  `);
  const Section = styled.section` 
  
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;

  
  `;


  const Banner = styled.div`
    
    background: #434343;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




    width: 90%;
    height: 50%;
    margin: 0 auto;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 85%);
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);


   



`;


    return(

      <Section>



          <Banner>
              <h2> About Me</h2>
              <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}> 
               </div>
          
          </Banner>
      </Section>



    )


}


export default About