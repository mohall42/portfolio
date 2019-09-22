import React from 'react'
import withReveal from 'react-reveal/withReveal'
import Slide from 'react-reveal/Slide'
import styled from 'styled-components'
import { device } from './device'



const Section = styled.div` 

    background: #000000;
    color: white;
    max-width: 80%;
    min-height: 100vh;
    position: relative;
    font-size: calc(.5em + .65vw);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    


    .title{
        margin: 2%;
        font-weight: bold;
        padding-top:1%;
    }

    @media (max-width: ${device.tablet}) {

       .title{
           margin-top: 6%;
       }


    }
 
`;

const Container = withReveal(styled.div` 

    max-width:50%;
    margin: 1% auto;
    
    .section{
        border-bottom: 1px solid white;
    }

    @media(max-width: ${device.laptopL}) {
       
        width: 60%;
    }
    @media(max-width: ${device.laptop}) {
        

    }
    @media(max-width: 768px) {
        width: 70%;
        

    }
    @media (max-width: ${device.mobileAll}) {

        width: 90%;


    }

`, <Slide top cascade />);

const FlexContainer = styled.div`

    display: flex;
   justify-content: space-between;
   margin: 5% 0;
    
`;

const Experience = () => {


    return (

        <Section>

            <Container>

                <div className='section'>
                    <FlexContainer>
                        <h3>Tennessesse Technological University</h3>
                        <p>2016 - 2019</p>
                    </FlexContainer>

                    <p>B.S. in Computer Science</p>
                </div>
                <div className='section'>
                    <FlexContainer>
                        <h3>Pellissippi State Community College</h3>
                        <p>2013 - 2016</p>
                    </FlexContainer>

                    <p>Associate of Science</p>
                </div>

            </Container>
        </Section>


    )




}



export default Experience;