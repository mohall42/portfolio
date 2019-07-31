import React, {Component}  from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import logo from '../images/git.svg'



class Card extends Component {

    render(){
       
        const { body, image, title, link} = this.props.fill;
        
        return(
          <div>
            <div className='cardHeader'>
              <div> {image ? <Img fluid={image.childImageSharp.fluid} /> : <div />} </div>
            </div>
           
          
            <div>
              <h1>{title}</h1>
              
                <p>{body}</p>
                <a href={link}><img alt={title} src={logo}></img></a>
            
            </div>
         
        </div>

        )
    }
};





//PropsTypes
Card.propTypes = {
  fill: PropTypes.object.isRequired
}

export default Card;

