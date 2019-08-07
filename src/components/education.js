import React from 'react'
import withReveal from 'react-reveal/withReveal'
import Slide from 'react-reveal/Slide'
import styled from 'styled-components'



const Section = styled.div` 

    background: #333333;
    color: white;
    position: relative;
    width: 100%;
    height: 60vmin;
    font-size: calc(.5em + .65vw);
    

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height:25%;
        top: 100%;
        background: #333333;
        transform-origin: bottom right;
        transform: skewY(3deg);
        border-bottom: 20px solid black;
    }

    .title{
        margin: 2%;
        font-weight: bold;
        padding-top:1%;
    }

    @media(max-width: 1440px) {
     
        height: 30vmax;

    }
    @media(max-width: 1024px) {
        
        height: 35vmax;

    }
    @media(max-width: 768px) {
        
        height: 35vmax;
        margin-top: 3%;

    }
    @media (max-width: 600px) {

       .title{
           margin-top: 6%;
       }


    }
 
`;

const Container = withReveal(styled.div` 

    width:50%;
    margin: 1% auto;
    
    .section{
        border-bottom: 1px solid white;
    }

    @media(max-width: 1440px) {
       
        width: 60%;
    }
    @media(max-width: 1024px) {
        

    }
    @media(max-width: 768px) {
        width: 70%;
        

    }
    @media (max-width: 600px) {

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