import React from "react"
import Navbar from '../components/navbar'
import indexStyled from './index.module.scss'
import Ocean from '../images/ocean.jpg'

export const onClientEntry = () => {  
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }


const sectionStyles = {
  backgroundSize: "cover",
  backgroundImage: `url(${Ocean})`
};

class Index extends React.Component{

  render(){
    return(
      <body className={indexStyled.body}>
      <Navbar />

      </body>
    )
  }
}

export default Index