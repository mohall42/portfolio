import React from 'react'
import contactStyles from './contact.module.scss'
import DribbbleLogo from '../images/dribbble.png'
import GitHubLogo from '../images/github.png'
import EmailLogo from '../images/email.png'

const Contact = () => {
    return(

        <div>
            <h1>Get in touch with me</h1>
            <ul className ={contactStyles.symbols}>
                <li>
                    <a href= "https://dribbble.com/"><img src = {DribbbleLogo} alt=" "></img></a>
                </li>
                
                <li>
                    <a href = "/"><img src = {GitHubLogo} alt=" "></img></a>
                </li>
                
                <li>
                    <a href = "/"><img src = {EmailLogo} alt=" "></img></a>
                </li>
                
            </ul>
        </div>

        

    )
}

export default Contact