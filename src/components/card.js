import React, {Component}  from 'react'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import logo from '../images/git.svg'


class Card extends Component {

render(){

    const ImageContainer = styled.div` 
    width: 100%;
    display: block;
    
    Img{
      border-radius: 8px;
    }
    &:hover Img {
          
          opacity: 0.8;
          border-radius: 8px;
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
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border-radius: 8px;
    background: #333333;
    
   
    @media screen and (max-width: 1024px) {
  
      width: 50%;
      height: 90%;
      margin-bottom: 5%;
      margin-left: 5%;
  
     
    }
    @media screen and (max-width: 768px) {
  
      width: 70%;
      height: 100%;
      margin-bottom: 5%;
  
     
    }
  
    @media screen and (max-width: 600px) {
  
      width: 100%;
      height: 100%;
      margin-bottom: 5%;
      margin-left: 0;
  
     
    }
  
  `;

    const BodyContainer = styled.div ` 

      margin-left: 1%;
      font-size: 16px;
      color: white;
     

      
    `;


       
      const { body, image, title, link} = this.props.fill;
        
      return(
        <CardContainer>
          <ImageContainer>
              {/* image ? <Img fluid={image.childImageSharp.fluid} /> : <div />  */}
              <Img fluid={image.childImageSharp.fluid} />
          </ImageContainer>
          <BodyContainer>

            <h3>{title}</h3>
            
            <p>{body}</p>
            <a href={link}><img alt={title} src={logo}></img></a>

          </BodyContainer>
          
        </CardContainer>

      )
    }
};





//PropsTypes
Card.propTypes = {
  fill: PropTypes.object.isRequired
}


export default Card;

