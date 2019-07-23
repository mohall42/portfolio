import React from 'react'
import {Link } from 'gatsby'
import logo from '../images/logo.svg'
import styled from 'styled-components'
import Flash from 'react-reveal/Flash'



const Container = styled.div`
    display: block;

`;

const Icon = styled.img` 
    src: url(${props => props.src})
    display: block;
    margin-top: 3%;
    margin-left: 5%;


@media only screen and (max-width: 600px){ 

       display: block;
        margin-top: 4%;
        margin-left: auto;
        margin-right: auto;
        height: 65%;
        width: 65%;
 
} 
`;

const NavBar = () => {
 

    return(
          
              <Container>
                 
                    <Link to = {"/"}>

                        <Flash>

                        <Icon  src={logo} alt = 'Michael Hall'></Icon>
                        </Flash>

                        
                        
                    </Link>
                   
              </Container>
             
           
        )
}


export default NavBar;