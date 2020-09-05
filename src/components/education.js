import React from 'react'
import withReveal from 'react-reveal/withReveal'
import Slide from 'react-reveal/Slide'
import styled from 'styled-components'
import { device } from './device'

const Section = styled.div` 
    background: #FFFFFF;
    color: white;
    width: 100%vw;
    height: 50vh;
    position: relative;

    .title{
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 71px;
    letter-spacing: 0.1em;
    color: #000000;
    text-transform: uppercase;
    }
`;

const Container = styled.div`
    width: 80vw;
    height: 429px;
    margin: auto;
    background: #595959;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
`;

const Experience = () => {
    return (
        <Section>
            <h1 className="title">Education</h1>
            <Container>

            </Container>
        </Section>
    )
}

export default Experience;