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
    width: 80%;
    margin: 0, auto;
    background: #434343;  /* fallback for old browsers */
  
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


