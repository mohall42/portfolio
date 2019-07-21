import React from 'react'
import Bounce from 'react-reveal/Bounce'
import styled from "styled-components"
import arrow from '../images/arrow.svg'

const Head = styled.section `

    display: block;

    h1, h2 {
        
        
        font-size: 2em;
        text-align: center;
        color: white;
    }
    
    box-sizing: border-box;
    width: 100%;
    height: 90vh;
    

    
    

`;

const Content = styled.div ` 

    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%; 
    transform: translate(-50%, -50%);

`;

const Arrow = styled.img` 

src: url(${props => props.src})

fill: white;
rotate: 90deg;

`;


const CcSkew = styled.div` 

    width:100%
    height:100px;
    position:absolute;
    left:0px;
    background:linear-gradient(to right bottom, #823A9C 49%, #fff 50%),    
    linear-gradient(-50deg, #ffffff 16px, #000 0);


`;


const Header = () => {

    return (

        <Head>
            

            <CcSkew/>

            <Content>
                <Bounce bottom delay={2500}>

                    <h1>Software Developer</h1>
                    <h2>CompSci grad with a passion for buiding for the Web</h2>
                    <Arrow alt=' ' src={arrow}></Arrow>
                </Bounce>

            </Content>
        
        </Head> 
    )
}

export default Header