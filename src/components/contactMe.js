import React from 'react'
import styled from 'styled-components'
import DribbbleLogo from '../images/dribbble.svg'
import GitHubLogo from '../images/git.svg'
import Resume from '../images/resume.svg'
import logo from '../images/logo.svg'



const Container = styled.section` 

    display: block;
    width: 100%;
    height: 20%;
    margin: 5% auto;  



    


`;

const Flex = styled.div` 

    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;

    h3{
        font-size: 2vmin;
    }
     

    .symbol{

        height: 5vmin;
        width: 5vmin;


    }

    .logo{
        height: calc(30px + 5vw);
        width:  calc(30px + 5vw);
    }

    
`;


const Contact = () => {
    return(

        <Container>
            <Flex>
            
                <h3>Get in touch with me </h3>
                
                <a  href= "https://dribbble.com/"><img className='symbol' src = {DribbbleLogo} alt=" "></img></a>
            
                <a  href = "/"><img className='symbol' src = {GitHubLogo} alt=" "></img></a>
            
                <a href = "/"><img className='symbol'  src = {Resume} alt=" "></img></a>
                
                <img className='logo'  src = {logo} alt=" "></img>
                
            </Flex>
        </Container>

        

    )
}

export default Contact