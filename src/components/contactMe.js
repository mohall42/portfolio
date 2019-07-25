import React from 'react'
import styled from 'styled-components'
import DribbbleLogo from '../images/dribbble.png'
import GitHubLogo from '../images/github.png'
import EmailLogo from '../images/email.png'


const Container = styled.div` 

    h2{
        text-align: center;
        color: white;
        margin-top: 5%;
        font-family: "Formular";
    }

    .symbol{

        height: 10vmin;
        width: 10vmin;
       
    }



`;

const Flex = styled.div` 

    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 10% 10%;   
    




`;


const Contact = () => {
    return(

        <Container>
            <h2 class= "h2">Get in touch with me!!!</h2>
            <Flex>
                
                <a  href= "https://dribbble.com/"><img class = "symbol" src = {DribbbleLogo} alt=" "></img></a>
            
                <a  href = "/"><img class="symbol" src = {GitHubLogo} alt=" "></img></a>
            
                <a href = "/"><img class = "symbol"  src = {EmailLogo} alt=" "></img></a>
            
                
            </Flex>
        </Container>

        

    )
}

export default Contact