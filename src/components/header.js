import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Navbar from './navbar'
import {device} from './device'
/* import Jump from 'react-reveal/Jump' */
import styled from "styled-components"
/* import arrow from '../images/arrow.svg' */
import BackgroundImage from './background'


const StyledBackgroundImage = styled(BackgroundImage)` 


   

`; 

const Head = styled.section `

    
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    overflow:hidden;
    z-index: 0;

    &::after{
        content: '';
        position: absolute;
        top: 97%;
        width: 100%;
        height: 20%;
        background: white;
        transform-origin: left;
        transform: skewY(-3deg);
        border-top: 20px solid black; 

      @media (min-width: ${device.mobileM}) and (max-width: ${device.tablet})  {
       
       top: 94%;
     
     }

     @media(max-width: ${device.mobileS})
     {
       top: 90%;
     }
   

    }
    
    

   
`;


const Content = styled.div ` 

   ${'' /*  font-size: 4vmin; */}
    color: white;
    font-size: calc(16px + 1vw);
    font-weight: bold;
    margin: 0, 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%; 
    transform: translate(-50%, -50%);
    

    h1{
      font-style: italic;
      margin-bottom: 3%;
    }

    @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}){
      margin-left: 2%;


    }

   

`;

/* const Arrow = styled.img` 

    
    src: url(${props => props.src});
    width: calc(20px + 3vw);;
    height: calc(20px + 3vw);
    transform: rotate(90deg);
    display: block;
    position: relative;
    top: 100%;
    margin: 0 auto;
    
`;
 */


const Header = () => {

    const data = useStaticQuery(graphql` 

    query {
      file(relativePath: { eq: "images/background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    
    `)

    return (
       
        
        <Head>
            <StyledBackgroundImage tag="section" title="header" fluid={data.file.childImageSharp.fluid} height="100vh" > 

            <Navbar/>
            
            
            <Content>
               
                
               <h1>Hello, Michael Hall </h1>
               <p>A newly graduated Computer Science major</p>
               
             
               
               
           {/*   <Jump count={10} delay={1000}> 
                    <Arrow  alt='' src={arrow}></Arrow>
            </Jump>  */}

            </Content>
             
            


            
               
            </StyledBackgroundImage>
        </Head> 
        
    )
}

export default Header