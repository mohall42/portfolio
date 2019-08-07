import React from 'react'
import {Link} from 'gatsby'
import Navbar from '../components/navbar'

const NotFound = () => {
    return(
        <div>

            <Navbar />
            <h1>Page not found</h1>
            <p><Link to="/">Head home</Link></p>


        </div>

        


    )

}

export default NotFound