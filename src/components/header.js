import React from 'react'
import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'
import Jump from 'react-reveal/Jump'
import styled from "styled-components"
import arrow from '../images/arrow.svg'

const Head = styled.section `

    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 90vh;
    

`;

const Banner = styled.div`
    
    background: #434343;  /* fallback for old browsers */
    background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



    width: 90%;
    height: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%; 
    transform: translate(-50%, -50%);
    -webkit-clip-path: polygon(0 13%, 100% 0, 100% 87%, 0 100%);
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
    fill: green;

    
`;



const Header = () => {

    return (

        <Head>
            <Slide>

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
            </Slide>
        
        
        </Head> 
    )
}

export default Header