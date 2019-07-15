import React from "react"
import Navbar from '../components/navbar'
import indexStyled from './index.module.scss'
import Contact from '../components/contactMe'





class Index extends React.Component{

  render(){
    return(
      
      <div className={indexStyled.body}>
      <Navbar />
        <div>
        </div>
        <div>

          <Contact />
        </div>
      </div>
    )
  }
}

export default Index