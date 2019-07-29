import React, {Component}  from 'react'
import Img from 'gatsby-image'


const Structure = ({ body, image, title}) => (
    <div>
      <a href={title}>
        {image ? <Img fluid={image.childImageSharp.fluid} /> : <div />}
      </a>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );

class Card extends Component {


    render(props){
       const data = this.props;

        return(
            <Structure 
                body={data.body}
                title={data.title}
                image={data.image}
            />

        )
    }
};





export default Card;







