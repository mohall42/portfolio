import React from 'react'
import withReveal from 'react-reveal/withReveal'
import Slide from 'react-reveal/Slide'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { device } from './device'





const Section = styled.section` 

  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 27vmax;
  margin: 0 auto;



${'' /*   &::after{
        content: '';
        position: absolute;
        top: 80%;
        width: 100%;
        height:50%;
        background: #333333;
        transform-origin: right;
        transform: skewY(-3deg);
        border-top: 20px solid black

    } */}

@media (max-width: ${device.laptop} ){
  height: 30vmax;
}



@media (min-width: ${device.mobileL}) and (max-width: ${device.tablet})  {
       
  height: 40vmax;

}


@media (max-width:600px){

  height: 40vmax;
}

`;


const WrapperRow = withReveal(styled.div` 

  display: flex;
  width: 60%;
  margin: 10vmax auto;
  font-size: calc(10px + .65vw);
  

.column{
  flex: 50%;
  
}

.title{

  border-right: 1px solid #000000;

}

.body{
  position: relative;
  left: 2%;

}


@media(max-width: 1440px) {
    width: 80%;

}
@media(max-width: 1024px) {
    width: 80%;

}
@media(max-width: 768px) {
  width: 90%;
}

@media (max-width: 600px) {
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
  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter:{title: { eq: "About Me"} }){
        html
       
     }
   }
   
`);

  return (

    <Section>
      <WrapperRow>

        <div className="column title">
          <h2>About Me</h2>
        </div>

        <div className="column body" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />


      </WrapperRow>
    </Section>



  )


}


export default About