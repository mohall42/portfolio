import React from 'react'
import styled from 'styled-components'
import Wobble from 'react-reveal/Wobble'
import DribbbleLogo from '../images/dribbble.svg'
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
                     <h3>Get in touch with me </h3>
                </Wobble>
               
                
                <a  href= "https://dribbble.com/"><img className='symbol' src = {DribbbleLogo} alt=" "></img></a>
            
                <a  href = "https://github.com/mohall42"><img className='symbol' src = {GitHubLogo} alt=" "></img></a>
            
                <a href = "/"><img className='symbol'  src = {Resume} alt=" "></img></a>
                
                <img className='logo'  src = {logo} alt=" "></img>
                
            </Flex>

        

    )
}

export default Contact