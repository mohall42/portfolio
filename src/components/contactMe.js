import React from 'react'
import styled from 'styled-components'
import Wobble from 'react-reveal/Wobble'
import LinkedInLogo from '../images/linkedIn.svg'
import GitHubLogo from '../images/git.svg'
import Resume from '../images/resume.svg'
import logo from '../images/logo.svg'




const Flex = styled.div` 

    width: 100%;
    list-style: none;
    display: flex; 
    margin-top: 5%;
    padding-top: 2%;  
    justify-content: space-around;

    h3{
        font-size: 2.5vmin;
    }

    
     

    .symbol{

        height: 5vmin;
        width: 5vmin;
        
        &:hover{
          transform: scale(1.5);
        }

    }

    .logo{
        height: calc(30px + 10vw);
        width:  calc(30px + 10vw);
    }

    
`;


const Contact = () => {
    return(

            <Flex>

                <Wobble>
                     <h3>Contact Me</h3>
                </Wobble>
               
                
                <a  href= "https://linkedin.com/in/mohall42"><img className='symbol' src = {LinkedInLogo} alt="Dribble"></img></a>
            
                <a  href = "https://github.com/mohall42"><img className='symbol' src = {GitHubLogo} alt="Github"></img></a>
            
                <a href = "https://docs.google.com/document/d/1W7Yxv-U-xm2E0lbkTrnDFpMvx0kHBjcMXvKzzgpUGwg/export?format=pdf"><img className='symbol'  src = {Resume} alt="Resume"></img></a>
                
                <img className='logo'  src = {logo} alt=" "></img>
                
            </Flex>

        

    )
}

export default Contact