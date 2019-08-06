import React from 'react'
import withReveal from 'react-reveal/withReveal'
import Slide from 'react-reveal/Slide'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'






const Section = styled.section` 

  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 40vh;
  margin: 0 auto;

  &::after{
        content: '';
        position: absolute;
        top: 100%;
        width: 100%;
        height:50%;
        background: #333333;
        transform-origin: left;
        transform: skewY(-3deg);
        border-top: 20px solid black

    }

@media (max-width: 600px) {
       
  height: 30vh;

}

`;


const WrapperRow = withReveal(styled.div` 

  display: flex;
  width: 90%;
  margin: 0 auto;
  

.column{
  flex: 50%;
  font-family: "Formular";
  font-size: calc(.5em + .75vw);
  
}

.title{

  border-right: 1px solid #000000;

}


.body{
  position: relative;
   left: 2%;

}

@media screen and (max-width: 600px) {
  flex-direction: column;
  .title{
    border-right: none;
  }
  
  .column {
    width: 100%;
  }
}

`, <Slide top />);

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