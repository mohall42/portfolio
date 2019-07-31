import React, {Component}  from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import logo from '../images/git.svg'


const ImageContainer = styled.div` 
  width: 500px;
  
  Img{
    border-radius: 8px;
  }
  &:hover Img {
        
        opacity: 0.8;
        cursor: pointer;
        transform: rotate(5deg) scale(1.2);
    }
    
@media screen and (max-width: 600px) {

  width: 100%;


}

 

`;

const CardContainer = styled.div`

  width: 500px;
  height: 600px;
  box-shadow:  0px 4px 8px 0px rgba(23, 23, 23, 0.2);
  border-radius: 8px;
  background: #434343;

  h1, p, a{
    margin-left: 1%;
  }
  @media screen and (max-width: 600px) {

    width: 100%;

   
  }

`;

class Card extends Component {

    render(){
       
        const { body, image, title, link} = this.props.fill;
        
        return(
          <CardContainer>
            <ImageContainer>
               {/* {image ? <Img fluid={image.childImageSharp.fluid} /> : <div />} */} 
               <Img fluid={image.childImageSharp.fluid} />
            </ImageContainer>
            
            <h1>{title}</h1>
            
            <p>{body}</p>
            <a href={link}><img alt={title} src={logo}></img></a>
           
          </CardContainer>

        )
    }
};





//PropsTypes
Card.propTypes = {
  fill: PropTypes.object.isRequired
}


export default Card;

