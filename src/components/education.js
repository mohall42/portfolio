import React from 'react'
import styled from 'styled-components'


const Section = styled.section` 

    width: 100%;
    height: 50vh;
    font-size: 2vmin;

`;

const Container = styled.div` 

    width:60%;
    margin: 0 auto;

    .section{
        border-bottom: 1px solid #000000;
    }

`;

const FlexContainer = styled.div`

    display: flex;
   justify-content: space-between;
    



`;

const Experience = () => {


    return(

        <Section>
        <h3>Education</h3>
            <Container>
                <div className='section'>
                    <FlexContainer>
                        <h3>Tennessesse Technoogical University</h3>
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