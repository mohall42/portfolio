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
    position: relative;
    z-index: 0;


   
`;


const Content = styled.div ` 

    h1{
        font-family: "Formular";
        font-size: 9vmin;
        text-align: center;
    }

    .left{
        padding-bottom: 7%;
    }

    .right{
        padding-top: 7%;
    }

    display: flex;
    justfy-content: flex-end;
    margin: 0;
    position: absolute;
    top: 40%;
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
                 
            <Content>
                <Bounce Top delay={2500}>

                    <h1 className = "left">CompSci Graduate</h1>
                    <Jump count={10} delay={1000}> 
                        <Arrow  alt='' src={arrow}></Arrow>
                    </Jump> 
                    <h1 className = "right">Software Developer</h1>
                    
                </Bounce>
            

            </Content>
                    
                
        </Head> 
    )
}

export default Header