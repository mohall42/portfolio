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

    div{
        border-bottom: 1px solid #000000
    }

`;

const Experience = () => {


    return(

        <Section>
        <h3>Education</h3>
            <Container>
                <div>
                    <h3>Tennessesse Technoogical University</h3>
                    <p>B.S. in Computer Science</p>
                </div>
                <div>
                    <h3>Pellissippi State Community College</h3>
                    <p>Associate of Science</p>
                </div>

            </Container>
        </Section>


    )




}



export default Experience;