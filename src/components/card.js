import React, {Component}  from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'


const Structure = ({ body, image, title, link, }) => (
    <div>
      <div className='cardHeader'>

        <div> {image ? <Img fluid={image.childImageSharp.fluid} /> : <div />} </div>
      </div>
       
      
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <a href='/'>Github logo goes heer</a>
    </div>
  );

  const StyledStucture = styled(Structure)` 
 
  width: 100%;
  height: 40%;
  background-color: royalblue;
  border-top-left-radius: $card-border-radius;
  border-top-right-radius: $card-border-radius;
  overflow: hidden;
  
  Img {
    max-width: 100%;
}

&:hover Img {
    transform: scale(1.2);
    opacity: 0.8;
    cursor: pointer;
}

&:after {
    content: "";
    position: absolute;
    left: 10%;
    top: 35%;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #fff;
    transform: rotate(-90deg);
}
  
  
  
  `;

class Card extends Component {


    render(){
       const data = this.props;

        return(
            <StyledStucture 
                body={data.body}
                title={data.title}
                image={data.image}
            />

        )
    }
};





export default Card;







