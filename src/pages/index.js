import React from "react"
import Navbar from '../components/navbar'
import indexStyled from './index.module.scss'
import Contact from '../components/contactMe'

export const onClientEntry = () => {  
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
      import(`intersection-observer`)
      console.log(`# IntersectionObserver is polyfilled!`)
    }
  }



class Index extends React.Component{

  render(){
    return(
      <body className={indexStyled.body}>
      <Navbar />
      <div>
        <content></content>
      </div>
      <div>

        <Contact />
      </div>
      </body>
    )
  }
}

export default Index