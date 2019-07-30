import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'






const Section = styled.section` 

display: block;
position: relative;
z-index: 0;
box-sizing: border-box;
width: 100%;
height: 40vh;


`;


const WrapperRow = styled.div` 

display: flex;
width: 80%;
margin: 0 auto;
margin-top: 5%;

.column{
  flex: 50%;
  font-family: "Formular";
  font-size: 2vmin;
  
}

.title{

  border-right: 1px solid #000000;

}


.body{
  position: relative;
   left: 2%;

}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

`;

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

return(
  
  <Section>
        <WrapperRow>

              <div className = "column title">
                <h2>About Me</h2>
              </div>
  
              <div className = "column body">
                <p><div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} /></p>
              </div>

        </WrapperRow>      
      </Section>



)


}


export default About