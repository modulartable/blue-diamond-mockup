import React from 'react'
import './Logo.css'
import logo from './bluediamond.png'

const Logo = () => {
    return (
        <div id="logoContainer">
           <a href="/blue-diamond-mockup"><img id="bdLogo" alt="Blue Diamond Company Logo" src={logo} /></a>
        </div>
    )
}

export default Logo
