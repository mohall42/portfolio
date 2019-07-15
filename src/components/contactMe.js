import React from 'react'
import contactStyles from './contact.module.scss'
import DribbbleLogo from '../images/dribbble.png'
import GitHubLogo from '../images/github.png'
import EmailLogo from '../images/email.png'

const Contact = () => {
    return(

        <div className={contactStyles.container}>
            <h1 className={contactStyles.h1}>Get in touch with me</h1>
            <div className ={contactStyles.flexbox}>
                
                <a  href= "https://dribbble.com/"><img className={contactStyles.symbol} src = {DribbbleLogo} alt=" "></img></a>
            
                <a  href = "/"><img className={contactStyles.symbol} src = {GitHubLogo} alt=" "></img></a>
            
                <a href = "/"><img className={contactStyles.symbol}  src = {EmailLogo} alt=" "></img></a>
            
                
            </div>
        </div>

        

    )
}

export default Contact