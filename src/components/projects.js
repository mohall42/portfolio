import React from "react"
import styled from 'styled-components'



const Section = styled.section` 
  
display: block;
box-sizing: border-box;
width: 100%;
height: 100vh;


`;

const Frame = styled.div ` 

    height: 80%;
    width: 80%:
    margin: 0, auto;

    background: #1D4350;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #A43931, #1D4350);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #A43931, #1D4350); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



`;



const Project = () => {

    return (

        <Section>

            <Frame>

                <p>Projects</p>
            </Frame>


        </Section>

    )




}

export default Project


