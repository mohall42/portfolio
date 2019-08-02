import React from 'react'
import Jump from 'react-reveal/Jump'
import styled from "styled-components"
import arrow from '../images/arrow.svg'
import BackgroundImage from '../components/backgroundImg'

const Head = styled.section `

    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow:hidden;
    z-index: 0;
    
    &::before{
        content: '';
        position: absolute;
        top: 80%;
        left: -50%;
        width: 100%;
        height:5%;
        background: #000;
        transform-origin: right;
        transform: skewY(8deg);

    }
    &::after{
        content: '';
        position: absolute;
        top: 80%;
        right: -50%;
        width: 100%;
        height:5%;
        background: #000;
        transform-origin: left;
        transform: skewY(-8deg);

    }

   
`;


const Content = styled.div ` 

   ${'' /*  font-size: 4vmin; */}
    font-size: calc(10px + 1.5vw);
    font-weight: bold;
    margin: 0;
    position: absolute;
    top: 35%;
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
    margin-left: auto;
    margin-right: auto;
    margin-top: 9%
    

    
`;
export const query = graphql` 

query {
  header: file(relativePath: { eq: "images/Header.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}


`;


const Header = () => {



    return (
       
            
    

        <Head>
                  <BackgroundImage/>
            <Content>
               
                
                    <h1>Hello, I'm Michael</h1>
                    <p>I'm a newly graduated Computer Science major looking for his first steps</p>
                    
                  
                <Jump count={10} delay={1000}> 
                    <Arrow  alt='' src={arrow}></Arrow>
                </Jump> 
                    

            </Content>
                    
                
        </Head> 
    )
}

export default Header