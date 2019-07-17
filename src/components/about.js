import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'


const About = () => {
    const data = useStaticQuery( graphql `
    query{
      markdownRemark{
        frontmatter{
          title
        }
        id
        html
      }
    }
  
  `)


    return(

        <div>
            <h2> About Me</h2>
            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}> 
            
            </div>
        
        </div>


    )


}


export default About