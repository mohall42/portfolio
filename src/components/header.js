import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Navbar from './Navbar'
import Jump from 'react-reveal/Jump'
import styled from "styled-components"
import arrow from '../images/arrow.svg'
import BackgroundImage from './Background'


const StyledBackgroundImage = styled(BackgroundImage)` 


    &::after{
        content: '';
        position: absolute;
        top: 85%;
        width: 100%;
        height: 30%;
        background: white;
        transform-origin: left;
        transform: skewY(-3deg);
        border-top: 20px solid black; 

    }

`; 

const Head = styled.section `

    
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 80%;
    position: relative;
    overflow:hidden;
    z-index: 0;
    
    

   
`;


const Content = styled.div ` 

   ${'' /*  font-size: 4vmin; */}
    color: white;
    font-size: calc(10px + .65vw);
    font-weight: bold;
    margin: 0, 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%; 
    transform: translate(-50%, -50%);

   

`;

const Arrow = styled.img` 

    
    src: url(${props => props.src});
    width: calc(20px + 3vw);;
    height: calc(20px + 3vw);
    transform: rotate(90deg);
    display: block;
    position: absolute;
    top: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 9%
    
`;



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
            <StyledBackgroundImage tag="section" fluid={data.file.childImageSharp.fluid} height="100vh" > 

            <Navbar/>
            
            
            <Content>
               
                
               <h1>Hello, I'm Michael</h1>
               <p>I'm a newly graduated Computer Science major looking for his first steps</p>
               
             
               
               

            </Content>
             
            {/*  <Jump count={10} delay={1000}> 
                    <Arrow  alt='' src={arrow}></Arrow>
            </Jump>  */}
            


            
               
            </StyledBackgroundImage>
        </Head> 
        
    )
}

export default Header