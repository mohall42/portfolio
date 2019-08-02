import React from 'react'
import withReveal from 'react-reveal/withReveal'
import Slide from 'react-reveal/Slide'
import styled from 'styled-components'



const Section = withReveal(styled.section` 

    width: 100%;
    height: 50vh;
    font-size: calc(.5em + .75vw);

    .title{
        margin: 0 2%;
        font-weight: bold;
    }

    @media screen and (max-width: 600px) {

       
        height: 40vh;

    }

`, <Slide top cascade />);

const Container = withReveal(styled.div` 

    width:60%;
    margin: 0 auto;

    .section{
        border-bottom: 1px solid #000000;
    }

    @media screen and (max-width: 600px) {

        width: 90%;


    }

`, <Slide top cascade />);

const FlexContainer = styled.div`

    display: flex;
   justify-content: space-between;
    



`;

const Experience = () => {


    return(

        <Section>
        <h2 className="title">Education</h2>
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