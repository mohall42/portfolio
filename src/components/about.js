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

  const Title = styled.div` 
    
  display: block;
    float: right;
    width: 40%;
    height:20%;
    zindex: 1;
    color: white;
    text-align right;
    
    background: #434343;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    -webkit-clip-path: polygon(0 51%, 100% 100%, 100% 0);
    clip-path: polygon(0 51%, 100% 100%, 100% 0);
  
  `;


  const Banner = styled.div`
    
  background: #1D4350;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #A43931, #1D4350);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #A43931, #1D4350); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  

    display: block;
    width: 90%;
    height: 50%;
    margin: 0 auto;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 85%);
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);


    h2{

      color: white;
      text-align: center;
    }


`;


    return(

      <Section>
              <Title> 
                <h1>
                About Me

                </h1>
                  
                  
                </Title>
  


          <Banner>

              <h2><div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}> 
               </div></h2>
          
          </Banner>
      </Section>



    )


}


export default About