import React from 'react'
import Bounce from 'react-reveal/Bounce'
import Jump from 'react-reveal/Jump'
import styled from "styled-components"
import arrow from '../images/arrow.svg'

const Head = styled.section `

    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;


   
`;

const Banner = styled.div`
    
    background: #434343;  /* fallback for old browsers */
    background: #355C7D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




    width: 90%;
    height: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%; 
    transform: translate(-50%, -50%);
    -webkit-clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 13%, 100% 0, 100% 87%, 0 100%);

   



`;

const Content = styled.div ` 

    h1, h2 {
            
            
        font-size: 2em;
        text-align: center;
        color: white;
    }
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%; 
    transform: translate(-50%, -50%);

`;

const Arrow = styled.img` 

    
    src: url(${props => props.src});
    width: 7%;
    height: 7%;
    transform: rotate(90deg);
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 9%
    

    
`;



const Header = () => {

    return (

        <Head>
            
            
            <Banner> 
              
              
              <Content>
                
  
                      <Bounce bottom delay={2500}>
  
                          <h1>Software Developer</h1>
                          <h2>CompSci grad with a passion for buiding for the Web</h2>
                           <Jump count= '10'> 
                              <Arrow  alt='' src={arrow}></Arrow>
                          </Jump> 
                      </Bounce>
                  
  
              </Content>
            </ Banner >
           
        
        
        </Head> 
    )
}

export default Header