import React from 'react'
import { device } from './device'
import styled from "styled-components"
import BackgroundImage from './background'



const Content = styled.div` 

h1{position: absolute;
width: 318px;
height: 341px;
left: 10%;
top: 10%;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 72px;
line-height: 107px;
letter-spacing: 0.1em;
text-transform: uppercase;

color: #FFFFFF;
}

p{
position: absolute;
width: 328px;
height: 214px;
right: 10%;
bottom: 20%;

font-family: Oswald;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 53px;
text-align: right;
letter-spacing: 0.1em;
text-transform: uppercase;

color: #FFFFFF;

}


  @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}){
    margin-left: 2%;


  } 

`;

const AboutCard = styled.div`

position: absolute;
width: 524px;
height: 650px;
left: 106px;
top: 957px;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);

  `;

const Header = () => {



  return (


    <BackgroundImage>

      <Content>
        <h1>Michael Odane Hall </h1>
        <p>A newly graduated Computer Science major</p>


      </Content>

      <AboutCard>
        <h3>about me</h3>


      </AboutCard>

    </BackgroundImage>
  )



}

export default Header


