import React from 'react'
import {Link } from 'gatsby'
import logo from '../images/logo.svg'
import styled from 'styled-components'
import Flash from 'react-reveal/Flash'
import {device} from './device'



const Container = styled.div`
   

`;

const Icon = styled.img` 
    src: url(${props => props.src})
    display: block;
    margin-top: 3%;
    margin-left: 5%;


    @media (min-width: ${device.mobileS}) and (max-width: ${device.mobileL}){ 

        display: block;
            margin-top: 4%;
            margin-left: auto;
            margin-right: auto;
            height: 55%;
            width: 55%;
    
    } 
`;

const NavBar = () => {
 

    return(
          
              <Container>
                 
                    <Link to = {"/"}>

                        <Flash >

                        <Icon  src={logo} alt = 'Michael Hall'></Icon>
                        </Flash>
                        
                    </Link>
                   
              </Container>
             
           
        )
}


export default NavBar;