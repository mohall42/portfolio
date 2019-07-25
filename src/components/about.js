import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'






const Section = styled.section` 

display: block;
position: relative;
z-index: 0;
box-sizing: border-box;
width: 100%;
height: 80vh;


`;

const Container = styled.div` 



`;

const WrapperRow = styled.div` 

display: flex;
width: 80%;
margin: 0 auto;
margin-top: 5%;

.column{
  flex: 50%;
  color: white;
  font-family: "Formular";
  font-size: 1.5vmax;
  
}

.title{

  border-right: 6px solid #000000;

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
                <h1>About Me</h1>
              </div>
  
              <div className = "column body">
                <h2><div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}> 
                </div></h2>
              </div>

        </WrapperRow>      
      </Section>



)


}


export default About